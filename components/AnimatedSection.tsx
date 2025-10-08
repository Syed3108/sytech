import React, { useRef, useEffect, useState } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  [key: string]: any; 
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className = '', ...rest }) => {
  const [isVisible, setIsVisible] = useState(false);
  // FIX: Replaced HTMLSectionElement with HTMLElement to resolve a type error.
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '0px 0px -100px 0px', 
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${className} transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      {...rest}
    >
      {children}
    </section>
  );
};

export default AnimatedSection;
