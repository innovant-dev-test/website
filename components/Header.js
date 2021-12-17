import React from "react";
import { Logo } from "./Logo";
export const Header = () => {
  return (
    <div className="header-container">
      <ul className="header-list">
        <li>
          <Logo />
        </li>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About us</a>
        </li>
        <li>
          <a href="#">Contact us</a>
        </li>
      </ul>
      <div className="iconn" data-initials="Ar"></div>   

    </div>
  );
};