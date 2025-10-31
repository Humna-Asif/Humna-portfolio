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
    "/Project-1.png",
    "https://i.pinimg.com/1200x/06/b9/82/06b982f32d1eb2dd7bb5c780ba09918b.jpg",
    "https://i.pinimg.com/1200x/46/41/06/4641064a003ff4caa1555ee12920d650.jpg",
    "https://i.pinimg.com/736x/9e/b4/df/9eb4df90769b3301e4b6bda885a6b92a.jpg",
    "/Project-5.png",
    "https://i.pinimg.com/736x/55/fd/52/55fd5286332e661ad9018f299dd2f27c.jpg",
    "/Project-2.png",
    "https://i.pinimg.com/1200x/61/40/e2/6140e2b9e409b36bad9187f877cd6688.jpg",
    "https://i.pinimg.com/736x/6e/59/fc/6e59fc002aec1bd483a37798870e31f3.jpg",
    "/Project-7.png",
    "/img-14.png",
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
          <img ref={imageRef} className="image" src={imageArray[0]} alt="Projects" />
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
