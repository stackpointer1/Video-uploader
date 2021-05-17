import React, { useState } from "react";
import "./styles.css";

import { auth } from "./firebase";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
      })
      .catch((error) => alert(error));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //it successfully created a new user with email and password
        console.log(auth);
      })
      .catch((error) => alert(error));
  };
  return (
    <div className="login">
      <img
        className="login_logo"
        src="https://image.shutterstock.com/image-vector/gallery-colorful-typography-text-banner-260nw-1853706475.jpg"
        alt=""
      />
      <div className="login_container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={signIn} className="login_signIn">
            Sign In
          </button>
        </form>
        <button onClick={register} className="login_reg">
          Creat your gallery account
        </button>
      </div>
    </div>
  );
}
export default Login;
