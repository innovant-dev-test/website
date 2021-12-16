import React from "react";
import { LogoH } from "../components/LogoH";
const home = () => {
  return (
    <div className="home-container">
      <div className="home-logo">
        <LogoH className="home-logo-item" />
      </div>
      <h2 className="home-title">The Logo Above is Made in Pure CSS</h2>
    </div>
  );
};
export default home;