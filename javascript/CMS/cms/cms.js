
function check() {
    // Get input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("Email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("Confirm password").value;
    var contact = document.getElementById("contact").value;

    // Check empty fields
    if (name === "" || email === "" || password === "" || confirmPassword === "" || contact === "") {
        alert("All fields are required!");
        return false;
    }


    // Password match
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return false;
    }


    // Success
    alert("Form validation successful!");
    return true;
}
var storedEmail = localStorage.getItem("email");
var storedPassword = localStorage.getItem("password");
 if (email === storedEmail && password === storedPassword) {
        alert("Login successful!");
        window.location.href = "home.html"; // Redirect to Home page
    } else {
        alert("Invalid Email or Password");
    }