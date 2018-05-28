import Vue from 'vue';
import firebase from 'firebase/app';
import 'firebase/firestore';


// Initialize firebase and provide config
var config = {
  apiKey: "AIzaSyCpSiezEAZFNIaPrqwbrBq-Cydu3PxcUaE",
  authDomain: "vue-firebase-test-53403.firebaseapp.com",
  databaseURL: "https://vue-firebase-test-53403.firebaseio.com",
  projectId: "vue-firebase-test-53403",
  storageBucket: "vue-firebase-test-53403.appspot.com",
  messagingSenderId: "244910969915"
};


firebase.initializeApp(config);

export const store = {


}

const recipeCollection = firebase.firestore()
  .collection('recipes');