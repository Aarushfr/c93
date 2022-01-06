
//ADD YOUR FIREBASE LINKS HERE

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

    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
