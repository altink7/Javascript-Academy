class Depot {

    constructor() {
        this.aktien = [];
        this.kaufgebuehr = 0.02; // 2 %
        this.verkaufsGebuehr = 0.01; // 1 %
        this.rabattBedingungVolumen = 1000;
        this.rabattValue = 0.1; // 10 %
        this.gebuehrenIndex = 1; // 100 %
        this.gesamtPreis = 0;
        // for toString
        this.kaufArt = "keine angabe";
        this.gebuehrString = 0;
        this.rabattString = 0;
    }


    addAktie(aktie) {
        this.aktien.push(aktie);
    }

    berechneTotalPrice(kaufArt) {
        this.kaufArt = kaufArt;
        let totalPrice = 0;
        this.gesamtPreis = 0;

        for (let i = 0; i < this.aktien.length; i++) {
            let aktie = this.aktien[i];

            if (aktie.preis === null || isNaN(aktie.preis)) {
                continue;
            }

            totalPrice += aktie.preis;
        }


        if (kaufArt === "einkauf") {
            let kaufGebuehrWert = totalPrice * this.kaufgebuehr;
            this.berechneGebuehrenIndex(totalPrice + kaufGebuehrWert);
            let einkaufGebuehr = kaufGebuehrWert * this.gebuehrenIndex;
            this.gebuehrString = einkaufGebuehr;
            this.rabattString = kaufGebuehrWert - einkaufGebuehr;
            totalPrice += einkaufGebuehr;
        } else if (kaufArt === "verkauf") {
            let verkaufGebuehrWert = totalPrice * this.verkaufsGebuehr;
            this.berechneGebuehrenIndex(totalPrice + verkaufGebuehrWert);
            let verkaufGebuehr = verkaufGebuehrWert * this.gebuehrenIndex;
            this.gebuehrString = verkaufGebuehr;
            this.rabattString = verkaufGebuehrWert - verkaufGebuehr;
            totalPrice += verkaufGebuehr;
        }


        this.gesamtPreis = totalPrice;
    }

    berechneGebuehrenIndex(totalPrice) {
        if (totalPrice > this.rabattBedingungVolumen) {
            this.gebuehrenIndex -= this.rabattValue;
        }
    }


    toString() {
        let output = "";

        output += `Kaufart: ${this.kaufArt} <hr>`;
        output += `Gebühr : ${this.gebuehrString + this.rabattString} - ${this.rabattString} = ${this.gebuehrString} <br>`;

        output += `Gesamtpreis: <b>${this.gesamtPreis} </b>`;

        return output;
    }
}