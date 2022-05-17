// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   UserCredential,
// } from 'firebase/auth';
// import { Credentials } from './types';

// const auth = getAuth();

// const SIGN_IN = ({ email, password }: Credentials): Promise<UserCredential> =>
//   createUserWithEmailAndPassword(auth, email, password);

// const LOGIN = ({ email, password }: Credentials): Promise<UserCredential> =>
//   signInWithEmailAndPassword(auth, email, password);

const SIGN_IN = () => console.log('test');
const LOGIN = () => console.log('test');

export default {
  SIGN_IN,
  LOGIN,
};
