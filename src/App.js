import React, { Fragment, useState } from "react";

// Importo el componente Burger
import Burger from "./components/Burger";

// Importo el componente Cart para el carrito 
import Cart from "./components/Cart";

function App() {

  // Hacemos dos states, uno para el listado de burgers y otro
  // para el cart de compras 
  // El state siempre tiene dos parámetros, uno es
  // el estado puro y el otro es la función que cambiará
  // ese estado, el estado no puede cambiarse directamente

  // Listado de burgers en el State
  const [burgers, setBurgers] = useState([
    { id: 1, nombre: "Hamburguesa completa", precio: 250 },
    { id: 2, nombre: "Hamburguesa con cheddar", precio: 180 },
    { id: 3, nombre: "Hamburguesa con jamón y queso", precio: 150 },
    { id: 4, nombre: "Hamburguesa con bacon", precio: 200 },
    { id: 5, nombre: "Hamburguesa de pollo completa", precio: 240 },
  ]);

  // Cart de compras en el state, dejo vacío el useState ya que en 
  // dicho array se irán agregando burgers, por ende debe estar vacío en 
  // un principio 
  const [cart, setCart] = useState([])

  return (
    <Fragment>
      <h1>Nuestras burgers</h1>
      {/* Utilizo el map para recorrer y retornar los valores
      del objeto burgers, la forma de hacerlo es simple 
      pongo burgers.map y voy a acceder a cada burger 
      especificando el nombre, en este caso burger */}
      {burgers.map((burger) => (
        // Creo otro componente, llamado Burger, para 
        // imprimir ahí el listado de las burgers y no 
        // tener tanto código en este componente App
        //------------------------------------------
        //Le especifico la prop burger haciendo referencia
        //a cada burger, las cuales están
        //en el objeto y lo más importante, le paso como prop
        //el id en key, para que cada burger sea única
        <Burger 
        key={burger.id}
        burger={burger} 
        // Agrego la prop del cart, para que se puedan agregar las 
        // burgers al carrito
        cart={cart}
        setCart={setCart}
        // Agrego la prop de burgers directamente, del estado burgers esto 
        // es para poder obtener todos los datos del objeto cuando hacemos 
        // la "compra" de la burger 
        burgers={burgers}
        />
      ))}

        {/* Incorporo el componente Cart para el carrito */}
        <Cart 
        //  Le paso las props del cart state al componente Cart para que 
        //  pueda imprimir los objetos del state cart o carrito
        cart={cart}
        // Para que no tire error de undefined cuando hagamos uso del botón delete
        // necesitamos que el componente cart extraiga la función prop del setCart
        setCart={setCart}
        />


    </Fragment>
  );
}

export default App;
