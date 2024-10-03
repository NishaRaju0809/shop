import React from "react";

import logo from "../../assets/images/logo.svg";
import menu from "../../assets/images/menu.svg";
import "./styles.css";

type Props = {};

export default function NavBar({}: Props) {
  return (
    <nav className="nav-container">
      <img src={logo} alt="logo" />
      <div className="routes">
        <a className="nav-button" href="#home">
          HOME
        </a>
        <a className="nav-button" href="#about">
          ABOUT US
        </a>
        <a className="nav-button" href="#services">
          SERVICES
        </a>
        <a className="nav-button" href="#portflio">
          PORTFOLIO
        </a>
        <a className="nav-button" href="#contact">
         CONTACT US
        </a>
      </div>
      <img height={30} width={30} src={menu} alt="menu" />
    </nav>
  );
}
