import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';
// import 'firebase/storage'

// Initializing Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBiY-tTwikeooUY_i4di_Cbp0zHql1QIlo",
  authDomain: "lakeshow2018-16d06.firebaseapp.com",
  databaseURL: "https://lakeshow2018-16d06.firebaseio.com",
  projectId: "lakeshow2018-16d06",
  storageBucket: "lakeshow2018-16d06.appspot.com",
  messagingSenderId: "512325448018",
  appId: "1:512325448018:web:341f1ce904314574"
};

firebase.initializeApp(firebaseConfig);

// Get Database
const firebaseDB = firebase.database();

// Get matches within database
const firebaseMatches = firebaseDB.ref('matches');

export {
  firebase,
  firebaseMatches
}