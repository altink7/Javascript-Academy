class Aktie {

    constructor(name, preis, menge) {
        this.name = name;
        this.preis = preis;
        this.menge = menge;
    }

    isAktiv() {
        return this.menge !== 0;
    }

    
    toString() {

    }
}