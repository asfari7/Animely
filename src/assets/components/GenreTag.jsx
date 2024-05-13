import React from "react";

function GenreTag(props) {
  return (
    <p className="bg-slate-200 text-xs rounded-full py-1 px-3">{props.genre}</p>
  );
}

export default GenreTag;
