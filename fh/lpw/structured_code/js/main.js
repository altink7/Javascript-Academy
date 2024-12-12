function runApplication() {
    let input = document.getElementById("eingabe").value.trim();
    let output = document.getElementById("ausgabe");

    // i: Parsing functionality
    let parser = new InputParser(input);
    let methodFunction = parser.parseMethod();
    let numbers = parser.parseNumbers();

    console.log("Method: " + methodFunction);
    console.log("Numbers: " + numbers);

    // i: Calculating functionality
    let calculator = new Calculator(methodFunction, numbers);
    let outputValue = calculator.calculate();

    // i: App Output
    output.innerHTML = outputValue;
}


document.getElementById("calculate").addEventListener('click', () => {
    event.preventDefault();
    runApplication();
});