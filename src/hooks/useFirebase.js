import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useState, useEffect } from "react";
import inititalizeAuthentication from "../firebase/firebase.init";

inititalizeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsloading] = useState(true);

  const auth = getAuth();

  //google sign in
  const signInUsingGoogle = () => {
    setIsloading(true);
    const googleProvider = new GoogleAuthProvider();

    return signInWithPopup(auth, googleProvider);
  };

  //   onAuthStateChanged observer
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }

      setIsloading(false);
    });

    return () => unsubscribed;
  }, [auth]);

  //   sign out
  const logOut = () => {
    setIsloading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .finally(() => setIsloading(false));
  };

  //   returing necessary assets
  return {
    setUser,
    user,
    signInUsingGoogle,
    logOut,
    setIsloading,
    isLoading,
    auth,
  };
};

export default useFirebase;
