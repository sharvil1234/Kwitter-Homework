function addUser() {
    user_name = document.getElementById("user_name").value;
    password = document.getElementById("password").value;
    localStorage.setItem("user_name", user_name);
    localStorage.setItem("Password", password);
    window.location = "kwitter_room.html";

}

    