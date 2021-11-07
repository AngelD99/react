import React from 'react';
import "./FormLogin.css";

const NewUserForm = ({newUser, setNewUser}) => {

    const iniciarSesion = (e) => {
        e.preventDefault();
        setNewUser(!newUser);
    }

    return (
        <div className="container2">
            <button className="boton1" onClick={iniciarSesion}>Iniciar sesion</button>
            <h3>Ingresa tu correo electronico</h3>
            <input placeholder="Correo electronico" />
            <h3>Crea tu nombre de usuario</h3>
            <input placeholder="Nombre de usuario" />
            <h3>Crea tu contraseña</h3>
            <input type="password" placeholder="Contraseña" />
            <h3>Confirma tu contraseña</h3>
            <input type="password" placeholder="Contraseña" /><br/>
            <button className="boton1" >Crear cuenta</button>
        </div>
    )
}

export default NewUserForm;
