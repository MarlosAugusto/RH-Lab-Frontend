import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from "@firebase/app";

var firebaseConfig = {
  apiKey: "AIzaSyBMdpGmffgrZSeg1nqliytGGQ99UboYJyQ",
  authDomain: "rh-lab.firebaseapp.com",
  databaseURL: "https://rh-lab.firebaseio.com",
  projectId: "rh-lab",
  storageBucket: "rh-lab.appspot.com",
  messagingSenderId: "957446657350",
  appId: "1:957446657350:web:fae4c45bfc009abf67c147"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
