import React from 'react'
import '../../index.css'
import About from '../img/About.jpeg'
import contactos from '../img/gestion-contactos.png'
import CV from '../img/HojaDeVida.png'
import listTask from '../img/listaDeTareasNode.png'
import netflix from '../img/Netflix.png'
import notesList from '../img/NotesList.png'
import todo from '../img/TODOLIST.png'

export default function EducationSection() {
  return (
    <section className="education" id="education">
      <h2 className="heading">My <span>Projects</span><span className="animate scroll" style={{'--i': 1}}></span></h2>

      <div className="education-row">
        <div className="education-column">
          <h3 className="title">{/*Education*/}<span className="animate scroll" style={{'--i': 2}}></span></h3>

          <div className="education-box">
            <div className="education-content">
              <div className="content">
                <div className='zoom-wrapper'>
                  <a href="https://github.com/crisskmacho/NotesList" target="_blank">
                    <img src={notesList} alt="Descripción de la imagen" />
                  </a>
                </div>
                <div className="year"><i className='bx bxs-calendar'></i> Ene 2024</div>
                <h3>Personal Project</h3>
                <p>El proyecto es una aplicación web de gestión de notas que utiliza React.js y Tailwind CSS en el front-end,
                  con Node.js y Express en el back-end. Se ha usado una base de datos a MySQL. El objetivo es permitir a
                  los usuarios gestionar notas de manera eficiente, permitiendo agregar, eliminar, editar y/o actualizar notas.</p>
              </div>
            </div>

            <div className="education-content">
              <div className="content">
                <a href="https://github.com/crisskmacho/my-react-task-list/tree/review-3" target="_blank">
                  <img src={todo} alt="Descripción de la imagen" />
                </a>
                <div className="year"><i className='bx bxs-calendar'></i> Nov 2023 - Dic 2023</div>
                <h3> PROtalento - ADA School</h3>
                <p>El proyecto se centra en desarrollar una aplicación web de gestión de tareas con un enfoque eficiente.
                  Emplea React.js para el front-end y se apoya en Chakra UI para diseñar la interfaz. El propósito principal es
                  facilitar a los usuarios la creación, lectura, actualización y eliminación de tareas de manera intuitiva y
                  efectiva.
                  </p>
              </div>
            </div>

            <div className="education-content">
              <div className="content">
                <a href="https://github.com/crisskmacho/Netflix" target="_blank">
                  <img src={netflix} alt="Descripción de la imagen" />
                </a>
                <div className="year"><i className='bx bxs-calendar'></i> Nov 2023</div>
                <h3>Azul School</h3>
                <p>Creación y réplica de la página principal de Netflix con HTML y CSS.</p>
              </div>
            </div>

            <span className="animate scroll" style={{'--i': 3}}></span>
          </div>
        </div>

        <div className="education-column">
          <h3 className="title">{/*Experience*/}<span className="animate scroll" style={{'--i': 5}}></span></h3>

          <div className="education-box">
            <div className="education-content">
              <div className="content">
                <a href="https://github.com/crisskmacho/node-server/tree/review-3" target="_blank">
                  <img src={listTask} alt="Descripción de la imagen" />
                </a>
                <div className="year"><i className='bx bxs-calendar'></i> Oct 2023</div>
                <h3>PROtalento - ADA School</h3>
                <p>El proyecto abarca la creación de una aplicación web de gestión de tareas. Utiliza JavaScript para el
                  front-end, Node.js para el Back-end y una base de datos MongoDB. El propósito principal es permitir a los
                  usuarios crear, leer, actualizar y eliminar tareas de manera afectiva.
                  </p>
              </div>
            </div>

            <div className="education-content">
              <div className="content">
                <a href="https://github.com/crisskmacho/contact-list/tree/project-2" target="_blank">
                  <img src={contactos} alt="Descripción de la imagen" />
                </a>
                <div className="year"><i className='bx bxs-calendar'></i> Sep 2023</div>
                <h3>PROtalento - ADA School</h3>
                <p>Se desarrolló un código en JavaScript para gestionar una lista de contactos, brindando la capacidad de
                  agregar, eliminar, actualizar y borrar contactos de manera eficiente.
                  </p>
              </div>
            </div>

            <div className="education-content">
              <div className="content">
                <a href="https://github.com/crisskmacho/HojaDeVida" target="_blank">
                  <img src={CV} alt="Descripción de la imagen" />
                </a>
                <div className="year"><i className='bx bxs-calendar'></i> Ago 2023</div>
                <h3> PROtalento - ADA School</h3>
                <p>Desarrollo de un curriculum vitae utilizando HTML y CSS..</p>
              </div>
            </div>

            <span className="animate scroll" style={{'--i': 6}}></span>
          </div>
        </div>
      </div>
    </section>
  );
}
