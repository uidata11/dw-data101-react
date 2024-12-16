import React from "react";
import "./Header.css";
import { SiNetflix } from "react-icons/si";
import Lbutton from "./Lbutton";
const Header = () => {
  return (
    <header className="header">
      <button className="netflix">
        <SiNetflix />
      </button>
      <ul>
        <li>
          <Lbutton />
        </li>
        <li>
          <button className="log">로그인</button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
