import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyChaNCM79gVU5rWqbopVQsjVYRhM3XjTek",
  authDomain: "jedzonko-app.firebaseapp.com",
  databaseURL: "https://jedzonko-app.firebaseio.com",
  projectId: "jedzonko-app",
  storageBucket: "jedzonko-app.appspot.com",
  messagingSenderId: "443749861532",
  appId: "1:443749861532:web:400c9aabba7af7893e8559",
  measurementId: "G-2FCMQCG9T7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export { db };
