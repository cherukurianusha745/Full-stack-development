function calculateSquare(num: number): number {
    return num * num;
}
function isEven(num: number): boolean {
    return num % 2 === 0;
}
const squareResult = calculateSquare(5);
const evenResult = isEven(10);
console.log("Square:", squareResult);
console.log("Is Even:", evenResult);
