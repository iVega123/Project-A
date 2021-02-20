import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';


const config = {
    apiKey: "AIzaSyARHpXV8xcIA0JBSpnYWeYPDVxdDcFlh4s",
    authDomain: "project-a-963d4.firebaseapp.com",
    projectId: "project-a-963d4",
    storageBucket: "project-a-963d4.appspot.com",
    messagingSenderId: "489472359758",
    appId: "1:489472359758:web:b944ff295d4b302a37721f",
    measurementId: "G-D73YNM8KT6"
};

const firebase = Firebase.initializeApp(config);

export { firebase }