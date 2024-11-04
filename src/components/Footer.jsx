import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo.jpg";

const Footer = () => {
  return (
    <nav className="first-conti">
      <hr />

      <div className="ned">
        <img src={logo} className="logo" alt="logo" />
      </div>

      <div className="kirk">
        <div><FontAwesomeIcon icon={faCopyright} className="cop"/><span className="copp">2024 Ned services ltd. All Rights Reserved</span></div>
        
      </div>
    </nav>
  );
};

export default Footer;
