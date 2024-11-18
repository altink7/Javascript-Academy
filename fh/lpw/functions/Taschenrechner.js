const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function addiere(a, b) {
    return a + b;
}

function berechne(a, b, operation) {
    if (operation === "+") {
        return addiere(a, b);
    } else {
        return "Unbekannte Operation";
    }
}

function steuereAnwendung() {
    console.log("Willkommen beim Taschenrechner!");

    rl.question("Gib die erste Zahl ein: ", (input1) => {
        const a = parseFloat(input1);

        rl.question("Gib die zweite Zahl ein: ", (input2) => {
            const b = parseFloat(input2);

            rl.question("Welche Operation möchtest du durchführen? (+): ", (operation) => {
                const ergebnis = berechne(a, b, operation);
                console.log(`Das Ergebnis ist: ${ergebnis}`);

                rl.close();
            });
        });
    });
}

steuereAnwendung();
