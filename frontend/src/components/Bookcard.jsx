import React from "react";
import Button from "./Button";
import ButtonIcon from "./ButtonIcon";
import { Heart } from "react-feather";

const Bookcard = ({ img, title, author, onClick }) => {
  return (
    <div className="shadow-lg min-w-[18em] bg-white rounded">
      <img
        src={img}
        alt="cover buku"
        className="w-full h-[200px] object-contain"
      />
      <div className="flex flex-col gap-[1.5em] px-[1em] py-[0.5em]">
        <div>
          <h3 className="font-medium text-[1.5rem]">{title}</h3>
          <p className="text-gray-500">{author}</p>
        </div>
        <div className="flex gap-[5px]">
          <Button title={"Lihat"} className={"w-[70%]"} onClick={onClick} />
          <ButtonIcon icon={<Heart />} appearance={"ghost"} />
        </div>
      </div>
    </div>
  );
};

export default Bookcard;
