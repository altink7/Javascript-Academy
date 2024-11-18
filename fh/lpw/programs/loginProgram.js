const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function checkeLogin(username, password) {
    if (username === "admin" && password === "passwort123") {
        return true;
    } else {
        return false;
    }
}

function anmeldeSteuerung() {
    console.log("Willkommen zur Anmeldung!");

    rl.question("Benutzername: ", (username) => {
        rl.question("Passwort: ", (password) => {
            if (checkeLogin(username, password)) {
                console.log("Login erfolgreich!");
            } else {
                console.log("Login fehlgeschlagen! Bitte überprüfe deine Eingaben.");
            }
            rl.close();
        });
    });
}

anmeldeSteuerung();
