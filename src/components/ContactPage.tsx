import React, { useState } from 'react';

const ContactPage: React.FC = () => {
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [isSuccess, setIsSuccess] = useState(false);
   const [message, setMessage] = useState('');
   const [errors, setErrors] = useState<Record<string, string>>({});
   const [formKey, setFormKey] = useState(0);

   React.useEffect(() => {
      const scriptId = 'web3forms-script';
      if (!document.getElementById(scriptId)) {
         const script = document.createElement('script');
         script.id = scriptId;
         script.src = "https://web3forms.com/client/script.js";
         script.async = true;
         script.defer = true;
         document.body.appendChild(script);
      }
   }, []);

   // Reinitialize Web3Forms script when formKey changes (form reset)
   React.useEffect(() => {
      if (formKey > 0) {
         // Remove and re-add the script to force reinitialization
         const scriptId = 'web3forms-script';
         const existingScript = document.getElementById(scriptId);
         if (existingScript) {
            existingScript.remove();
         }

         // Wait a bit for old widgets to cleanup, then reload script
         setTimeout(() => {
            const script = document.createElement('script');
            script.id = scriptId;
            script.src = "https://web3forms.com/client/script.js";
            script.async = true;
            script.defer = true;
            document.body.appendChild(script);
         }, 100);
      }
   }, [formKey]);


   const validateForm = (formData: FormData) => {
      const newErrors: Record<string, string> = {};
      const name = formData.get('name') as string;
      const phone = formData.get('phone') as string;
      const email = formData.get('email') as string;
      const msg = formData.get('message') as string;

      if (!name || name.length < 2) newErrors.name = 'Name must be at least 2 characters.';
      if (!phone || phone.length < 7) newErrors.phone = 'Please enter a valid phone number.';
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || !emailRegex.test(email)) newErrors.email = 'Please enter a valid email address.';
      if (!msg || msg.length < 10) newErrors.message = 'Message must be at least 10 characters.';

      return newErrors;
   };

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setMessage('');
      setErrors({});

      const formData = new FormData(e.currentTarget);
      const validationErrors = validateForm(formData);

      if (Object.keys(validationErrors).length > 0) {
         setErrors(validationErrors);
         return;
      }

      // Check if hCaptcha response exists
      const captchaResponse = formData.get('h-captcha-response');
      if (!captchaResponse || captchaResponse === '') {
         setMessage('Please complete the captcha verification before submitting.');
         return;
      }

      setIsSubmitting(true);

      try {
         const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
         });

         const data = await response.json();

         if (data.success) {
            setIsSuccess(true);
            e.currentTarget.reset(); // Reset form fields
         } else {
            setMessage(data.message || "Something went wrong. Please try again.");
         }
      } catch (error) {
         setMessage("An error occurred. Please try again later.");
      } finally {
         setIsSubmitting(false);
      }
   };

   const handleSendAnother = () => {
      setIsSuccess(false);
      setFormKey(prev => prev + 1); // Force form remount to reload captcha
      setMessage('');
      setErrors({});
   };

   const handleInput = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name } = e.currentTarget;
      if (errors[name]) {
         setErrors(prev => ({ ...prev, [name]: '' }));
      }
   };

   return (
      <div className="bg-white">
         {/* Hero Section */}
         <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
            <img
               src="/images/activities/trekking/PA120680.webp"
               alt="Contact Marga Adventure"
               className="absolute inset-0 w-full h-full object-cover opacity-80"
               fetchPriority="high"
               decoding="async"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative z-10 text-center text-white px-6">
               <span className="text-brand font-bold text-xs uppercase tracking-[0.5em] mb-6 block">Contact Us</span>
               <h1 className="text-5xl md:text-7xl font-bold tracking-tight">Get In <span className="italic font-serif text-brand">Touch</span></h1>
            </div>
         </div>

         <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-20">

            {/* Info Side */}
            <div>
               <p className="text-gray-500 text-lg font-light mb-16 leading-relaxed">
                  Visit us at our headquater located in heart of Kathmandu, Nepal. Here, you can meet our travel experts and discuss your next adventure.
               </p>

               <div className="space-y-12">
                  <div className="flex gap-6 items-start group">
                     <div className="w-12 h-12 rounded-none bg-brand/5 flex items-center justify-center text-xl shrink-0 group-hover:bg-brand group-hover:text-white transition-colors">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                     </div>
                     <div>
                        <h3 className="font-bold text-gray-900 uppercase tracking-widest text-sm mb-2">Sanctuary HQ</h3>
                        <p className="text-gray-600 font-light">Baneshwor, Kathmandu<br />Bagmati, Nepal</p>
                     </div>
                  </div>

                  <div className="flex gap-6 items-start group">
                     <div className="w-12 h-12 rounded-none bg-brand/5 flex items-center justify-center text-xl shrink-0 group-hover:bg-brand group-hover:text-white transition-colors">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                     </div>
                     <div>
                        <h3 className="font-bold text-gray-900 uppercase tracking-widest text-sm mb-2">Emergency (24/7)</h3>
                        <p className="text-brand font-bold text-xl">+977-9841008984</p>
                        <p className="text-gray-500 text-sm">margaadventure@gmail.com</p>
                     </div>
                  </div>

                  <div className="flex gap-6 items-start group">
                     <div className="w-12 h-12 rounded-none bg-brand/5 flex items-center justify-center text-xl shrink-0 group-hover:bg-brand group-hover:text-white transition-colors">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                     </div>
                     <div>
                        <h3 className="font-bold text-gray-900 uppercase tracking-widest text-sm mb-2">WhatsApp / Viber</h3>
                        <p className="text-gray-600 font-light">+977 9841008984</p>
                     </div>
                  </div>
               </div>

               {/* Google Map */}
               <div className="mt-16 w-full h-80 bg-gray-100 rounded-none overflow-hidden relative shadow-lg group border border-gray-200">
                  <iframe
                     className="w-full h-full grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                     src="https://maps.google.com/maps?q=27.686333,85.335167&z=15&output=embed"
                     title="Marga Adventure Location"
                  >
                  </iframe>
                  <div className="absolute top-0 left-0 w-full h-full pointer-events-none shadow-[inset_0_0_20px_rgba(0,0,0,0.1)]"></div>
               </div>
            </div>

            {/* Form Side */}
            <div className="bg-gray-50 border border-gray-100 p-12 rounded-none shadow-2xl shadow-gray-200/50">
               {isSuccess ? (
                  <div className="text-center py-20 animate-fade-in-up">
                     <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                        <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                     </div>
                     <h3 className="text-3xl font-bold text-gray-900 mb-6">Message Sent!</h3>
                     <p className="text-gray-600 mb-8 text-lg">
                        Thank you for reaching out to Marga Adventure.
                        <br />We will review your message and get back to you shortly.
                     </p>
                     <button
                        onClick={handleSendAnother}
                        className="inline-block bg-brand text-white px-8 py-3 font-bold uppercase tracking-widest text-xs hover:bg-brand-dark transition-all"
                     >
                        Send Another Message
                     </button>
                  </div>
               ) : (
                  <form key={formKey} onSubmit={handleSubmit} className="space-y-6" noValidate>
                     <input type="hidden" name="access_key" value="a2f684a6-449b-4aba-9c0a-fcb41244f207" />
                     <input type="hidden" name="subject" value="New Contact Form Submission - Marga Adventure" />
                     <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
                     {/* Web3Forms hCaptcha Widget Container moved to bottom */}

                     <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 ml-1">Full Name *</label>
                        <input
                           type="text"
                           name="name"
                           required
                           className={`w-full bg-white border p-4 rounded-none focus:outline-none focus:ring-4 transition-all font-light ${errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-100' : 'border-gray-200 focus:border-brand focus:ring-brand/10'}`}
                           placeholder="Your Name"
                           onInput={handleInput}
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                     </div>

                     <div className="grid md:grid-cols-2 gap-6">
                        <div>
                           <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 ml-1">Phone Number *</label>
                           <input
                              type="tel"
                              name="phone"
                              required
                              className={`w-full bg-white border p-4 rounded-none focus:outline-none focus:ring-4 transition-all font-light ${errors.phone ? 'border-red-500 focus:border-red-500 focus:ring-red-100' : 'border-gray-200 focus:border-brand focus:ring-brand/10'}`}
                              placeholder="987654321"
                              onInput={handleInput}
                           />
                           {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                        </div>
                        <div>
                           <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 ml-1">Email Address *</label>
                           <input
                              type="email"
                              name="email"
                              required
                              className={`w-full bg-white border p-4 rounded-none focus:outline-none focus:ring-4 transition-all font-light ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-100' : 'border-gray-200 focus:border-brand focus:ring-brand/10'}`}
                              placeholder="email@example.com"
                              onInput={handleInput}
                           />
                           {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                        </div>
                     </div>

                     <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 ml-1">Message *</label>
                        <textarea
                           name="message"
                           required
                           rows={6}
                           className={`w-full bg-white border p-4 rounded-none focus:outline-none focus:ring-4 transition-all font-light ${errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-100' : 'border-gray-200 focus:border-brand focus:ring-brand/10'}`}
                           placeholder="Tell us about your dream journey..."
                           onInput={handleInput}
                        ></textarea>
                        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                     </div>

                     <div className="my-6">
                        {/* hCaptcha handled by Web3Forms */}
                     </div>

                     {message && <p className={`text-sm text-center font-bold ${message.includes('Thank') ? 'text-green-600' : 'text-red-500'}`}>{message}</p>}

                     <div key={formKey} className="h-captcha mb-6" data-captcha="true"></div>

                     <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-brand text-white text-[10px] font-bold uppercase tracking-[0.4em] py-5 rounded-none hover:bg-brand-dark transition-all shadow-xl hover:shadow-brand/20 hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed"
                     >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                     </button>
                  </form>
               )}

               <div className="mt-10 flex justify-center gap-10 border-t border-gray-200 pt-10">
                  <a href="https://www.facebook.com/profile.php?id=61585603559230" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand transition-colors">
                     <span className="sr-only">Facebook</span>
                     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                     </svg>
                  </a>
                  <a href="https://www.instagram.com/margaadventure/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#E1306C] transition-colors">
                     <span className="sr-only">Instagram</span>
                     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.468.99c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.821-.049.975-.045 1.504-.207 1.857-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.059-1.37.059-4.041v-.08c0-2.597-.01-2.917-.058-3.821-.045-.975-.207-1.504-.344-1.857a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                     </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/margaadventure/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand transition-colors">
                     <span className="sr-only">LinkedIn</span>
                     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                     </svg>
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ContactPage;
