import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDW43a76RasYnaxdoJW-HEqtsPJ4Ugn1-Q",
    authDomain: "crwn-db-430cd.firebaseapp.com",
    projectId: "crwn-db-430cd",
    storageBucket: "crwn-db-430cd.appspot.com",
    messagingSenderId: "887641806264",
    appId: "1:887641806264:web:5baa8eaf35f5b35bf1ab4d",
    measurementId: "G-GR4PF0ZEDR"
};

initializeApp(firebaseConfig);

export const auth = getAuth();
export const firestore = getFirestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ params: 'select_account' });
export const signInWithGoogle = () => signInWithPopup(auth, provider);
