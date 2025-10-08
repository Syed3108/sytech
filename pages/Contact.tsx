import React, { useState, useEffect, useRef } from 'react';
import AnimatedSection from '../components/AnimatedSection';

const Contact: React.FC = () => {
  useEffect(() => {
    document.title = 'Get Started | Sytech Solutions';
    document.querySelector('meta[name="description"]')?.setAttribute('content', "Ready to start your next project? We're here to turn your ideas into reality. Get in touch with Sytech Solutions for a project quote or inquiry.");
    document.querySelector('meta[name="keywords"]')?.setAttribute('content', 'contact web developer, get a quote, web design inquiry, sytech solutions contact, web development project');
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionAttempted, setSubmissionAttempted] = useState(false);
  
  const successMessageRef = useRef<HTMLHeadingElement>(null);
  const errorSummaryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isSubmitted) {
      if (successMessageRef.current) {
        successMessageRef.current.focus();
      }
      const timer = setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 8000); // Reset after 8 seconds

      return () => clearTimeout(timer); // Cleanup timer on unmount
    }
  }, [isSubmitted]);
  
  useEffect(() => {
    if (submissionAttempted && Object.keys(errors).length > 0 && errorSummaryRef.current) {
      errorSummaryRef.current.focus();
    }
    if (submissionAttempted) {
      setSubmissionAttempted(false);
    }
  }, [errors, submissionAttempted]);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
    
    const newErrors = { ...errors };
    if (newErrors[name]) {
      delete newErrors[name];
    }
    if (newErrors.form) {
      delete newErrors.form;
    }
    setErrors(newErrors);
  };
  
  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid.';
    }
    // if (!formData.subject.trim()) newErrors.subject = 'Subject is required.';
    if (!formData.message.trim()) newErrors.message = 'Message is required.';
    
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    setSubmissionAttempted(true);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      try {
        // IMPORTANT: Replace "xvovqjqz" with your own Formspree form ID.
        // Go to https://formspree.io/, create a new form for d4daaniyal@gmail.com, and get your ID.
        const response = await fetch('https://formspree.io/f/xovkdady', {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        });
        
        if (response.ok) {
          setIsSubmitted(true);
        } else {
          const data = await response.json();
          // FIX: Replaced `Object.hasOwn` with `Object.prototype.hasOwnProperty.call` for better compatibility.
          if (Object.prototype.hasOwnProperty.call(data, 'errors')) {
            const formspreeErrors = data.errors.map((error: { message: string }) => error.message).join(', ');
             setErrors({ form: `Oops! There was a problem: ${formspreeErrors}` });
          } else {
            setErrors({ form: 'Oops! There was a problem submitting your form. Please try again later.' });
          }
        }
      } catch (error) {
        setErrors({ form: 'An unexpected error occurred. Please check your network connection and try again.' });
      } finally {
        setIsSubmitting(false);
      }
    }
  };
  
  const baseInputClasses = 'py-3 px-4 block w-full shadow-sm border rounded-md transition-colors bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:bg-gray-800 dark:text-gray-100 dark:focus:ring-offset-black';
  const normalInputClasses = 'border-gray-300 focus:ring-red-500 focus:border-red-500 dark:border-gray-600';
  const errorInputClasses = 'border-red-500 text-red-900 focus:ring-red-500 focus:border-red-500 dark:text-red-400 dark:placeholder-red-400/70';

  if (isSubmitted) {
    return (
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 lg:py-24 dark:bg-black">
        <div role="status" aria-live="polite" className="relative max-w-xl mx-auto text-center py-10 px-6 bg-green-50 rounded-lg shadow-md border border-green-200 dark:bg-green-900/20 dark:border-green-700/50">
          <svg className="mx-auto h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 ref={successMessageRef} tabIndex={-1} className="mt-4 text-2xl font-semibold text-gray-800 focus:outline-none dark:text-gray-100">Thank You!</h3>
          <p className="mt-2 text-base text-gray-600 dark:text-gray-300">Your message has been sent successfully. We will get back to you shortly.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24 dark:bg-black">
      <AnimatedSection className="relative max-w-xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">Let's Build Something Amazing</h2>
          <p className="mt-4 text-lg leading-6 text-gray-600 dark:text-gray-300">
            Ready to start your next project? We're here to turn your ideas into reality.
          </p>
        </div>
        <div className="mt-12">
           {Object.keys(errors).length > 0 && (
            <div ref={errorSummaryRef} tabIndex={-1} role="alert" className="mb-8 p-4 bg-red-50 border border-red-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 dark:bg-red-900/20 dark:border-red-700/50 dark:focus:ring-offset-black">
              {errors.form ? (
                <p className="text-sm font-medium text-red-800 dark:text-red-300">{errors.form}</p>
              ) : (
                <>
                  <h3 className="text-sm font-medium text-red-800 dark:text-red-300">Please correct the {Object.keys(errors).length} error{Object.keys(errors).length > 1 ? 's' : ''} below:</h3>
                  <div className="mt-2 text-sm text-red-700 dark:text-red-400">
                    <ul className="list-disc pl-5 space-y-1">
                      {Object.values(errors).map((error, index) => (
                        <li key={index}>{error}</li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </div>
          )}
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8" noValidate>
            <div className="sm:col-span-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Full name</label>
              <div className="mt-1">
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`${baseInputClasses} ${errors.name ? errorInputClasses : normalInputClasses}`}
                  aria-invalid={!!errors.name}
                  aria-describedby="name-error"
                />
              </div>
              {errors.name && <p id="name-error" className="mt-2 text-sm text-red-600">{errors.name}</p>}
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`${baseInputClasses} ${errors.email ? errorInputClasses : normalInputClasses}`}
                  aria-invalid={!!errors.email}
                  aria-describedby="email-error"
                />
              </div>
               {errors.email && <p id="email-error" className="mt-2 text-sm text-red-600">{errors.email}</p>}
            </div>
            {/* <div className="sm:col-span-2">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Subject</label>
              <div className="mt-1">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`${baseInputClasses} ${errors.subject ? errorInputClasses : normalInputClasses}`}
                  aria-invalid={!!errors.subject}
                  aria-describedby="subject-error"
                />
              </div>
              {errors.subject && <p id="subject-error" className="mt-2 text-sm text-red-600">{errors.subject}</p>}
            </div> */}
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={`${baseInputClasses} ${errors.message ? errorInputClasses : normalInputClasses}`}
                  aria-invalid={!!errors.message}
                  aria-describedby="message-error"
                ></textarea>
              </div>
              {errors.message && <p id="message-error" className="mt-2 text-sm text-red-600">{errors.message}</p>}
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Launch Your Message'}
              </button>
            </div>
          </form>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Contact;