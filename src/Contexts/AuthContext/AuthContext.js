import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import app from "../../firebase/Firebase.config";
import { Navigate } from "react-router-dom";
const auth = getAuth(app);

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => console.log(error));
  };

  const loginUser = (email, password, from) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
      // .then((result) => {
      //   setUser(result.user);
      //   Navigate(from, { replace: true });
      // })
      // .catch((err) => console.log(err));
  };

  const logOut = () => {
    signOut(auth).then().catch();
  };
  const authInfo = {
    user,
    loading,
    createUser,
    loginUser,
    logOut,
    setUser,
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      return () => {
        unsubscribe();
      };
    });
  }, []);
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
