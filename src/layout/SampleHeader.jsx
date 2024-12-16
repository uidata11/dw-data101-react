import React from "react";
import "./SampleHeader.css";
import SampleLogin from "./SampleLogin";
import { IoMdArrowDropdown } from "react-icons/io";
import { SiNetflix } from "react-icons/si";

const SampleHeader = () => {
  return (
    <div className="header">
      <button>
        <SiNetflix />
      </button>
      <div className="left">
        <SampleLogin />
        <button className="login">로그인</button>
      </div>
    </div>
  );
};

export default SampleHeader;
