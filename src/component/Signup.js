// RegisterForm.js
import React from 'react';
import './Signup.css'; // Import the CSS file
import { Button} from '@mui/material';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
  const route = useNavigate()
  const handleNavigation=()=>{
      route("/")
  }
  return (
    <div>
    <div id="formContainer">
      <div id="formLeft" style={{gap:'10px'}}>
        <div>
          <h2 id="fundo">Fundo</h2>
          <br />
          <p id="createF">Create your Fundo Account</p>
          <br />
        </div>
        <div id="name" style={{display:'flex',flexDirection:"row", gap:'20px'}}>
          <TextField id="firstName" label="first name" variant="outlined" required type="text"/>
          <TextField id="lastName" label="last name" variant="outlined" required type="text"/>
        </div>
        <TextField id="userName" label="username" variant="outlined" required type="text"/>
        <p id="userNameInfo">You can use letters, numbers & periods</p>
        <div id="pass" style={{display:'flex',flexDirection:"row", gap:'20px'}}>
          <TextField id="firstpass" label="Password" variant="outlined" required type="text"/>
          <TextField id="confpass" label="Confirm" variant="outlined" required type="text"/>
        </div>
        <p id="passInfo">Use 8 or more characters with a mix of letters, numbers & symbols</p>
        <div id="signDiv">
          <Button variant="text" onClick={handleNavigation} style={{ textTransform: 'none' }}>Sign in instead</Button>
          <Button variant="contained" style={{ textTransform: 'none' }} >Register</Button>
        </div>
      </div>

      <div id="formRight">
        <p>One account. All of Fundo working for you </p>
      </div>
    </div>
    <div id='text'>
        <p style={{marginRight:'485px' , marginLeft:'4px'} }>English(UnitedState)</p>
        <p style={{marginRight:'40px'}}>Help</p>
        <p style={{marginRight:'40px'}}>Privacy</p>
        <p>Terms</p>
    </div>
    </div>
  );
};

export default SignupForm;
