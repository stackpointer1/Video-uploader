import { useState, useEffect } from "react";
import { projectFireStore } from "./firebase";
const useFireStore = (collection) => {
  const [docs, setDocs] = useState([]);
  useEffect(() => {
    const unsub = projectFireStore.collection(collection).onSnapshot((snap) => {
      let document = [];
      snap.forEach((doc) => {
        document.push({ ...doc.data(), id: doc.id });
      });
      setDocs(document);
    });
    return () => unsub();
  }, [collection]);
  return { docs };
};

export default useFireStore;
