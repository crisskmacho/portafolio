import React from 'react'
import '../../index.css'

import About from '../img/About.jpeg'

export default function AboutSection() {
    return (
        <section className="about" id="about">
          <h2 className="heading">About <span>Me</span><span className="animate scroll" style={{'--i': 1}}></span></h2>
    
          <div className="about-img">
            <img src={About} alt="IMAGEN ABOUT ME" />
            <span className="circle-spin"></span>
            <span className="animate scroll" style={{'--i': 2}}></span>
          </div>
    
          <div className="about-content">
            <h3>Full Stack Developer!<span className="animate scroll" style={{'--i': 3}}></span></h3>
            <p>Soy Desarrollador Web Full Stack, me enfoco en HTML, CSS, JavaScript, React, para el desarrollo de
                aplicaciones web. Mi focalización autodidacta y curioso me impulsa constantemente a aprender nuevas
                habilidades y mantenerme actualizado en las últimas tendencias tecnológicas. Cuento con la capacidad de
                generar soluciones digitales para la construcción de aplicaciones y páginas web tanto en la parte del
                Back-end como la del Front-end. Me destaco por mi capacidad creativa para resolver problemas de manera
                eficiente, soy un comunicador efectivo y trabajo colaborativamente en equipo, valorando la retroalimentación
                constructiva como una herramienta clave para el crecimiento profesional.
              <span className="animate scroll" style={{'--i': 4}}></span>
            </p>
    
            <div className="btn-box btns">
            {/*  <a href="#" className="btn">Read More</a> */}
              <span className="animate scroll" style={{'--i': 5}}></span>
            </div>
          </div>
        </section>
    );
}
