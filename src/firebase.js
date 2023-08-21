import firebase from 'firebase'


const firebaseConfig = {
  apiKey: "AIzaSyDcS8jNquQ8AOUp9E0w_l9H-nxeXT-f0tI",
  authDomain: "netflix-clone-2-8f3ee.firebaseapp.com",
  projectId: "netflix-clone-2-8f3ee",
  storageBucket: "netflix-clone-2-8f3ee.appspot.com",
  messagingSenderId: "276030950909",
  appId: "1:276030950909:web:79d93b37e52e1897cedd94",
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
