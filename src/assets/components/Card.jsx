import React from "react";
import img_star from "../img/img_star.png";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <div className="w-40 h-fit lg:w-52 rounded-xl cursor-pointer my-6 relative">
      <img src={props.image} className="rounded-lg h-60 lg:h-72" />
      <div>
        <h2 className="my-2 font-bold line-clamp-2">{props.title}</h2>
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

export default Card;
