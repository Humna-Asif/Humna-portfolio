"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import Copy from "./Animations/Copy";

export default function Contact() {

  return (
    <section id='Contact'>

    <div id='contact-content'>
  <div className='contact-half'>
        <div id='left-half'>
     <h3>Dreaming of something <mark>BOLD</mark> </h3>
      <h1>LET'S<br></br>CONNECT!</h1>
        </div>
      </div>
      <div className='contact-half'>
        <div id='links'>
   <Copy>  <p>Whether you need a fresh website, a refined user experience, or a creative partner to bring your vision to life—I’d love to hear from you. Let’s connect and turn ideas into impact.</p></Copy> 
   <Copy >     <h3>Open to collaborations, remote opportunities, and exciting projects.</h3></Copy> 

         <h4>Find Me Here!</h4>
          <ul>
          <li><a href="mailto:humna.asif1461@gmail.com" target="_blank" rel="noopener noreferrer">Email</a></li>
            <li><a href="https://github.com/Humna-Asif" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/humnaasif/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://www.behance.net/humnaasif" target="_blank" rel="noopener noreferrer">Behance</a></li>
            <li><a href="https://dribbble.com/Humnaasif" target="_blank" rel="noopener noreferrer">Dribbble</a></li>
          </ul>

        </div>
      </div>

    </div>
    <h5 id='credit-line'>© 2025 — Designed & Developed by Humna Asif </h5>
     

    </section>
  )
}

