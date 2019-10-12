import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyCAKMnQGUuRC1THFp0RyCr4YyBsEGE9U6I",
  authDomain: "todos-8402c.firebaseapp.com",
  databaseURL: "https://todos-8402c.firebaseio.com",
  projectId: "todos-8402c",
  storageBucket: "todos-8402c.appspot.com",
  messagingSenderId: "517948267047",
  appId: "1:517948267047:web:6821ffa17d8a2ecbc54c02"
});

export { firebaseConfig as firebase };
