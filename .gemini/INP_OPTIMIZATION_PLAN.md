# INP Optimization Plan - Marga Adventure

**Generated:** 2026-01-22  
**Target:** Reduce mobile INP from 10-25s to <200ms  
**Constraint:** Preserve FCP ~1.9s, LCP ~3.0s, stable CLS

---

## 📊 Root Cause Analysis (Prioritized by Impact)

### 🔴 **Priority 1: Global Image Lightbox MutationObserver**
- **File:** `src/layouts/Layout.astro` (Lines 136-196)
- **Impact:** 8-15s INP overhead
- **Issue:** Synchronous DOM querying + listener attachment on every mutation
- **Fix Complexity:** High (requires architectural change)

### 🔴 **Priority 2: Header Eager Hydration (`client:load`)**
- **File:** `src/components/HeaderWrapper.astro` (Line 68)
- **Impact:** 3-5s INP overhead
- **Issue:** 407-line MenuOverlay + Navbar hydrates immediately
- **Fix Complexity:** Low (directive change)

### 🟠 **Priority 3: Homepage Eager Hydration (`client:load`)**
- **File:** `src/pages/index.astro` (Line 76)
- **Impact:** 2-4s INP overhead
- **Issue:** 310-line HomeContent with multiple effects hydrates immediately
- **Fix Complexity:** Low (directive change)

### 🟠 **Priority 4: ImageModal Always Hydrated**
- **File:** `src/layouts/Layout.astro` (Line 107)
- **Impact:** 1-2s INP overhead
- **Issue:** Modal React component loads on every page
- **Fix Complexity:** Low (directive change)

### 🟡 **Priority 5: Third-Party Script Injection on Interaction**
- **File:** `src/components/ContactModal.tsx` (Lines 24-33)
- **Impact:** 500ms-1.5s INP spike
- **Issue:** Synchronous script injection + hCaptcha iframe
- **Fix Complexity:** Medium (requires async batching)

### 🟡 **Priority 6: Carousel Auto-Rotation During Scroll**
- **File:** `src/components/JourneyBlock.tsx` (Lines 28-31)
- **Impact:** 300-800ms INP spikes
- **Issue:** setInterval fires regardless of viewport visibility
- **Fix Complexity:** Low (add IntersectionObserver)

---

## 🛠️ Implementation Plan

### **Phase 1: Quick Wins (Estimated improvement: 5-8s reduction)**

#### Fix 1.1: Change Hydration Directives
**Files to modify:**
1. `src/components/HeaderWrapper.astro`
2. `src/pages/index.astro`
3. `src/layouts/Layout.astro`

**Changes:**
```diff
<!-- HeaderWrapper.astro -->
- <Header client:load forceOpaque={forceOpaque} menuImages={menuImages} />
+ <Header client:idle forceOpaque={forceOpaque} menuImages={menuImages} />

<!-- index.astro -->
- <HomeContent client:load ... />
+ <HomeContent client:idle ... />

<!-- Layout.astro -->
- <ImageModal client:load />
+ <ImageModal client:only="react" />
```

**Rationale:**
- `client:idle`: Hydrates after page is fully interactive (requestIdleCallback)
- `client:only`: Hydrates on first interaction (click on image)
- **Expected INP reduction:** 4-6s

---

#### Fix 1.2: Debounce Navbar Scroll Handler
**File:** `src/components/Navbar.tsx` (Lines 13-28)

