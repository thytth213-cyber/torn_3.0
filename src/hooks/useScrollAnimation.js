import { useEffect, useRef } from 'react';

/**
 * Custom hook for scroll-triggered animations using Intersection Observer
 * Applies animation classes when elements enter the viewport
 * @param {Object} options - Configuration options
 * @param {number} options.threshold - Intersection threshold (0-1, default: 0.1)
 * @param {string} options.rootMargin - Margin around the viewport (default: '0px 0px -100px 0px')
 * @returns {Object} ref - Reference to attach to the element
 */
export function useScrollAnimation(options = {}) {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -100px 0px'
  } = options;

  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add animation classes when element enters viewport
          entry.target.classList.add('in-view');
          // Stop observing once element is in view (optional, for performance)
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold,
      rootMargin
    });

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  return ref;
}

/**
 * Hook for staggered animations of children elements
 * Each child element animates sequentially with a delay
 * @param {Object} options - Configuration options
 * @param {number} options.delay - Delay between each child animation in ms (default: 100)
 * @param {number} options.threshold - Intersection threshold (0-1, default: 0.1)
 * @returns {Object} ref - Reference to attach to the container
 */
export function useStaggerAnimation(options = {}) {
  const {
    delay = 100,
    threshold = 0.1
  } = options;

  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const children = entry.target.querySelectorAll('[data-stagger-child]');
          children.forEach((child, index) => {
            // Set animation delay for each child
            child.style.setProperty('--stagger-delay', `${index * delay}ms`);
            child.classList.add('in-view');
          });
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold,
      rootMargin: '0px 0px -100px 0px'
    });

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [delay, threshold]);

  return ref;
}
