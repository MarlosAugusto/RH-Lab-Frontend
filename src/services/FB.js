import firebase from "@firebase/app";
import "@firebase/auth";
import "@firebase/storage";

export const POSTFILE = async (file, filename) => {
  const storageRef = firebase.storage().ref();
  const fileRef = storageRef.child(`curriculos/${filename}.pdf`);
  let success = false;
  console.log()
  await fileRef.put(file)
    .then(() => success = true)
  // .catch(err => console.log('err', err))
  return success;
};

export const GETFILE = async (filename) => {
  const storageRef = firebase.storage().ref()
  const fileRef = storageRef.child(`curriculos/${filename}.pdf`)
  if (!fileRef) {
    return false
  }
  let file
  await fileRef.getDownloadURL()
    .then(url => file = url)
  return file
}
