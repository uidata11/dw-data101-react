import React from "react";
import { IoLanguage } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import "./SampleLogin.css";

const SampleLogin = () => {
  return (
    <div className="lan">
      <button>
        <IoLanguage /> <IoMdArrowDropdown />
      </button>
    </div>
  );
};

export default SampleLogin;
