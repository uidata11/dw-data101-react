import React from "react";
import "./SampleGal.css";

const SampleGal = () => {
  return (
    <div id="sgal">
      <div className="swrap">
        <img src={img} alt="" />
        <button className="schev l">{"<"}</button>
        <button className="schev r">{">"}</button>
        <div className="stxts">
          <h1>소고기</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod vel
            delectus quasi illum officiis eius totam repudiandae in a libero
            fuga pariatur ducimus quia mollitia, voluptatem distinctio
            voluptate, quae sint?
          </p>
        </div>
      </div>
    </div>
  );
};

export default SampleGal;

const img =
  "https://media.istockphoto.com/id/1390404812/ko/%EC%82%AC%EC%A7%84/%ED%95%9C%EC%9A%B0-%EC%87%A0%EA%B3%A0%EA%B8%B0-%EC%BB%B7.jpg?s=612x612&w=0&k=20&c=ApijNozw9QYSfC9pRZ7DH4aLkPD0t5JHCA1n4yLJ65M=";
