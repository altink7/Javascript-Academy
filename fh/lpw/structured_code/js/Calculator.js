class Calculator {

    constructor(functionMethod, inputNumbers) {
        this.functionMethod = functionMethod;
        this.inputNumbers = inputNumbers;
    }


    calculate() {
        console.log(`Calculating ${this.functionMethod} ...`);

        switch (this.functionMethod) {
            case "Quadrat":
                return this.calculatePower();
            case "Mittelwert":
                return this.calculateMean();
            case "Min":
                return this.calculateMin();
            case "Max":
                return this.calculateMax();
        }
    }

    calculatePower() {
        return Math.pow(this.inputNumbers[0], 2)
    }

    calculateMean() {
        let numbers = this.convertToIntArray(this.inputNumbers);
        let sum = 0;
        let numberCount = 0;

        for (let i = 0; i < numbers.length; i++) {
            numberCount++;
            sum += numbers[i];
        }

        return sum / numberCount;
    }

    calculateMin() {
        let numbers = this.convertToIntArray(this.inputNumbers);
        let minValue = numbers[0];

        for (let i = 0; i < numbers.length; i++) {
            let number = numbers[i];

            if (number < minValue) {
                minValue = number;
            }
        }

        return minValue;

    }

    calculateMax() {
        let numbers = this.convertToIntArray(this.inputNumbers);
        let maxValue = numbers[0];

        for (let i = 0; i < numbers.length; i++) {
            let number = numbers[i];

            if (number > maxValue) {
                maxValue = number;
            }
        }

        return maxValue;
    }

    convertToIntArray(stringArray) {
        let intArray = [];

        for (let i = 0; i < stringArray.length; i++) {
            let number = parseFloat(stringArray[i]);

            if (isNaN(number)) {
                continue;
            }

            intArray.push(number);
        }

        return intArray;
    }
}