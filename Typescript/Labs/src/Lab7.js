function greetUser(name, title) {
    if (title) {
        console.log("Hello, ".concat(title, " ").concat(name, "!"));
    }
    else {
        console.log("Hello, ".concat(name, "!"));
    }
}
greetUser("Ravi");
greetUser("Ravi", "Mr.");
var addNumbers = function (a, b) {
    return a + b;
};
console.log("Sum:", addNumbers(10, 20));
