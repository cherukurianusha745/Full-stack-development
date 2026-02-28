

// let arrays: string[] = ["hi", "hello", "good"];

// function hello(arrays: string[]) {
//     let output: string | undefined;

//     arrays.forEach((data) => {
//         output = data + "2";
//         return output;
//     });

//     return output;
// }

// console.log(hello(arrays));

// function greetUser(name:string,title:string="Mr./Ms."): string{
//     if(title){
//         return `Hello,${title} ${name}!`;
//             }
//     else{
//         return `hello,${name}!`;
//     }
//         }
// console.log(greetUser("Ravi","Dr."));
// console.log(greetUser("sita"));

type Operation = (a: number, b: number) => number;
const add: Operation = (a, b) => a + b;
const multiply: Operation = (a, b) => a * b;
const sumResult = add(10, 5);
const productResult = multiply(10, 5);
console.log("Sum:", sumResult);
console.log("Product:", productResult);
