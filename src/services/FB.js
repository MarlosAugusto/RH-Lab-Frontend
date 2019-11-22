import firebase from "@firebase/app";
import "@firebase/auth";
import "@firebase/storage";


export const POSTFILE = async (type, file, filename) => {
  const storageRef = firebase.storage().ref();
  const fileRef = storageRef.child(`${type}/${filename}`);
  let success = false;
  await fileRef.put(file).then(() =>
    success = true
  );
  return success;
};

export const GETFILE = async (type, filename) => {
  const storageRef = firebase.storage().ref()
  const fileRef = storageRef.child(`${type}/${filename}`)
  if (!fileRef) {
    return false
  }
  return await fileRef.getDownloadURL()
};