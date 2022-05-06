import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDBcAIq5DxLTyxfga6M6Tnmn-fWS0DXlWo",
    authDomain: "drdalieu-7b592.firebaseapp.com",
    projectId: "drdalieu-7b592",
    storageBucket: "drdalieu-7b592.appspot.com",
    messagingSenderId: "1040374644245",
    appId: "1:1040374644245:web:4f8ef7551321636708981c",
    measurementId: "G-FFRZ9VZG7R"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);
export { auth, database };