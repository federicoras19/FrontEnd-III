import { Fragment } from "react";

function Producto(props){
    return (
        <div className="card">
            <div className='producto'>{props.nombre}</div>
            <div className='precio'>{props.precio}</div>
        </div>
        )
}

export default Producto;