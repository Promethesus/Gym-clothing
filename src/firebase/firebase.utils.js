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

export const createUserProfileDocument = async(userAuth, additionalData)=>{ 
    if(!userAuth)  return;
    const userRef = firestore.doc(`user/${userAuth.uid}`);

    const snapShot = await userRef.get();
    if(!snapShot.exits) {
        const {displayName, email} = userAuth
        const createdAt = new Date()
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error){ 
            console.log("error creating user", error.message)
        }
    }
    return userRef;
    // try:
    // catch(error)
}



firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
