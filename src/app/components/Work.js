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
      xPercent: -100 * (sections.length),
      ease: "none",
      scrollTrigger: {
        trigger: "#Work",
        start: "top 2%",
        end: `+=${sections.length * 1000 + 3000}`,
        pin: true,
        delay: 5,
        scrub: 1,
      },
    });
  }, []);

  return (
    <section id="Work">
      <div id="project-container" ref={containerRef}>

        <div className="project">
          <a
            href="https://kanno-landing-page.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/kanno.png" alt="Kanno-LandingPage" />

          </a>


        </div>


        <div className="project-big">
          <a
            href="https://k72-agency-website.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/Project-2.png" alt="K72-Agency" />
          </a>

        </div>



        <div className="project">
          <a
            href="https://ochi-by-humna.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
          <img src="/Project-3.png" alt="Ochi-Agency" />
          </a>

        </div>



        <div className="project-big">
          <a
            href="https://your-first-project-link.com"
            target="_blank"
            rel="noopener noreferrer"
          >
          <img src="/Project-4.png" alt="Kay-Beauty" />
          </a>

        </div>



        <div className="project">
          <a
            href="https://heaven-and-home.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
          <img src="/Project-5.png" alt="Heaven&Home" />
          </a>

        </div>



        <div className="project-big">
          <a
            href="https://your-first-project-link.com"
            target="_blank"
            rel="noopener noreferrer"
          >
          <img src="/Project-6.png" alt="CELLEVA"/>
          </a>

        </div>

        <div className="project">
          <a
            href="https://www.behance.net/gallery/180279547/ETHOS-media-agency-%28UIUX%29-web-design"
            target="_blank"
            rel="noopener noreferrer"
          >
                      <img  src="/Project-7.png"alt="Ethos UI/UX"/>

          </a>

        </div>

        <div className="project-big">
          <a
            href="https://www.behance.net/gallery/187018445/Personal-Portfolio-UIUX-Design"
            target="_blank"
            rel="noopener noreferrer"
          >
          <img src="/Project-8.png" alt="Portfolio UI/UX" />
          </a>

        </div>
      </div>

      <h1>MY WORK.</h1>
    </section>
  );
};

export default Work;
