import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyD1wny5o3ejwoMaFPE9hjO6WaXbzNLvnJU",
    authDomain: "reactjs-7ce82.firebaseapp.com",
    projectId: "reactjs-7ce82",
    storageBucket: "reactjs-7ce82.appspot.com",
    messagingSenderId: "1025179691954",
    appId: "1:1025179691954:web:1b1805f95fc32c935692ab",
    measurementId: "G-NKHYCPB567"
  };

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
