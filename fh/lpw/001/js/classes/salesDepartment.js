class salesDepartment {

    constructor() {

        this.tvMarketing = new tvMarketing();
        this.carDealer = new carDealer();

        this.customers = [];
    }

    advertise(model) {

        this.customers = [];
        console.log("Advertising Model "+model+" started ... ");

        this.addCustomers(this.tvMarketing.doTVSpots(model));

        this.addCustomers(this.carDealer.doColdCalling(model));
        this.addCustomers(this.carDealer.beKindToClients(model));

        return this.customers;
    }

    addCustomers(customerList) {
        for (let i in customerList) {

            this.customers.push(customerList[i]);
        }
    }
}