"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import Copy from "./Animations/Copy";

export default function Services() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <section id="Services">
      <div id="box-container">

        <div className='box'>
           <h1 className="bg-heading">1</h1>
          <div className="overlay">
            <div className="overlay-top">
              <Copy>    <h1 className="overlay-heading">WEB<br></br> Design</h1></Copy> 
             <Copy>     <p>Crafting intuitive, user-centered designs for mobile and web apllications.</p></Copy> 
            </div>
           

          


               <ul>
             <Copy>     <li>Wireframing </li>
              <li>Prototyping</li>
              <li>Responsiveness</li>
              <li>Figma, Adobe XD</li></Copy> 

            </ul>

          </div>
        </div>


        <div className='box'>
          <h1 className="bg-heading">2</h1>
          <div className="overlay">
 <div className="overlay-top">
             <Copy>   <h1 className="overlay-heading">Web development</h1></Copy> 
             <Copy>   <p>Transforming designs into smooth, responsive, and scalable code.</p></Copy> 
            </div>

            <ul>
           <Copy>  <li>React.js, Next.js</li>
              <li>HTML, CSS, JS</li>
              <li>Node.js, Rest APIs</li>
              <li>Git/GitHub, VS Code</li></Copy> 

            </ul>


          </div>
        </div>

         <div className='box'>
          <h1 className="bg-heading">3</h1>
          <div className="overlay">
            <div className="overlay-top">
               <Copy>  <h1 className="overlay-heading">Animations &<br></br>Interactions</h1></Copy> 
               <Copy>  <p>Adding motion and micro-interactions to bring interfaces to life..</p></Copy> 
            </div>


            <ul>
              <Copy>   <li>GSAP & Framer Motion </li>
              <li>Scroll-based Animations</li>
              <li>Smooth Transitions</li>
           <li>Micro-Interactions</li></Copy> 

            </ul>

          </div>
        </div>

      

      </div>

      <div id="services-heading">
        <h1>SERVICES</h1> 
      </div>
    </section>
  );
};


