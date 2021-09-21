import React, { Component } from 'react';
import "./WriteAnecdote.css";

export default class WriteAnecdote extends Component {

    constructor(props){
        super(props);
        this.state={text:""};
    }

    render() {
        return (
            <div className="write-container">
                <textarea cols="70" className="border" style={{padding:"20px"}} 
                value={this.state.text} onChange={(e)=>{
                    e.preventDefault();
                    this.setState({text:e.target.value});
                }} />
                <button className="post-button" onClick={(e)=>{
                    e.preventDefault();
                    this.props.addAnecdote({
                        id:this.props.newId,
                        anecdote: this.state.text,
                        fire: 0,
                        user:this.props.user.name,
                        profilePicture:this.props.user.photo,
                        comments: []
                      });
                    this.setState({text:""});
                }}> Publicar </button>
            </div>
        )
    }
}
