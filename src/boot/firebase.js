import firebase from "firebase/app"

import "firebase/auth"
import "firebase/database"

var firebaseConfig = {
  apiKey: "AIzaSyDWiI0jdZF4lAvB4E8JL3dEuCvRLY-ycyA",
  authDomain: "awesome-todo-ea897.firebaseapp.com",
  databaseURL: "https://awesome-todo-ea897-default-rtdb.firebaseio.com",
  projectId: "awesome-todo-ea897",
  storageBucket: "awesome-todo-ea897.appspot.com",
  messagingSenderId: "416573285179",
  appId: "1:416573285179:web:bd1af03058ee14338bcd1e"
}

let firebaseApp = firebase.initializeApp(firebaseConfig)
let firebaseAuth = firebaseApp.auth()
let firebaseDb = firebaseApp.database()

export { firebaseAuth, firebaseDb }