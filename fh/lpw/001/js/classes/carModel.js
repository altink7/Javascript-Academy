class car {

    constructor() {
        this.model = "";
        this.price = 0;
        this.state = "planned";
        this.carParts = [];
    }

    setModel(model) {
        this.model = model;
    }

    setPrice(price){
        this.price = price;
    }

    setState(state){
        this.state = state;
    }

    addParts(carPart) {
        this.carParts.push( carPart );
    }

}