// import firebase from "nod"
import {initializeApp} from "firebase/app"
import {getFirestore} from 'firebase/firestore';
import { getDatabase} from 'firebase/database';
import { ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC50SggDIEOrN3t6dyFouTmvdC9rFuFkMI",
  authDomain: "paperless-hospital-servi-bf1d1.firebaseapp.com",
  databaseURL: "https://paperless-hospital-servi-bf1d1-default-rtdb.firebaseio.com",
  projectId: "paperless-hospital-servi-bf1d1",
  storageBucket: "paperless-hospital-servi-bf1d1.appspot.com",
  messagingSenderId: "488961789481",
  appId: "1:488961789481:web:dd266892396600057dd638",
  measurementId: "G-0D1JSLL1N1"
};

  
  const Firebaseapp = initializeApp(firebaseConfig)
  const database = getDatabase(Firebaseapp);
  export  {database}