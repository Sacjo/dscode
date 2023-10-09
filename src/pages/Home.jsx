import React from 'react'
import NavHeader from '../Components/NavHeader'
import Inicio from '../Components/Home/Inicio'
import Nosotros from '../Components/Home/Nosotros'
import Slider from '../Components/Home/Slider'
import Servicios from '../Components/Home/Servicios'
import InicioPorafolio from '../Components/Home/InicioPorafolio'
import Contacto from '../Components/Home/Contacto'
import Footer from '../Components/Footer'


const Home = () => {
    return (
        <div>
            <NavHeader />
            <Inicio />
            <Nosotros />
            <Slider />
            <Servicios />
            <InicioPorafolio />
            <Contacto />
            <Footer />
        </div>
    )
}

export default Home