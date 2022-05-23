import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/styles.css";

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Singup from './Signin.jsx';
import Administrador from "./Administrador.jsx"

class Singin extends Component{

    
    render(){
      
      let url = 'http://localhost:3000/administradores'
      let stock = []

      fetch(url)
        .then ((respuesta) => respuesta.json())
        .then ((data) => {
        data.forEach((elemento) =>{
        stock.push(elemento)
    })
})
      
     

      const validarAdmin = () =>{

        

        const nombre = document.getElementById("nombre").value;
        const password = document.getElementById("password".value)

        let entra = false;

        for(let i = 0; i<stock.length; i++){
            
          
          if(nombre === stock[i].nombre){

              entra = true;
          }
        }
        

        if(entra === false){
          
          
          alert("Acceso denegado");
          
          
          
        }
        else{
          alert("Acceso correcto");
        }
      }
  
    return(

     
          
        <div className="containerPrincipal">
        <div className="containerSecundario">
          <div className="form-group">
            <form action="" id="form">
            <label>Nombre: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="nombre"
              id="nombre"
              onChange={this.handleChange}
            />
            <br />
            
           
            <br />
            <label>Contraseña: </label>
            <br />
            <input
              type="password"
              className="form-control"
              name="password"
              id="password"
              onChange={this.handleChange}
            />
            <br />
            <Link to={"/administrador"}>
              <button className="btn btn-primary" onClick={() => validarAdmin()}>Iniciar Sesión</button>
            </Link>
            </form>
                        
            <br/>       
             
            
          </div>
        </div>
      </div>
   
    
    );

    }
}

export default Singin;