import firebase from 'firebase/app';

var Firebase = require("firebase");

// Initialize firebase and provide config
var config = {
  apiKey: "AIzaSyCpSiezEAZFNIaPrqwbrBq-Cydu3PxcUaE",
  authDomain: "vue-firebase-test-53403.firebaseapp.com",
  databaseURL: "https://vue-firebase-test-53403.firebaseio.com",
  projectId: "vue-firebase-test-53403",
  storageBucket: "vue-firebase-test-53403.appspot.com",
  messagingSenderId: "244910969915"
};

let firebaseApp = firebase.initializeApp(config);

const db = firebaseApp.database();

export default {
  db: db,
  recipesRef: db.ref("recipes"),
  firebaseApp: firebaseApp
}
