import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDrx7fhX_pPi34s_NNMds4hJx5M9x5rN5M",
  authDomain: "zenith-media-7b4e9.firebaseapp.com",
  projectId: "zenith-media-7b4e9",
  storageBucket: "zenith-media-7b4e9.appspot.com",
  messagingSenderId: "222807286412",
  appId: "1:222807286412:web:089bfd2dcfecb64caa11a9",
  measurementId: "G-2T2M2L3P9T",
};

// Initialize Firebase only once
const app = initializeApp(firebaseConfig);

// EXPORT DB → this is what your login-page needs
export const db = getFirestore(app);
