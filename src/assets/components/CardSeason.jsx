import React from "react";
import GenreTag from "@components/GenreTag";
import img_star from "@img/img_star.png";

function CardSeason(props) {
  return (
    <div className="border px-4 rounded-xl ">
      <div className="text-center">
        <h1 className="my-2 text-sm md:text-xl font-semibold text-center">
          {props.title}
        </h1>
        <div className="flex flex-wrap justify-center gap-4">
          {props.genres.map((genre) => (
            <GenreTag key={genre.mal_id} genre={genre.name} />
          ))}
        </div>
        <span className="flex flex-row justify-center gap-2 my-2">
          <img src={img_star} className="w-5" />
          <p>{props.score}</p>
        </span>
      </div>
      <div className="flex flex-row gap-6 rounded-xl my-6 h-40 md:h-56">
        <img
          src={props.image}
          alt="Top Anime"
          className="rounded-lg w-28 md:w-40 aspect-video"
        />
        <p className="overflow-auto text-sm md:text-base ">{props.sysnopsis}</p>
      </div>
    </div>
  );
}

export default CardSeason;
