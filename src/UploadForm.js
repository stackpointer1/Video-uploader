import React, { useState } from "react";
import SpeakerIcon from "@material-ui/icons/Speaker";
import ProgressBar from "./progressbar";
const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const types = ["audio/mpeg"];
  const changeHandler = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
      console.log(selected);
    } else {
      setFile(null);
      setError("please select an video file");
      console.log(selected);
    }
  };
  return (
    <form>
      <label>
        <input type="file" onChange={changeHandler} />
        <span>
          <SpeakerIcon />
        </span>
      </label>
      <h5>press here to add audio</h5>
      <div className="output">
        {error && <div className="error"> {error} </div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};
export default UploadForm;
