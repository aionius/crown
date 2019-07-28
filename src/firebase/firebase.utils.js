import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDz8SXLxoMZ8fHNTbS5UlnNRZ5sP_NrLVI",
  authDomain: "crown-fa6e9.firebaseapp.com",
  databaseURL: "https://crown-fa6e9.firebaseio.com",
  projectId: "crown-fa6e9",
  storageBucket: "",
  messagingSenderId: "379041487968",
  appId: "1:379041487968:web:2d1791147aae124e"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
