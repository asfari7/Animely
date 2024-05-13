import React, { useState, useEffect } from "react";
import CardTopAnime from "@components/CardTopAnime";
import SkeletonTopAnimeCard from "@components/SkeletonTopAnimeCard";

function TopAnime(props) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const newData = [...props.data];
    newData.sort((a, b) => a.rank - b.rank);
    const rankedData = newData.map((anime, index) => {
      return { ...anime, rank: index + 1 };
    });

    const topFiveData = rankedData.slice(0, 5);
    setData(topFiveData);
    setIsLoading(props.isLoading);
  }, [props.data]);

  return (
    <section className="my-10">
      <h1 className="text-3xl font-bold my-3 text-left">Top Anime Musim Ini</h1>
      <div className="my-4">
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

export default TopAnime;
