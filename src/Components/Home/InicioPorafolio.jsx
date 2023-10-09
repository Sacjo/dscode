import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../Assets/port1.png';
import img2 from '../../Assets/port2.png';
import img3 from '../../Assets/port3.png';
import img4 from '../../Assets/nosotros.jpg';



const InicioPorafolio = () => {
  return (
    <section id='port'>

      <div className="row mt-5 ">

        <div className="row justify-content-center port-titulo">
          <div className='text-white mt-3 mb-4 col-10 col-md-8 text-center'>
            <h2 className='mb-3'>Portafolio</h2>
            <p >Transformo ideas en experiencias visuales cautivadoras. Explora mi portafolio y descubre cómo mi creatividad y habilidades técnicas dan vida a proyectos únicos y memorables.</p>
          </div>
        </div>



        <a href="#" className="portbg col-12 col-md-3 p-4 d-flex flex-column justify-content-between">
          <div className="portbg1">
            <img src={img1} alt="" />
            <div className="overlay"></div>
          </div>
          <p className='text-white'>#Arquitectura</p>
          <h3 className='text-white'>New Design</h3>
        </a>


        <a href="#" className="portbg  col-12 col-md-3 p-4  d-flex flex-column justify-content-between">
          <div className="portbg2">
            <img src={img2} alt="" />
            <div className="overlay"></div>
          </div>
          <p className='text-white'>#Restaurante</p>
          <h3 className='text-white'>Veggie Kingdom</h3>
        </a>

        <a href="#" className="portbg  col-12 col-md-3 p-4  d-flex flex-column justify-content-between">
          <div className="portbg3">
            <img src={img3} alt="" />
            <div className="overlay"></div>
          </div>
          <p className='text-white'>#Internet</p>
          <h3 className='text-white'>Giganet</h3>
        </a>

        <a href="#" className="portbg  col-12 col-md-3 p-4  d-flex flex-column justify-content-between">
          <div className="portbg4">
            <img src={img4} alt="" />
            <div className="overlay"></div>
          </div>
          <p className='text-white'>#Dev</p>
          <h3 className='text-white'>Ver Más</h3>
        </a>



      </div>

    </section>

  );
};

export default InicioPorafolio;