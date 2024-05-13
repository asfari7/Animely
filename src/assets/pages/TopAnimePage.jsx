import React, { useState, useEffect } from "react";
import CardTopAnime from "../components/CardTopAnime";
import BannerTopSeries from "../components/BannerTopSeries";
import axios from "axios";
import SkeletonTopAnimeCard from "../components/SkeletonTopAnimeCard";

function TopAnimePage() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const options = {
    method: "GET",
    url: "https://api.jikan.moe/v4/top/anime",
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        const topTen = response.data.data.slice(0, 10);
        setData(topTen);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <section>
      <BannerTopSeries />
      <div className=" grid grid-cols-1 sm:grid-cols-2 gap-2 my-10">
        {isLoading
          ? Array.from({ length: 5 }).map((_, index) => (
              <SkeletonTopAnimeCard key={index} />
            ))
          : data.map((data) => (
              <CardTopAnime
                key={data.mal_id}
                rank={data.rank}
                image={data.images.jpg.image_url}
                title={data.title}
                score={data.score}
                days={data.broadcast.day}
                genres={data.genres}
              />
            ))}
      </div>
    </section>
  );
}

export default TopAnimePage;
