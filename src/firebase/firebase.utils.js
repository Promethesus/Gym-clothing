import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const config = {
    apiKey: "AIzaSyCrFaArhNRtqqwpVOSxedJEKt-aSbSLaoY",
    authDomain: "gymclothingdb.firebaseapp.com",
    projectId: "gymclothingdb",
    storageBucket: "gymclothingdb.appspot.com",
    messagingSenderId: "843508180195",
    appId: "1:843508180195:web:16dff0101ff49c6d2d11d6",
    measurementId: "G-CSV5S6ZEN4"
}
firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
