import React from "react";
import img_star from "@img/img_star.png";
import GenreTag from "@components/GenreTag";
import { Link } from "react-router-dom";

function CardTopAnime(props) {
  return (
    <div className="flex flex-row gap-6 rounded-xl my-6 relative">
      <h2 className="my-2 w-9 text-2xl md:text-6xl font-semibold">
        {props.rank}
      </h2>
      <img
        src={props.image}
        alt="Top Anime"
        className="rounded-lg w-28 md:w-36"
      />
      <div className="flex flex-col gap-2">
        <h2 className="my-2 text-sm md:text-xl font-semibold line-clamp-2">
          {props.title}
        </h2>
        <div className="flex flex-wrap gap-2">
          {props.genres.map((genre) => (
            <GenreTag key={genre.mal_id} genre={genre.name} />
          ))}
        </div>
        <p className="text-sm md:text-lg">{props.days}</p>
        <span className="flex flex-row gap-2 my-2">
          <img src={img_star} className="w-5" />
          <p>{props.score}</p>
        </span>
      </div>
      <Link
        to="/detail-anime"
        state={{ mal_id: props.mal_id }}
        className="after:absolute after:inset-0"></Link>
    </div>
  );
}

export default CardTopAnime;
