import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CartContext } from '../../context/cartContext';
import './Productos.css'
function Productos() {
    const {addProductToCart} = useContext(CartContext)
    const [productos, setProductos] = useState([]);
   

    useEffect(() => {
        fetch('http://localhost:4002/productos/getProdList')
            .then(req => req.json()).then(result => setProductos(result.data))
    }, [])
   
    return (
        <>

        <div  className = 'fondot'>
            <div className = 'menu-contenedor'>

            <div className='productos-contenedor'>
        {productos.map((producto, index) => {
                return (
                    <Card className='container2' key={index} style={{ width: '18rem', background: 'transparent' }}>
                    <Card.Img variant="top" src={`http://localhost:4002/`+producto.img} />
                    <Card.Body className='container3'>
                      <Card.Title className='container4'>{producto.nombre}</Card.Title>
                      <Card.Text className='container5'>
                      {producto.descripcion}
                      </Card.Text>
                      <Card.Text className='container6'>
                      {producto.precio}
                      </Card.Text>
                      <Card.Text className='container7'>
                      {producto.existencias}
                      </Card.Text>
       
                      <Button  className = 'bttt' variant="primary" onClick={() => addProductToCart(producto)}>Comprar</Button>
                    </Card.Body>
                  </Card>
                )
            })}

        </div>

                








            </div>
        </div>







        
            
        </>
    )
}

export default Productos