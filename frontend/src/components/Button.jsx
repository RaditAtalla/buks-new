import React from "react";

const Button = ({ href, onClick, title, appearance, className }) => {
  const ghost = "bg-white text-black border-2 border-black";
  const primary = "bg-black text-white ";
  return (
    <a
      href={href}
      onClick={onClick}
      className={`${
        appearance == "ghost" ? ghost : primary
      } cursor-pointer w-full text-center flex items-center justify-center rounded-md px-[1em] py-[0.25em] text-[1.5em] font-roboto font-medium ${className}`}
    >
      {title}
    </a>
  );
};

export default Button;
