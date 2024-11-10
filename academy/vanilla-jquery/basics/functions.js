// Example 1: Basic Function
function greet(name) {
    return `Hello, ${name}!`;
}

// Example 2: Function with Multiple Parameters
function add(a, b) {
    return a + b;
}

// Example 3: Default Parameters
function greetWithDefault(name = 'Guest') {
    return `Hello, ${name}!`;
}

// Example 4: Anonymous Functions
const subtract = function (a, b) {
    return a - b;
};

// Example 5: Arrow Functions (Modern JS)
const multiply = (a, b) => a * b;

function calculate(a, b, operation) {
    return operation(a, b);
}


console.log(greet('Student'));
console.log(calculate(5, 3, add));
console.log(calculate(5, 3, subtract));
console.log(calculate(5, 3, multiply));
console.log(calculate(5, 3, (a, b) => a / b));
