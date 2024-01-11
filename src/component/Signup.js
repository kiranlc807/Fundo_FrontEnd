// RegisterForm.js
import React from 'react';
import './Signup.css'; // Import the CSS file
import { Button} from '@mui/material';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { SignupApi } from '../utils/userapi';

const SignupForm = () => {
  let fname = "";
  let lname = "";
  let username = "";
  let password = "";
  const route = useNavigate()
  const handleNavigation=()=>{
      route("/")
  }

  const setfName = (e)=>{
    fname = e.target.value;
  }

  const setlName = (e)=>{
    lname = e.target.value;
  }

  const setUserName = (e)=>{
    username = e.target.value;
  }

  const setPassword = (e)=>{
    password = e.target.value;
  }

  const handleRegister = ()=>{
      const res = SignupApi({
        name:`${fname} ${lname}`,
        email:username,
        password:password
      })
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
          <TextField id="firstName" label="first name" variant="outlined" required type="text" onChange={setfName}/>
          <TextField id="lastName" label="last name" variant="outlined" required type="text" onChange={setlName}/>
        </div>
        <TextField id="userName" label="username" variant="outlined" required type="text"  onChange={setUserName}/>
        <p id="userNameInfo">You can use letters, numbers & periods</p>
        <div id="pass" style={{display:'flex',flexDirection:"row", gap:'20px'}}>
          <TextField id="firstpass" label="Password" variant="outlined" required type="text"/>
          <TextField id="confpass" label="Confirm" variant="outlined" required type="text" onChange={setPassword}/>
        </div>
        <p id="passInfo">Use 8 or more characters with a mix of letters, numbers & symbols</p>
        <div id="signDiv">
          <Button variant="text" onClick={handleNavigation} style={{ textTransform: 'none' }}>Sign in instead</Button>
          <Button variant="contained" style={{ textTransform: 'none' }} onClick={handleRegister}>Register</Button>
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
