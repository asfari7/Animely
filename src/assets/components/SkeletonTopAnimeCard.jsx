import React from "react";

function SkeletonTopAnimeCard() {
  return (
    <div className="flex flex-row gap-4 my-6">
      <div className="skeleton w-28 md:w-36 h-56"></div>
      <div className="flex flex-col gap-2">
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
    </div>
  );
}

export default SkeletonTopAnimeCard;
