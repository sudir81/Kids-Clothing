import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyAuXLwFxJapjVNjByUZZbr9u4A0QkCPqNg",
    authDomain: "kidshop-7c34f.firebaseapp.com",
    projectId: "kidshop-7c34f",
    storageBucket: "kidshop-7c34f.appspot.com",
    messagingSenderId: "83293264590",
    appId: "1:83293264590:web:e82628db7391c8595f4e9f",
    measurementId: "G-ZKWRJ88HQ0"
  };

  export const createUserProfileDoc = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const { displayName, email } = userAuth
      const createdAt = new Date()

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('Error creating user', error.message)
      }
    }

    return userRef;
  }

  firebase.initializeApp(firebaseConfig)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({ promp: 'select_account' })

  export const signInWithGoogel = () => auth.signInWithPopup(provider)

  export default firebase;