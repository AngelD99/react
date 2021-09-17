import React, { Component } from 'react';

export default class Comments extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="comments-container">
                
                <div className="comment">
                    {this.props.comments.map(com => {
                        return (
                            <div>
                                <img src="/profile.png" width="100px" height="100px" />
                                <p>{com}</p>
                            </div>)
                    })}
                </div>
            </div>
        )
    }
}
