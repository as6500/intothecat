function join_match(){
    message = document.getElementById("message");

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4) {
            console.log(xhttp.responseText)
            var data = JSON.parse(xhttp.responseText);

            if (xhttp.status == 200){
                // If the login is successful, we show a message and redirect to the game page in 2 seconds.
                message.innerHTML = data.message;
                message.innerHTML += "<br>Redirecting to game page...";
                message.style.color = "black";

                // Redirect to game page in 2 seconds
                setTimeout(() => {
                     window.location.replace("/game");
                }, 2000)

            } 

            else if (xhttp.status == 302) {
                message.innerHTML = data.message;
                message.innerHTML += "<br>Re-joining the game...";
                message.style.color = "black";

                // joining old match
                setTimeout(() => {
                     window.location.replace("/game");
                }, 2000)
            }

            else if (xhttp.status == 201) {
                // Match created.
                message.innerHTML = data.message;
                message.innerHTML += "<br>in queue..."
                setInterval(() => {
                    check_queue_state();
                }, 5000);
            }

            else if (xhttp.status == 403) {
                message.innerHTML = data.error;
                message.style.color = "red";
                window.location.replace("/login.html");
            }



            else {
                message.innerHTML = data.error;
                message.style.color = "red";
            }
        }
    };


    // Send a POST request to the server (we are sending as post because we are sending a body with the data to the server)
    xhttp.open("POST", "/lobby/joinMatch", true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send();

}

function check_queue_state() {

    console.log("Checking state...");

    message = document.getElementById("message");

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4) {

            console.log(xhttp.responseText)

            var data = JSON.parse(xhttp.responseText);

            if (xhttp.status == 200){
                // If the login is successful, we show a message and redirect to the game page in 2 seconds.
                message.innerHTML = data.message;
                message.innerHTML += "<br>Redirecting to game page...";
                message.style.color = "black";

                // Redirect to game page in 2 seconds
                setTimeout(() => {
                     window.location.replace("/game");
                }, 2000)

            }

            else if (xhttp.status == 403) {
                message.innerHTML = data.error;
                message.style.color = "red";
                window.location.replace("/login.html");
            }
            else {
                message.innerHTML = data.error;
                message.style.color = "red";
            }
        }
    };


    // Send a POST request to the server (we are sending as post because we are sending a body with the data to the server)
    xhttp.open("get", "/lobby/queue", true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send();

    
}

function login(){
    var message = document.getElementById("message");
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4) {
            var data = JSON.parse(xhttp.responseText);
            if (xhttp.status == 200){
                // If the login is successful, we show a message and redirect to the game page
                message.innerHTML = data.message;
                message.innerHTML += "<br>Redirecting to game searches...";
                message.style.color = "black";

                setTimeout(() => {
                    window.location.replace('../joinmatch.html')
                }, 2000);
                
            } else {
                // If the login is not successful, we show an error message.
                message.innerHTML = data.error;
                message.style.color = "red";
            }
        }
    
    }

    var data = {
        "username": username,
        "password": password
    }

    xhttp.open("POST", "/lobby/login", true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify(data));

}

function register(){

    const username = document.getElementById('username').value.trim();
    const nickname = document.getElementById('nickname').value.trim();
    const password = document.getElementById('password').value.trim();
    const password2 = document.getElementById('password2').value.trim();

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4) {
            var data = JSON.parse(xhttp.responseText);
            if (xhttp.status == 200){
                // If the login is successful, we show a message and redirect to the game page in 2 seconds.
                message.innerHTML = data.message;
                message.innerHTML += "<br>Redirecting to login...";
                message.style.color = "black";

                // Redirect to login page in 2 seconds
                setTimeout(() => {
                    window.location.replace("/login.html");
                }, 2000)
            } else {
                // If the login is not successful, we show an error message.
                message.innerHTML = data.error;
                message.style.color = "red";
            }
        }
    };

    var data = {
        "username": username,
        "nickname": nickname,
        "password": password,
        "password2": password2
    }
    // Send a POST request to the server (we are sending as post because we are sending a body with the data to the server)
    xhttp.open("POST", "/lobby/register", true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify(data));

}