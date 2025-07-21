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
let operatorValue = "";
let number2 = 0;
let justCalculated = false;

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


let display = document.querySelector("#calcDisplay");


let digitButtons = document.querySelectorAll(".digit");
for (i = 0; i < digitButtons.length; i++) {
    digitButtons[i].addEventListener("click", function() {
        if (display.textContent === "Welcome") {
            display.textContent = this.textContent;
        } else if (justCalculated === true) {
            display.textContent = this.textContent
            justCalculated = false;
        }
        else { display.textContent += this.textContent;
        }});
}

let operatorButtons = document.querySelectorAll(".operatorBs")
for (i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener("click", function () {
        justCalculated = false;
        number1 = display.textContent;
        operatorValue = this.textContent;
        display.textContent = "";
        });
    } 
    
equalButton = document.querySelector(".equalB");
equalButton.addEventListener("click", function () {
    number2 = display.textContent;
    display.textContent = operate(operatorValue, parseInt(number1), parseInt(number2));
    justCalculated = true;
    });

let clearButton = document.querySelector(".clear")
clearButton.addEventListener("click", function() {
    display.textContent = "";
    number1 = 0;
    number2 = 0;
    operatorValue = "";
    justCalculated = false;
})




