import React from 'react'
import { HomeDatas } from './Data';
import Informacion from '../informacion/Informacion';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './Presentacion.css'

function Presentacion() {
  return (

    <>
    <div className='container-principal'>
    <Container> 
      <div className='container-secun'> 
      <h1>¡Hasta 15 días de entregas gratis!</h1>
    <h4 >Para tus primeros pedidos en Restaurantes pagando con tarjeta.  </h4>

      </div>
    </Container>

    <Container>
    <style type="text/css">
      {`
  .btn-flat {
    background-color: rgb(20, 124, 20);
    color: rgb(208, 255, 0);
  }

  .btn-xxl {
    padding: 1rem 1.5rem;
    font-size: 1.5rem;
  }
  `}
    </style>

    <Button href="/SignUp" variant="flat" size="xxl">
      REGISTRATE AHORA
    </Button>
        

    </Container>
    

    <div className='tersert'>
    <Informacion{...HomeDatas}/>


    </div>

      
    

  
   
  </div>

 
  </>








    
)
}

export default Presentacion