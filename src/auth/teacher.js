import { initializeApp } from "@firebase/app";
const Teacher = {
  apiKey: "************",
  authDomain: "*********",
  databaseURL: "******",
  projectId: "***************",
  storageBucket: "*************",
  messagingSenderId: "*************",
  appId: "*************"
};
const app=initializeApp(Teacher);
export default app
