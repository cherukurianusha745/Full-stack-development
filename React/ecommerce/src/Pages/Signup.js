import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();                
    alert("Sign in successful!"); 
    navigate("/Products");                 
  };

  return (
    <div className="register-container">
      <h2>Signup Page</h2>

     
      <form className="register-form" onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" placeholder="anu" /><br/>

        <label>Email:</label>
        <input type="email" placeholder="abcd@gmail.com" /><br/>

        <label>Password:</label>
        <input type="password" placeholder="strong password" /><br/>
        <label>Phone Number:</label>
        <input type="Phone number" placeholder="Enter 10 digits" /><br/>
        <label>Adress:</label>
        <input type="Adress" placeholder="Enter Adress" /><br/>

        <div className="btn-group">
          <button type="submit">Signup</button>{" "}
          <button type="button">
            Already Signup? <Link to="/Login">Login</Link>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
