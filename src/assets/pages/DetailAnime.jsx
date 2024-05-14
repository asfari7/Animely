import React, { useState, useEffect } from "react";
import GenreTag from "@components/GenreTag";
import img_star from "@img/img_star.png";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Skeleton from "@components/Skeleton";

function DetailAnime(props) {
  const location = useLocation();
  const { mal_id } = location.state;

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const options = {
    method: "GET",
    url: `https://api.jikan.moe/v4/anime/${mal_id}/full`,
  };

  useEffect(() => {
    axios.request(options).then(function (response) {
      setData(response.data.data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <Skeleton />;
  }

  return (
    <section className="my-10">
      <div className="flex sm:flex-row flex-col gap-10">
        <img
          className="bg-slate-300 w-44 self-center aspect-3/4 basis-1/4 rounded-lg"
          src={data.images.jpg.image_url}
        />
        <div className="basis-3/4 flex flex-col gap-2">
          <h1 className="text-xl font-bold">{data.title}</h1>
          <h2 className="text-lg ">{data.status}</h2>
          <span className="flex flex-row gap-2">
            <img src={img_star} className="w-6 h-auto" />
            <p>{data.score}</p>
          </span>
          <p className="overflow-auto max-lg:h-48">{data.synopsis}</p>
        </div>
      </div>
      <div className="my-10">
        <h1 className="text-2xl font-bold">Genres</h1>
        <div className="flex flex-wrap gap-3 my-4">
          {data.genres.map((genre) => (
            <GenreTag key={genre.mal_id} genre={genre.name} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default DetailAnime;
