import firebase from "firebase/app"
import "firebase/database"

const firebaseConfig = {
  apiKey: "???",
  authDomain: "vue-todo-list-???.firebaseapp.com",
  projectId: "vue-todo-list-???",
  storageBucket: "vue-todo-list-???.appspot.com",
  messagingSenderId: "???",
  appId: "???"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
export default firebase.database()
