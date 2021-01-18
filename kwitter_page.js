//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDxBGuRKkZn360-bwCx1vXYMyVMvKcaRwo",
      authDomain: "kwitter-12551.firebaseapp.com",
      databaseURL: "https://kwitter-12551-default-rtdb.firebaseio.com",
      projectId: "kwitter-12551",
      storageBucket: "kwitter-12551.appspot.com",
      messagingSenderId: "410709294954",
      appId: "1:410709294954:web:2eb1983218dde2d2c0ef13"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });

}