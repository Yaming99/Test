var database = [{
        username: "Michel",
        password: "aaa"
    },
    {
        username: "Polnareff",
        password: "SilverChariot"
    }
];

var newsfeed = [{
        username: "Bob",
        timeline: "I love traps."
    },
    {
        username: "Jotaro",
        timeline: "Yare yare daze..."
    }
];

function isUserValid(username, password) {
    for (var i = 0; i < database.length; i++) {
        if (database[i].username === username && database[i].password === password) {
            return true;
        }
    }
    alert("Wrong username and password");
    return false;
}

function signIn(username, password) {
    if (isUserValid(username, password)) {
        console.log(newsfeed);
        // document.getElementById('test').innerHTML = JSON.stringify(data, null, 4);
        for (let a = 0; a < newsfeed.length; a++) {
            document.querySelector("h2").innerHTML = newsfeed[a].username + ": " + newsfeed[a].timeline;
        }
    }
}

function login() {
    do {
        var usernamePrompt = prompt("Please enter your username:");
        var passwordPrompt = prompt("Please enter your password:");
    } while (!(isUserValid(usernamePrompt, passwordPrompt)));

    signIn(usernamePrompt, passwordPrompt);
}

login();