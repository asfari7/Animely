import React, { useEffect, useState } from "react";
import gif_star from "@img/gif_star.gif";
import Card from "@components/Card";
import Skeleton from "@components/Skeleton";

function Ongoing(props) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setData(props.data);
    setIsLoading(props.isLoading);
  }, [props.data]);

  return (
    <section className="my-10">
      <h1 className="text-2xl md:text-3xl font-bold my-3 text-center">
        Anime Musim Ini
        <img src={gif_star} alt="star" className="inline w-14 mx-4" />
      </h1>
      <div className="grid grid-flow-col auto-cols-max gap-4 overflow-auto h-fit">
        {isLoading
          ? Array.from({ length: 5 }).map((_, index) => (
              <Skeleton key={index} />
            ))
          : data.map((data) => (
              <Card
                key={data.mal_id}
                image={data.images.jpg.image_url}
                title={data.title}
                score={data.score}
              />
            ))}
      </div>
    </section>
  );
}

export default Ongoing;
