import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./Pages/Products";
import Orders from "./Pages/Orders";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import "./App.css"
function App() {
  return (
    <>
    <h1>Welcome to E-Commerce Platform</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
