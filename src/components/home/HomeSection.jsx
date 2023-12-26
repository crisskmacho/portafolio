import React from 'react'
import '../../index.css'

export default function HomeSection() {
  return (
    <section className="home show-animate" id="home">
      <div className="home-content">
        <h1>Hola, Yo soy <span>Cristian Camacho</span><span className="animate" style={{'--i': 2}}></span></h1>
        <div className="text-animate">
          <h3>Full Stack Developer</h3>
          <span className="animate" style={{'--i': 3}}></span>
        </div>
        
      {/*
        <p> 
          <span className="animate" style={{'--i': 4}}></span> 
        </p>
      */}

        <div className="btn-box">
        {/*  <a href="#contact" className="btn">Hire Me</a> */}
          <a href="#contact" className="btn">Let's Talk</a>
          <span className="animate" style={{'--i': 5}}></span>
        </div>
      </div>

      <div className="home-sci">
        <a href="https://www.instagram.com/cristian._.barreto?igshid=OGQ5ZDc2ODk2ZA==" target='_blank'><i className='bx bxl-instagram'></i></a>
        <a href="https://www.linkedin.com/in/cristian-camacho-barreto/" target="_blank"><i className='bx bxl-linkedin'></i></a>
        <a href="https://github.com/crisskmacho" target="_blank"><i className='bx bxl-github'></i></a>
        <span className="animate" style={{'--i': 6}}></span>
      </div>

      <div className="home-imgHover"></div>
     {/* <span className="animate home-img" style={{'--i': 7}}></span> */}
    </section>
  );
}
