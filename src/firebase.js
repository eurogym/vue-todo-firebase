import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "???",
  authDomain: "vue-todo-list-2fd80.firebaseapp.com",
  databaseURL: "https://vue-todo-list-2fd80-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "vue-todo-list-2fd80",
  storageBucket: "vue-todo-list-2fd80.appspot.com",
  messagingSenderId: "???",
  appId: "???"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
export default firebase.firestore()