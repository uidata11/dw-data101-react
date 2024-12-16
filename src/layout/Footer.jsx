import React from "react";
import "./Footer.css";
import { IoLanguageSharp } from "react-icons/io5";
import { MdArrowDropDown } from "react-icons/md";
import Lbutton from "./Lbutton";
import { FaChevronRight } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        질문이 있으신가요? 문의 전화:
        <button className="num"> 00-308-321-0161 (수신자 부담)</button>
      </div>
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
            <button>투자 정보(IR)</button>
          </li>
          <li>
            <button>입사 정보</button>
          </li>
          <li>
            <button>넷플릭스 지원 디바이스</button>
          </li>
          <li>
            <button>개인정보 처리방침</button>
          </li>
          <li>
            <button>이용 약관</button>
          </li>
          <li>
            <button>쿠키 설정</button>
          </li>
          <li>
            <button>회사 정보</button>
          </li>
          <li>
            <button>문의하기</button>
          </li>
          <li>
            <button>속도 테스트</button>
          </li>
          <li>
            <button>법적 고지</button>
          </li>
          <li>
            <button>오직 넷플릭스에서</button>
          </li>
        </ul>
      </div>
      <div>
        <Lbutton />
      </div>
      <div>넷플릭스 대한민국</div>
      <div class="under">
        넷플릭스서비시스코리아 유한회사 통신판매업신고번호:
        제2018-서울종로-0426호
        <br /> 전화번호: 00-308-321-0161 (수신자 부담) <br /> 대표: 레지널드 숀
        톰프슨 <br />
        이메일 주소: korea@netflix.com <br />
        주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동 20층
        우편번호 03161
        <br />
        사업자등록번호: 165-87-00119 <bdor />
        클라우드 호스팅: Amazon Web Services Inc.hr <br />
        <p>공정거래위원회 웹사이트</p>
      </div>
    </footer>
  );
};

export default Footer;
