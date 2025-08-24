// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyD-nw2co5folwa_e44VfNM_xEWGGh4rpMc",
  authDomain: "bustracker-99253.firebaseapp.com",
  databaseURL: "https://bustracker-99253-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "bustracker-99253",
  storageBucket: "bustracker-99253.firebasestorage.app",
  messagingSenderId: "248158728867",
  appId: "1:248158728867:web:6b5eb8cd7bddec1fe58516",
  measurementId: "G-NB3N4XWKP1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export database
export const database = getDatabase(app);

