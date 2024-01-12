import React from 'react'
import "./About.css"
import About_Img from '../img/about.png'

const About = () => {
  return (
   <section className='about-container'>
    <div className='about-content'>
        <h1>About <span>red</span> Bull</h1>
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud 
            <span>more...</span></p>
            <ul>
                <li>Veniam Consquat</li>
                <li>deserunt ullamco est sit</li>
                <li>velit officia</li>
                <li>est sit aliqua dolor</li>
            </ul>
            <button>Get now</button>
    </div>
    <div className='about-image'>
        <img src={About_Img} alt="" />
    </div>
   </section>
  )
}

export default About
