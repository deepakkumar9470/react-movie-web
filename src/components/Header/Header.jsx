import React from "react";
import { FaFilm } from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex gap-4 items-center justify-center p-10">
      <FaFilm className="w-10 h-10 md:w-[12]md:h-[12] text-white" />
      <h1 className="text-3xl md:text-5xl text-white text-center font-bold">
        React Movie App
      </h1>
    </header>
  );
};

export default Header;
