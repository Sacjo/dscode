import React from 'react'
import Formulario from './Formulario'

const Contacto = () => {
  return (
    <section id='contacto' className='pt-3 pb-3 '>
      <div className="container pt-5 pb-5">
        <div className="row justify-content-between flex-md-row align-items-center align-items-md-start flex-column">

          <div className="col-10 col-md-5">
            <h1 className="text-white mb-3" >Contactanos</h1>
            <p className="text-white mb-3" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam voluptatum aut numquam sequi dignissimos. Laboriosam itaque explicabo, enim suscipit odio quaerat porro, vitae neque cum tempore repellat modi atque magni.</p>
            <div className="redes">
              <a href="#">
                <i class='bx bxl-instagram me-3'></i>
              </a>
              <a href="#">
                <i class='bx bxl-twitter me-3' ></i>
              </a>
              <a href="#">
                <i class='bx bxl-whatsapp me-3' ></i>
              </a>
              <a href="#">
                <i class='bx bxl-gmail'></i>
              </a>
            </div>
          </div>
          <div className="col-10 col-md-6">
            <Formulario />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacto