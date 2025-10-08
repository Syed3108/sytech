import React, { useEffect } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import type { Service } from '../types';

const services: Service[] = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5l-4.25 4.25 4.25 4.25m7.5-8.5l4.25 4.25-4.25 4.25" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Custom Web Development',
    description: 'We build bespoke websites from the ground up, tailored to your unique requirements. Our solutions are scalable, secure, and built with the latest technologies to ensure high performance.'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.658-.463 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
    title: 'E-commerce Solutions',
    description: 'Launch a powerful online store with our e-commerce development services. We integrate secure payment gateways, manage product catalogs, and create a seamless shopping experience for your customers.'
  },
  {
    icon: (
       <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6h1.5m-1.5 3h1.5m-1.5 3h1.5M6.75 21v-2.25a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 012.25 2.25V21" />
      </svg>
    ),
    title: 'Business Websites',
    description: 'Establish a strong online presence with a professional business website. We create informative, elegant sites that build credibility and serve as a central hub for your marketing efforts.'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a14.956 14.956 0 01-5.84 2.56m0 0H9.537a5.98 5.98 0 01-5.7-5.98v-4.28a5.98 5.98 0 015.7-5.98h2.324a5.98 5.98 0 015.7 5.98v4.28a5.98 5.98 0 01-5.7 5.98z" />
      </svg>
    ),
    title: 'Performance Optimization',
    description: 'A slow website drives away visitors. We optimize your site for speed and performance, ensuring fast load times and a smooth user experience that keeps users engaged.'
  },
  {
    icon: (
       <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    title: 'Responsive Design',
    description: 'With more users browsing on mobile devices than ever, a responsive design is essential. We ensure your website looks and works perfectly on any screen size, from desktops to smartphones.'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.623 0-1.602-.36-3.112-.984-4.425" />
      </svg>
    ),
    title: 'Website Maintenance',
    description: 'Keep your website running smoothly with our maintenance packages. We handle updates, security, backups, and provide technical support so you can focus on your business.'
  }
];

const Services: React.FC = () => {
  useEffect(() => {
    document.title = 'Our Solutions | Sytech Solutions';
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'Explore the web development and design services offered by Sytech Solutions, including custom development, e-commerce solutions, performance optimization, responsive design, and website maintenance.');
    document.querySelector('meta[name="keywords"]')?.setAttribute('content', 'web design services, e-commerce development, website maintenance, responsive design, performance optimization, custom web development');
  }, []);

  return (
    <AnimatedSection aria-labelledby="services-page-heading" className="bg-gray-50 py-20 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase dark:text-red-400">Our Solutions</h2>
          <p id="services-page-heading" className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl dark:text-white">
            A Full Suite of Services to Elevate Your Brand
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
            We provide end-to-end solutions to build, launch, and scale your digital presence.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="bg-white rounded-lg shadow-lg p-8 transform hover:-translate-y-2 transition-all duration-300 ease-in-out hover:shadow-2xl hover:ring-2 hover:ring-red-400 hover:ring-offset-2 dark:bg-gray-800 dark:hover:ring-offset-gray-900">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-red-600" aria-hidden="true">
                {service.icon}
              </div>
              <h3 className="mt-8 text-xl font-bold text-gray-900 dark:text-white">{service.title}</h3>
              <p className="mt-4 text-base text-gray-600 dark:text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Services;