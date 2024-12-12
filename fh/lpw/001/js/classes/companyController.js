class companyController {

    constructor() {

        this.purchase = new purchaseDepartment();
        this.production = new productionDepartment();
        this.sales = new salesDepartment();
        this.orderManagement = new orderManagementDepartment();

        this.models = ['M1', 'M2', 'M3'];
    }

    produceAndSellCars() {
        console.log("Let's sell some cars ... ");
        let profit = 0;

        for (let i in this.models) {
            let clients = this.sales.advertise(this.models[i]);

            let carParts = this.purchase.purchaseModelParts(this.models[i]);
            let cars = this.production.startProduction(this.models[i], carParts);
            let orders = this.orderManagement.setUpContracts(clients, cars);

            profit += orders.getProfits();

            console.log("Deals " + this.models[i], orders.deals);
        }

        console.log("Profit: EUR " + new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(profit));

    }
}