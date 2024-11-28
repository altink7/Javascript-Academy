class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    toString() {
        return `${this.name} - ${this.roundToBusinessValue(this.price)} €`;
        //return this.name + " - " + this.price+ " €";
    }

    roundToBusinessValue(value) {
        let businessRounded = Math.round(value * 100) / 100;
        return businessRounded.toFixed(2);
    }
}