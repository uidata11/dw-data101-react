import React from "react";
import "./Gallery.css";

const Gallery = () => {
  return (
    <div className="gal">
      <div className="img">
        <img src={img} />
      </div>
      <div className="leri">
        <button className="leri l">{"<"}</button>
        <button className="leri r">{">"}</button>
      </div>
    </div>
  );
};

export default Gallery;
const img =
  "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA4MDVfMTAx%2FMDAxNzIyODM5OTU5NjUw.IGpWyK27g_KSpU-50sA6ia-VudcQ7LCqhpE3WsUB18Eg.VVEB-Jo3futU6SR9cpJeWVpQuX_trZT1MA7gA5Fnpwwg.JPEG%2FIMG_0068.jpg&type=a340";
