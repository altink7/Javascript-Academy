class ordersList{

    constructor() {
        this.deals = [];
        this.profit = 0;
    }


    addDeal(client, car) {

        //je nach client und car könnte man jetzt  noch feilschen lassen

        this.deals.push ( {
            "car": car,
            "client": client
        });

        this.profit += car.price;
    }


    getProfits() {
        return this.profit;
    }
}