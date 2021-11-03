import React, { Component } from 'react';
import './login.css';
import logo from './logo.png';
import FormLogin  from './components/FormLogin';

class LoginP extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header"> 
        <img src={logo} className="App-logo" alt="logo" />
        </header>
        <FormLogin />
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
}
export default LoginP;