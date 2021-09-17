import React, { Component} from 'react'
import Anecdote from './Anecdote';
import "./Anecdotes.css";

export default class Anecdotes extends Component {

    constructor(props){
        super(props);
        
    }
    
    render() {
        return (
            <div className="anecdotes">
                {this.props.anecdotes.map(anec => {
                    return (<Anecdote anecdote={anec.anecdote} comments={anec.comments} 
                    updateCommentsPopup={this.props.updateCommentsPopup} 
                    commentsPopup={this.props.commentsPopup} id={anec.id}
                    updateIdComment={this.props.updateIdComment}/> );
                })
                }
               
            </div>
        )
    }
}
