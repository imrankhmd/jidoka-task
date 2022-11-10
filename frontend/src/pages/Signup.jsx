import React from "react";
import "./Signup.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

let initialData = {
  username: "",
  email: "",
  password: "",
};
const Signup = () => {
  const [data, setData] = useState(initialData);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const subHandler = async(e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/auth/signup", data)
    .then((res) => {
      console.log(res.data);
      setData(initialData);
      navigate("/login");
    })
    .catch((e) => console.log(e));
    setData(initialData);
  };

  return (
    <div className="container">
      <form className="form" onSubmit={subHandler}>
        <h2>SIGN UP</h2>
        <input type="text" placeholder="Username" name="username" value={data.username} onChange={handleChange} required
        />
        <br />
        <input type="text" placeholder="Gmail" name="gmail" value={data.email} onChange={handleChange} required
        />
        <br />
        <input type="password" placeholder="Password" name="password" value={data.password} onChange={handleChange} required
        />
        <br />
        <input type="Submit" value="submit" />
      </form>
    </div>
  );
};

export default Signup;