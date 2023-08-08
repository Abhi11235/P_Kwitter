var firebaseConfig = {
    apiKey: "AIzaSyBEIZ4Y48cEjNIgbpY4-h035G2L3y9V-d8",
    authDomain: "practice-3b5ce.firebaseapp.com",
    databaseURL: "https://practice-3b5ce-default-rtdb.firebaseio.com",
    projectId: "practice-3b5ce",
    storageBucket: "practice-3b5ce.appspot.com",
    messagingSenderId: "448167839265",
    appId: "1:448167839265:web:418be4b4ade9f1fb630560"
  };
  
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
   document.getElementById("user_name").innerHTML="Welcome " + user_name +"!";


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "kwitter_room.html";
    
}

function addRoom()
{
room_name=document.getElemnetbyId("room_name").value;

firebase.database().ref("/").child(room_name).update({
    pupose:"adding room name"


});

localStorage.setItem("room_name",room_name);
window.location="kwitter_room.html";
}

function redirectToRoomName(name)
{
console.log(name)
    localStorage.setItem("room_name",name)
    window.location("kwitter_room.html")
}

