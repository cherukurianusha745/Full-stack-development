import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();                
    alert("Registration successful!"); 
    navigate("/Home");                 
  };

  return (
    <div className="register-container">
      <h2>Register</h2>

     
      <form className="register-form" onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" placeholder="anu" /><br/>

        <label>Email</label>
        <input type="email" placeholder="abcd@gmail.com" /><br/>

        <label>Password</label>
        <input type="password" placeholder="strong password" /><br/>

        <div className="btn-group">
          <button type="submit">Register</button>{" "}
          <button type="button">
            Already register? <Link to="/Login">Login</Link>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
