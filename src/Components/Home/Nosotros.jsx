import React from 'react'
import ParallaxImage from '../Effects/ParallaxImage';

const Nosotros = () => {
    return (
        <section id='nosotros'>
            <div className="container pt-5">
                <div className="row justify-content-center align-items-center pb-5 pt-5">
                    <div className="col-10 col-md-6">
                        <ParallaxImage />
                    </div>
                    <div className="col-10 col-md-5 text-white">
                        <h1 className='mt-4 mt-md-0 mb-4'> Descubre nuestro Trabajo</h1>
                        <p className='mb-4'>Somos una empresa conformada por un equipo altamente capacitado y dedicado. Buscamos constantemente alcanzar la excelencia en cada proyecto que emprendemos. Nuestra experiencia y compromiso nos permiten ofrecer soluciones de la más alta calidad para satisfacer las necesidades de nuestros clientes.</p>

                        <h5>Tecnologias</h5>

                        <div className='mb-3'>
                            <div className="d-flex">
                                <i class='bx bxl-html5 me-2'></i>
                                <p className='mp-0'>Html</p>
                            </div>
                            <div class="progress">
                                <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: '95%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">95%</div>
                            </div>
                        </div>

                        <div className='mb-3'>
                            <div className="d-flex">
                                <i class='bx bxl-css3 me-2' ></i>
                                <p className='mp-0'>Css</p>
                            </div>
                            <div class="progress">
                                <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: '95%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">95%</div>
                            </div>
                        </div>

                        <div className='mb-3'>
                            <div className="d-flex">
                                <i class='bx bxl-bootstrap me-2' ></i>
                                <p className='mp-0'>Bootstrap</p>
                            </div>
                            <div class="progress">
                                <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: '90%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">90%</div>
                            </div>
                        </div>

                        <div className='mb-3'>
                            <div className="d-flex">
                                <i class='bx bxl-javascript me-2' ></i>
                                <p className='mp-0'>JavaScript</p>
                            </div>
                            <div class="progress">
                                <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: '85%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">85%</div>
                            </div>
                        </div>


                        <div className='mb-3'>
                            <div className="d-flex">
                                <i class='bx bxl-react me-2' ></i>
                                <p className='mp-0'>React</p>
                            </div>
                            <div class="progress">
                                <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: '70%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">70%</div>
                            </div>
                        </div>

                        <div className='mb-3'>
                            <div className="d-flex">
                                <i class='bx bxl-nodejs me-2'></i>
                                <p className='mp-0'>NodeJs</p>
                            </div>
                            <div class="progress">
                                <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: '50%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">50%</div>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </section>
    )
}

export default Nosotros