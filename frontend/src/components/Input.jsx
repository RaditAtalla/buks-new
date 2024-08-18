import React, { useState } from "react";
import { Eye, EyeOff } from "react-feather";

const Input = ({ type, label, placeholder, className }) => {
  const [passShown, setPassShown] = useState(false);

  const showPass = () => {
    setPassShown(!passShown);
  };

  return type == "password" ? (
    <div className={`flex flex-col gap-[5px] text-[1.25rem] bg-white ${className}`}>
      <label htmlFor={label} className="font-medium">
        {label}
      </label>
      <div className="flex items-center gap-[5px] px-[0.5em] rounded-lg border-2 border-gray-500">
        <input
          type={passShown ? "text" : "password"}
          className="focus:outline-none w-full px-[5px] py-[3px]"
          placeholder={placeholder}
          id={label}
        />
        {passShown ? (
          <Eye className="text-gray-500" onClick={showPass} />
        ) : (
          <EyeOff className="text-gray-500" onClick={showPass} />
        )}
      </div>
    </div>
  ) : (
    <div className="flex flex-col gap-[5px] text-[1.25rem] bg-white">
      <label htmlFor={label} className="font-medium">
        {label}
      </label>
      <div className="flex items-center gap-[5px] px-[0.5em] rounded-lg border-2 border-gray-500">
        <input
          type="text"
          className="focus:outline-none w-full px-[5px] py-[3px]"
          placeholder={label}
          id={label}
        />
      </div>
    </div>
  );
};

export default Input;
