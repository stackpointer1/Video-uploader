import React from "react";
import "./styles.css";
import "./Homestyle.css";
import { auth } from "./firebase";
import UploadForm from "./UploadForm";
import VideoGrid from "./VideoGrid";
function Home(props) {
  return (
    <div className="Home_container">
      <h3> hey {props.item} here is your collection </h3>

      <button className="Home_SignOut" onClick={() => auth.signOut()}>
        Signout{" "}
      </button>
      <img
        className="Home_ad"
        src="https://static.bhphotovideo.com/explora/sites/default/files/dddd.jpg"
        alt=""
      />

      <h1>Add your Videos</h1>
      <UploadForm />
      <VideoGrid />
    </div>
  );
}
export default Home;
