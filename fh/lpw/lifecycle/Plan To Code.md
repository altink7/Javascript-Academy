# Wie komme ich von einer Handskizze zu konkreten Implementierungsschritten

## Beispiel: Erstellung eines einfachen Einkaufswagens mit OOP in JavaScript (ECMA)

### 1. Skizze des Systems

- Der Benutzer kann Artikel zum Einkaufswagen hinzufügen.
- Der Benutzer kann Artikel aus dem Einkaufswagen entfernen.
- Der Benutzer sieht den Gesamtpreis und kann zur Kasse gehen.

### 2. Schritte zur Implementierung

#### Schritt 1: Entwurf der Datenstruktur

Zuerst definieren wir, wie der Einkaufswagen gespeichert wird. In einem objektorientierten Ansatz erstellen wir eine
Klasse `Einkaufswagen`, die die Artikel verwaltet.

```javascript
class Einkaufswagen {
    constructor() {
        this.artikel = [];
    }

    hinzufuegen(artikel) {
        this.artikel.push(artikel);
        console.log(`${artikel.name} wurde zum Einkaufswagen hinzugefügt.`);
    }

    entfernen(artikelName) {
        this.artikel = this.artikel.filter(artikel => artikel.name !== artikelName);
        console.log(`${artikelName} wurde aus dem Einkaufswagen entfernt.`);
    }

    berechneGesamtpreis() {
        let gesamtpreis = 0;
        this.artikel.forEach(artikel => {
            gesamtpreis += artikel.preis;
        });
        console.log(`Der Gesamtpreis beträgt: €${gesamtpreis}`);
    }
}
```

#### Schritt 2: Artikel als Objekte definieren

Nun definieren wir die Artikel als Objekte, die in den Einkaufswagen gelegt werden können. Jedes Artikelobjekt hat
Eigenschaften wie `name` und `preis`.

```javascript
let artikel1 = {name: "T-Shirt", preis: 20};
let artikel2 = {name: "Jeans", preis: 40};
```

#### Schritt 3: Nutzung der Einkaufswagen-Klasse

Erstellen wir eine Instanz der `Einkaufswagen`-Klasse und nutzen die Methoden, um Artikel hinzuzufügen, zu entfernen und
den Gesamtpreis zu berechnen.

```javascript
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
```

#### Schritt 4: Erweiterungen und Verbesserungen

Mit diesem einfachen System können wir das Design weiter verbessern. Wir könnten beispielsweise zusätzliche Methoden für
die Verwaltung von Rabatten, Lieferkosten oder Mengen der Artikel hinzufügen.

```javascript
class Einkaufswagen {
    constructor() {
        this.artikel = [];
        this.discount = 0;
    }

    hinzufuegen(artikel) {
        this.artikel.push(artikel);
        console.log(`${artikel.name} wurde zum Einkaufswagen hinzugefügt.`);
    }

    entfernen(artikelName) {
        this.artikel = this.artikel.filter(artikel => artikel.name !== artikelName);
        console.log(`${artikelName} wurde aus dem Einkaufswagen entfernt.`);
    }

    berechneGesamtpreis() {
        let gesamtpreis = 0;
        this.artikel.forEach(artikel => {
            gesamtpreis += artikel.preis;
        });
        gesamtpreis -= this.discount;
        console.log(`Der Gesamtpreis beträgt: €${gesamtpreis}`);
    }

    setDiscount(rabatt) {
        this.discount = rabatt;
    }
}
```