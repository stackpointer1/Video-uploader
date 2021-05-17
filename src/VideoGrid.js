import React from "react";
import "./Video.css";
import useFireStore from "./useFireStore";

const VideoGrid = () => {
  const { docs } = useFireStore("videos");
  console.log(docs);

  return (
    <div className="img_container">
      {docs &&
        docs.map((doc) => (
          <div className="img_dis" key={doc.id}>
            <audio controls src={doc.url} alt="" />
          </div>
        ))}
    </div>
  );
};
export default VideoGrid;
