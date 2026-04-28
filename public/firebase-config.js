// firebase-config.js
const firebaseConfig = {
  apiKey: "AIzaSyDY2qaAJi3ucIePXZy5tQ-fBbSAqDRtJs8",
  authDomain: "veridash-e68c7.firebaseapp.com",
  projectId: "veridash-e68c7",
  storageBucket: "veridash-e68c7.firebasestorage.app",
  messagingSenderId: "885881049623",
  appId: "1:885881049623:web:3fa1f45ff3f42c0a164252",
  measurementId: "G-ZZTDN3MTE3"
};

// Initialize Firebase
if (typeof firebase !== 'undefined') {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  window.db = firebase.firestore();
} else {
  console.error("Firebase SDK not loaded.");
}
