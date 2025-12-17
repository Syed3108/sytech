import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import FAQItem from "../components/FAQItem";
import AnimatedSection from "../components/AnimatedSection";
import type { FAQ } from "../types";
import ourVision from "../assets/our.png";

const faqs: FAQ[] = [
  {
    question: "What kind of websites can you build?",
    answer:
      "We specialize in a wide range of websites, including corporate business sites, e-commerce platforms, portfolios, and custom web applications. Our solutions are tailored to meet your specific business needs and goals.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "The timeline for a website project varies depending on its complexity. A basic business website might take 4-6 weeks, while a complex e-commerce site could take 3 months or more. We provide a detailed project timeline after our initial consultation.",
  },
  {
    question: "Do you provide website maintenance and support?",
    answer:
      "Yes, we offer ongoing maintenance and support packages to ensure your website remains secure, up-to-date, and performs optimally. This includes software updates, security scans, backups, and technical support.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer:
      "Absolutely. All websites we build are fully responsive, meaning they will look great and function perfectly on all devices, including desktops, tablets, and smartphones. This is a crucial factor for user experience and SEO.",
  },
];

const Home: React.FC = () => {
  useEffect(() => {
    document.title =
      "Sytech Solutions - Crafting Digital Excellence, Driving Growth";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        "We build lightning-fast, intuitive web experiences that convert visitors into loyal customers. Sytech Solutions specializes in bespoke websites, e-commerce, and digital platforms."
      );
    document
      .querySelector('meta[name="keywords"]')
      ?.setAttribute(
        "content",
        "web design, web development, e-commerce, business websites, custom web design, sytech solutions, responsive websites"
      );
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-white dark:bg-black">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src={ourVision}
            alt="Blurred grayscale image of a modern office interior, serving as a background."
          />
          <div className="absolute inset-0 bg-gray-900 bg-opacity-60 dark:bg-opacity-70"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Crafting Digital Excellence, Driving Growth
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300 dark:text-gray-200">
            We build lightning-fast, intuitive web experiences that convert
            visitors into loyal customers.
          </p>
          <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
            <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
              <Link
                to="/services"
                className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 sm:px-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-red-500"
              >
                Explore Our Solutions
              </Link>
              <Link
                to="/contact"
                className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-red-700 bg-white hover:bg-red-50 sm:px-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-red-500"
              >
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <AnimatedSection
        aria-labelledby="services-overview-heading"
        className="py-20 bg-gray-50 dark:bg-gray-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2
              id="services-overview-heading"
              className="text-base text-red-600 font-semibold tracking-wide uppercase dark:text-red-400"
            >
              Core Solutions
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl dark:text-white">
              Digital Services to Scale Your Business
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 dark:bg-gray-800 dark:hover:shadow-red-500/10">
              <h3 className="text-xl font-bold dark:text-white">
                Business Websites
              </h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Professional, user-friendly websites that serve as the digital
                storefront for your brand, establishing credibility and trust.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 dark:bg-gray-800 dark:hover:shadow-red-500/10">
              <h3 className="text-xl font-bold dark:text-white">
                E-Commerce Solutions
              </h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Powerful online stores designed to convert visitors into
                customers, with secure payments and seamless inventory
                management.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 dark:bg-gray-800 dark:hover:shadow-red-500/10">
              <h3 className="text-xl font-bold dark:text-white">
                Custom Web Design
              </h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Unique, tailor-made designs that reflect your brand's
                personality and provide an unforgettable user experience.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Why Choose Us Section */}
      <AnimatedSection
        aria-labelledby="why-choose-us-heading"
        className="py-20 bg-white dark:bg-black"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2
              id="why-choose-us-heading"
              className="text-base text-red-600 font-semibold tracking-wide uppercase dark:text-red-400"
            >
              The Sytech Edge
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Beyond Code: A Partnership for Success
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto dark:text-gray-300">
              We combine cutting-edge technology with a client-first mindset to
              deliver results that matter.
            </p>
          </div>
          <div className="mt-12">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-600 text-white">
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 18a9 9 0 009-9m-9 9a9 9 0 00-9-9"
                      />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">
                    Bespoke Digital Platforms
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-600 dark:text-gray-300">
                  We don't use one-size-fits-all templates. Every website is
                  custom-designed and developed to meet your specific goals and
                  brand identity.
                </dd>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-600 text-white">
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">
                    Data-Driven Impact
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-600 dark:text-gray-300">
                  Our data-driven approach focuses on what truly works. We build
                  websites that not only look great but also drive traffic,
                  generate leads, and increase sales.
                </dd>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-600 text-white">
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">
                    Collaborative Partnership
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-600 dark:text-gray-300">
                  We believe in partnership. We work closely with you throughout
                  the entire process, ensuring transparency and that your vision
                  is brought to life perfectly.
                </dd>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-600 text-white">
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">
                    Future-Proof Support
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-600 dark:text-gray-300">
                  Our relationship doesn't end at launch. We offer comprehensive
                  maintenance and support plans to keep your website secure,
                  updated, and optimized.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection
        aria-labelledby="faq-heading"
        className="bg-white py-20 dark:bg-black"
      >
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2
              id="faq-heading"
              className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-white"
            >
              Your Questions, Answered
            </h2>
            <dl className="mt-12 space-y-2">
              {faqs.map((faq, index) => (
                <FAQItem key={index} faq={faq} />
              ))}
            </dl>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Home;
