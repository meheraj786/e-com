import { onAuthStateChanged } from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

const AuthContext = createContext();
export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser);
    return unsubscribe;
  }, []);

  async function initializeUser(user) {
    if (user) {
      setLoading(false);
      setUserLoggedIn(true);
      setCurrentUser({ ...user });
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      const role = docSnap.data().role;
      setRole(role);
    } else {
      setCurrentUser(null);
      setUserLoggedIn(false);
      setRole("");
    }
    setLoading(false);
  }

  const value = {
    currentUser,
    userLoggedIn,
    role,
    loading,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
