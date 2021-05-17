import { useState, useEffect } from "react";
import { projectStorage,projectFireStore } from "./firebase";
const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setURl] = useState(null);
  useEffect(() => {
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFireStore.collection('videos');
    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        collectionRef.add({ url });
        setURl(url);
      }
    );
  }, [file]);
  return { progress, url, error };
};
export default useStorage;
