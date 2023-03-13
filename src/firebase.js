import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCoQ1m1ht3V0Q5EImaqQg0hZu666584snY",
    authDomain: "netflix-clone-ada08.firebaseapp.com",
    projectId: "netflix-clone-ada08",
    storageBucket: "netflix-clone-ada08.appspot.com",
    messagingSenderId: "567045991620",
    appId: "1:567045991620:web:72b65c882dc10dff4ced91"
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth};
  export default db;