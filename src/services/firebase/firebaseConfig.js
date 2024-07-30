import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBXhPaueRPpaQIGSTbB5_PHcob5MIYfnRI",
    authDomain: "letom3d-a3439.firebaseapp.com",
    projectId: "letom3d-a3439",
    storageBucket: "letom3d-a3439.appspot.com",
    messagingSenderId: "329585460753",
    appId: "1:329585460753:web:016c1087c1c99c717613b0",
    measurementId: "G-2XHTXYW9E4"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);