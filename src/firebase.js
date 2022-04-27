import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBO6GwVoWpib1ER5lXVIR18Py5MEy7dbrU",
  authDomain: "vue-todo-list-2fd80.firebaseapp.com",
  databaseURL: "https://vue-todo-list-2fd80-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "vue-todo-list-2fd80",
  storageBucket: "vue-todo-list-2fd80.appspot.com",
  messagingSenderId: "1093609942299",
  appId: "1:1093609942299:web:f2050bdf30a4f20ac877be"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
export default firebase.firestore()