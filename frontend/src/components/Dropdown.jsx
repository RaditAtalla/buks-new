import React, { useState } from "react";
import { Triangle } from "react-feather";

const Dropdown = ({ placeholder, data = [], className }) => {
  const [isDrop, setIsDrop] = useState(false);
  console.log(data);

  const handleDrop = () => {
    setIsDrop(!isDrop);
  };

  return (
    <div className={[`px-[20px] rounded-md bg-white shadow flex-1`, className]}>
      <div
        className="flex items-center justify-between gap-[10px] py-[10px] cursor-pointer hover:bg-gray-50"
        onClick={handleDrop}
      >
        <p className="font-roboto text-[1.25rem] text-gray-500">
          {placeholder}
        </p>
        <Triangle
          className="rotate-180 fill-gray-500 text-gray-500"
          size={12}
        />
      </div>
      <div
        className={`height-[500px] w-full pb-[20px] divide-y-2 ${
          isDrop ? "block" : "hidden"
        }`}
      >
        {data.map((list) => {
          return (
            <p className="text-[1.5rem] py-[10px] hover:bg-gray-100">{list}</p>
          );
        })}
      </div>
    </div>
  );
};

export default Dropdown;
