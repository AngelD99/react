import React, {useState} from 'react';
import Login from './Login.js';
import "./FormLogin.css";

const FormLogin = ({newUser, setNewUser}) => {

    const [user,setUser] = useState("");

    const [password, setPassword] = useState("");

    const setTextUser = (e) =>{
        e.preventDefault();
        setUser(e.target.value);
    }

    const crearCuenta = (e) => {
        e.preventDefault();
        setNewUser(!newUser);
    }

    const setTextPassword = (e) =>{
        e.preventDefault();
        setPassword(e.target.value);
    }


    return (
        <div className="container">
            <button className="boton1" onClick={crearCuenta}>Crear cuenta</button>
            <h3>Ingresa tu nombre de usuario </h3>
            <input value={user} onChange={setTextUser} placeholder="Nombre Usuario" />
            <h3>Ingresa tu contraseña</h3>
            <input value={password} onChange={setTextPassword} type="password" placeholder="Contraseña" /><br/>
            <button className="boton1" >Ingresar</button>
            <Login />
        </div>
    )
}

export default FormLogin;