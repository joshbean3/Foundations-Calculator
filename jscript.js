function add(a, b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let number1 = 0;
let operate = "";
let number2 = 0;

// Create operator function to call operator
function operate(operator, number1, number2) {
    if (operator === "+") {
        return add(number1, number2);
    } else if (operator === "-") {
        return subtract(number1, number2);
    } else if (operator === "x") {
        return multiply(number1, number2);
    } else if (operator === "/") {
        if (number2 === 0) {
            return "ERROR"; // divide by zero produces an error
        } else {
            return divide(number1, number2);
        }
    } else {
        return "ERROR"; // anything else will create an error
    }
}

let display = document.getElementById("calcDisplay");




