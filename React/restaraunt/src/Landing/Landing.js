
import "./Landing.css";
import { Link } from "react-router-dom";

function Landing(){
    
    
    return (
        <>
        
            <h1>welcome to MANA Restaurant </h1>
            <div className="page">
            <div className="left">
                <Link to="Login"><button>Login</button></Link>{" "}
                <Link to="Register"><button>Register</button></Link>
            </div>
            </div>
        </>
        
    )
   
}
export default Landing;