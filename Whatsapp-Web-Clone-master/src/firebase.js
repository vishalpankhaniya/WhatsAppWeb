// npm i firebase
import firebase from "firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyA1aLLDqn038pQJtYHp-XKEujKN38BOjWk",
//   authDomain: "whatsapp-web-clone-c6268.firebaseapp.com",
//   databaseURL: "https://whatsapp-web-clone-c6268.firebaseio.com",
//   projectId: "whatsapp-web-clone-c6268",
//   storageBucket: "whatsapp-web-clone-c6268.appspot.com",
//   messagingSenderId: "517562701606",
//   appId: "1:517562701606:web:25f4896aeaaf5afa3393e7",
//   measurementId: "G-7KZCBCX9GW",
// };

const firebaseConfig = {
  apiKey: "AIzaSyDnN-0HXsEWJBHmZdtBfj2-r0yrLPaZNtA",
  authDomain: "whatsapp-clone-1372d.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-1372d.firebaseio.com",
  projectId: "whatsapp-clone-1372d",
  storageBucket: "whatsapp-clone-1372d.appspot.com",
  messagingSenderId: "709074043340",
  appId: "1:709074043340:web:6b033c32cc304e3dbf5d69"
};

// ----------------------------------------------------------
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
// ----------------------------------------------------------
