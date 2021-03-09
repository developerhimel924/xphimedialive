import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyADD627Gf0_gE_yyzjygqx4evyB5d6t4J8",
  authDomain: "xphimedia.firebaseapp.com",
  databaseURL: "https://xphimedia-default-rtdb.firebaseio.com",
  projectId: "xphimedia",
  storageBucket: "xphimedia.appspot.com",
  messagingSenderId: "289525012619",
  appId: "1:289525012619:web:374fd2fee2d410d88f9c8e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
