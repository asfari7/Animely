import React from "react";

function Skeleton() {
  return (
    <div className="flex flex-col gap-4 w-52 my-4">
      <div className="skeleton h-60 lg:h-72 w-full"></div>
      <div className="skeleton h-4 w-28"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
    </div>
  );
}

export default Skeleton;
