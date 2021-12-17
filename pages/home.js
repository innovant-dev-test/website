import React from "react";
import { LogoH } from "../components/LogoH";
import {Header} from "../components/Header"

const home = () => {
  return (
    <div>
      <Header />
    <div className="home-container">
      <div className="home-logo">
        <LogoH className="home-logo-item" />
      </div>
      <h2 className="home-title">The Logo Above is Made in Pure CSS</h2>
    </div>
    </div>
  );
};
export default home;