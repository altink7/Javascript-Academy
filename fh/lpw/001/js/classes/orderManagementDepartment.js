class orderManagementDepartment {

    constructor() {
        this.orders = new ordersList();
        this.cars = [];
    }

    setUpContracts(clients, cars) {

        this.orders = new ordersList();
        console.log("Setting up Deals for " + clients.length + " happy customers ");

        this.cars = cars;

        for (let i in clients) {

            let car = this.getRandomCar();
            car.price = this.getRandomPrice();
            car.setState("offered");
            this.orders.addDeal(clients[i], car);
        }

        return this.orders;
    }

    getRandomCar() {

        let randomIndex = this.getRandomInt(this.cars.length);

        while (this.cars[randomIndex] === undefined) {

            randomIndex = this.getRandomInt(this.cars.length);
        }

        let car = this.cars[randomIndex];
        this.cars[randomIndex] = undefined;

        return car;
    }

    getRandomPrice() {

        return this.getRandomInt(200000);
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

}