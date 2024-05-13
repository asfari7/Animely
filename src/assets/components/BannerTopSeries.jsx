import React from "react";
import img_topseries from "./../img/img_topseries.png";

function Banner() {
  return (
    <div
      className=" w-full bg-cover bg-center text-white rounded-lg"
      style={{ backgroundImage: `url(${img_topseries})` }}>
      <h1 className="text-3xl lg:text-5xl font-bold my-6 text-left px-14 py-16 bg-cover bg-center text-white rounded-lg">
        Top 10 Anime Series
      </h1>
    </div>
  );
}

export default Banner;
