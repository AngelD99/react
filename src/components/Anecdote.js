import "./Anecdote.css";
import React, { Component } from 'react';
import {BiCommentDetail} from "react-icons/bi";
import {ImFire} from "react-icons/im";

export default class Anecdote extends Component {

    render() {
        return (
            <div className="anecdote-container">
                <div className="comments">
                    <ImFire size="40px" />
                    <blockquote/><blockquote/>
                    <BiCommentDetail onClick={(e)=>{
                        e.preventDefault();
                        this.props.updateCommentsPopup(this.props.commentsPopup);
                        this.props.updateIdComment(this.props.id);
                    }} size="40px"/>
                </div>
                
                <div className="anecdote">
                    {this.props.anecdote}
                </div>
            </div>
        )
    }
}