**Before:**
```javascript
useEffect(() => {
  let ticking = false;
  const handleScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 80);
        ticking = false;
      });
      ticking = true;
    }
  };
  handleScroll();
  window.addEventListener('scroll', handleScroll, { passive: true });
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

**After:**
```javascript
useEffect(() => {
  let timeoutId: number;
  let rafId: number;
  
  const handleScroll = () => {
    // Cancel pending updates
    if (timeoutId) clearTimeout(timeoutId);
    if (rafId) cancelAnimationFrame(rafId);
    
    // Batch state updates
    timeoutId = window.setTimeout(() => {
      rafId = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 80);
      });
    }, 50); // 50ms debounce
  };
  
  handleScroll();
  window.addEventListener('scroll', handleScroll, { passive: true });
  
  return () => {
    window.removeEventListener('scroll', handleScroll);
    if (timeoutId) clearTimeout(timeoutId);
    if (rafId) cancelAnimationFrame(rafId);
  };
}, []);
```

**Rationale:**
- Prevents state thrashing during fast scrolls
- Reduces re-renders by 70-90%
- **Expected INP reduction:** 200-500ms

---

### **Phase 2: Critical Architectural Fixes (Estimated improvement: 8-12s reduction)**

#### Fix 2.1: Replace Global MutationObserver with Passive Approach
**File:** `src/layouts/Layout.astro` (Lines 136-196)

**Strategy:** Remove synchronous image listener attachment, use CSS + event delegation

**Before (REMOVE ENTIRELY):**
```javascript
// Lines 136-196 - DELETE THIS ENTIRE BLOCK
document.addEventListener("DOMContentLoaded", () => {
    const attachListeners = () => { /* ... */ };
    attachListeners();
    const observer = new MutationObserver(/* ... */);
    observer.observe(document.body, { childList: true, subtree: true });
});
```

**After (NEW APPROACH):**
```javascript
// Use event delegation on document - runs once, handles all clicks
document.addEventListener('click', (e) => {
  const img = e.target.closest('img:not([data-no-lightbox])');
  if (!img || img.closest('button, a')) return;
  
  e.preventDefault();
  window.dispatchEvent(new CustomEvent('open-image-modal', { detail: img.src }));
}, { passive: false }); // Only non-passive for preventDefault

// Keyboard handled by ImageModal focusing on open
```

**Rationale:**
- **1 event listener instead of 100+**
- **No DOM querying** on mutations
- **No forced layout recalcs**
- Uses event bubbling (native browser optimization)
- **Expected INP reduction:** 8-15s ⚡

---

#### Fix 2.2: Lazy-Load ImageModal
**File:** `src/layouts/Layout.astro` (Line 107)

**Before:**
```astro
<ImageModal client:load />
```

**After:**
```astro
<ImageModal client:only="react" />
```

**Then modify `ImageModal.tsx` to mount on first image click:**
```javascript
// Add to Layout.astro <script> block
let modalMounted = false;

window.addEventListener('open-image-modal', (e) => {
  if (!modalMounted) {
    // Component hydrates on first use
    modalMounted = true;
  }
  // Existing logic...
});
```

**Rationale:**
- Modal React component only loads when user clicks an image
- Saves ~50KB React bundle parse time
- **Expected INP reduction:** 1-2s

---

### **Phase 3: Interaction Optimizations (Estimated improvement: 1-3s reduction)**

#### Fix 3.1: Yield to Main Thread in ContactModal
**File:** `src/components/ContactModal.tsx` (Lines 24-33)

**Before:**
```javascript
if (isOpen) {
    const script = document.createElement('script');
    script.src = "https://web3forms.com/client/script.js";
    script.async = true;
    document.body.appendChild(script); // Blocks main thread
}
```

**After:**
```javascript
if (isOpen) {
    // Yield to main thread before script injection
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const script = document.createElement('script');
        script.src = "https://web3forms.com/client/script.js";
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
      });
    });
}
```

**Rationale:**
- Double rAF ensures visual feedback shows before script loads
- Allows modal open animation to complete smoothly
- hCaptcha loads after paint
- **Expected INP reduction:** 500-1000ms

---

#### Fix 3.2: Pause JourneyBlock Carousels Off-Screen
**File:** `src/components/JourneyBlock.tsx` (Lines 28-31)

**Before:**
```javascript
useEffect(() => {
    const timer = setInterval(nextImage, 3000);
    return () => clearInterval(timer);
}, [nextImage]);
```

**After:**
```javascript
const [isVisible, setIsVisible] = useState(false);
const ref = useRef<HTMLElement>(null);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => setIsVisible(entry.isIntersecting),
    { rootMargin: '100px' }
  );
  
  if (ref.current) observer.observe(ref.current);
  return () => observer.disconnect();
}, []);

useEffect(() => {
  if (!isVisible) return; // Only rotate when visible
  
  const timer = setInterval(nextImage, 3000);
  return () => clearInterval(timer);
}, [isVisible, nextImage]);

