import React from "react";
import { Heart } from "react-feather";

const Likedcard = () => {
  return (
    <div className="min-w-[18em] bg-white rounded shadow-lg">
      <img
        src="img/cover.jpg"
        alt="cover buku"
        className="w-full h-[200px] object-contain"
      />
      <div className="px-[1em] py-[0.5em] flex flex-col gap-[0.5em]">
        <div className="flex gap-[5px] items-center">
          <Heart size={16} />
          <p>1.502</p>
        </div>
        <div>
          <h3 className="font-medium text-[1.5rem]">Filosofi Teras</h3>
          <p className="text-gray-500">Henry Manampiring</p>
        </div>
      </div>
    </div>
  );
};

export default Likedcard;
