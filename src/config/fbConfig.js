import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyAMvAjyyTd8xs9r2gVwtsQil6DPzxpo6UQ",
    authDomain: "dashboardrentakelly.firebaseapp.com",
    databaseURL: "https://dashboardrentakelly.firebaseio.com",
    projectId: "dashboardrentakelly",
    storageBucket: "dashboardrentakelly.appspot.com",
    messagingSenderId: "399542519424",
    appId: "1:399542519424:web:a0cf8ba7c7b242ef4e8865",
    measurementId: "G-CE88CHTSMC"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;