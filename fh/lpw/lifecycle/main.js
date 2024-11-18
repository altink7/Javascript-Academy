const Einkaufswagen = require('./Einkaufswagen');

let artikel1 = {name: "T-Shirt", preis: 20};
let artikel2 = {name: "Jeans", preis: 40};

// Einkaufswagen erstellen
let meinWarenkorb = new Einkaufswagen();

// Artikel hinzufügen
meinWarenkorb.hinzufuegen(artikel1);
meinWarenkorb.hinzufuegen(artikel2);

// Gesamtpreis berechnen
meinWarenkorb.berechneGesamtpreis();

// Artikel entfernen
meinWarenkorb.entfernen("T-Shirt");

// Gesamtpreis nach Entfernen eines Artikels
meinWarenkorb.berechneGesamtpreis();