// type Point = {
//     x: number;
//     y: number;
// };
// function printPoint(point: Point): void {
//     console.log(`X: ${point.x}, Y: ${point.y}`);
// }
// const p1: Point = { x: 10, y: 20 };
// printPoint(p1);

// lab9

// function move(direction: "up" | "down" | "left" | "right"): void {
//     console.log(`Moving ${direction}`);
// }
// move("up");
// move("left");
// function formatValue(value: string | number): void {
//     if (typeof value === "string") {
//         console.log(value.toUpperCase());
//     } else {
//         console.log(Math.round(value));
//     }
// }
// formatValue("hello");
// formatValue(12.7);

//Lab10

// interface User {
//     readonly id: number;
//     name: string;
//     age?: number;
// }
// const user1: User = {
//     id: 101,
//     name: "Anil",
//     age: 22
// };
// console.log("ID:", user1.id);
// console.log("Name:", user1.name);
// console.log("Age:", user1.age);
// interface Calculator {
//     add(a: number, b: number): number;
//     multiply(a: number, b: number): number;
// }
// const calc: Calculator = {
//     add(a, b) {
//         return a + b;
//     },
//     multiply(a, b) {
//         return a * b;
//     }
// };
// console.log("Addition:", calc.add(10, 5));
// console.log("Multiplication:", calc.multiply(10, 5));

// lab 11

// interface Student {
//     name: string;
//     marks: number;
// }

// type StudentList = Student[];
// const students: StudentList = [
//     { name: "Ravi", marks: 85 },
//     { name: "Anita", marks: 90 },
//     { name: "Kiran", marks: 78 }
// ];
// students.forEach(student => {
//     console.log(`Name: ${student.name}, Marks: ${student.marks}`);
// });

// Type alias
type PointType = {
    x: number;
    y: number;
};

// // Interface
// interface PointInterface {
//     x: number;
//     y: number;
// }

// // Function that accepts both type and interface
// function printPoint(point: PointType | PointInterface): void {
//     console.log(`X: ${point.x}, Y: ${point.y}`);
// }

// // Function calls
// printPoint({ x: 10, y: 20 });
// printPoint({ x: 5, y: 15 });

// lab 12

// enum Direction {
//     Up,
//     Down,
//     Left,
//     Right
// }
// enum Status {
//     PENDING = "PENDING",
//     SUCCESS = "SUCCESS",
//     FAILED = "FAILED"
// }
// function printStatusOrDirection(value: Direction | Status): void {
//     console.log("Value:", value);
// }
// let dir: Direction = Direction.Left;
// let stat: Status = Status.SUCCESS;
// printStatusOrDirection(dir);
// printStatusOrDirection(stat);

// console.log("Direction enum value:", dir);
// console.log("Status enum value:", stat);
