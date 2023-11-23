import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2'
import './SignUp.css'
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();
  //este guarda los valores del formulario
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    phone: "",
    email: "",
    password: ""
  })

  const onSave = async(event) =>{
    event.preventDefault();
    console.log(formData);
    await fetch('http://localhost:4002/api/signUp', {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    }).then(resp => resp.json())
    .then(result => {
      Swal.fire(result.message)
      navigate('/LogIn')
    });
    
    
    
  }

  const onChange = (e) =>{
      setFormData({
        ...formData, [e.target.name]: e.target.value
      })
  }


  return (
    <>
   <div className='principales'>
   <div className='form-contenedor'>
   <Form onSubmit={onSave} className='form-reserva'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" value={formData.name} onChange={onChange} name='name' placeholder="Escribe tu nombre" />
        <Form.Label>Apellido</Form.Label>
        <Form.Control type="text" value={formData.lastname} onChange={onChange} name='lastname' placeholder="Escribe tus apellidos" />
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name='email' value={formData.email} onChange={onChange} placeholder="Escribe tu email" />
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' value={formData.password} onChange={onChange} placeholder="Escribe password" />
        <Form.Label>Rol</Form.Label>
        <Form.Control type="text" value={formData.lastname} onChange={onChange} name='rol' placeholder="Escribe tu rol" />

        <Form.Text className="text-muted">
         Tu informacion es privada y no sera compartida o reutilizada.
        </Form.Text>
      </Form.Group>
    
      <Button variant="primary" type="submit"> Guardar </Button>
    </Form>
   </div>
   
    </div>
    </>
  )
}

export default SignUp