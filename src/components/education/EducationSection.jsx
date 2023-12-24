import React from 'react'
import '../../index.css'

export default function EducationSection() {
  return (
    <section className="education" id="education">
      <h2 className="heading">My <span>Journey</span><span className="animate scroll" style={{'--i': 1}}></span></h2>

      <div className="education-row">
        <div className="education-column">
          <h3 className="title">Education<span className="animate scroll" style={{'--i': 2}}></span></h3>

          <div className="education-box">
            <div className="education-content">
              <div className="content">
                <div className="year"><i className='bx bxs-calendar'></i> 2017 - 2018</div>
                <h3>Master Degree - University</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, quisquam harum modi fugit vero laborum, 
                    distinctio eligendi excepturi laboriosam commodi nihil deleniti nulla? 
                    Eaque placeat omnis, quas qui odit voluptates.</p>
              </div>
            </div>

            <div className="education-content">
              <div className="content">
                <div className="year"><i className='bx bxs-calendar'></i> 2017 - 2018</div>
                <h3>Master Degree - University</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, quisquam harum modi fugit vero laborum, 
                    distinctio eligendi excepturi laboriosam commodi nihil deleniti nulla? 
                    Eaque placeat omnis, quas qui odit voluptates.</p>
              </div>
            </div>

            <div className="education-content">
              <div className="content">
                <div className="year"><i className='bx bxs-calendar'></i> 2017 - 2018</div>
                <h3>Master Degree - University</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, quisquam harum modi fugit vero laborum, 
                    distinctio eligendi excepturi laboriosam commodi nihil deleniti nulla? 
                    Eaque placeat omnis, quas qui odit voluptates.</p>
              </div>
            </div>

            {/* Los demás elementos de educación se repiten aquí */}

            <span className="animate scroll" style={{'--i': 3}}></span>
          </div>
        </div>

        <div className="education-column">
          <h3 className="title">Experience<span className="animate scroll" style={{'--i': 5}}></span></h3>

          <div className="education-box">
            <div className="education-content">
              <div className="content">
                <div className="year"><i className='bx bxs-calendar'></i> 2017 - 2018</div>
                <h3>Web Developer - Company</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, quisquam harum modi fugit vero laborum, 
                    distinctio eligendi excepturi laboriosam commodi nihil deleniti nulla? 
                    Eaque placeat omnis, quas qui odit voluptates.</p>
              </div>
            </div>

            <div className="education-content">
              <div className="content">
                <div className="year"><i className='bx bxs-calendar'></i> 2017 - 2018</div>
                <h3>Web Developer - Company</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, quisquam harum modi fugit vero laborum, 
                    distinctio eligendi excepturi laboriosam commodi nihil deleniti nulla? 
                    Eaque placeat omnis, quas qui odit voluptates.</p>
              </div>
            </div>

            <div className="education-content">
              <div className="content">
                <div className="year"><i className='bx bxs-calendar'></i> 2017 - 2018</div>
                <h3>Web Developer - Company</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, quisquam harum modi fugit vero laborum, 
                    distinctio eligendi excepturi laboriosam commodi nihil deleniti nulla? 
                    Eaque placeat omnis, quas qui odit voluptates.</p>
              </div>
            </div>

            {/* Los demás elementos de experiencia se repiten aquí */}

            <span className="animate scroll" style={{'--i': 6}}></span>
          </div>
        </div>
      </div>
    </section>
  );
}
