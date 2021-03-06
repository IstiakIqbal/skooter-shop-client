import { useEffect, useState } from "react";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import initializeAuth from "../Pages/Registration/Firebase/firebase.init";

initializeAuth();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [admin, setAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  const auth = getAuth();

  useEffect(() => {
    setLoading(true);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setLoading(false);
    });
  }, [auth]);

  useEffect(() => {
    fetch(`https://murmuring-caverns-40870.herokuapp.com/allusers?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);

  const userSignUp = (name, email, password, history) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        const newUser = { email, displayName: name };
        setUser(newUser);
        saveUser(email, name, "POST");
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => { });
        history.replace("/home");
      })
      .catch((error) => { })
      .finally(() => setLoading(false));
  };
  const userSignIn = (email, password, location, history) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        const uri = location?.state?.from || "/home";
        history.replace(uri);
      })
      .catch((error) => { })
      .finally(() => setLoading(false));
  };
  const saveUser = (email, displayName, method) => {
    const newUser = { displayName, email };
    fetch("https://murmuring-caverns-40870.herokuapp.com/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
  };
  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return {
    user,
    admin,
    loading,
    userSignIn,
    userSignUp,
    logOut,
  };
};

export default useFirebase;
