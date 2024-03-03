import React, {useState} from 'react';
import styles from './FormularioInicioSession.module.css';
import Boton from '../elementos/Boton';
const FormularioInicioSession = (props) => {
    const [usuario, cambiarUsuario] = useState('');
    const [password, cambiarPassword] = useState('');
    const onChange = (evento) => {
        if(evento.target.name === 'usuario')
            cambiarUsuario(evento.target.value);
        else if(evento.target.name ==='password')
            cambiarPassword(evento.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(usuario === 'Nahuel' && password ==='123')
        {
            props.cambiarEstadoSession(true);
        }
        else
        {
            alert('Datos incorrectos');
            cambiarUsuario('');
            cambiarPassword('');
        }
            
    } 

    return (  
        <form className={styles.formulario}action="" onSubmit={onSubmit}>
            <h1>No has iniciado sesion</h1>
            <div>
                <label htmlFor="usuario" className={styles.label}>Usuario</label>
                <input 
                    type="text" 
                    name='usuario' 
                    id='usuario'
                    value={usuario}
                    onChange={onChange}
                    className={styles.input}
                />
            </div>
            <div>
                <label htmlFor="password" className={styles.label}>Contraseña</label>
                <input 
                    type="password" 
                    name='password' 
                    id='password'
                    value={password}
                    onChange={onChange}
                    className={styles.input}
                />
            </div>
            <div>
                <Boton largo type='submit'>Iniciar sesion</Boton>
            </div>
            
        </form>
    );
}
 
export default FormularioInicioSession;