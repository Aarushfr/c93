// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBgFE0gIPg-DtHUTPE8Pq01LvH5hnQSCQg",
    authDomain: "social-website-159af.firebaseapp.com",
    projectId: "social-website-159af",
    storageBucket: "social-website-159af.appspot.com",
    messagingSenderId: "788786577377",
    appId: "1:788786577377:web:36a90c60aac1364ab31ca0",
    measurementId: "G-VMCC14ZEKS"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
//ADD YOUR FIREbase links


function addUser()

{
 user_name = document.getElementById("user_name").value
 firebase.database().ref("/").child(user_name).update({
  purpose : "adding user"
 });
}