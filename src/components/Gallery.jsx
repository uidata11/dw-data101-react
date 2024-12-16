import React from "react";
import "./Gallery.css";
import {
  IoChevronBackCircleOutline,
  IoChevronForwardCircleOutline,
} from "react-icons/io5";

const Gallery = () => {
  return (
    <div className="gal">
      <div className="wrap">
        <img src={img} />
        <button className="l">
          <IoChevronBackCircleOutline />
        </button>
        <button className="r">
          <IoChevronForwardCircleOutline />
        </button>
      </div>
    </div>
  );
};

export default Gallery;

const img =
  "https://cdn.pixabay.com/photo/2016/03/28/18/07/micky-mouse-1286470_640.jpg";
