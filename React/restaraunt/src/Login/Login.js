import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();          
    alert("Login successful!");  
    navigate("/Home");           
  };

  return (
    <div className="login-container">
      <h2>Login</h2>

      
      <form className="login-form" >
        <label>Username</label>
        <input type="text" placeholder="Anu" /><br/>

        <label>Password</label>
        <input type="password" placeholder="Strong password" /><br/>

        <button type="submit">Login</button>{" "}
        <button type="button">
          New user? <Link to="/Register">Register</Link>
        </button>
      </form>
    </div>
  );
}

export default Login;
