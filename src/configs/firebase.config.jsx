import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyAcN_D-7zk80df2WOSQprlavE2NLeM17tU",
	authDomain: "monkey-blogging-58f15.firebaseapp.com",
	projectId: "monkey-blogging-58f15",
	storageBucket: "monkey-blogging-58f15.appspot.com",
	messagingSenderId: "573659967174",
	appId: "1:573659967174:web:ca9db8f458284d021e31c7",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const postInstance = collection(db, "posts");
export const userInstance = collection(db, "users");

export const categoriesInstance = collection(db, "categories");
