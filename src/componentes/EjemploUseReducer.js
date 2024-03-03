import React, {useReducer} from 'react';
import Boton from './../elementos/Boton';

//Accion
//{tipo: `INCREMENTAR`}

//Es el estado inicial del reducer
const contadorInicial = {contador:0};

//Reducer
const reducer = (estado, accion)=>{
    switch(accion.tipo){
        case 'INCREMENTAR':
            return{contador: estado.contador +1};
        case 'DISMINUIR':
            return{contador: estado.contador -1};
        case 'REINICIAR':
            return{contador:0};
        default:
            return estado;
    }
}

const EjemploUseReducer = () =>{
    const [estado, dispatch] = useReducer(reducer,contadorInicial);
    return(
        <div>
            <h1>Contador: {estado.contador}</h1>
            <Boton negro marginRight onClick={()=>dispatch({tipo:'INCREMENTAR'})} >Incrementar</Boton>
            <Boton marginRight negro onClick={()=>dispatch({tipo:'DISMINUIR'})}>Decrementear</Boton>
            <Boton marginTop negro onClick={()=>dispatch({tipo:'REINICIAR'})}>Reiniciar</Boton>
        </div>
    )
}
export default EjemploUseReducer;