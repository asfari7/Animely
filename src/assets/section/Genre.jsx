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
      <div className="flex flex-wrap justify-evenly gap-7 my-10">
        <div>
          <img src={img_sword} alt="sword" className="inline w-10" />
          <h2 className=" text-xl inline mx-6">Action</h2>
        </div>
        <div>
          <img src={img_castle} alt="sword" className="inline w-10" />
          <h2 className="text-xl inline mx-6">Isekai</h2>
        </div>
        <div>
          <img src={img_magicbook} alt="sword" className="inline w-10" />
          <h2 className="text-xl inline mx-6">Magic</h2>
        </div>
        <div>
          <img src={img_heart} alt="sword" className="inline w-10" />
          <h2 className="text-xl inline mx-6">Romance</h2>
        </div>
      </div>
    </section>
  );
}

export default Genre;
