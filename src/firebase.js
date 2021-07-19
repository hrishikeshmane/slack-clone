import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDVq8_Jff3BFmHs3KlpRkM3vfjP4Xa9Hws",
  authDomain: "slack-clone-45aa1.firebaseapp.com",
  projectId: "slack-clone-45aa1",
  storageBucket: "slack-clone-45aa1.appspot.com",
  messagingSenderId: "1014876162203",
  appId: "1:1014876162203:web:5519ebdfc486bc44b31e3e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };