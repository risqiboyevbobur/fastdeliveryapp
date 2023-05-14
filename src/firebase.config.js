import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD_bxGG0WgOKDejZvER2fTq2xZZjfUs8zs",
  authDomain: "restaurantapp-c2ed6.firebaseapp.com",
  databaseURL: "https://restaurantapp-c2ed6-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-c2ed6",
  storageBucket: "restaurantapp-c2ed6.appspot.com",
  messagingSenderId: "174416156605",
  appId: "1:174416156605:web:2ec169ea4ef3e7bb25e4d4",
};

// const firebaseConfig = {
//   apiKey: "AIzaSyArlctwRZI3zkdJiu5ZDZwWx7D7KyGcVB8",
//   authDomain: "delivery-63737.firebaseapp.com",
//   databaseURL: "https://delivery-63737-default-rtdb.firebaseio.com",
//   projectId: "delivery-63737",
//   storageBucket: "delivery-63737.appspot.com",
//   messagingSenderId: "979097221230",
//   appId: "1:979097221230:web:bf559cb593b61eb1c44e7f",
//   measurementId: "G-WVHDG3FW68",
// };
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
