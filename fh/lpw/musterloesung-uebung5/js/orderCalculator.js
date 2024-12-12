class orderCalculator {

    constructor() {
        //Eigenschaften unseres Formulars: die Elemente die es enthält
        this.burgerCountField = document.getElementsByName('burger')[0];
        this.sideDishChoiceFields = document.getElementsByName('side-dish');
        this.drinkCountField = document.getElementsByName('beverage')[0];
        this.actionButton = document.getElementById('submit-order');
        this.outputArea = document.getElementById("receipt-output");

        //Eigenschaft auf der wir operieren
        this.order = [];

        //Methode die unser Objekt vorbereitet
        this.productPrices = this.prepareProductsPrices();
    }

    //Explizite Methode, damit von außen klar ist was passiert
    initGuiEvents() {
        this.actionButton.addEventListener('click', () => this.generateReceipt())
    }

    generateReceipt() {

        let userOrder = this.receiveOrderFormInput();

        let receiptLines = this.getReceiptLines();

        //Ausgabe erzeugen
        this.printOutput(receiptLines);
    }


    prepareProductsPrices() {

        let prices = [];
        prices['burger'] = 5;
        prices['salad'] = 2;
        prices['fries'] = 3.5;
        prices['beverage'] = 3;

        return prices;
    }

    receiveOrderFormInput() {

        let burgerCount = this.burgerCountField.value;
        if (burgerCount > 0) {
            this.order['burger'] = burgerCount;
        } else {
            this.order['burger'] = 0;
        }

        if (this.sideDishChoiceFields[0].checked) {
            this.order['salad'] = 1;
        } else {
            this.order['salad'] = 0;
        }

        if (this.sideDishChoiceFields[1].checked) {
            this.order['fries'] = 1;
        } else {
            this.order['fries'] = 0;
        }

        if (this.drinkCountField.checked) {
            this.order['beverage'] = 1;
        } else {
            this.order['beverage'] = 0;
        }
    }


    getReceiptLines() {

        let userOrder = this.order;
        let productPrices = this.productPrices;

        let total = 0;
        let outputLines = "";

        if (userOrder['burger'] > 0) {

            let articleTotal = productPrices['burger'] * userOrder['burger'];
            let line = "Burger: " + userOrder['burger'] + "x : EUR " + articleTotal + " <br />";

            total += articleTotal;
            outputLines += line;
        }

        if (userOrder['salad'] > 0) {
            let line = "Salat: " + userOrder['salad'] + "x : EUR " + productPrices['salad'] + " <br />";
            total += productPrices['salad'];
            outputLines += line;
        }

        if (userOrder['fries'] > 0) {
            let line = "Pommes: " + userOrder['fries'] + "x : EUR " + productPrices['fries'] + " <br />";
            total += productPrices['fries'];
            outputLines += line;
        }

        if (userOrder['beverage'] > 0) {
            let line = "Getränk: " + userOrder['beverage'] + "x : EUR " + productPrices['beverage'] + " <br />";
            total += productPrices['beverage'];
            outputLines += line;
        }

        outputLines += "<br />";

        if (total > 10) {
            let rebate = total * 0.15;
            let rebateLine = "Rabatt: 15%: - EUR " + this.round2Decimals(rebate) + "<br />";

            total = total - rebate;
            outputLines += rebateLine;
        }

        outputLines += "<hr>";

        let totalLine = "<b>Summe: EUR " + this.round2Decimals(total) + "</b><br />";
        outputLines += totalLine;

        let thankLine = "<br /> Vielen Dank für die Bestellung!";
        outputLines += thankLine;

        return outputLines;
    }

    round2Decimals(number) {

        let helper = number * 100;
        let rounded = Math.round(helper);

        return rounded / 100;
    }

    printOutput(outputLines) {

        this.outputArea.innerHTML = "<h4>Ihre Bestellung</h4>" + outputLines;
    }

}
