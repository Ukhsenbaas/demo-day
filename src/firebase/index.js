import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  onSnapshot,
  query,
  addDoc,
  serverTimestamp,
  orderBy,
} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD3LbGnSxxbeWDPFtHvlhqAG8YNMO_0f8U",
  authDomain: "suvey-2ce18.firebaseapp.com",
  projectId: "suvey-2ce18",
  storageBucket: "suvey-2ce18.appspot.com",
  messagingSenderId: "421245165897",
  appId: "1:421245165897:web:88f3494e75bcbc02227a98",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const db = getFirestore(app);

export const useCollection = (path) => {
  // add function
  const addDocument = ({data, name}) => {
    return addDoc(collection(db, `${path}`), {
      surveyName: name,
      ...data,
      createdAt: serverTimestamp(),
    });
  };

  return {
    addDocument,
  };
};
