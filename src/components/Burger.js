import React from "react";

// Entre los corchetes extraigo la prop burger que ya
// especifiqué en el componente padre que es App, las props
// siempre van de los padres a los hijos y extraigo también desde App
// la prop de cart y la función modificadora de ese estado, osea setCart
// Por último, extraigo la prop burgers con toda la info cruda de
// cada burger, osea del objeto entero, esto lo voy a utilizar en el
// botón de agregar al carrito
const Burger = ({ burger, cart, setCart, burgers }) => {
  // Agarro todos los valores del objeto burger y los
  // guardo en una constante para no tener que estar
  // escribiendo burger.nombre o burger.precio,
  // directamente escribo nombre o precio y listo
  const { nombre, precio, id } = burger;

  // Funcion para agregar burger al carrito, le paso como parametro
  // el id así sabemos qué burger estamos comprando
  const addBurger = (id) => {
    // Traigo toda la info del objeto, además del id que es lo más
    // importante, para traer esa información utilizo filter lo cual
    // nos creará un array donde filter va iterando en cada uno de
    // los registros
    // Especificamos que el filter busque en el array los id como
    // el que estamos pasandole cuando apretamos el botón una vez que
    // lo encuentre va a crear un array nuevo con ese producto
    const burger = burgers.filter((burger) => burger.id === id);
    // Agrego la función setCart para modificar el estado del carrito
    // y además la modificación implica que agreguemos la burger al
    // cart. Como el useState es un Array, en la función setCart
    // utilizo corchetes, y mediante un Rest Operator lo que hago es
    // "copiar" el estado actual del carrito, esto es para que cada vez
    // que yo hago click en el botón, se vayan agregando más estados a
    // ese estado que ya está, es decir de esta forma evitamos que cada
    // vez que hacemos click en el botón se reemplace la burger en lugar
    // de agregarse a la que ya está agregada. Como segundo parámetro al
    // Rest Operator, le vamos a agregar la burger que estamos agregando
    setCart([...cart, ...burger]);
    console.log(cart.length);
  };


//   Funcion para eliminar burgers del cart
const delBurger = (id) => {
    // Mediante filer filtramos todos las burgers con ids diferentes
    // al que le estamos pasando en el onclick. Utilizo el cart para 
    // hacer el filter porque yo quiero eliminar la o las burgers del 
    // componente cart, pero para eso necesito que la prop de cart 
    // esté también en el componente del cart sino no la va a reconocer 
const burgers = cart.filter(burger => burger.id !== id)
    // Una vez que filter hizo su trabajo, es decir filtró las ids, lo que hago
    // es llamar a la función setCart para que modifique el estado 
    // y deje solo las burgers que están por fuera del filtrado que hicimos 
    // recién 
    setCart(burgers)
}

  return (
    // En una lista voy a mostrar el listado de mis
    // burgers
    <ul>
      <li>{nombre}</li>
      <li>${precio}</li>
      {/* Hago un ternario para ver si en el componente donde se 
        está ejecutando el componente Burger está la prop burgers
        en el caso de que esté se mostrará el botón agregar, si la prop
        burgers no está en el componente, se mostrará el botón eliminar */}
      {burgers ? (
        
          /* Agrego el botón de agregar al carrito, con el evento
            onClick, dentro del onClick coloco una arrow function 
            para que espere a que el click del usuario suceda. Y 
            llamo a la función de agregar la burger al carrito, con
            eso solamente ya tendríamos el botón funcionando con el 
            evento onClick, le especificamos en la llamada a la 
            funcion que traiga el parámetro del id para que se
            imprima también. */
        (
          <button type="button" onClick={() => addBurger(id)}>
            Agregar al carrito
          </button>
        )
      ) : (
        //   Lo mismo que hice con el botón de agregar lo hago acá con el de eliminar, especifico 
        //   como parámetro que tenga en cuenta al id de la burger a eliminar 
        <button type="button" onClick={() => delBurger(id)}>Eliminar</button>
      )}
    </ul>
  );
};

export default Burger;
