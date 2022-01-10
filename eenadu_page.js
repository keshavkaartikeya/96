//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyDcM0t_8aFkMVMm6_iyVTUlL4LuEBsNeMA",
      authDomain: "real-73f84.firebaseapp.com",
      databaseURL: "https://real-73f84-default-rtdb.firebaseio.com",
      projectId: "real-73f84",
      storageBucket: "real-73f84.appspot.com",
      messagingSenderId: "56800873584",
      appId: "1:56800873584:web:455cc15edffc9f391738b5"
    };
    firebase.initializeApp(firebaseConfig);
     user_name=localStorage.getItem("user_name");
     room_name=localStorage.getItem("room_name");
     function send() {
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,message:msg,like:0
          });
          document.getElementById("msg").value="";
     }
     function logout() {
         localStorage.removeItem("user_name") ;
         localStorage.removeItem("room_name") ;
         window.location.replace("eenadu.html");
     }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
 