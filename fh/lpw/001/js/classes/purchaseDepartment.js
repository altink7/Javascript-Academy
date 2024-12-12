class purchaseDepartment {

    constructor() {
        this.model1Parts = [];
        this.model2Parts = [];
        this.model3Parts = [];
    }

    purchaseModelParts(modelNumber) {

        console.log("Purchasing carparts on the market for Model " + modelNumber);

        switch (modelNumber) {
            case "M1":
                return this.purchaseModel1Parts();
            case "M2":
                return this.purchaseModel2Parts();
            case "M3":
                return this.purchaseModel3Parts();
        }
    }

    purchaseModel1Parts() {

        let europeanMarket = new market("Europe");
        let neededParts = ['Wheels', 'Motors', 'Doors', 'Glass'];

        for (let i in neededParts) {
            this.model1Parts.push(europeanMarket.negotiateAndBuyPart(neededParts[i]));
        }

        return this.model1Parts;
    }

    purchaseModel2Parts() {
        return this.purchaseModel1Parts();
    }

    purchaseModel3Parts() {
        return this.purchaseModel1Parts();
    }
}