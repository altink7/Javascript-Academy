// 1. Kleinste Bausteine (Funktionen)
function berechneSteuer() {
    console.log("Steuer berechnen...");
}

function berechneAbzuege() {
    console.log("Abzüge berechnen...");
}

function berechneEinkommen() {
    console.log("Einkommen berechnen...");
}

// 2. Zusammenfuehrung der Bausteine
function system() {
    berechneEinkommen();
    berechneAbzuege();
    berechneSteuer();
}

system();
