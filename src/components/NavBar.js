import React, { Component } from 'react';
import Login from './Login';
import "./NavBar.css";

export default class NavBar extends Component {
    render() {
        return (
            <div className="NavBar">
                <h3>Logo</h3>
                <blockquote/>
                <blockquote/>
                <blockquote/>
                <blockquote/>
                <blockquote/>
                <blockquote/>
                <h2>Anecdotario perron</h2>
                <blockquote/>
                <blockquote/>
                <blockquote/>
                <blockquote/>
                <blockquote/>
                <Login />
            </div>
        )
    }
}
