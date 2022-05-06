
const firebaseConfig = {
  apiKey: "AIzaSyDCp2udhz-XR3h_BLjfuVRrLLm1gvhFg_U",
  authDomain: "kwitter-room-41a5c.firebaseapp.com",
  databaseURL: "https://kwitter-room-41a5c-default-rtdb.firebaseio.com",
  projectId: "kwitter-room-41a5c",
  storageBucket: "kwitter-room-41a5c.appspot.com",
  messagingSenderId: "864465158722",
  appId: "1:864465158722:web:7f7260b18069eb341323db"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var username = localStorage.getItem("person")
document.getElementById("name").innerHTML = "Welcome" + " " + username

function submit(){
  addRoom = document.getElementById("roomname").value
firebase.database().ref("/").child(addRoom).update({
  purpose:"addingRoom"
})
localStorage.setItem("roooooomname", addRoom)
window.location = "message_page.html"
}
function getData() {firebase.database().ref("/").on('value',function(snapshot) {document.getElementById("output").innerHTML ="";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
firebase_message_id = childKey;
         message_data = childData;
//End code
});});}
getData();
function redirectToRoomname(){
  var roomname = document.getElementById("roomname").value

    localStorage.setItem("roomname", roomname);
}