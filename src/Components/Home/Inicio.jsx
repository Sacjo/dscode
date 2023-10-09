import React from 'react';
import MatrixAnimation from '../Effects/MatrixAnimation';



const Inicio = () => {
    return (
        <section id='inicio' className='min-vh-100 d-flex align-items-center text-center mb-5'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className="col-10 col-md-6 text-white">
                        <h1 className='display-3 fw-light d-none d-sm-block mt-5'>Creamos experiencias web a partir de diseños creativos</h1>
                        <h1 className='fw-light d-sm-none fs-1'>Creamos experiencias web a partir de diseños creativos</h1>
                        <div>
                            <a href="#nosotros" className='btn btn-neon mt-5'>Más Info</a>
                        </div>
                    </div>
                </div>
            </div>
            <MatrixAnimation />
        </section>

    )
}

export default Inicio