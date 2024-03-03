import React from 'react';

const Titulo = ({usuario = 'usuario', color='gray'}) => {
    return (<h1 className="Titulo" style={{color:color}}>Hola {usuario}!</h1>);
}

export {Titulo};