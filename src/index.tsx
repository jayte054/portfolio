import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDcuEYfLkeTLWDkBDOaKEPryG1SZ7vxbtg",
  authDomain: "justin-s-portfolio.firebaseapp.com",
  projectId: "justin-s-portfolio",
  storageBucket: "justin-s-portfolio.appspot.com",
  messagingSenderId: "93265409722",
  appId: "1:93265409722:web:ba2d6f39f5565f4d937483",
  measurementId: "G-N304BXSQBP"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
