import firebase from 'firebase'
require("@firebase/firestore")


var firebaseConfig = {
    apiKey: "AIzaSyDj69S7YFhGsh4Va74VWAqcxU_LRhsuuls",
    authDomain: "storyhub-3b592.firebaseapp.com",
    dataBaseURL:"https://console.firebase.google.com/project/storyhub-3b592/firestore/data~2FOwnStory~2FStoryId",
    projectId: "storyhub-3b592",
    storageBucket: "storyhub-3b592.appspot.com",
    messagingSenderId: "736107780605",
    appId: "1:736107780605:web:00e4d325f078008937e194"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();