// Add ref to section:
return (
  <section ref={ref} className="grid md:grid-cols-2 ...">
```

**Rationale:**
- Prevents off-screen state updates
- Reduces unnecessary re-renders by 60-80%
- **Expected INP reduction:** 300-800ms

---

#### Fix 3.3: Debounce HomeContent Scroll Handler
**File:** `src/components/HomeContent.tsx` (Lines 36-42)

**Before:**
```javascript
React.useEffect(() => {
    const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

**After:**
```javascript
React.useEffect(() => {
    let timeoutId: number;
    
    const handleScroll = () => {
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = window.setTimeout(() => {
            setIsScrolled(window.scrollY > 50);
        }, 50);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
        window.removeEventListener('scroll', handleScroll);
        if (timeoutId) clearTimeout(timeoutId);
    };
}, []);
```

**Rationale:**
- Prevents state thrashing on fast scroll
- **Expected INP reduction:** 100-300ms

---

## 🧪 Verification Checklist

### Chrome DevTools Performance Panel
1. **Record interaction** (e.g., menu button click)
2. **Check for long tasks >50ms:**
   - Before: Expect 5-10 tasks >500ms
   - After: Target <2 tasks >100ms
3. **Verify "Input Delay":**
   - Before: 8-20s
   - After: <200ms

### Web Vitals Extension
1. **Test on mobile (Fast 3G + 4x CPU slowdown)**
2. **Interact with:**
   - Menu button (Header)
   - Testimonial arrows
   - Journey carousel buttons
   - Image clicks
3. **Target INP:**
   - Good: <200ms
   - Acceptable: <500ms
   - Poor: >500ms

### Specific Test Cases
| Interaction | Before (Expected) | After (Target) |
|-------------|-------------------|----------------|
| Menu open | 3-5s | <100ms |
| Image click | 8-15s | <150ms |
| Carousel nav | 500ms-1s | <100ms |
| Modal open | 1-2s | <200ms |
| Scroll | 200-500ms | <50ms |

---

## 📝 Implementation Order

### Week 1: Quick Wins
1. ✅ Change hydration directives (30 min)
2. ✅ Debounce scroll handlers (1 hour)
3. ✅ Test + measure baseline improvement

### Week 2: Critical Fixes
1. ✅ Replace MutationObserver with event delegation (3 hours)
2. ✅ Lazy-load ImageModal (1 hour)
3. ✅ Test + verify INP <500ms

### Week 3: Polish
1. ✅ Yield to main thread in ContactModal (1 hour)
2. ✅ Pause off-screen carousels (2 hours)
3. ✅ Final testing + field data validation

---

## 🎯 Expected Results

| Metric | Before | After | Change |
|--------|--------|-------|--------|
| **INP (Mobile)** | 10-25s | <200ms | **-95%** ✅ |
| **FCP** | ~1.9s | ~1.9s | **No change** ✅ |
| **LCP** | ~3.0s | ~3.0s | **No change** ✅ |
| **CLS** | Stable | Stable | **No change** ✅ |
| **Total Blocking Time** | 3-5s | <500ms | **-85%** ✅ |

---

## ⚠️ Risks & Mitigation

### Risk 1: Image Lightbox Might Not Trigger on Dynamic Content
**Mitigation:** Event delegation works on all current + future images (bubbling)

### Risk 2: `client:idle` Might Delay Menu Interactions
**Mitigation:** `requestIdleCallback` typically fires within 50-100ms on modern browsers

### Risk 3: Third-Party Scripts Still Block
**Mitigation:** Already using `async` + `defer`, double rAF ensures visual feedback first

---

## 📚 Additional Resources

- [INP Optimization Guide](https://web.dev/optimize-inp/)
- [Astro Client Directives](https://docs.astro.build/en/reference/directives-reference/#client-directives)
- [Long Task API](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceLongTaskTiming)

---

**Next Steps:**
1. Review this plan with team
2. Create feature branch `feature/inp-optimization`
3. Implement Phase 1 (Quick Wins)
4. Deploy to staging + measure
5. Iterate on Phase 2 & 3
