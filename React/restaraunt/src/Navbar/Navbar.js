import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar(){
    return(
        <>
        <nav>
            <ul>
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/specialdish">Specialdish</Link></li>
        <li><Link to="/Menu">Menu</Link></li>
               
             
            </ul>
        </nav>
       
        </>
        
    )
}
export default Navbar;