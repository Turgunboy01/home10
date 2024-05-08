import React from "react";
import { FaSearch } from "react-icons/fa";

const Header = ({ setSearch, search }) => {
  return (
    <div className="flex justify-between pt-[25px] header">
      <div className="">
        <h2 className="text-[28px] text-[#fff] leading-[140%] font-semibold">
          Jaegar Resto
        </h2>
        <p className="text-[16px] text-[#fff] eading-[140%] text-[#E0E6E9] ">
          Tuesday, 2 Feb 2021
        </p>
      </div>
      <div className="p-[14px] flex gap-3 max-w-[250px] w-full items-center border border-[#393C49] rounded-lg bg-[#2D303E]">
        <FaSearch className="text-[#fff] " size={15} />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for food, coffe, etc.."
          className=" outline-0 bg-transparent text-[#fff] w-full"
        />
      </div>
    </div>
  );
};

export default Header;
