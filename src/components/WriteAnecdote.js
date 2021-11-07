import React, { useState } from 'react';
import "./WriteAnecdote.css";
import nextId from 'react-id-generator';

const WriteAnecdote = ({addAnecdote, user}) => {

    const [text, setText] = useState("");

    const setAnecdote = (e) =>{
        e.preventDefault();
        setText(e.target.value);
    }

        const post = (e) => {
            e.preventDefault();
            addAnecdote({
                id: nextId(),
                anecdote: text,
                fire: 0,
                user: user.name,
                profilePicture: user.photo,
                comments: []
              });

            const requestOptions = {
                headers:{
                'Access-Control-Allow-Origin' : '*',
                'Acept': 'application/json',
                'Content-Type': 'application/json'
                },
                mode: 'no-cors',
                method: 'POST',
                body: JSON.stringify({
                    id: nextId(),
                    anecdote: text,
                    fire: 0,
                    user: user.name,
                    profilePicture: user.photo,
                    comments: []
                  })
            };

            console.log(requestOptions)

            fetch("http://localhost:5000/new-anecdote",requestOptions);
            setText("");
        }

        return (
            <div className="write-container">
                <textarea cols="70" className="border" style={{padding:"20px"}} 
                value={text} onChange={setAnecdote} />
                <button className="post-button" onClick={post}> Publicar </button>
            </div>
        )
    }
export default WriteAnecdote;