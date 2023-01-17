import React, {createContext, useState} from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { apiPost, apiGet } from "../Utils/axios";

const UserContext = createContext()

export const UserProvider = ({children}) => {

    const [verifymessage, setVerifymessage] = useState('')
    const OTPConfig = async (formData, signature) => {
        try {
          const otpData = {
            otp: formData,
          };
         
          const {data} = await apiPost(`/users/verify/${signature}`, otpData)
        
              if(data.message){
                  toast.success(data.message);
                  setVerifymessage(data.message)
                 
              }
             
            }
        
         catch (err) {
          toast.error(err.response.data.Error);
        }
      };

    return <UserContext.Provider value={{
        OTPConfig,
        verifymessage
    }}>
    {children}
    </UserContext.Provider>
}

export default UserContext

/* ====================Resend OTP ================ */

export const ResendOTP = async (signature) => {
  try {
    await apiGet(`/users/resend-otp/${signature}`).then((res) => {
      toast.success(res.data.message);
     
    });
  } catch (err) {
    toast.error(err.response.data.Error);
  }
};
