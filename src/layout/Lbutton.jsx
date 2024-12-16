import React from "react";
import { IoLanguageSharp } from "react-icons/io5";
import { MdArrowDropDown } from "react-icons/md";

const Lbutton = () => {
  return (
    <button className="lang">
      <IoLanguageSharp />
      한국어
      <MdArrowDropDown />
    </button>
  );
};

export default Lbutton;
