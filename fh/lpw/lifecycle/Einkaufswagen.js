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
        // alternative indexed for-loop
        // for (let i = 0; i < this.artikel.length; i++) {
        //     gesamtpreis += this.artikel[i].preis;
        // }

        gesamtpreis -= this.discount;
        console.log(`Der Gesamtpreis beträgt: €${gesamtpreis}`);
    }

    setDiscount(rabatt) {
        this.discount = rabatt;
    }
}

module.exports = Einkaufswagen;