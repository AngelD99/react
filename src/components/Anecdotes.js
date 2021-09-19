import React, { Component} from 'react'
import Anecdote from './Anecdote';
import WriteAnecdote from './WriteAnecdote';
import "./Anecdotes.css";

export default class Anecdotes extends Component {

    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <div className="anecdotes">
                <WriteAnecdote addAnecdote={this.props.addAnecdote} newId={this.props.newId} />
                {this.props.anecdotes.map(anec => {
                    return (<Anecdote anecdote={anec.anecdote} comments={anec.comments} 
                    updateCommentsPopup={this.props.updateCommentsPopup} fire={anec.fire}
                    commentsPopup={this.props.commentsPopup} id={anec.id} 
                    userPicture={anec.profilePicture} userName={anec.user}
                    updateIdComment={this.props.updateIdComment}/> );
                })
                }
               
            </div>
        )
    }
}
