import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {

const navigate= useNavigate();

    const LogOut= ()=>{
        localStorage.clear();
        console.log("I was clicked")
        navigate("/login")
      }

    return (
        <div className='Navbar'>
            
            <div className='Navbar-list'>
                <ul className='para'>
                    <li className='home'>Home</li>
                    <li>Newsfield</li>
                    <li onClick={LogOut}>Logout</li>
                </ul>
            </div>
        </div>
      )
}

export default Navbar