import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import Usuario from './componentes/Usuario';
import FormularioInicioSession from './componentes/FormularioInicioSession';
import {ContadorFuncional} from './componentes/ContadorFuncional';
import EjemploUseReducer from './componentes/EjemploUseReducer';
//import ContadorClass from './componentes/ContadorClass';
import './index.css';
import Boton from './elementos/Boton';
import Blog from './componentes/Blog';
const App=() => {
  const [session, cambiarEstadoSession] = useState(true);

  return(
    <div className='contenedor'> 
      {session===true ? 
        <div>
          <Usuario/>
          <Blog/>
          <EjemploUseReducer />
          {/*<ContadorFuncional cantidadAIncrementar={10} cantidadADisminuir={2}/>*/}
          {/*<ContadorClass cantidadAIncrementar={10} cantidadADisminuir={2}/>*/}
          <Boton marginTop largo onClick={()=>cambiarEstadoSession(false)}>Cerrar session</Boton>
        </div>
      :
      <div>
        <FormularioInicioSession cambiarEstadoSession={cambiarEstadoSession}/>
        {/*<button onClick={()=>cambiarEstadoSession(true)}>Iniciar session</button>*/}
      </div> } 
    </div>
    );
  }

//En JSX no se pueden colocar etiquetas por separados, se permite una sola con sus correspondientes hijos, se puede crear un contenedor div o simplemente crear el contenedor vacio.

//const verficarSession = (session) =>{
  //if(session==true)
    //return JSX;
  //else 
    //return <h1>No has iniciado session.</h1>
//}

const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(verficarSession(session));
root.render(<App/>);
