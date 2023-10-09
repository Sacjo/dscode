import React from 'react'
import CardServicio1 from '../ServiciosCard/CardServicio1'
import CardServicio2 from '../ServiciosCard/CardServicio2'
import CardServicio3 from '../ServiciosCard/CardServicio3'


const Servicios = () => {
    return (
        <section id='servicios'>
            <div className="container pt-5">
                <div className="row justify-content-evenly pb-5 pt-5">
                    <CardServicio1 />
                    <CardServicio2 />
                    <CardServicio3 />
                </div>
            </div>
        </section>


    )
}

export default Servicios