class productionDepartment{

    constructor() {
        this.car = new car();
        this.amount = 100;
        this.cars = [];
    }

    startProduction(model, carParts) {
        console.log("Producing now Model "+model);
        this.car.setModel(model);

        for(let i in carParts){
            this.car.addParts(carParts[i]);
        }

        for(let j=0; j<this.amount; j++ ) {
            this.cars.push( this.produce() );
        }

        return this.cars;
    }


    produce() {

        //set the car together
        let car = this.assemble(this.car);
        this.cars.push(car);

    }

    assemble(carPrototype) {

        let newCar = new car();
        newCar.setModel( carPrototype.model );
        newCar.carParts = carPrototype.carParts;

        newCar.state = "assembled";

        return newCar;
    }

}