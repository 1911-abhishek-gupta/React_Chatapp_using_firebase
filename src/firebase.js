
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAHVfQhtd3_t_HVaxNiLrVGdRd_Ud1wTUE",
  authDomain: "chat-c9388.firebaseapp.com",
  projectId: "chat-c9388",
  storageBucket: "chat-c9388.appspot.com",
  messagingSenderId: "289550527877",
  appId: "1:289550527877:web:e3b269558c8399de66a8ec"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app);