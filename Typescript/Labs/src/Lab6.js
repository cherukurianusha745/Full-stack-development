function calculateSquare(num) {
    return num * num;
}
function isEven(num) {
    return num % 2 === 0;
}
var squareResult = calculateSquare(5);
var evenResult = isEven(10);
console.log("Square:", squareResult);
console.log("Is Even:", evenResult);
