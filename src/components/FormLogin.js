import React from 'react';
import Login from './Login.js';
import "./FormLogin.css";

const FormLogin = () => {
    return (
        <div className="container">
            <h3>Ingresa tu nombre de usuario </h3>
            <input placeholder="Nombre Usuario" />
            <h3>Ingresa tu contraseña</h3>
            <input placeholder="Contraseña" /><br/>
            <button className="boton1">Ingresar</button>
            <Login />
        </div>
    )
}

export default FormLogin;