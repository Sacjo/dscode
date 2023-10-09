import React from 'react';
import Card from 'react-bootstrap/Card';


function CardServicio1() {
  return (
    <Card className='mb-5 mb-md-0' style={{ width: '20rem', height: '32rem' }}>
      <Card.Body className='p-4 d-flex flex-column justify-content-between'>
        <div className="card-icon d-flex flex-column align-items-center mb-2">
          <i class='bx bx-paper-plane'></i>
          <h3 className='text-center mt-3'>Start</h3>
        </div>
        <Card.Text>
          <i class='bx bx-check'></i>  Diseño Responsivo <br />
          <i class='bx bx-check'></i> Formato OnePage <br />
          <i class='bx bx-check'></i> 3 secciones <br />
          <i class='bx bx-check'></i>  Integración de Redes Sociales <br />
          <i class='bx bx-check'></i>  Dominio .com.py <br />
          <i class='bx bx-check'></i>  3 cuentas de correos <br />
        </Card.Text>
        <div className='d-flex justify-content-center '>
          <a href="#" className='btn btn-neon mt-2'>Más Info</a>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardServicio1;