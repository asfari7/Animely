import React from "react";
import img_hero from "@img/img_hero.jpg";

function HeroSection() {
  return (
    <section
      className="flex my-4 justify-between items-center flex-col-reverse lg:flex-row bg-cover bg-center px-14 py-24 text-white rounded-lg"
      style={{ backgroundImage: `url(${img_hero})` }}>
      <div className="body">
        <h1 className="text-xl font-bold lg:text-4xl">Selamat Datang di</h1>
        <h1 className="text-4xl font-bold lg:text-6xl">Animely.</h1>
        <p className="py-4">
          Temukan semua anime terbaru dalam satu tempat, <br />
          lengkap dengan ulasan, rating, dan informasi yang dibutuhkan.
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
