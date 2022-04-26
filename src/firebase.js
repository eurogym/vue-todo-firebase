import firebase from "firebase/app"
import "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyBO6GwVoWpib1ER5lXVIR18Py5MEy7dbrU",
  authDomain: "vue-todo-list-2fd80.firebaseapp.com",
  projectId: "vue-todo-list-2fd80",
  storageBucket: "vue-todo-list-2fd80.appspot.com",
  messagingSenderId: "1093609942299",
  appId: "1:1093609942299:web:f2050bdf30a4f20ac877be"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
export default firebase.database()
