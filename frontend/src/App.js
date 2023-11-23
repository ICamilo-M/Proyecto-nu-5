
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import SignUp from './components/usuario/SignUp';
import Presentacion from './components/presentacion/Presentacion';
import Login from './components/usuario/Login';
import Navegacion from './components/Navegacion/Navegacion';
import Productos from './components/Productos/Productos';
import Perfil from './components/usuario/Perfil';
import { useContext } from 'react';
import { UserContext } from './context/UserContext';
import Cart from './components/Cart/Cart';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
function App() {
  const { user } = useContext(UserContext)

  return (
    <div className="App">
      <Navegacion />
      <Routes>
        <Route path='/' element={<Presentacion />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/Productos' element={<Productos />} />
        <Route path='/LogIn' element={<Login />} />
        <Route path='/Perfil' element={<Perfil />} />
        <Route path='/cart' element={ <PayPalScriptProvider options={{ "client-id": "Ad6u2RET0UVdWVkZU40n5_-1Wz-_iVwtWhrHdC31Ax9XjFemeUJyicuca-chKTui6A68agA64qypFn62", currency: "MXN" }}>
            <Cart />
          </PayPalScriptProvider>} />
      </Routes>
    </div>
  );
}

export default App;
