import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA9qXlua7JPeEZuLTm2C8HodncuvJz7NsU",
  authDomain: "violearn-auth.firebaseapp.com",
  projectId: "violearn-auth",
  storageBucket: "violearn-auth.appspot.com",
  messagingSenderId: "1088600286465",
  appId: "1:1088600286465:web:72051959d74f2d42bce700"
};

const app = initializeApp(firebaseConfig);

export { app }