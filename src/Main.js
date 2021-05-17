import React, { useEffect, useState } from "react";
import Home from "./Home";
import App from "./App";
import { auth } from "./firebase";

function Main() {
  const [user, setUSer] = useState(" ");
  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((userAuth) => {
      const user = {
        uid: userAuth?.uid,
        email: userAuth?.email
      };

      if (userAuth) {
        console.log(userAuth);
        setUSer(user);
      } else {
        setUSer("");
      }
    });
    return unSubscribe;
  }, []);
  return (
    <div className="app">
      {user ? <Home item={user.email} /> : <App user={user.email} />}
    </div>
  );
}
export default Main;
