import React from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from 'react';
import axios from 'axios'
import "./Home/Home.css";

const baseUrl = "http://localhost:4000";

const Signup = () => {
  const[formData, setFormData] = useState({});

  const navigate = useNavigate();

  // if (formData.password !== formData.confirmPassword) {
  //   console.log("passwords do not match");
  //   return;
  // }


    function redirect(){
     
        navigate("/login");
     
    }

    const handleChange = (e) => {
      // console.log("changing data");
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
  
        await axios
          .post(`${baseUrl}/users/signup`, formData)
          .then((res) => {

            const signature = res.data.signature;
  
            if (signature !== null) {
              localStorage.setItem("signature", signature);
              console.log(res.request.status)
              toast.success(res.data.message);

              // if(res.request.status === "201"){
                navigate("/otp");
              // }
            
            }

          })
          .catch((err) => {
            console.log(err);
            toast.error(err.response.data.Error);
          });

      } catch (error) {
        console.log(error);
      }
    };


  return (
<div className='container'>

  <form onSubmit={handleSubmit} className='form'>
  <h2 className='signup'>Signup</h2>
    <label htmlFor="">Name</label>
    <input className='container-input' name="name" type="text" placeholder='Enter your Name' onChange={handleChange} />
    <label htmlFor="">Email</label>
    <input className='container-input' name="email"  type="email" placeholder='Enter you email' onChange={handleChange} />
    <label htmlFor="">Password</label>
    <input className='container-input' name="password" type="password" placeholder='Password' onChange={handleChange} />
    <label htmlFor="">Confirm Password</label>
    <input className='container-input' name="confirm_password" type="password" placeholder='password' onChange={handleChange} />
    <button className='btn'>signup</button>
    <p className='redirectp'>Already have an account? <span className='redirectlogin' onClick={redirect}>Login</span> </p>
  </form>
 
</div>
    
  )
}

export default Signup