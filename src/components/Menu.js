import React, { Component } from 'react'
import "./Menu.css";

export default class Menu extends Component {
    render() {
        return (
            <div className="menu">
                <div>
                    <img src="/profile.png" width="200px" height="200px" />
                    <h3>Mi perfil</h3>
                    <h3>Mis anecdotas</h3>
                    <h3>Mis anecdotas fire</h3>
                </div>
            </div>
        )
    }
}
