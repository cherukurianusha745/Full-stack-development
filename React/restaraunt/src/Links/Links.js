import Home from "../Home/Home";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Menu from "../Menu/Menu";
import Specialdish from "../Specialdish/Specialdish";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function Links() {
  return (
    <BrowserRouter>
     

      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Menu" element={<Menu/>}/>
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Specialdish" element={<Specialdish/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Links;