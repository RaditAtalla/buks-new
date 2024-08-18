import React from "react";
import { Star } from "react-feather";

const Commentcard = ({ profile, name, username, rating, comment }) => {
  return (
    <div className="bg-white rounded-lg flex flex-col gap-[1em] shadow-lg px-[2em] py-[1em]">
      <div className="flex justify-between items-center">
        <div className="flex gap-[10px]">
          <img src={profile} alt="foto profil" className="w-[50px]" />
          <div>
            <p className="font-medium">{name}</p>
            <p className="text-gray-500 font-light">{username}</p>
          </div>
        </div>
        <div className="flex gap-[5px] items-center">
          <p>{rating}</p>
          <Star size={14} />
        </div>
      </div>
      <div>
        <p className="text-gray-500">{comment}</p>
      </div>
    </div>
  );
};

export default Commentcard;
