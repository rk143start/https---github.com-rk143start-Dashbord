import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './loginpage.css';

const LoginPage = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOTP] = useState('');
  const [isOTPVerified, setIsOTPVerified] = useState(false);
  const [isOTPSent, setIsOTPSent] = useState(false);
  const navigate = useNavigate();

  const sendOTP = async () => {
    try {
      await axios.post('https://storebh.bhaaraterp.com/api/login/', {
        mobile_number: mobileNumber
      });
      setIsOTPSent(true);
    } catch (error) {
  
    }
  };

  const verifyOTP = async () => {
    try {
   
      await axios.post('https://storebh.bhaaraterp.com/api/verify-login-otp/', {
        mobile_otp: otp,
        mobile_number: mobileNumber,
        type: 'web',
        registration_token: ''
      });

      setIsOTPVerified(true,"OTP sucussefully Verified");
    } catch (error) {
    console.log(error)

    }
  };

  const resendOTP = () => {
    setOTP('');
    setIsOTPVerified(false);
    setIsOTPSent(false);
  };

  const login = () => {
  
    navigate('/profile');
  };

  return ( 

    <div className="login">
    <div className='imgData'>
    <img src="./assets/shiging.jpg" alt="" />
      </div>

      <div className='right'>
      <h2>Login Page</h2>
      <h3>Enter Your Mobile Number to start shoping</h3><br />
    
      <div className="input-container"><br />
        <input        
          type="text"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          placeholder="Enter mobile number"
        />
        {!isOTPSent && !isOTPVerified && (
          <button className="send-otp-btn" onClick={sendOTP}>
            Send OTP
          </button>
        )}
      </div>
      {isOTPSent && !isOTPVerified && (
        <div className="input-container">
          <input
            type="text"
            value={otp}
            onChange={(e) => setOTP(e.target.value)}
            placeholder="Enter OTP"
          />
          <button className="verify-otp-btn" onClick={verifyOTP}>
            Verify OTP
          </button>
        </div>
      )}

      {isOTPVerified && (
        <div className="input-container">
          <button className="login-btn" onClick={login}>
            Login
          </button>
        </div>
      )}

      {isOTPSent && !isOTPVerified && (
        <div className="input-container">
          <button className="resend-otp-btn" onClick={resendOTP}>
            Resend OTP
          </button>
        </div>
      )}
      <div>
        <h2>{isOTPVerified}</h2>
      </div>
      </div>
     
    </div>
  
    
  );
};

export default LoginPage;
