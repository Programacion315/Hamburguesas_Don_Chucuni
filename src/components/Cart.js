import React from "react";

// Importo el componente de Burger para imprimirlo en el cart una vez que
// se itera con map sobre el array del carrito
import Burger from "./Burger";

// Extraigo la prop del componente padre App, y traigo el state del cart, además 
// también extraigo la función setCart que modifica el estado del cart, esto 
// lo hago para que al utilizar el botón delete no marque error de undefined, ya que 
// los componentes hijos deben pasarse también las props heredadas del padre para no 
// generar algunos errores que podríamos solucionar con por ejemplo Redux, pero no lo 
// vamos a utilizar en este caso 
const Cart = ({ cart, setCart }) => (
  <div>
    <h2>Cart</h2>

    {/* Utilizo un ternario para la visualización de las
        burgers en el componente del carrito  */}

    {cart.length === 0 ? (
      <p>¿Todavía no elegiste?</p>
    ) : (
      cart.map((burger) => <Burger key={burger.id} burger={burger} cart={cart} setCart={setCart} />)
    )}
  </div>
);

export default Cart;
