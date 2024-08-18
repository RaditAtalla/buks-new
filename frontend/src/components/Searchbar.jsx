import React from "react";
import { Search } from "react-feather";

const Searchbar = ({ placeholder, className }) => {
  return (
    <div
      className={'bg-white shadow flex items-center flex-1 gap-[5px] rounded-md px-[10px]'}
    >
      <Search size={30} color="grey" />
      <input
        type="text"
        placeholder={placeholder}
        className="py-[10px] w-full text-[1.25rem] focus:outline-none rounded-md"
      />
    </div>
  );
};

export default Searchbar;
