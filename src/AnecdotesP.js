import './AnecdotesP.css';
import Menu from './components/Menu';
import Anecdotes from './components/Anecdotes';
import NavBar from './components/NavBar';
import CommentsPopup from './components/CommentsPopup';
import {useState} from "react";
import {getUser} from "./helpers/UserData";


function AnecdotesP() {

  const [commenstPopup, setCommentsPopup] = useState(false);

  const [idComment,setIdComment] = useState();

  const [user, setUser] = useState({
    name: getUser().name,
    photo: getUser().picture
  });

  const [anecdotes, setAnecdotes] = useState([
      {
        id:1,
        anecdote:"Me acabo de hechar un pedo",
        fire: 4,
        user:"Karla flores",
        profilePicture:"/profile.png",
        comments: [
          {comment: "jaja yo tambien",
          user:"Christian Silva Vazquez",
          profilePicture:"/profile.png"
          }, 
          {comment:"santo el que lo lea",
          user:"Manuel Hurtado Rojas",
          profilePicture:"/profile.png"  
          }
        ]
      },
      {
        id:2,
        anecdote:"El otro día le imperniabilise el techo a mi vieja",
        fire: 10,
        user:"Oscar Arreola Virrueta",
        profilePicture:"/profile.png",
        comments: [
          {comment:"0: cielos que hombre",
          user:"Angel Sanchez",
          profilePicture:"/profile.png"
          }, 
          {comment:"Gracias mi amor",
          user:"Brayan de la Rosa",
          profilePicture:"/profile.png"
          }
        ]
      },
      {
        id:3,
        anecdote:"Un día me enferme del estomago, me acababa de levantar y pensé que estaba solo"
        +" así que me disparé un super pedo tronador, y de pronto recordé que estaba de visita"
        +" en casa de una tía, le eche el pedo a mi primo en toda la cara",
        fire: 16,
        user:"jose Zamora Magadan",
        profilePicture:"/profile.png",
        comments:[
          {comment:"te pasaste de verga primo",
          user:"Bryan Rodriguez Sanchez",
          profilePicture:"/profile.png"
          },
          {comment:"Jajaja a mi me pasó algo parecido con mi suegra xD",
          user:"Patrick Sanchez Magaña",
          profilePicture:"/profile.png"
          }
        ]
      }
    ]);

  const addAnecdote = (anecdote) =>{
    setAnecdotes([anecdote, ...anecdotes]);
  }
  
  const updateCommentsPopup = (comments) =>{
    setCommentsPopup(!comments);
  }

  const updateIdComment = (id) =>{
    setIdComment(id);
  }

  return (
    <div>
      <NavBar/>
      <div className="App">
        <Menu/>

        <Anecdotes anecdotes={anecdotes} updateCommentsPopup={updateCommentsPopup} 
        commentsPopup={commenstPopup} updateIdComment={updateIdComment} 
        addAnecdote={addAnecdote} user={user} newId={anecdotes.length+1} />
      </div>
      <CommentsPopup commentsPopup={commenstPopup} updateCommentsPopup={updateCommentsPopup}
      idComment={idComment} anecdotes={anecdotes} />
    </div>
  );
}

export default AnecdotesP;
