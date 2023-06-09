import initializeAuthentication from "../Firebase/Firebase.init"
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, updateProfile, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { GoogleAuthProvider } from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {

  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true)
  const [authError, setAuthError] = useState('');
  const auth = getAuth();
  const [admin,setAdmin]=useState(false);


  // Register user



  const registerNewUser = (email, password, name) => {


    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // Signed in 
        const user = result.user;
        setUser(user);

        // save user
        saveUser(email, name, 'POST');

        // send name to firebase after new user creation
        updateProfile(auth.currentUser, {
          displayName: name
        }).then(() => {

        }).catch((error) => {

        });
        console.log(user);



      })

  }


  // Google sing in

  const googleProvider = new GoogleAuthProvider();

  const singInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider)

  }



  const emailPasswordAuthentication = (email, password) => {

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        setUser(user)
        console.log(user);

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }


  // singOut
  const LogOut = () => {

    signOut(auth).then(() => {
      // Sign-out successful.
      // setUser({})
    }).catch((error) => {
      // An error happened.
    });
  }

  //  SetUserName

  // const setUserName=(name)=>{

  //   updateProfile(auth.currentUser, {
  //     displayName:name
  //   }).then(() => {
  //     // Profile updated!
  //     // ...

  //   }).catch((error) => {
  //     // An error occurred
  //     // ...
  //   });
  // }

  // SAVE USER
  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch('https://food-delivery-app-c3hd.onrender.com/users', {
      method: method,
      headers: {
        'content-type': "application/json"
      },
      body: JSON.stringify(user)
    })
      .then()
  }



  // admin data load
  useEffect(() => {
    fetch(`https://food-delivery-app-c3hd.onrender.com/users/${user.email}`)
      .then(res => res.json())
      .then(data => setAdmin(data.admin));
  }, [user.email])




  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
      else {
        setUser({});
      }
      setIsLoading(false);

    });
  }, [])




  return {
    user,
    registerNewUser,
    signInWithPopup,
    singInUsingGoogle,
    setUser,
    emailPasswordAuthentication,
    LogOut,
    admin


  }
}

export default useFirebase;