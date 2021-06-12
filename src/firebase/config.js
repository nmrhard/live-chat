
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBVoI0vSOMWml1zPj2rKOFeCdytE9rItxA",
  authDomain: "udemy-vue-sites-c2d4e.firebaseapp.com",
  projectId: "udemy-vue-sites-c2d4e",
  storageBucket: "udemy-vue-sites-c2d4e.appspot.com",
  messagingSenderId: "1013590054939",
  appId: "1:1013590054939:web:9aabafdbd20b7b750bc0be"
};

firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }