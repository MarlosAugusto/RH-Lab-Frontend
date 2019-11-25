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
}

export const SignIn = async (email, password) => {
  let success = false;
  let error = null;
  await firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => (success = true))
    .catch(err => (error = err.code));

  if (error) {
    return error;
  }

  return success;
};

export const SignOut = async () => {
  let success = false;
  await firebase.auth().signOut()
    .then(() => {
      success = true;
    });

  return success;

};

export const SignUp = async (email, password) => {
  let success = false;
  await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      success = true;
    });

  return success;
};