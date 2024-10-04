import { Route } from "react-router-dom";

function Iniciarseccion(){
    return(
        <div className="login-page">
        <div className="form">
        <form className="form-seccion">
      <input type="text" placeholder="username"/>
      <input type="password" placeholder="password"/>
      <button>login</button>
      <p className="message">No registrado? <a href="/">Crea una cuenta</a></p>
    </form>
    
        </div></div>   
    )
}
export default Iniciarseccion;