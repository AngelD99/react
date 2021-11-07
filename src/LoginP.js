import React, { useState } from 'react';
import './login.css';
import logo from './logo.png';
import FormLogin  from './components/FormLogin';
import NewUserForm from './components/NewUserForm';

const LoginP = () => {

    const [newUser,setNewUser] = useState(true);

    return (
      <div className="App">
        <header className="App-header"> 
        <img src={logo} className="App-logo" alt="logo" />
        </header>
        {newUser? <FormLogin newUser={newUser} setNewUser={setNewUser} /> : 
        <NewUserForm newUser={newUser} setNewUser={setNewUser} />}
        
        <div class="burbujas">
            <div class="burbuja"></div>
            <div class="burbuja"></div>
            <div class="burbuja"></div>
            <div class="burbuja"></div>
            <div class="burbuja"></div>
            <div class="burbuja"></div>
            <div class="burbuja"></div>
            <div class="burbuja"></div>
            <div class="burbuja"></div>
            <div class="burbuja"></div>
        </div>
      </div>
    );
  }

export default LoginP;