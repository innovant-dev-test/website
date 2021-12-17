import React, { useState } from "react";
import { LoginForm } from "../components/LoginForm";
import { LoginRegister } from "../components/LoginRegister";
import { login } from "../services/user";
import { useRouter } from 'next/router'
import {Top_Header} from "../components/Top_Header"
import {Header} from "../components/Header"


const auth = () => {
    const router = useRouter()

    const [LoginData, setLoginData] = useState({
        email: "",
        password: "",
      });
      const handleLogin= () => {
      login(LoginData).then((res) => {
          if (res) {
            router.push("/home");
            console.log("logged in");
        } else console.log("check your email and password ! ");
      });
    };
  const [flag, setFlag] = useState(false);
  return (
    <div>
                <Top_Header />
                <Header />


      <div className="login-container">
        <LoginRegister setFlag={setFlag} />
        {!flag && (
          <>
            <input 
                    className="loginform-input-full"
                    type="text" placeholder="Email*" onChange={(e)=> {
                setLoginData({...LoginData, email: e.target.value});
                console.log("email: ", e.target.value);
            }} />
            <input 
                    className="loginform-input-full"
                    type="password" placeholder="Password*" onChange={(e)=> {
                setLoginData({...LoginData, password: e.target.value})
            }} />
            <button className="login-btn" onClick={handleLogin}>Submit</button>
          </>
        )}
        {flag && <LoginForm setFlag={setFlag} />}
      </div>
    </div>
  );
};
export default auth;