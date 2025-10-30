"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";
import About from "./About";
import Copy from "./Animations/Copy"; // ✅ imported copy animation component

const Home = () => {
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

  const imageArray = [
    "https://i.pinimg.com/1200x/60/df/b0/60dfb0a6cf9caf8dac8ba755684ab9b1.jpg",
    "https://i.pinimg.com/736x/7c/4f/81/7c4f81eae8bb4b3993cfb5d5e1b3ec9b.jpg",
    "https://i.pinimg.com/736x/eb/6b/01/eb6b01ec3a6121d9dc6537b822701433.jpg",
    "https://i.pinimg.com/736x/2a/8d/e4/2a8de437df37838a9f07e030607281b9.jpg",
    "https://i.pinimg.com/1200x/46/41/06/4641064a003ff4caa1555ee12920d650.jpg",
    "https://i.pinimg.com/736x/9e/b4/df/9eb4df90769b3301e4b6bda885a6b92a.jpg",
    "https://i.pinimg.com/1200x/d9/f5/e3/d9f5e37f10fa1438c1b4b9f9fccefda1.jpg",
    "https://i.pinimg.com/1200x/ba/0c/aa/ba0caa6a96255a44dcd66aa9c7f666fe.jpg",
    "https://i.pinimg.com/736x/bb/4c/4b/bb4c4bf1303fd811f31aaeb3c6a0e6fb.jpg",
    "https://i.pinimg.com/1200x/61/40/e2/6140e2b9e409b36bad9187f877cd6688.jpg",
    "https://i.pinimg.com/736x/6e/59/fc/6e59fc002aec1bd483a37798870e31f3.jpg",
    "https://i.pinimg.com/736x/86/df/4b/86df4b582d1434bbbccaf701ec66adbe.jpg",
    "/S-bg-2.png",
  ];

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: "top%",
        end: "bottom -30%",
        scrub: true,
        pin: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const index = Math.floor(progress * (imageArray.length - 1));
          imageRef.current.src = imageArray[index];
        },
      },
    });
  });

  return (
    <section id="Home">
      {/* Section 1 */}
      <div className="section-1">
        {/* Image changing on scroll */}
        <div ref={imageDivRef} className="image-container">
          <img ref={imageRef} className="image" src={imageArray[0]} alt="team member" />
        </div>

        {/* Heading and Animated Text Section */}
        <div className="home-text">
          <div className="heading-wrapper">
            <Copy>  <h1 className="home-heading">
              Digital
              <br />
              Designer
            </h1></Copy>

          </div>

          <div className="about-wrapper">
            <About />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
