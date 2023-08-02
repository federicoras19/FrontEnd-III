import React from 'react'
import Producto from './Producto';

/* export const Productos = () => {
return (
    <div>Productos</div>
)
} */


function Productos() {
    return (
        <div className='inicio'>
            <Producto nombre='Salamin Picadelly' precio='$850'/>
            <Producto nombre='Morsilla' precio='$400'/>
            <Producto nombre='Chorizo Parrillero' precio='$5000'/>
        </div>
    )
}
export default Productos; 
