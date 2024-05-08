import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

import Select from "react-select";
import FootCard from "./FootCard";
import { products } from "../../data/data";

const FootList = ({
  tabList,
  setTabList,
  selectedOption,
  handleSelect,
  setClickSlect,
  clickSlect,
  search,
}) => {
  const filterProduct = products.filter((fil) =>
    fil.name.toLowerCase().includes(search.toLowerCase())
  );
  console.log(filterProduct);

  return (
    <div className="">
      <div className="gap-8 flex mt-6 pb-4 ">
        <h3
          className={`text-[14px] font-semibold  cursor-pointer ${
            tabList === 0 ? "text-[#EA7C69] " : "text-[#fff]"
          }`}
          onClick={() => setTabList(0)}
        >
          Hot Dishes
        </h3>
        <h3
          className={`text-[14px] font-semibold cursor-pointer  ${
            tabList === 1 ? "text-[#EA7C69] " : "text-[#fff]"
          }`}
          onClick={() => setTabList(1)}
        >
          Cold Dishes
        </h3>
        <h3
          className={`text-[14px] font-semibold  cursor-pointer ${
            tabList === 2 ? "text-[#EA7C69] " : "text-[#fff]"
          }`}
          onClick={() => setTabList(2)}
        >
          Soup
        </h3>
        <h3
          className={`text-[14px] font-semibold  cursor-pointer ${
            tabList === 3 ? "text-[#EA7C69] " : "text-[#fff]"
          }`}
          onClick={() => setTabList(3)}
        >
          Grill
        </h3>
        <h3
          className={`text-[14px] font-semibold cursor-pointer  ${
            tabList === 4 ? "text-[#EA7C69] " : "text-[#fff]"
          }`}
          onClick={() => setTabList(4)}
        >
          Appetizer
        </h3>
        <h3
          className={`text-[14px] font-semibold cursor-pointer  ${
            tabList === 5 ? "text-[#EA7C69]  " : "text-[#fff]"
          }`}
          onClick={() => setTabList(5)}
        >
          Dessert
        </h3>
      </div>
      <div className="w-full h-[2px] bg-[#393C49] mt-[-2px] relative">
        <span
          className={`absolute w-[37px] h-[5px] mt-[-1px] bg-[red] rounded-full ${
            tabList == 0
              ? "left-[0]"
              : tabList == 1
              ? "left-[105px]"
              : tabList == 2
              ? "left-[217px]"
              : tabList == 3
              ? "left-[285px]"
              : tabList == 4
              ? "left-[345px]"
              : "left-[442px]"
          } `}
        ></span>
      </div>
      <div className="flex justify-between mt-[24px] mb-[20px]">
        <h1 className="text-[20px] font-semibold leading-[140%] text-[#fff]">
          Choose Dishes
        </h1>
        <div className="">
          <div
            onClick={() => setClickSlect(!clickSlect)}
            className=" w-[110px] p-[14px] cursor-pointer border bg-[#1F1D2B] relative flex items-center gap-[10px] text-[#fff] rounded-lg border-[#393C49]"
          >
            <div className="flex gap-[10px] ">
              {clickSlect ? <FaAngleUp /> : <FaAngleDown />}
              <p className="text-[14px] font-medium leading-[100%]">
                {selectedOption}
              </p>
            </div>
          </div>
          {clickSlect && (
            <div className=" absolute z-50 bg-slate-500 rounded-lg">
              <div
                onClick={() => handleSelect("Dine In")}
                className=" w-[110px] p-[14px] border  flex items-center hover:bg-[#1F1D2B] cursor-pointer gap-[10px] text-[#fff] rounded-lg border-[#393C49]"
              >
                <div className="flex gap-[10px]">
                  <p className="text-[14px] font-medium leading-[100%]">
                    Dine in
                  </p>
                </div>
              </div>
              <div
                onClick={() => handleSelect("To Go")}
                className=" w-[110px] p-[14px] border flex items-center hover:bg-[#1F1D2B]  cursor-pointer gap-[10px] text-[#fff] rounded-lg border-[#393C49]"
              >
                <div className="flex gap-[10px]">
                  <p className="text-[14px] font-medium leading-[100%]">
                    To Go
                  </p>
                </div>
              </div>
              <div
                onClick={() => handleSelect("Delivery")}
                className=" w-[110px] p-[14px]   border flex items-center hover:bg-[#1F1D2B]  cursor-pointer gap-[10px] text-[#fff] rounded-lg border-[#393C49]"
              >
                <div className="flex gap-[10px]">
                  <p className="text-[14px] font-medium leading-[100%]">
                    Delivery
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className=" flex flex-wrap justify-between scrolDiv h-[75vh] overflow-y-scroll">
        {filterProduct.map((item) => (
          <FootCard item={item} />
        ))}
      </div>
    </div>
  );
};

export default FootList;
