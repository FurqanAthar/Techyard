import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

var firebaseConfig = {
    apiKey: "AIzaSyA6PQroT-uYk_nqB3IPjfz_aorYAqs2hBc",
    authDomain: "techyard-client-side.firebaseapp.com",
    projectId: "techyard-client-side",
    storageBucket: "techyard-client-side.appspot.com",
    messagingSenderId: "120149734643",
    appId: "1:120149734643:web:f00ab432e7cb4552473386"
  };
//   Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth()
export const firestore = firebase.firestore(app)
export const storage = firebase.storage(app)
export default firebase