import Link from "next/link";
import React, { useState } from "react";
import { LoginForm } from "../components/LoginForm";
import { LoginRegister } from "../components/LoginRegister";
import { login } from "../services/user";
import { useRouter } from 'next/router'

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
      <div className="login-container">
        <LoginRegister setFlag={setFlag} />
        {!flag && (
          <>
            <input type="text" placeholder="Email*" onChange={(e)=> {
                setLoginData({...LoginData, email: e.target.value});
                console.log("email: ", e.target.value);
            }} />
            <input type="text" placeholder="Password*" onChange={(e)=> {
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