import React, { Component } from 'react';
import "./HolaMundo.css";

export default class HolaMundo extends Component {

    constructor(props){
        super(props);
        this.state={
            nombre: ""
        };
    }

    render() {
        return (
            <div className="component">
                <h1> Escribe tu nombre </h1>
                <input value={this.state.nombre} onChange={(e) => {
                    e.preventDefault();
                    this.setState({nombre: e.target.value});
                }} placeholder="Nombre..."/>
                <button onClick={(e)=>{
                    e.preventDefault();
                    alert("Hola "+this.state.nombre);
                }} >Aprimeme por fa</button>
            </div>
        )
    }
}
