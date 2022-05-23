import React, { Fragment, useState } from "react";
import Burger from "./components/Burger";
import Cart from "./components/Cart";
import "./styles/styles.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Singin from './components/Signin.jsx';
import Administrador from "./components/Administrador";


// IMPORTO LAS IMAGENES
import Salteña from "./images/Salteña.png";
import Porteña from "./images/Porteña.png";
import Chicken from "./images/Chicken.png";
import Criolla from "./images/Criolla.png";
import Patagonia from "./images/patagonia.png";
import Singup from "./components/Signup";

function App() {
  const [burgers, setBurgers] = useState([
    { id: 5, image: Salteña, nombre: "Ambala", precio: 10 },
    { id: 2, image: Porteña, nombre: "Estacion", precio: 12 },
    { id: 3, image: Chicken, nombre: "Multi", precio: 15 },
    { id: 4, image: Criolla, nombre: "Carrito", precio: 20 },
    { id: 1, image: Patagonia, nombre: "Unibague", precio: 20 },
  ]);

  const [cart, setCart] = useState([]);


  const viewCart = () => {
    {
      document.querySelector(
        "div.container__header__cartDiv--opciones"
      ).style.display = "none"
        ? (document.querySelector(
            "div.container__header__cartDiv--opciones"
          ).style.display = "flex") /*Se le cambia el estilo de none a flex*/
        : (document.querySelector(
            "div.container__header__cartDiv--opciones"
          ).style.display = "none");
    }
  };

  const closeDiv = () => {
    document.querySelector(
      "div.container__header__cartDiv--opciones"
    ).style.display = "none";
  };

  return (
    <BrowserRouter>
    
    <Fragment>

    <Switch>

   
      <Route exact path="/ingresar" component={Singin}/>
      <Route exact path="/registrarse" component={Singup}/>
      <Route exact path="/administrador" component={Administrador}/>
      
     
    </Switch>
        
      
      <div class="cloud one"></div>
      <div class="cloud two"></div>
      <div class="cloud three"></div>

      {/* SECTION CONTENEDOR GLOBAL */}
      <section className="container">
        {/* SECTION DE LA CABECERA */}
        <section className="container__header">
          {/* BOTON DE LA CABECERA */}

            {/* Este boton me mostrara las dos opciones para registrame o ingresar */}
            <div className="container__header__menu">
              <button className="container__header__menu--button" onClick={viewCart}></button>
            </div>

            

          

          {/* TITULO DE LA CABECERA */}
          <div className="container__header__title">
            <h3 className="container__header__title--text">Hamburguesas Don Chucuni</h3>
          </div>


          {/*Aca se cambiara el contenido de abajo a la vez que se cambie el link*/}

                   
          

          {/* CART DE LA CABECERA */}
          <div className="container__header__cartDiv">

            <Cart cart={cart} setCart={setCart} />
          </div>
        </section>

        <div className="container__header__cartDiv--opciones">
          <h4>Opciones</h4>
          <br></br>
          <Link to={"/ingresar"}>
            <label onClick={() => closeDiv()}>Ingresar</label>
          </Link>

          <Link to={"/registrarse"}>
            <label onClick={() => closeDiv()}>Registrarse</label>
          </Link>
          <button
            className="container__content__burgers--btnClose"
            type="button"
            onClick={() => closeDiv()} 
          >X</button>
        </div>
        
          
        {/* SECTION CONTENEDOR PRINCIPAL */}
        <section className="container__content">

          <div className="container__content__title">
            <h1>Las mejores hamburguesas de Ibague</h1>
          </div>

          <div className="container__content__listBurgers">
            {burgers.map((burger) => (
              <Burger
                key={burger.id}
                burger={burger}
                cart={cart}
                setCart={setCart}
                burgers={burgers}
              />
            ))}
          </div>
          
        </section>
          
        <div class="flames">
          <div class="flame"></div>
          <div class="flame"></div>
          <div class="flame"></div>
          <div class="flame"></div>
        </div>
        <div class="logs"></div>
        

        {/* SECTION FOOTER */}
        <section className="container__footer">
          <p>HAMBURGUESAS DON CHUCUNI - Todos los derechos reservados</p>
        </section>
        
      </section>


      
    </Fragment>

    
    
    </BrowserRouter>
  );
}

export default App;
