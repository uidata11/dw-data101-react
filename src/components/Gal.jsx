import React from "react";
import "./Gal.css";

const Gal = () => {
  return (
    <div id="gal">
      <div className="wrap">
        <img src={img} />
        <button className="chev l">{"<"}</button>
        <button className="chev r">{">"}</button>
        <div className="txts">
          <h1>맛있겠다</h1>
          <p>ㄹㅇ</p>
        </div>
      </div>
    </div>
  );
};

export default Gal;

const img =
  "https://media.istockphoto.com/id/1144144383/ko/%EC%82%AC%EC%A7%84/%EC%9A%94%EB%A6%AC-%EA%B3%BC%EC%A0%95-%EB%B0%94%EB%B2%A0-%ED%81%90-%EC%88%AF%EB%B6%88-%EA%B5%AC%EC%9D%B4%EC%97%90-%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91.jpg?s=612x612&w=0&k=20&c=OOuaukziySbHYDpGL_sjjkNFbbpVIdfcPBTWCPrxUDc=";
