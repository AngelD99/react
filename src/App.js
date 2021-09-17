
import './App.css';
import Menu from './components/Menu';
import Anecdotes from './components/Anecdotes';
import NavBar from './components/NavBar';
import CommentsPopup from './components/CommentsPopup';
import {useState} from "react";

function App() {

  const [commenstPopup, setCommentsPopup] = useState(false);

  const [idComment,setIdComment] = useState();

  const [anecdotes, setAnecdotes] = useState([
      {
        id:1,
        anecdote:"Me acabo de hechar un pedo",
        comments: ["jaja yo tambien", "puto el que lo lea"]
      },
      {
        id:2,
        anecdote:"El otro día le imperniabilise el techo a mi vieja",
        comments: ["0: cielos que hombre", "Gracias mi amor"]
      },
      {
        id:3,
        anecdote:"Un día me enferme del estomago, me acababa de levantar y pensé que estaba solo"
        +" así que me disparé un super pedo tronador, y de pronto recordé que estaba de visita"
        +" en casa de una tía, le eche el pedo a mi primo en toda la cara",
        comments:["te pasaste de verga primo","Jajaja a mi me pasó algo parecido con mi suegra xD"]
      }
    ]);

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
        commentsPopup={commenstPopup} updateIdComment={updateIdComment} />
      </div>
      <CommentsPopup commentsPopup={commenstPopup} updateCommentsPopup={updateCommentsPopup}
      idComment={idComment} anecdotes={anecdotes} />
    </div>
  );
}

export default App;
