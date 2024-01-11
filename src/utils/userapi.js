import axios from "axios";

export const LoginApi = async(data)=>{
    const res = await axios.post("http://localhost:3000/api/v1/user/login",data)
    return res;
}

export const ForgotPasswordApi = async(data)=>{
    const res = await axios.put("http://localhost:3000/api/v1/user/forgotpassword",data)
}

export const SignupApi = async(data)=>{
    const res = await axios.post("http://localhost:3000/api/v1/user/signup",data)
    return res;
}