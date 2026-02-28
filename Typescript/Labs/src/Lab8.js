// type Point = {
//     x: number;
//     y: number;
// };
// function printPoint(point: Point): void {
//     console.log(`X: ${point.x}, Y: ${point.y}`);
// }
// const p1: Point = { x: 10, y: 20 };
// printPoint(p1);
// Function that accepts both type and interface
function printPoint(point) {
    console.log("X: ".concat(point.x, ", Y: ").concat(point.y));
}
// Function calls
printPoint({ x: 10, y: 20 });
printPoint({ x: 5, y: 15 });
