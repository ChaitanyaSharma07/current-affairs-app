import firebase from 'firebase';
require('@firebase/firestore');

export const firebaseConfig = {
  apiKey: "AIzaSyBKSBoNlVY6FKcdiQaArmSvg5PwQ_H2m7Y",
  authDomain: "current-affairs-app-4beca.firebaseapp.com",
  projectId: "current-affairs-app-4beca",
  storageBucket: "current-affairs-app-4beca.appspot.com",
  messagingSenderId: "1048834192044",
  appId: "1:1048834192044:web:7246990fc14d9775856509"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}