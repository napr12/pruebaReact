import React, { useState, useEffect } from 'react';
import styles from'./ContadorFuncional.module.css';
import Boton from '../elementos/Boton';
const ContadorFuncional = ({cantidadAIncrementar,cantidadADisminuir}) => {
    const [contador,cambiarContador] = useState(0);
    const incrementar = (cantidad) => cambiarContador(contador+cantidad);
    const decrementar = (cantidad) => cambiarContador(contador-cantidad);
    //componentDidMount y comoponenteDidUpdate
    //El hook se carga con cada ciclo de renderizado.
    useEffect(()=>{
        console.log('El componente se renderizo');
    });
    //componentDidMount
    //Se ejecuta solamente al primer renderizado
    useEffect(()=>{
        console.log("El componente se cargo por primera vez");
        //Ejemplo al conectar a una API
    },[])

    //Se ejecuta cuando cambia el estado de 
    //la dependencia que le pasamo, en este caso 'contador'
    useEffect(()=>{
        console.log("El estado del contador cambio");
    },[contador])

    useEffect(()=>{
        //codigo del efecto
        return(()=>{
            //ejemplo al desconectar una API.
            console.log('Adios componenete');
        })
    },[])


    return ( 
        <div>
            <h1>Contador: {contador}</h1>
            <Boton negro marginRight  onClick={()=>incrementar(cantidadAIncrementar)}>Incrementar</Boton>
            <Boton marginTop negro onClick={()=>decrementar(cantidadADisminuir)}>Decrementear</Boton>
        </div>
    );
}
 
export {ContadorFuncional};