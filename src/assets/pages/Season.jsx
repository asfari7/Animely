import React, { useState, useEffect } from "react";
import CardSeason from "../components/CardSeason";
import Banner from "../components/Banner";
import axios from "axios";
import SkeletonTopAnimeCard from "../components/SkeletonTopAnimeCard";

function Season() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const options = {
    method: "GET",
    url: "https://api.jikan.moe/v4/seasons/now",
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setData(response.data.data);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <section>
      <Banner />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
        {isLoading
          ? Array.from({ length: 5 }).map((_, index) => (
              <SkeletonTopAnimeCard key={index} />
            ))
          : data.map((data) => (
              <CardSeason
                key={data.mal_id}
                score={data.score}
                image={data.images.jpg.image_url}
                title={data.title}
                sysnopsis={data.synopsis}
                genres={data.genres}
              />
            ))}
      </div>
    </section>
  );
}

export default Season;
