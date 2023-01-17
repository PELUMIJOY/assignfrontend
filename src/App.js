
import {Routes, Route} from "react-router-dom"
import { BrowserRouter as Router } from "react-router-dom";
import Home from  './component/Home/Home'
import Login from "./component/Login"
import './App.css';
import Signup from "./component/Signup";
import Otp from './component/Otp/Otp'
import { ToastContainer } from "react-toastify";
import {UserProvider} from './component/Context/Authcontext'

function App() {
  return (
    <div>
      <UserProvider>
      <ToastContainer/>
      <Router>
        
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path='/otp' element={<Otp/>}/>
        </Routes>
        
      </Router>
      </UserProvider>
    </div>
  );
}

export default App;
