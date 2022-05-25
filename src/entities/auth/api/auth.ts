import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "common/api/firebase";
import { LoginCredentials, RegistrationCredentials } from "models/auth";

export const register = ({ email, password }: RegistrationCredentials) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const logIn = ({ email, password }: LoginCredentials) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logOut = () => {
  return signOut(auth);
};
