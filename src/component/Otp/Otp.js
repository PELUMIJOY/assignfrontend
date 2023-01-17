import React from "react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import OTPInputField from "react-otp-input";
import { toast } from "react-toastify";
// import axios from "axios";
// import { toast } from "react-toastify";
import { ResendOTP } from "../Context/Authcontext";
// import { apiPost } from "../Utils/axios";
import "./Otp.css";
import UserContext from "../Context/Authcontext";


const Otp = () => {
  const {verifymessage, OTPConfig} = useContext(UserContext)
  const [otp, setOtp] = useState("");
  console.log(otp);
  const handleChange = (otp) => {
    setOtp(otp);
  };

 const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    if(otp === ''){
      toast.error('Field cannot be empty')
    }else{
      const getSignature = localStorage.getItem("signature");
      OTPConfig(otp, getSignature);
      setOtp('')
      
      if(verifymessage !== ''){
        navigate('/login')
      }
    }
    
  };

  const handleResendOTP = () => {
    const getSignature = localStorage.getItem("signature");
    ResendOTP(getSignature);
  };

  return (
    <div className="otp_container">
      <div className="otp_card">
        <div className="center_otpCard">
          <h3 className="otp_title">OTP Verification</h3>
          <p className="otp_description">Fill in your OTP Verification code</p>
          <form onSubmit={handleSubmit} className="otp_form">
            <div>
              <div className="OTP_field">
                <OTPInputField
                  value={otp}
                  onChange={handleChange}
                  numInputs={6}
                  inputStyle={{
                    boxSizing: "border-box",
                    fontSize: "1em",
                    width: "2.6rem",
                    padding: "14px",
                    margin: "10px 5px",
                    border: "1px solid rgba(0, 0, 0, 0.5)",
                    outline: "none",
                  }}
                />
              </div>
            </div>
            <div>
              <div></div>
              <div className="btn-container">
                <button className="otp_btn" type="submit">
                  Verify
                </button>
              </div>
            </div>
          </form>
          <p>
            Didn't get OTP?{" "}
            <button className="new-btn-style" onClick={handleResendOTP}>
              Resend OTP
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Otp;
