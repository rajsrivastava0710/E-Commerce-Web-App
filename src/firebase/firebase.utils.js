import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAA8D6TzsY0xhsV1vio0X4cI3jzX0vlz7c",
    authDomain: "fakekart-e21f7.firebaseapp.com",
    databaseURL: "https://fakekart-e21f7.firebaseio.com",
    projectId: "fakekart-e21f7",
    storageBucket: "fakekart-e21f7.appspot.com",
    messagingSenderId: "797029204799",
    appId: "1:797029204799:web:8b5eff1319699756bf498a",
    measurementId: "G-25DET6CP23"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    
    const snapShot = await userRef.get();
    
    if(!snapShot.exists){
      const {email} = userAuth;
      const createdAt = new Date();
      try{
      
        await userRef.set({
          email,
          createdAt,
          ...additionalData
        })

      }catch(error){
        console.log('Error creating user',error.message)
      }
    }
    return userRef;
    
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();//for google signin
  provider.setCustomParameters({prompt:'select_account'}) //trigger google popup for auth

  export const signInWithGoogle = () => auth.signInWithPopup(provider); //goggle popup

  export default firebase;