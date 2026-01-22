# 🚀 INP Quick Testing Checklist

## Before Testing
- [ ] Dev server running: `npm run dev`
- [ ] Chrome DevTools open (F12)
- [ ] Web Vitals extension installed
- [ ] Mobile device simulator enabled

---

## 🔍 Test Scenarios

### 1. Menu Interaction
**Target:** <100ms  
**Test:**
1. Click hamburger menu button
2. Check "INP" in Web Vitals extension
3. Record result: ______ms

**Expected:**
- ✅ Menu appears instantly
- ✅ No scroll jank
- ✅ INP reading <100ms

---

### 2. Image Lightbox
**Target:** <150ms  
**Test:**
1. Click any content image (not in header/footer)
2. Check modal opens smoothly
3. Record INP: ______ms

**Expected:**
- ✅ Modal shows immediately
- ✅ No visible delay
- ✅ INP <150ms

---

### 3. Carousel Navigation
**Target:** <100ms  
**Test:**
1. Go to homepage journey blocks
2. Click left/right arrows rapidly
3. Record highest INP: ______ms

**Expected:**
- ✅ Transitions are smooth
- ✅ No stuttering
- ✅ INP <100ms even on rapid clicks

---

### 4. Contact Modal
**Target:** <200ms  
**Test:**
1. Click "Follow the Marga" or contact button
2. Wait for modal to appear
3. Record INP: ______ms

**Expected:**
- ✅ Modal animation starts immediately
- ✅ Form loads after animation
- ✅ INP <200ms

---

### 5. Fast Scroll
**Target:** <50ms lag  
**Test:**
1. Scroll rapidly up and down
2. Watch header opacity change
3. Check for scroll jank

**Expected:**
- ✅ Header responds smoothly
- ✅ No stuttering
- ✅ Scroll feels native

---

## 📊 Mobile Testing (Critical!)

### Setup
```
DevTools → Toggle Device Toolbar (Ctrl+Shift+M)
Device: iPhone 12 Pro
Network: Fast 3G
CPU: 4x slowdown
```

### Run all 5 tests above in mobile mode

**Target Results:**
- Menu: <200ms (mobile)
- Images: <250ms (mobile)
- Carousel: <200ms (mobile)
- Modal: <300ms (mobile)
- Scroll: <100ms lag (mobile)

---

## 🧰 Debugging Tools

### Chrome DevTools Performance
```
1. Click "Record" (red circle)
2. Perform interaction
3. Stop recording
4. Check "Interaction" section
5. Look for tasks >50ms (yellow/red bars)
```

### Web Vitals Console Logging
```javascript
// Open Console, paste:
webVitals.onINP((metric) => {
  console.log('INP:', metric.value, 'ms | Rating:', metric.rating);
}, { reportAllChanges: true });
```

### Test Utility Page
```
Navigate to: http://localhost:4321/inp-test.html
Use built-in test buttons
Check real-time metrics
```

---

## ✅ Success Criteria

| Test | Desktop Target | Mobile Target | Pass/Fail |
|------|---------------|---------------|-----------|
| Menu | <100ms | <200ms | [ ] |
| Images | <150ms | <250ms | [ ] |
| Carousel | <100ms | <200ms | [ ] |
| Modal | <200ms | <300ms | [ ] |
| Scroll | <50ms | <100ms | [ ] |

**Overall Target:** 
- Desktop: 80%+ tests <100ms
- Mobile: 80%+ tests <200ms

---

## 🐛 If Tests Fail

### INP still high (>500ms)?
1. Check DevTools Performance tab for long tasks
2. Look for synchronous JavaScript execution
3. Verify `client:idle` components hydrated
4. Check for third-party scripts blocking

### Specific interaction slow?
1. Record Performance profile
2. Find the interaction in timeline
3. Check "Input Delay" row
4. Identify blocking script

### Only mobile slow?
1. Verify CPU throttling enabled
2. Check network throttling
3. Look for unoptimized images
4. Check for excessive React re-renders

---

## 📝 Recording Results

**Date:** _____________  
**Environment:** [ ] Local [ ] Staging [ ] Production  
**Device:** [ ] Desktop [ ] Mobile  

### Desktop Results
- Menu: ______ms
- Images: ______ms
- Carousel: ______ms
- Modal: ______ms
- Scroll: ______ms
- **Average:** ______ms

### Mobile Results (4x CPU slowdown)
- Menu: ______ms
- Images: ______ms
- Carousel: ______ms
- Modal: ______ms
- Scroll: ______ms
- **Average:** ______ms

### Issues Found:
1. ___________________________________________________
2. ___________________________________________________
3. ___________________________________________________

---

## 🎯 Quick Wins Already Implemented

- ✅ Event delegation (100+ listeners → 2)
- ✅ `client:idle` hydration (defer React)
- ✅ Debounced scroll handlers
- ✅ Viewport-aware carousels
- ✅ Async third-party scripts

**Expected Improvement:** 10-25s → <200ms (~98% reduction)

---

**Need help?** See `.gemini/INP_IMPLEMENTATION_SUMMARY.md`
