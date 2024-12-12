import React from "react";
import "./Footer.css";
import { IoLanguageSharp } from "react-icons/io5";
import { MdArrowDropDown } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer">
      <div>질문이 있으신가요? 문의전화: 00</div>
      <div>
        <ul className="list">
          <li>
            <button>자주 묻는 질문</button>
          </li>
          <li>
            <button>고객 센터</button>
          </li>
          <li>
            <button>계정</button>
          </li>
          <li>
            <button>미디어 센터</button>
          </li>
          <li>
            <button>투자 정보</button>
          </li>
        </ul>
      </div>
      <div>
        <button className="lang">
          <IoLanguageSharp />
          한국어
          <MdArrowDropDown />
        </button>
      </div>
      <div>넷플릭스 대한민국</div>
    </footer>
  );
};

export default Footer;
