import logo from './logo.svg';
import './App.css';
import Crearcuenta from './Crearcuenta';
import Iniciarseccion from './Iniciarseccion';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div >
      <Routes>
      <Route path='/' element={
        <>
       <Crearcuenta/> </>
      }></Route>
      <Route path='/login' element={
        <>
     <Iniciarseccion/></>
      }></Route>
      </Routes>
      
    </div>
    
  );
}

export default App;
