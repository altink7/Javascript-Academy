class CarDealer {

    doColdCalling(model) {

        let customer1 = new customer();
        customer1.name = "Sandra Müller";

        let customer2 = new customer();
        customer2.name = "Sabine Moser";

        return [customer1, customer2];
    }

    beKindToClients(model) {

        let customer1 = new customer();
        customer1.name = "Fritz Mayer";

        let customer2 = new customer();
        customer2.name = "Thomas Schwarz";

        let customer3 = new customer();
        customer3.name = "Peter Berger";

        return [customer1, customer2, customer3];
    }
}