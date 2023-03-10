import { initializeApp } from "firebase/app";
import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import {getFirestore,addDoc,collection,getDocs} from 'firebase/firestore'
const FirebaseContext = createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyBO986z6P21CTm_WBWGiKo7uORGFCeZkFM",
  authDomain: "hackoholics-8225f.firebaseapp.com",
  projectId: "hackoholics-8225f",
  storageBucket: "hackoholics-8225f.appspot.com",
  messagingSenderId: "847000795228",
  appId: "1:847000795228:web:91d6ce8c70c1e8171e0e99",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const FirebaseAuth = getAuth(firebaseApp);
export const useFirebase = () => useContext(FirebaseContext);
const firestore = getFirestore(firebaseApp)
const googleProvider = new GoogleAuthProvider();

export const FirebaseProvider = (props) => {
  const [user, setUser] = useState(null);

  useEffect(()=>{
    onAuthStateChanged(FirebaseAuth, (user) => {
      if (user) {
        setUser(user);
      console.log('user',user)
      } else{
          setUser(null)
      }
    });
  },[FirebaseAuth])
  const CreateUser = async (email, password) => {
    await createUserWithEmailAndPassword(FirebaseAuth, email, password).then(
      (data) => console.log(data)
    );
  };

  const signInUser = async (email, password) => {

    
    await signInWithEmailAndPassword(FirebaseAuth, email, password).then(
      (data) => console.log(data)
    );
  };

  const signInGoogle = async () => {
    await signInWithPopup(FirebaseAuth, googleProvider).then((data) =>
      console.log(data)
    );
  };

  const [jobrec,setJobRec] = useState(false)


  const UploadPost = async (create,title,company,salary,skill) => {
    return await addDoc(collection(firestore, "jobs"), {
      create,
      title,
      company,
      salary,
      skill,
      userId: user.uid,
      userEmail: user.email,
      displayName: user.displayName === null ? user.email : user.displayName,
      photoURL: user.photoURL,
    });
}
const AllJobs = async() => {
    return await getDocs(collection(firestore, "jobs"));
  };

  const isLoggedIn = user ? true : false;
  console.log('Logged in',isLoggedIn)
  return (
    <FirebaseContext.Provider
      value={{ CreateUser, signInUser, isLoggedIn, user, signInGoogle,UploadPost,AllJobs,setJobRec,jobrec}}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
