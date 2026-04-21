import { useEffect, useRef, useState } from 'react';

function Reveal({ as = 'div', children, className = '', delay = 0, variant = 'up' }) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -60px 0px',
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  const Component = as;

  return (
    <Component
      ref={elementRef}
      className={`reveal reveal-${variant} ${isVisible ? 'reveal-visible' : ''} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Component>
  );
}

export default Reveal;
