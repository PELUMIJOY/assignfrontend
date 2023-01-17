import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import axios from 'axios';
import { apiGet } from '../Utils/axios';
import './Home.css'


const Home = () => {
const [user, setUser]=useState({})

useEffect(()=>{
  const getUser =async()=>{
    try{
    await apiGet(`/users/dashboard`).then((res)=>{

      setUser(res.data.User);
    
      })
      }catch(err){ 
        console.log(err)
  }
  
  };

  getUser()
},[])

console.log(user)
 
  return (
    <div className='main_contain'>
        <Navbar/>
        <div className='view'>
          <div className='viewcard'>
        <h1>Welcome {user.name}</h1>
        <p>Email: {user.email}</p>

          </div>

        </div>
    </div>
  )
}

export default Home