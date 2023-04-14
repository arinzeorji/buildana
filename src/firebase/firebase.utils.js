import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { addAbortSignal } from 'stream';

const config = {
    apiKey: "AIzaSyA6VoQrttAPUnS5PrdGTMQKlli0Xg-R0I4",
    authDomain: "buildina.firebaseapp.com",
    projectId: "buildina",
    storageBucket: "buildina.appspot.com",
    messagingSenderId: "1070827328292",
    appId: "1:1070827328292:web:0e3bc4b8d80330557099b1",
    measurementId: "G-PRX081NS1B"
}

export const createdUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {

        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log(`Error creating user with ID: ${userAuth.uid}`, error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;






















