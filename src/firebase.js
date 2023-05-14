// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLkaiIT69h3_iZ4uxD-uYrMqDFQEl9zDk",
  authDomain: "weatherapp-8ed02.firebaseapp.com",
  databaseURL: "https://weatherapp-8ed02-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "weatherapp-8ed02",
  storageBucket: "weatherapp-8ed02.appspot.com",
  messagingSenderId: "62821957521",
  appId: "1:62821957521:web:2d93a9b4a2fde15d6fe430"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;