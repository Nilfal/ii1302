
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyD3U47nYmeVdX-17BKi57MJEEhlmTS3HCc",
    authDomain: "decibel-6a467.firebaseapp.com",
    projectId: "decibel-6a467",
    storageBucket: "decibel-6a467.appspot.com",
    messagingSenderId: "995332257334",
    appId: "1:995332257334:web:00d2ad5037b481e8268a97",
    measurementId: "G-JEV2JJHHZB"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
