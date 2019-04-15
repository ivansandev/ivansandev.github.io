const database = [
    {
        username: "demo",
        password: "demo"
    },
    {
        username: "ivansandev",
        password: "pass"
    }
]
function signIn() {
    var usernameRequest = document.getElementById("username").value;
    var passwordRequest = document.getElementById("password").value;

    for (var i = 0; i < database.length; i++) {
        if (usernameRequest === database[i].username && passwordRequest === database[i].password) {
            window.location.replace("index.html")
            break;
        }
        else if (database.length == i + 1) {
            alert("Wrong username/password.")
        }
    }
}
function signInKeypress(event) {
    var usernameRequest = document.getElementById("username").value;
    var passwordRequest = document.getElementById("password").value;
    if (event.which === 13) {
        for (var i = 0; i < database.length; i++) {
            if (usernameRequest === database[i].username && passwordRequest === database[i].password) {
                window.location.replace("index.html")
                break;
            }
            else if (database.length == i + 1) {
                alert("Wrong username/password.")
            }
        }
    }
}
var button = document.getElementById("signInButton");
var inputUsername = document.getElementById("username");
var inputPassword = document.getElementById("password");


button.addEventListener("click", signIn);
inputUsername.addEventListener("keypress", signInKeypress);
inputPassword.addEventListener("keypress", signInKeypress);