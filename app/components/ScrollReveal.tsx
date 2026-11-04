"use client";
import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    // Observe all sections
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      section.classList.add("reveal-section");
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <style>{`
      .reveal-section {
        opacity: 0;
        transform: translateY(32px);
        transition: opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1),
                    transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
      }
      .reveal-section.revealed {
        opacity: 1;
        transform: translateY(0);
      }
      /* First section is always visible */
      #hero {
        opacity: 1 !important;
        transform: none !important;
      }
    `}</style>
  );
}
