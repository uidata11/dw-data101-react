import React from "react";
import "./Header.css";
import { SiNetflix } from "react-icons/si";
import { IoLanguageSharp } from "react-icons/io5";
import { MdArrowDropDown } from "react-icons/md";
const Header = () => {
  return (
    <header className="header">
      <button className="netflix">
        <SiNetflix />
      </button>
      <ul>
        <li>
          <button className="lang">
            <IoLanguageSharp />
            한국어
            <MdArrowDropDown />
          </button>
        </li>
        <li>
          <button className="log">로그인</button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
