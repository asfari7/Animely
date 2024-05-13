import React, { useEffect, useState } from "react";
import HeroSection from "../section/HeroSection";
import Ongoing from "../section/Ongoing";
import Genre from "../section/Genre";
import TopAnime from "../section/TopAnime";
import axios from "axios";

function Homepage() {
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
    <>
      <div className="container mx-auto max-w-6xl px-4">
        <HeroSection />
        <Ongoing data={data} isLoading={isLoading} />
        <Genre />
        <TopAnime data={data} isLoading={isLoading} />
      </div>
    </>
  );
}

export default Homepage;
