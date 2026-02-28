import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate(); 
  const handleSubmit = (e) => {
    e.preventDefault();                
    alert("Sign in successful!"); 
    navigate("/Products");                 
  };
  
  return (
    <div className="login-container">
      <h2>Login</h2>

      
      <form className="login-form"  onSubmit={handleSubmit} >
        <label>Email:</label>
        <input type="text" placeholder="abcd@gmail.com" /><br/>

        <label>Password:</label>
        <input type="password" placeholder="Strong password" /><br/>

        <button type="submit">Login</button>{" "}
        <button type="button">
            New User?<Link to="/Signup">Login</Link>
          </button>
      </form>
    </div>
  );
}

export default Login;
