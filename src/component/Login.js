import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Home/Home.css";

const baseUrl = "https://basic-app-backend.onrender.com";

const Login = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  function redirect() {
    navigate("/");
  }

  const handleChange = (e) => {
    console.log("changing data");
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit =  (e) => {
    e.preventDefault();


  try {
    axios
          .post(`${baseUrl}/users/login`, formData)
          .then((res) => {
              const signature = res.data.signature;
          

              if (signature !== null) {
                  localStorage.setItem("signature", signature);
               
               toast.success(res.data.message);
                  setTimeout(() => {
                      if (res.data) {
                          navigate("/");
                      }
                  }, 2000);
              }
          })
          .catch((err) => {
              console.log(err);
              toast.error(err.response.data.Error);
          });
  } catch (error) {
      console.log(error);
  }
  }
  return (
    <div className="container" >
      <form onSubmit={handleSubmit} className="form login-form" >
      <h2 className="login">Login</h2>
        <label htmlFor="">Email</label>
        <input
          className="container-input"
          onChange={handleChange}
          name="email"
          type="Email"
          placeholder="Enter you email"
        />
        <label htmlFor="">Password</label>
        <input
          className="container-input" 
          onChange={handleChange}
          name="password"
          type="password"
          placeholder="Password"
        />
        <button className="btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
