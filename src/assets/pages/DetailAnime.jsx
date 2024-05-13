import React from "react";

function DetailAnime() {
  return (
    <section>
      <div className="flex sm:flex-row flex-col gap-4">
        <img src="" />
        <div className="bg-slate-300 w-44 self-center aspect-3/4 basis-1/4"></div>
        <div className="basis-3/4">
          <h1 className="text-xl font-bold">Judul</h1>
          <p className="overflow-auto  max-h-36">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
            rerum autem accusamus, quis expedita vero perspiciatis doloribus
            magnam quam laboriosam quaerat at nemo! In, voluptas fugiat! Dolorum
            voluptatem dolorem sit?. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptatum dolorem assumenda nam vel aliquid sint
            sed incidunt nihil fugiat adipisci. Dolorum tenetur ab distinctio
            perferendis ipsum reprehenderit aliquam qui obcaecati?
          </p>
        </div>
      </div>
      <div className="my-10">
        <h1 className="text-2xl font-bold">Genres</h1>
      </div>
    </section>
  );
}

export default DetailAnime;
