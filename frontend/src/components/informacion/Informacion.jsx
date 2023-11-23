import{Col,Row} from 'react-bootstrap'
import Table from 'react-bootstrap/Table';


function Informacion({titulo,descripcion,img1,cont,encabezado}){
    return (
        <>
        <div className='abtContenedor'>
      <div>
        <Row>
          <Col>
          <div className='text-wrap'>
          <Table striped bordered hover>
      
      <tbody>
      <h1>{titulo}</h1>
        <tr>
          <td>{cont}</td>
          <td>+57 321654897</td>
        </tr>
        <tr>
          <td>Correo</td>
          <td>RAPIQUICKt@gmail.com</td>
          
        </tr>
        <tr>
          <td>Direccion</td>
          <td>Cra 75#18-44</td>
        </tr>
        <tr>
          <td>{img1}</td>
          <td>Disponible</td>
        </tr>
      </tbody>
    </Table>
            
          </div>
          </Col>
        </Row>

      </div>

    </div>
        
        
        
        </>
    );
};

export default  Informacion;