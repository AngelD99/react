import React, { Component } from 'react';
import "./Comments.css";

export default class Comments extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="comments-container">
                <p align="center"> 
                <div>
                    {this.props.comments.map(com => {
                        return (
                            <div className="comments-c">
                                <img src={com.profilePicture} width="100px" height="100px" 
                                style={{marginTop:"15px"}} />
                                <div className="comment">
                                    <p style={{fontWeight:"bolder", marginLeft:"10px",textAlign:"justify"}}
                                    >{com.user}</p>
                                    <div className="separate">
                                        <p style={{marginTop:"0px", float:"left", marginLeft:"10px"}}>
                                            {com.comment}
                                        </p>
                                    </div>
                                </div>
                            </div>)
                    })}
                </div>
                </p>
            </div>
        )
    }
}
