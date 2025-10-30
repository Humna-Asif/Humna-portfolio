import React from 'react'
import Copy from './Animations/Copy'


const About = () => {

  return (
    < section id='About'>

      <div id='about-top'>
        <Copy> <h2>A <span>frontend developer</span> & <span>Designer</span> shaping smooth and elegant digital journeys.</h2></Copy>
        <Copy>  <p>Hello,<br></br> I’m Humna Asif<span> UX|UI Designer </span> and <span>  Developer,</span> crafting intuitive interfaces and digital experiences that connect with people..<br></br>
          I design and build modern web experiences with a focus on clean UI, smooth interactions, and usability.
        </p></Copy>

      </div>
      <div id='about-bottom'>
        <h6>YEAR 2025</h6>
        <ul>
          <li><a href="mailto:humna.asif1461@gmail.com" target="_blank" rel="noopener noreferrer">Email</a></li>
          <li><a href="https://github.com/Humna-Asif" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/humnaasif/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://www.behance.net/humnaasif" target="_blank" rel="noopener noreferrer">Behance</a></li>
          <li><a href="https://dribbble.com/Humnaasif" target="_blank" rel="noopener noreferrer">Dribbble</a></li>
        </ul>
      </div>

    </section>
  )
}

export default About