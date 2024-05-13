import React from "react";
import img_spring from "./../img/img_spring.png";

function Banner() {
  return (
    <div
      className=" w-full bg-cover bg-center text-white rounded-lg"
      style={{ backgroundImage: `url(${img_spring})` }}>
      <h1 className="text-5xl font-bold my-6 text-center py-16 bg-cover bg-center text-white rounded-lg">
        Season Spring
      </h1>
    </div>
  );
}

export default Banner;
