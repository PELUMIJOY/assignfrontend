
import {Routes, Route} from "react-router-dom"
import { BrowserRouter as Router } from "react-router-dom";
import Home from  './component/Home/Home'
import Login from "./component/Login"
import './App.css';
import Signup from "./component/Signup";
import Otp from './component/Otp/Otp'
import { ToastContainer } from "react-toastify";
import {UserProvider} from './component/Context/Authcontext'
import {ProtectRoute} from './component/Context/ProtectRoute'

function App() {
  return (
    <div>
      <UserProvider>
      <ToastContainer/>
      <Router>
        
        <Routes>
            
          
          <Route path="/" element={<ProtectRoute><Home/> </ProtectRoute> } />
           
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<ProtectRoute><Login/></ProtectRoute>} />
          <Route path='/otp' element={<Otp/>}/>
        </Routes>
        
      </Router>
      </UserProvider>
    </div>
  );
}

export default App;
