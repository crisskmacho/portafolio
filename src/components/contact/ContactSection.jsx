import React, { useState } from 'react'
import '../../index.css'
import axios from 'axios';
import swal from 'sweetalert';

export default function ContactSection() {

  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    mobileNumber: '',
    emailSubject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://backportafolio.onrender.com/api/enviar-correo', formData);
      swal('Mensaje enviado correctamente', '', 'success'); // Establecer el mensaje de éxito
      setFormData({ // Limpiar los campos del formulario
        fullName: '',
        emailAddress: '',
        mobileNumber: '',
        emailSubject: '',
        message: '',
      });
    } catch (error) {
      swal('Error al enviar el correo', '', 'error');
    }
  };
  
    return (
        <section className="contact" id="contact">
          <h2 className="heading">Contact <span>Me!</span><span className="animate scroll" style={{'--i': 1}}></span></h2>
    
          <form onSubmit={handleSubmit} action="#">
            <div className="input-box">
              <div className="input-field">
              <input
                type="text"
                placeholder="Full Name"
                name="fullName" // Agrega el atributo 'name' correspondiente a cada campo del formulario
                value={formData.fullName} // Vincula el 'value' al estado 'formData'
                onChange={handleChange}
                required
              />
                <span className="focus"></span>
              </div>
    
              <div className="input-field">
                <input
                  type="text"
                  placeholder="Email Address"
                  name="emailAddress"
                  value={formData.emailAddress}
                  onChange={handleChange}
                  required
                />
                <span className="focus"></span>
              </div>
    
              <span className="animate scroll" style={{'--i': 3}}></span>
            </div>
    
            <div className="input-box">
              <div className="input-field">
                <input
                  type="number"
                  placeholder="Mobile Number"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  required
                />
                <span className="focus"></span>
              </div>
    
              <div className="input-field">
                <input
                  type="text"
                  placeholder="Email Subject"
                  name="emailSubject"
                  value={formData.emailSubject}
                  onChange={handleChange}
                  required
                />
                <span className="focus"></span>
              </div>
    
              <span className="animate scroll" style={{'--i': 5}}></span>
            </div>
    
            <div className="textarea-field">
              <textarea
                name="message"
                id=""
                cols="30"
                rows="10"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <span className="focus"></span>
    
              <span className="animate scroll" style={{'--i': 7}}></span>
            </div>
    
            <div className="btn-box btns">
              <button type="submit" className="btn">Submit</button>
    
              <span className="animate scroll" style={{'--i': 9}}></span>
            </div>
          </form>
        </section>
      );
    }
