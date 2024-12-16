import React from "react";
import Lbutton from "./Lbutton";
import "./Header.css";
import { SiNetflix } from "react-icons/si";

const Header = () => {
  return (
    <div>
      <div className="head">
        <button className="r">
          <SiNetflix />
        </button>
        <div className="l">
          <button>
            <Lbutton />
          </button>
          <button className="log">로그인</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
