import React, { useEffect } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import type { TeamMember } from '../types';
import ourVision from '../assets/our.png';
import ourMission from '../assets/vision.png';
import { motion } from 'framer-motion';

const Sparkles: React.FC<{ className?: string; size?: number }> = ({ className, size = 18 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
  >
    <path
      d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14 10.5 9.5 6 8l4.5-1.5L12 2z"
      fill="currentColor"
    />
  </svg>
);

const team: TeamMember[] = [
  { name: 'Syed Daaniyal Ali', role: 'Founder & CEO', imageUrl: '/assets/founder.png' },
];

const About: React.FC = () => {
  useEffect(() => {
    document.title = 'Our Story | Sytech Solutions';
    document.querySelector('meta[name="description"]')?.setAttribute('content', "Learn about Sytech Solutions. We're a collective of digital architects and creative thinkers united by a mission to build exceptional digital products.");
    document.querySelector('meta[name="keywords"]')?.setAttribute('content', 'about sytech solutions, web development team, digital strategy, company mission, web design company');
  }, []);

  return (
    <div className="bg-white dark:bg-black">
      {/* Page Header */}
      <header className="relative bg-gray-900 py-24 sm:py-32">
        <div className="absolute inset-0">
          <img src={ourVision} className="w-full h-full object-cover opacity-30" alt="Abstract grayscale background" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        </div>
        <div className="relative max-w-md mx-auto pl-4 pr-8 sm:max-w-lg sm:px-6 lg:max-w-7xl lg:px-8 text-center">
          <h1 className="text-4xl leading-10 font-extrabold tracking-tight text-white sm:text-5xl sm:leading-none lg:text-6xl">Our Story: The People Behind the Pixels</h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl leading-normal text-gray-300">
            We're a collective of digital architects and creative thinkers united by a mission to build exceptional digital products.
          </p>
        </div>
      </header>

      {/* Our Mission Section */}
      <AnimatedSection aria-labelledby="mission-heading" className="py-20 overflow-hidden bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-20 lg:items-center">
            <div className="lg:pr-8">
              <h2 id="mission-heading" className="text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-white">Our North Star</h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                Our mission is to empower brands by engineering high-impact digital experiences. We believe a powerful online presence is the cornerstone of modern success, and we're committed to delivering solutions that not only look stunning but drive tangible growth.
              </p>
            </div>
            <div className="mt-12 lg:mt-0 relative">
              {/* <div className="absolute -top-4 -right-4 w-2/3 h-2/3 bg-red-50 rounded-lg transform rotate-6 dark:bg-red-900/20" aria-hidden="true"></div>
              <div className="absolute bottom-4 left-4 w-1/2 h-1/2 bg-gray-100 rounded-lg transform -rotate-3 dark:bg-gray-800" aria-hidden="true"></div> */}
              <figure className="relative">
                <img className="rounded-xl shadow-xl ring-1 ring-black ring-opacity-5" src={ourMission} alt="mission" />
              </figure>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Our Values Section */}
      
      <AnimatedSection aria-labelledby="values-heading" className="bg-gray-50 py-20 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 id="values-heading" className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">The Pillars of Our Work</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">The principles that guide our work and culture.</p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="bg-white p-8 rounded-xl shadow-md dark:bg-gray-800">
              <div className="flex items-center justify-center h-16 w-16 mx-auto rounded-full bg-red-100 text-red-600 dark:bg-red-500/10 dark:text-red-400">
                <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
              </div>
              <h3 className="mt-6 text-xl font-bold text-center dark:text-white">Innovation</h3>
              <p className="mt-2 text-gray-600 text-center dark:text-gray-300">We constantly explore new technologies to deliver cutting-edge solutions.</p>
            </div>
             <div className="bg-white p-8 rounded-xl shadow-md dark:bg-gray-800">
              <div className="flex items-center justify-center h-16 w-16 mx-auto rounded-full bg-red-100 text-red-600 dark:bg-red-500/10 dark:text-red-400">
                <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="mt-6 text-xl font-bold text-center dark:text-white">Integrity</h3>
              <p className="mt-2 text-gray-600 text-center dark:text-gray-300">We believe in transparent and honest collaboration with our clients.</p>
            </div>
             <div className="bg-white p-8 rounded-xl shadow-md dark:bg-gray-800">
              <div className="flex items-center justify-center h-16 w-16 mx-auto rounded-full bg-red-100 text-red-600 dark:bg-red-500/10 dark:text-red-400">
                <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div>
              <h3 className="mt-6 text-xl font-bold text-center dark:text-white">Collaboration</h3>
              <p className="mt-2 text-gray-600 text-center dark:text-gray-300">We work as a true partner to bring your vision to life.</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Meet the Team */}
      {(() => {
        // dynamic require to avoid touching top-level imports in the surrounding file
        // you can replace these with top-level imports:
        // import { motion } from 'framer-motion'
        // import { Sparkles } from 'lucide-react'

        const listVariants = {
          hidden: { opacity: 0, y: 8 },
          visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.12, ease: 'easeOut', duration: 0.5 },
          }),
        };

        return (
          <AnimatedSection aria-labelledby="team-heading" className="bg-white py-20 dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none mx-auto text-center">
          <h2 id="team-heading" className="text-3xl font-extrabold tracking-tight sm:text-4xl dark:text-white">Meet the Visionary</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">The driving force behind our innovation.</p>
            </div>

            <div className="flex justify-center items-center gap-6 flex-wrap">
          {team.map((person, idx) => (
            <motion.div
              key={person.name}
              custom={idx}
              initial="hidden"
              animate="visible"
              variants={listVariants}
              whileHover={{ scale: 1.03 }}
              className="max-w-xs"
            >
              <motion.article
            layout
            className="group space-y-4 text-center bg-white p-6 rounded-xl border border-gray-200 transition-all duration-300 ease-in-out hover:shadow-xl hover:border-red-400 hover:-translate-y-2 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-red-500"
            whileTap={{ scale: 0.98 }}
              >
            <div className="relative inline-block w-44 h-44 mx-auto">
              {/* Decorative animated rings/background */}
              <span aria-hidden="true" className="absolute inset-0 flex items-center justify-center">
                <motion.span
              className="absolute rounded-full w-44 h-44 bg-red-500/8 dark:bg-red-500/6 blur-sm"
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.span
              className="absolute rounded-full w-56 h-56 border-2 border-red-300/30 dark:border-red-500/20 transform scale-95"
              animate={{ opacity: [0.6, 0.2, 0.6] }}
              transition={{ duration: 2.8, repeat: Infinity }}
                />
                <motion.span
              className="absolute rounded-full w-64 h-64 bg-gradient-to-r from-red-200/10 via-transparent to-transparent opacity-60 blur-lg"
              style={{ transformOrigin: '50% 50%' }}
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                />
              </span>

              <motion.img
                className="relative z-10 object-cover h-40 w-40 rounded-full mx-auto ring-4 ring-gray-100 transition-transform duration-500 transform group-hover:scale-105 group-hover:-translate-y-1 dark:ring-gray-700 dark:group-hover:ring-red-400/50"
                src={person.imageUrl}
                alt={`Headshot of ${person.name}, ${person.role}.`}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
              />
            </div>

            <div className="space-y-2">
              <h3 className="flex items-center justify-center gap-2 text-xl leading-6 font-bold text-gray-900 dark:text-white">
                {person.name}
                <Sparkles className="text-red-500" size={18} />
              </h3>
              <p className="text-red-600 font-semibold dark:text-red-400">{person.role}</p>
            </div>
              </motion.article>
            </motion.div>
          ))}
            </div>
          </div>
        </div>
          </AnimatedSection>
        );
      })()}
    </div>
  );
};

export default About;