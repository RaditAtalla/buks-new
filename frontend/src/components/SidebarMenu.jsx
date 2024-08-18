import React from "react";
import { Grid } from "react-feather";

const SidebarMenu = ({ href, onClick, icon, title }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className="px-[1em] py-[0.5em] rounded-lg flex gap-[10px] bg-neutral-900 border-2 border-neutral-700 text-white font-medium"
    >
      {icon}
      {title}
    </a>
  );
};

export default SidebarMenu;
