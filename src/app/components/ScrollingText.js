"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollingText = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    // Duplicate content for infinite scroll effect
    const clone = marquee.innerHTML;
    marquee.innerHTML += clone;

    gsap.to(marquee, {
      xPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: marquee,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.killTweensOf(marquee);
    };
  }, []);

  return (
    <section className="scrolling-section">
      <div ref={marqueeRef} className="scrolling-marquee">
        {/* ✅ Replace these with your own images */}
        <Skill img="https://i.pinimg.com/1200x/56/67/67/56676773cb4f0c00d7d47c6a84b9407c.jpg" />
        <Skill img="https://i.pinimg.com/736x/c2/bc/aa/c2bcaa4a1ff1860a51187293940b29ee.jpg" />
        <Skill img="https://i.pinimg.com/1200x/3e/60/2a/3e602ae83269f7d4d5092ca9a2026795.jpg" />
        <Skill img="https://i.pinimg.com/736x/af/1f/b4/af1fb4e8700c6aa2c5b8d3e915eb6e99.jpg" />
        <Skill img="https://tse3.mm.bing.net/th/id/OIP.EDf9uuahqsnmHiseK_-CpgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" />
        <Skill img="https://w7.pngwing.com/pngs/87/586/png-transparent-next-js-hd-logo.png" />
        <Skill img="https://i.pinimg.com/736x/00/a3/b2/00a3b2683f31d212e883e269a6c7f4a0.jpg" />
        <Skill img="https://tse1.mm.bing.net/th/id/OIP.FQR3B8ppNjvaw4XFHiZyBAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3" />
        <Skill img="https://tse3.mm.bing.net/th/id/OIP.-tHwJpsA8EmzT693paKH-AHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" />
        <Skill img="https://framerusercontent.com/images/A8cs565CkE3rvoxrbwuYyGs7FM0.png" />
        <Skill img="https://code.visualstudio.com/assets/images/code-stable.png" />
      </div>
    </section>
  );
};

const Skill = ({ img }) => (
  <div className="skill-item">
    <img src={img} alt="skill icon" />
  </div>
);

export default ScrollingText;
