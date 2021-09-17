import React, { Component } from 'react';
import "./CommentsPopup.css";
import Comments from "./Comments";

export default class CommentsPopup extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return this.props.commentsPopup?(
            <div className="popup">
                <div className="popup-inner">
                    <button className="button" onClick={(e)=>{
                        e.preventDefault();
                        this.props.updateCommentsPopup(this.props.commentsPopup);
                    }}>cerrar</button>
                    <Comments comments={
                        this.props.anecdotes.filter(anec => 
                        anec.id===this.props.idComment)[0].comments} />

                </div>
            </div>
        ) : ""
    }
}