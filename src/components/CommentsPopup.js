import React, { Component } from 'react';
import "./CommentsPopup.css";
import Comments from "./Comments";

export default class CommentsPopup extends Component {

    constructor(props){
        super(props);
    }

    render() {

        const closeCommentsPopup = (e) => {
            e.preventDefault();
            this.props.updateCommentsPopup(this.props.commentsPopup);
        }

        return this.props.commentsPopup?(
            <div className="popup">
                <div className="popup-inner">
                    <button className="button" onClick={closeCommentsPopup}>cerrar</button>
                    <Comments comments={
                        this.props.anecdotes.filter(anec => 
                        anec.id===this.props.idComment)[0].comments} />
                    <input className="input"     placeholder="Escribe un comentario" />
                    <button className="comment-button">Publicar</button>
                </div>
            </div>
        ) : ""
    }
}
