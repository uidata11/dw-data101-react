import React from "react";
import "./SInput.css";

const SInput = () => {
  return (
    <div className="riri">
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
        doloremque distinctio deserunt nemo! Reiciendis esse atque iste
        repudiandae, quisquam maiores eaque, aliquam excepturi exercitationem,
        veritatis doloremque necessitatibus magnam fuga cupiditate!
      </p>
      <input type="text" placeholder="이메일을 입력하세요." />
      <div>
        <button>시작하기 {">"}</button>
      </div>
    </div>
  );
};

export default SInput;
