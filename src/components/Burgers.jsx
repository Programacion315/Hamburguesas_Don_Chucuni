import React, {Component, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/styles.css";
import Burger from "./Burger";

import Cart from "./Cart";



// IMPORTO LAS IMAGENES
import Salteña from "../images/Salteña.png";
import Porteña from "../images/Porteña.png";
import Chicken from "../images/Chicken.png";
import Criolla from "../images/Criolla.png";
import Patagonia from "../images/patagonia.png";

const [burgers, setBurgers] = useState([
    { id: 5, image: Salteña, nombre: "Ambala", precio: 10 },
    { id: 2, image: Porteña, nombre: "Estacion", precio: 12 },
    { id: 3, image: Chicken, nombre: "Multi", precio: 15 },
    { id: 4, image: Criolla, nombre: "Carrito", precio: 20 },
    { id: 1, image: Patagonia, nombre: "Unibague", precio: 20 },
  ]);

const [cart, setCart] = useState([]);


class Burgers extends Component{

    

    render(){

        return(    

               
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

        );

    }
}

export default Burgers;
