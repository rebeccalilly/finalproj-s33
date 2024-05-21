import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDocxzQHlITHanV1klGUTVi23G5TpvPsrY",
  authDomain: "checklist-app-1c1ff.firebaseapp.com",
  projectId: "checklist-app-1c1ff",
  storageBucket: "checklist-app-1c1ff.appspot.com",
  messagingSenderId: "890340092815",
  appId: "1:890340092815:web:b60b62db2958485de0b9fa"
};


const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;
