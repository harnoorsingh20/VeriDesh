// firebase-config.js
const firebaseConfig = {

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
