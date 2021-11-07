import React, { useEffect } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import  firebase from "firebase/app";
import 'firebase/auth';
import firebaseConfig from '../firebase';
import './Login.css';
import { setUserValues } from '../helpers/UserData';
import { withRouter, useHistory } from 'react-router-dom';
const firebaseApp = firebase.initializeApp(firebaseConfig);

const Login = ({user,signOut,signInWithGoogle}) =>{
  
      let history = useHistory();

      useEffect(() => {
        if(user){
          setUserValues(user.displayName, user.photoURL);
          history.push("/Anecdotes");
        }
      },[user]);

      const salir = () =>{
        signOut();
        history.push("/")
      }
      
      return (
        <React.Fragment>
        <div className="loginbutton">
            {
              user
                ? <button className="boton2" onClick={salir}>Cerrar Sesión</button>
                : <button className="boton1" onClick={signInWithGoogle}>Ingresar con Google</button>
            }
        </div>
        </React.Fragment>
      );
    }

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withRouter(withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(Login));