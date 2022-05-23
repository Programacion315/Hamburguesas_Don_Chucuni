import React, {Component} from "react";
import "../styles/styles.css";

const Administrador = () =>{
    
    
        const [usuarios, setUsuarios] = React.useState([]);

        const[pedidos, setPedidos] = React.useState([]);

        const[hamburguesas, setHamburguesas] = React.useState([])

        React.useEffect(() =>{ //Se ejecuta despues de que se pinten los elementos

            obtenerDatos();
            obtenerDatosPedidos();
            obtenerDatosHamburguesas();
        }, [])

        const obtenerDatos = async() =>{

           const data = await fetch('http://localhost:3000/usuarios');

           const users = await data.json()

           //console.log(users)
           setUsuarios(users) //Aca se encuentran todos nuestros usuarios.
        }

        const obtenerDatosPedidos = async() =>{

            const data = await fetch('http://localhost:3000/pedidos');
 
            const pedido = await data.json()
 
            //console.log(users)
            setPedidos(pedido) //Aca se encuentran todos nuestros usuarios.
         }

         const obtenerDatosHamburguesas = async() =>{

            const data = await fetch('http://localhost:3000/hamburguesas');
 
            const hamburguesas = await data.json()
 
            //console.log(users)
            setHamburguesas(hamburguesas) //Aca se encuentran todos nuestros usuarios.
         }

        return (

            

            <div className="containerPrincipal">
                <h1 className="administrador">Administrador</h1>
                <br />
                
                <div className="flex">
                
                <div className="usuarios">
                <h2 className="titulosa">Usuarios</h2>
                <div className="table-scroll">
                <table className="table table-bordered table-striped">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Contraseña</th>
                        <th>Direccion</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            usuarios.map(item =>(
                                <tr key={item.id}><td>{item.id}</td><td>{item.nombre}</td><td>{item.contraseña}</td><td>{item.direccion}</td></tr>
                            ))
                        }
                    </tbody>
                </table>
                </div>
                </div>

                

                


                <div className="usuarios dos ">
                <h2 className="titulosa">Pedidos</h2>
                <div className="table-scroll">
                <table className="table table-bordered table-striped ">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Hamburguesa</th>
                        <th>Usuario</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            pedidos.map(item =>(
                                <tr key={item.id}><td>{item.id}</td><td>{item.idHamburguesa}</td><td>{item.idUsuario}</td></tr>
                            ))
                        }
                    </tbody>
                </table>
                </div>
                </div>
                </div>
                
                <br />
                <h2 className="titulosa">Hamburguesas</h2>
                <div className="table-scroll reducir">
                <table className="table table-bordered table-striped ">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Tipo</th>
                        <th>Precio</th>
                        <th>Opciones</th>

                    </tr>
                    </thead>
                    <tbody>
                        {
                            hamburguesas.map(item =>(
                                <tr key={item.id}><td>{item.id}</td><td>{item.tipo}</td><td>{item.precio}</td><td>x - u</td></tr>
                            ))
                        }
                    </tbody>
                </table>
                
                </div>
                <br />
                <div className="opciones">
                    <button type="button" class="btn btn-success">Agregar</button>
                </div>
            </div>


           

            
    
        )
    }
    



export default Administrador;