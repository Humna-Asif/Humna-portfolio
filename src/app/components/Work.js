"use client";
import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Work = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const sections = gsap.utils.toArray("#project-container");

    gsap.to(sections, {
      xPercent: -100 * (sections.length ),
      ease: "none",
      scrollTrigger: {
        trigger: "#Work",
        start: "top 2%",
        end: `+=${sections.length * 1000 + 5000}`,
        pin: true,
        delay:5,
        scrub: 1,
      },
    });
  }, []);

  return (
    <section id="Work">
      <div id="project-container" ref={containerRef}>
        <div className="project">
          <img src="/Project-1.png" alt="Kanno-LandingPage" />
          
        </div>

        <div className="project-big">
          <img
            src="/Project-2.png"
            alt="K72-Agency"
          />
         
        </div>

        <div className="project">
          <img src="/Project-3.png" alt="Ochi-Agency" />
         
        </div>

        <div className="project-big">
          <img src="/Project-4.png" alt="Kay-Beauty" />
         
        </div>

        <div className="project">
          <img src="/Project-5.png" alt="Heaven&Home" />
          
        </div>

        <div className="project-big">
          <img
            src="/Project-6.png"
            alt="CELLEVA UI/UX"
          />
         
        </div>

        <div className="project">
          <img
            src="/Project-7.png"
            alt="Ethos UI/UX"
          />
         
        </div>

         <div className="project-big">
          <img src="/Project-8.png" alt="Portfolio UI/UX" />
         
        </div>
      </div>

      <h1>MY WORK.</h1>
    </section>
  );
};

export default Work;
