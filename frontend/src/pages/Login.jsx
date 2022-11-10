import { useState} from "react";
import "./Signup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React from "react";

const Login = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate();

 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    
    axios
      .post("http://localhost:8080/auth/login", data)
      .then((res) => {   
      setData({});
      })
      .catch((err) => {
        console.log(err)
    });
  
    setData({});

    navigate("/home");
  };

  return (
    <div className="log-container">
      <form className="log-form" onSubmit={submitHandler}>
        <h2>Login</h2>
        <input type="text" placeholder="Enter Gmail" name="gmail" onChange={handleChange} value={data.email}/>
        <br />
        <input type="password" placeholder="Enter Password" name="password" onChange={handleChange} value={data.password}/>
        <br />
        <input type="submit" value="LOGIN" />
      </form>
    </div>
  );
};

export default Login;