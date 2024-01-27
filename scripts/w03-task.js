/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    let addNumber1 = Number(document.querySelector("#add1").value);
    let addNumber2 = Number(document.querySelector("#add2").value);
    document.querySelector("#sum").value = add(addNumber1, addNumber2);
}

document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
let subtract = function (subtract1, subtract2) {
    return subtract1 - subtract2;
};

let subtractNumbers = function () {
    let subtractOne = Number(document.querySelector("#subtract1").value);
    let subtractTwo = Number(document.querySelector("#subtract2").value);
    document.querySelector("#difference").value = subtract(subtractOne, subtractTwo);
};

document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
let multiply = (factor1, factor2) => factor1 * factor2;
let multiplyNumbers = () => {
    let factorOne = Number(document.querySelector("#factor1").value);
    let factorTwo = Number(document.querySelector("#factor2").value);
    document.querySelector("#product").value = multiply(factorOne, factorTwo);
}

document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
let divide = (dividend, divisor) => dividend / divisor;
let divideNumbers = () => {
    let dividend = Number(document.querySelector("#dividend").value);
    let divisor = Number(document.querySelector("#divisor").value);
    document.querySelector("#quotient").value = divide(dividend, divisor);
}

document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */
let getTotalDue = () => {
    let subtotal = Number(document.querySelector("#subtotal").value);
    let membership = document.querySelector("#member").checked;

    if (membership) {
        subtotal = subtotal - (subtotal * 0.2);
    }

    subtotal = subtotal.toFixed(2);
    document.querySelector("#total").innerHTML = `$ ${subtotal}`;
}

document.querySelector("#getTotal").addEventListener("click", getTotalDue);

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let num_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.querySelector("#array").innerHTML = num_array
/* Output Odds Only Array */
document.querySelector("#odds").innerHTML = num_array.filter(number => number % 2 === 1);
/* Output Evens Only Array */
document.querySelector("#evens").innerHTML = num_array.filter(number => number % 2 === 0);
/* Output Sum of Org. Array */
document.querySelector("#sumOfArray").innerHTML = num_array.reduce((sum, number) => sum + number);
/* Output Multiplied by 2 Array */
document.querySelector("#multiplied").innerHTML = num_array.map(number => number * 2);
/* Output Sum of Multiplied by 2 Array */
let multiplied = num_array.map(number => number * 2);
document.querySelector("#sumOfMultiplied").innerHTML = multiplied.reduce((sum, number) => sum + number);