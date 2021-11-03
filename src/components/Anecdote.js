import "./Anecdote.css";
import React, { Component } from 'react';
import {BiCommentDetail} from "react-icons/bi";
import {ImFire} from "react-icons/im";

export default class Anecdote extends Component {

    render() {

        const showCommentsPopup = (e) => {
            e.preventDefault();
            this.props.updateCommentsPopup(this.props.commentsPopup);
            this.props.updateIdComment(this.props.id);
        }

        return (
            <div className="anecdote-container">
                <div className="comments">
                    <ImFire className="fire" />
                    {this.props.fire}
                    <blockquote/><blockquote/>
                    <BiCommentDetail onClick={showCommentsPopup} size="40px"/>
                    {this.props.comments.length}
                </div>
                
                <div className="anecdote">
                    <div className="user" >
                        <img style={{marginTop:"10px"}} src={this.props.userPicture} width="30px" height="30px" />
                        <p style={{marginLeft:"10px"}}>{this.props.userName}</p>
                    </div>
                    <br/><br/><br/><br/>
                    <p style={{marginTop:"0px"}}>{this.props.anecdote}</p>
                </div>
            </div>
        )
    }
}
