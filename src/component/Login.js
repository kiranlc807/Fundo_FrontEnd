// LoginForm.js
import React from 'react';
import './Login.css'; // Import the CSS file
import { Button} from '@mui/material';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { LoginApi,ForgotPasswordApi } from '../utils/userapi';
import { useState } from 'react';


const LoginForm = () => {
  let userName = "";
  let password = "";
  const [isValidEmail, setIsValidEmail] = useState(true);

  const route = useNavigate()
  const handleNavigation=()=>{
      route("/signup")
  }

  const setUserName = (e)=>{
    userName=e;
  }
  const setPassword = (e)=>{
    password=e.target.value;
  }

  const validateEmail = (input) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const isValidEmail = emailPattern.test(input);
    setIsValidEmail(isValidEmail);
    return isValidEmail;
  };

  const handleLogin = async()=>{

    if (!validateEmail(userName)) {
      return;
    }

    const res = await LoginApi({
      email:userName,
      password:password
    });
    if(res.status===201){
      route("/dashboard/notes")
    }
    
  }

  const handleForgotPassword = () =>{
    const res = ForgotPasswordApi({
      email:userName
    });
    return res;
  };
  
  return (
    <div className="container" >
      <p className="fundo">Fundo</p>
      <p className="signin">Sign in</p>
      <p className="text"> Use your Fundo Account</p>
      <form>
        <div style={{display:"flex",flexDirection:"column",gap:"20px"}}>
          <TextField id="outlined-basic1" label="Username or Email" variant="outlined" required onChange={(e) => {
              setUserName(e.target.value);
              validateEmail(e.target.value);
            }}
            error={!isValidEmail}
            helperText={!isValidEmail ? 'Invalid email address' : ''}/>
          <TextField id="outlined-basic2" label="Password" variant="outlined" required onChange={setPassword} type='password'/>
        </div>
        <div>
        <Button variant="text" style={{fontSize:"12px",textTransform: 'none'}} onClick={handleForgotPassword}>Forgot Password </Button>
        </div>
        <br />
        <div className="submit-btn" >
          <Button variant="text" onClick={handleNavigation} style={{ textTransform: 'none' }}>Create Account </Button>
          <Button variant="contained" style={{ textTransform: 'none' }} onClick={handleLogin}>LogIn</Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
