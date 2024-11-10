// Example 1: Declaring Variables with let and const
let name = 'Student';      // 'let' for changeable variables
const course = 'JavaScript Academy'; // 'const' for constants

// Example 2: Re-assigning Variables
name = 'Advanced Learner';

// Example 3: Undefined and Null
let age;
console.log(age); // Output: undefined
age = null;
console.log(age); // Output: null

// Example 4: Variable Scope with let and const
{
    let localVar = 'Scoped Variable';
    console.log(localVar); // Accessible here
}
// console.log(localVar); // Error: localVar is not defined outside the block

// Task: Try defining a 'const' and attempt to change it, noting any error.
