// LoginForm.js
import React from 'react';
import './Login.css'; // Import the CSS file
import { Button} from '@mui/material';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const route = useNavigate()
  const handleNavigation=()=>{
      route("/signup")
  }
  return (
    <div className="container" >
      <p className="fundo">Fundo</p>
      <p className="signin">Sign in</p>
      <p className="text"> Use your Fundo Account</p>
      <form>
        <div style={{display:"flex",flexDirection:"column",gap:"20px"}}>
          <TextField id="outlined-basic1" label="Username or Email" variant="outlined" required/>
          <TextField id="outlined-basic2" label="Password" variant="outlined" required/>
        </div>
        <div>
        <Button variant="text" style={{fontSize:"12px",textTransform: 'none'}}>Forgot Password </Button>
        </div>
        <br />
        <div className="submit-btn" >
          <Button variant="text" onClick={handleNavigation} style={{ textTransform: 'none' }}>Create Account </Button>
          <Button variant="contained" style={{ textTransform: 'none' }} >LogIn</Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
