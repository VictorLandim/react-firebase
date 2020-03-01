import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAQY-QyL4M3EkULK01IJT4SfDY_pbE7C3Y',
  authDomain: 'react-firebase-56910.firebaseapp.com',
  databaseURL: 'https://react-firebase-56910.firebaseio.com',
  projectId: 'react-firebase-56910',
  storageBucket: 'react-firebase-56910.appspot.com',
  messagingSenderId: '731072719613',
  appId: '1:731072719613:web:595d1244e040975a41ac94'
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
