// plus
function addTwoNumbers(number1, number2) {
    console.log(number1, number2);
    // console.log(number2);
    var total = number1 + number2;
    return total;
}
var firstNumber = 35;
var secondNumber = 45;
var result = addTwoNumbers(firstNumber, secondNumber);
console.log('result value', result);

// multiple
function multipleTwoNumbers(num1, num2) {
    var result = num1 * num2;
    return result;
}
var total = multipleTwoNumbers(5, 100);
console.log('total after multiple', total);

// minus
function minusTwoNumbers(num1, num2) {
    var result = num1 - num2;
    return result;
}
var total = minusTwoNumbers(40, 10);
console.log('total after minus', total);


// divided
function dividedTwoNumbers(num1, num2) {
    var result = num1 / num2;
    return result;
}
var total = dividedTwoNumbers(40, 10);
console.log('total after divided', total);
