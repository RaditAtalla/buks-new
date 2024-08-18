import React from "react";

const ButtonIcon = ({ icon, appearance, className }) => {
  const ghost = "bg-white text-black border-2 border-black";
  const primary = "bg-black text-white ";
  return (
    <button
      className={[
        `${
          appearance == "ghost" ? ghost : primary
        } rounded-md p-[0.25em] text-[1.5em] font-roboto font-medium`,
        className,
      ]}
    >
      {icon}
    </button>
  );
};

export default ButtonIcon;
