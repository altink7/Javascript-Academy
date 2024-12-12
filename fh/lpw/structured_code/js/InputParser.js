class InputParser {

    constructor(input) {
        this.input = input;
    }
    
    parseNumbers() {
        let unfilteredNumbers = this.input.split('-')[1];
        return unfilteredNumbers.split(',');
    }

    parseMethod() {
        return this.input.split('-')[0];
    }
}