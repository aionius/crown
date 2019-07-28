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

export const createUserProfileDocument = async (userAuth, additionData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionData
      });
    } catch (error) {
      console.log("error creating user: ", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
