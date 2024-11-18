// 1. Systembeschreibung (Top-Level)
function system() {
    // Schritt 1: Berechnung des Einkommens
    berechneEinkommen();
    // Schritt 2: Berechnung der Abzüge
    berechneAbzuege();
    // Schritt 3: Berechnung der Steuer
    berechneSteuer();
}

function berechneEinkommen() {
    console.log("Einkommen berechnen...");
}

function berechneAbzuege() {
    console.log("Abzüge berechnen...");
}

function berechneSteuer() {
    console.log("Steuer berechnen...");
}

system();
