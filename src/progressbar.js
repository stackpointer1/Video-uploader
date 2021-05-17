import React, { useEffect } from "react";
import "./Progress.css";
import useStorage from "./useStorage";

const progressBar = ({ file, setFile }) => {
  const { progress, url } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);
  return <div className="Progress_bar" style={{ width: progress + "%" }}></div>;
};
export default progressBar;
