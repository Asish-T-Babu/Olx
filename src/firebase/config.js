import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyDlgD7HC5OODpjgzTKRMvaR7gMcLZKj9mQ",
    authDomain: "fir-f0016.firebaseapp.com",
    projectId: "fir-f0016",
    storageBucket: "fir-f0016.appspot.com",
    messagingSenderId: "216953645637",
    appId: "1:216953645637:web:862720f8e1e951e146112c",
    measurementId: "G-KCQ3V1X96N"
  };

  export default firebase.initializeApp(firebaseConfig)