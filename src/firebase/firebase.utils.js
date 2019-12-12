import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyC6rPluyFFFaxXH3hrvIG5gMwpf9AO45ZE",
    authDomain: "crown-db-319ac.firebaseapp.com",
    databaseURL: "https://crown-db-319ac.firebaseio.com",
    projectId: "crown-db-319ac",
    storageBucket: "crown-db-319ac.appspot.com",
    messagingSenderId: "852739089269",
    appId: "1:852739089269:web:4e9073b9586e3c7abfa93c",
    measurementId: "G-W825S76121"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  //GOOGLE + authentication

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({propmt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;