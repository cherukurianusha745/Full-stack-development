import "./App.css";
import {  Routes, Route } from "react-router-dom";

import Navbar from "./Navbar/Navbar";
import Landing from "./Landing/Landing";
import Home from "./Home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Login from "./Login/Login";
import Register from "./Register/Register";
import Menu from "./Menu/Menu";
import Specialdish from "./Specialdish/Specialdish";
function App() {
  return (
    <>
      <Landing/>
      <Navbar/>
       <Routes>
         <Route path="/Home" element={<Home />} />
         <Route path="/About" element={<About />} />
         <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
         <Route path="/Register" element={<Register />} />
         <Route path="/Specialdish" element={<Specialdish/>}/>
         <Route path="/Menu" element={<Menu/>}/>

       </Routes>
       <footer>
        <p>&copy; 2026 MANA Restaurant.</p>
      </footer>
      
    
      
    
    </>
  );
}

export default App;
