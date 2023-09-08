import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth';
import { getFirestore, setDoc, doc, getDoc, } from "firebase/firestore";




const firebaseConfig = {
  apiKey: "AIzaSyBzcuFvYo4-HTJW-QnI6SKurIHaY4mUOfM",
  authDomain: "football-37778.firebaseapp.com",
  projectId: "football-37778",
  storageBucket: "football-37778.appspot.com",
  messagingSenderId: "242169439659",
  appId: "1:242169439659:web:cfbc5a76d679feedd89eee"
};




export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);


export const registerUser = ( email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
  .then((res) => {
      return res;
  })
  .catch((err) => {
  })
};



export const getUserDoc = async ({name,id, email}) => {

  const userDoc = doc(db, `users/${id}`);
  const userData = await getDoc(userDoc);

  if (userData.exists()) { 
      return userDoc;
  }  else { 
      const userDoc = await setDoc(doc(db, 'users', id), {
          email,
          id,
          name
      });
      return userDoc;
  }
};


export const signIn = (email, password) => {
  
  return signInWithEmailAndPassword(auth, email, password)
  .then((res) => {
      return res;
  })
  .catch((err) => {
    if (err.code === 'auth/network-request-failed') {
      alert('NO NETWORK!');
    } else if (err.code === 'auth/user-not-found') {
      alert('You are not registered, please register first')
    }
  })
};
