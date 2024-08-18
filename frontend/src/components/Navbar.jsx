import React from "react";
import { Heart, Home, User } from "react-feather";

const Navbar = () => {
  return (
    <header className="fixed w-full z-10 bg-white px-[40px] py-[0.5em] flex justify-between items-center shadow">
      <div className="flex gap-[10px] items-center">
        <img src="img/logo.png" alt="logo" className="w-[50px]" />
        <div>
          <p className="font-robotoSlab font-bold text-[2rem] leading-none">
            BUKS
          </p>
          <p className="font-roboto leading-none">Perpustakaan Digital</p>
        </div>
      </div>
      <div className="flex gap-[20px]">
        <Home className="hover:fill-black transition-all" />
        <Heart className="hover:fill-black transition-all" />
        <User className="hover:fill-black transition-all" />
      </div>
    </header>
  );
};

export default Navbar;
