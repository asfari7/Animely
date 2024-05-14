import React from "react";
import img_sword from "@img/img_swords.png";
import img_castle from "@img/img_castle.png";
import img_heart from "@img/img_hearts.png";
import img_magicbook from "@img/img_magic-book.png";

function Genre() {
  return (
    <section className="my-16">
      <h1 className="text-2xl font-bold my-3 text-center">
        Genre Yang Paling Diminati
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 place-items-center gap-4 my-7">
        <div className="flex items-center">
          <img src={img_sword} alt="sword" className=" w-10" />
          <h2 className=" text-xl mx-4">Action</h2>
        </div>
        <div className="flex items-center">
          <img src={img_castle} alt="sword" className=" w-10" />
          <h2 className="text-xl  mx-4">Isekai</h2>
        </div>
        <div className="flex items-center">
          <img src={img_magicbook} alt="sword" className=" w-10" />
          <h2 className="text-xl  mx-4">Magic</h2>
        </div>
        <div className="flex items-center">
          <img src={img_heart} alt="sword" className=" w-10" />
          <h2 className="text-xl  mx-4">Romance</h2>
        </div>
      </div>
    </section>
  );
}

export default Genre;
