import React, { useState } from "react";

export const LoginRegister = ({ setFlag }) => {
  return (
    <div className="loginregister-container">
      <a className="loginregister-register-btn" onClick={() => setFlag(true)}>
        <svg
          className="w-1 h-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: "40", height: "40" }}
        >
          <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
        </svg>
        <h6>Register</h6>
        <p>Browse and find what you need.</p>
      </a>
      <a className="loginregister-login-btn" onClick={() => setFlag(false)}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: "40", height: "40" }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
          />
        </svg>
        <h6>Sign in</h6>
        <p>Already have an account, then welcome back.</p>
      </a>
    </div>
  );
};