import React, { useState } from "react";
import { register } from "../services/user";
export const LoginForm = ({ setFlag }) => {
  const [registerData, setRegisterData] = useState({
    fullname: "",
    email: "",
    password: "",
    repassword: "",
  });
  const handleRegister = () => {
      if(registerData.password==registerData.repassword){
    register(registerData).then((res) => {
        if (res) {
        setFlag(false);
      } else alert("Email already in use ! ");
      console.log("Email already in use ! ");
    });}
    else{alert("check your password ! ");
    console.log("check your password !");}
  };

  return (
    <>
      <div className="loginform-name">
        <input
          type={"text"}
          placeholder={"First Name*"}
          className="loginform-input"
          onChange={(e) =>
            setRegisterData({ ...registerData, firstname: e.target.value })
          }
        />
        <input
          type={"text"}
          placeholder={"Last Name*"}
          className="loginform-input-name"
          onChange={(e) =>
            setRegisterData({ ...registerData, lastname: e.target.value })
          }
        />
      </div>
      <input
        className="loginform-input-full"
        type="text"
        placeholder="Email*"
        onChange={(e) =>
          setRegisterData({ ...registerData, email: e.target.value })
        }
      />
      <input
        className="loginform-input-full"
        type="password"
        placeholder="Password*"
        onChange={(e) =>
          setRegisterData({ ...registerData, password: e.target.value })
        }
      />
      <input
        className="loginform-input-full"
        type="password"
        placeholder="Repeat Password*"
        onChange={(e) =>
            setRegisterData({ ...registerData, repassword: e.target.value })
          }
      />

      <button className="login-btn" onClick={handleRegister}>
        Submit
      </button>
    </>
  );
};