import React from 'react';
import {Titulo} from './Titulo';
import styled from 'styled-components';

const Usuario = () =>{
    const pais = 'Uruguay';
    const amigos = ['Prueba', 'Prueba1', 'Prueba2'];
    return(
      <div>
        <Titulo usuario="Carlos" color="red"/>
        <Titulo usuario="Manuel" color="yellow"/>
        <Parrafo>¿Cómo estas?</Parrafo>
        {pais && <Parrafo>Tu eres de: {pais}</Parrafo>}
        <ul>
          {amigos.map( (amigo, index) => <li key={index}>{amigo}</li> )}
        </ul>
      </div>
    );
  };
const Parrafo =styled.p`
  margin: 20px 0;
`;
  export default Usuario;