import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: import.meta.name.apiKey,
  authDomain: import.meta.name.authDomain,
  projectId: import.meta.name.projectId,
  storageBucket: import.meta.name.storageBucket,
  messagingSenderId: import.meta.name.messagingSenderId,
  appId: import.meta.name.appId,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
