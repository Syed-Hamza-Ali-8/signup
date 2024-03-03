document.write("JavaScript connected");
calculationOperators = prompt("Enter the operator (+ - * /)")
var firstNum = prompt("Enter first number")
firstNum = parseInt(firstNum)
var secondNum = prompt("Enter second number")
secondNum = parseInt(secondNum)
if (calculationOperators == "+") {
    totalNum = firstNum + secondNum
} else if (calculationOperators == "-") {
    totalNum = firstNum - secondNum
} else if (calculationOperators == "*") {
    totalNum = firstNum * secondNum
} else if (calculationOperators == "/") {
    totalNum = firstNum / secondNum
}
alert(totalNum)