"use client";

import { useEffect, useRef, useState } from "react";

function RevealingSections({ children, goinUp = false, delay = 0 }) {
  const upReveal = goinUp ? "revealing" : "revealingopa";
  const aboutEl = useRef(null);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    if (aboutEl.current) {
      const about = aboutEl.current;
      const handleIntersection = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInterval(() => {
              setIsShow(true);
            }, delay);
          }
        });
      };

      const observer = new IntersectionObserver(handleIntersection, {
        root: null,
        threshold: 0.1,
      });

      observer.observe(about);

      return () => {
        observer.unobserve(about);
      };
    }
  }, [isShow, delay]);
  return (
    <div
      ref={aboutEl}
      className={`${isShow ? `${upReveal}` : `opacity-0`}  backfaceVisibility`}
    >
      {children}
    </div>
  );
}

export default RevealingSections;
