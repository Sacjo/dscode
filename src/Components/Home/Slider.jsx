import Carousel from 'react-bootstrap/Carousel'

function Slider() {
    return (
        <Carousel>
            <Carousel.Item>
                <Carousel.Caption>
                    <h2>Misión</h2>
                    <p>Impulsar la presencia digital de nuestros clientes a través de soluciones web innovadoras y de alta calidad. Nos esforzamos por crear experiencias en línea impactantes y funcionales que superen las expectativas y generen resultados tangibles.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Carousel.Caption>
                    <h2>Visión</h2>
                    <p>Ser reconocidos como líderes en el desarrollo web, destacando por nuestra creatividad, profesionalismo y compromiso con la excelencia. Aspiramos a ser la primera elección para empresas y emprendedores que buscan transformar su presencia en línea.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Carousel.Caption>
                    <h2>Valores</h2>
                    <p>Excelencia <br />
                    Innovación<br />
                    Compromiso<br />
                    Adaptabilidad
                    </p>
             
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Slider;