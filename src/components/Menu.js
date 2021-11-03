import React, { Component } from 'react'
import "./Menu.css";
import { getUser } from '../helpers/UserData';


export default class Menu extends Component {
    render() {

        return (
            <div className="menu">
                <div>
                    <img src={getUser().picture} className="imgRedonda" />
                    <h3>{getUser().name}</h3>
                    <h3>Mi perfil</h3>
                    <h3>Mis anecdotas</h3>
                    <h3>Mis anecdotas fire</h3>
                </div>
            </div>
        )
    }
}
