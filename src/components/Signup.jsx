import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/styles.css";


class Singup extends Component{

    render(){

    const mensaje = () =>{
      alert("Registrado con exito");
    }
  
    return(
        
        <div className="containerPrincipal">
        <div className="containerSecundario">
          <div className="form-group">
            <label>Nombre: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="username"
              onChange={this.handleChange}
            />
            <br />
            <label>Direccion</label>
            <br />
            <input type="text" className="form-control"/>
            <br />
            <label>Contraseña: </label>
            <br />
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={this.handleChange}
            />
            <br />
            <label>Confirmar contraseña</label>
            <br />
            <input type="password" className="form-control"/>
            <br />
            <button className="btn btn-primary" onClick={()=> mensaje()}>Registrarse</button>
          </div>
        </div>
      </div>
    );

    }
}

export default Singup;