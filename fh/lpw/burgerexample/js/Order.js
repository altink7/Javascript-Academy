class Order {
    constructor() {
        this.products = [];
        // this is the value of discount for this order
        this.discountValue = 0;
        // discount value from exercise
        this.discount = 0.15;
        this.priceOrder = 0;
    }

    addProduct(product) {
        console.log(`Adding a new Product : ${product.toString()}`)
        this.products.push(product);
    }

    calculatePrice() {
        console.log("Calculating Price ...")
        this.priceOrder = 0;
        for (let i = 0; i < this.products.length; i++) {
            const product = this.products[i];
            let price = parseFloat(product.price);

            if (isNaN(price) || price == null) {
                continue;
            }

            this.priceOrder += price;
        }

        if (this.hasDiscount()) {
            this.priceOrder *= (1 - this.discount);
        }

        return this.priceOrder;
    }

    hasDiscount() {
        this.discountValue = 0;
        // Ist die Bestellung > als EUR 10,00 bekommt der Kunde 15% Rabatt
        if (this.priceOrder > 10) {
            this.discountValue = this.priceOrder * this.discount;
            return true;
        } else {
            return false;
        }
    }

    toString() {
        //Die Ausgabe soll als Kundenbeleg folgendes Enthalten:
        //    je gewähltes Produkt eine Zeile mit der Bezeichnung und dem Preis
        //eine Zeile, die etwas darüber aussagt, ob ein Rabatt gewährt wurde, und wenn ja in
        //welcher Höhe
        //die Gesamtsumme abzgl. eines eventuellen Rabatts.
        let output = `Bestellung <hr>`;

        for (let i = 0; i < this.products.length; i++) {
            const product = this.products[i];
            output += `Position Nr: ${i + 1} - ${product.toString()} <br>`
        }

        if (this.discountValue > 0) {
            let businessRoundedDiscountValue = this.roundToBusinessValue(this.discountValue)
            output += `Discount (${this.discount * 100} %) : ${businessRoundedDiscountValue} € <br>`;
        }

        let businessRoundedPriceOrder = this.roundToBusinessValue(this.priceOrder)
        output += `<b>Total Price: ${businessRoundedPriceOrder} €</b>`;

        return output;
    }

    roundToBusinessValue(value) {
        let businessRounded = Math.round(value * 100) / 100;
        return businessRounded.toFixed(2);
    }
}