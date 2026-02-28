function greetUser(name: string, title?: string): void {
    if (title) {
        console.log(`Hello, ${title} ${name}!`);
    } else {
        console.log(`Hello, ${name}!`);
    }
}
greetUser("Ravi");
greetUser("Ravi", "Mr.");
const addNumbers = (a: number, b: number): number => {
    return a + b;
};
console.log("Sum:", addNumbers(10, 20));
