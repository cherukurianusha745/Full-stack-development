// Navbar & Footer
document.getElementById("navbar").innerHTML = `
<a href="index.html">Home</a>
<a href="products.html">Products</a>
<a href="cart.html">Cart</a>
<a href="about.html">About</a>
<a href="contact.html">Contact</a>
<a href="login.html">Login</a>
<a href="signup.html">Signup</a>
`;

document.getElementById("footer").innerHTML = `
<p>© 2026 SmartRetail | Contact: smart@retail.com</p>
`;

// Signup
if (document.getElementById("signupForm")) {
  signupForm.onsubmit = e => {
    e.preventDefault();
    let user = {
      name: name.value,
      email: email.value,
      password: password.value
    };
    localStorage.setItem("user", JSON.stringify(user));
    msg.innerText = "Signup successful!";
  };
}

// Login
if (document.getElementById("loginForm")) {
  loginForm.onsubmit = e => {
    e.preventDefault();
    let user = JSON.parse(localStorage.getItem("user"));
    if (user && loginEmail.value === user.email && loginPassword.value === user.password) {
      localStorage.setItem("loggedIn", true);
      window.location.href = "index.html";
    } else {
      loginMsg.innerText = "Invalid credentials";
    }
  };
}

// Cart
function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart");
}

if (document.getElementById("cartItems")) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let total = 0;
  cart.forEach(item => {
    cartItems.innerHTML += `<p>${item.name} - ₹${item.price}</p>`;
    total += item.price;
  });
  document.getElementById("total").innerText = "Total: ₹" + total;
}

// Billing
if (document.getElementById("billDetails")) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let sum = cart.reduce((a,b)=>a+b.price,0);
  billDetails.innerText = "Total Amount: ₹" + sum;
}

// Contact
function submitContact(e) {
  e.preventDefault();
  contactMsg.innerText = "Message sent successfully!";
}
