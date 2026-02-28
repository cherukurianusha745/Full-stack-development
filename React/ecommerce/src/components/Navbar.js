import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/Products">Products</Link></li>
        <li><Link to="/Orders">Orders</Link></li>
        <li><Link to="/Cart">Cart</Link></li>
        <li><Link to="/Login">Login</Link></li>
        <li><Link to="/Signup">Signup</Link></li>
        
      </ul>
    </nav>
  );
}

export default Navbar;
