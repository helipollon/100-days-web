//functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if(b == 0) {
        return "Error";
    }
    return a / b;
}

function increment(n) {
    return ++n;
}

function decrement(n) {
    return --n;
}

let n = 10;
console.log(increment(n));
console.log(decrement(n));

let a = 10;
let b = 5;
console.log(add(a, b));
console.log(subtract(a, b));
console.log(multiply(a, b));
console.log(divide(a, b));

// function declaration
function sayHello() {
    console.log("Hello");
}

sayHello();

// function expression
let sayBye = function() {
    console.log("Bye");
}

sayBye();

