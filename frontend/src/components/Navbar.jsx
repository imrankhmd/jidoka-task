import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const navigate = useNavigate();
 
  return (
    <div className="navbar">
      <h3>HOME</h3>  
      <h3 onClick={() => navigate("/login")}>LOGIN</h3>
      <h3 onClick={() => navigate("/")}>SIGNUP</h3>
    </div>
  );
};

export default Navbar;
