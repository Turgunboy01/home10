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
  const searchProduct = products.filter((fil) =>
    fil.name.toLowerCase().includes(search.toLowerCase())
  );

  const fill = searchProduct.filter((fil) => fil.category == tabList);
  // console.log(fill);
  // console.log(searchProduct);

  const renderProduct = fill.length == 0 ? searchProduct : fill;
  return (
    <div className="">
      <div className="gap-8 flex mt-6 pb-4 ">
        <h3
          className={`text-[14px] font-semibold  cursor-pointer ${
            tabList === "Hot Dishes" ? "text-[#EA7C69] " : "text-[#fff]"
          }`}
          onClick={() => setTabList("Hot Dishes")}
        >
          Hot Dishes
        </h3>
        <h3
          className={`text-[14px] font-semibold cursor-pointer  ${
            tabList === "Cold Dishes" ? "text-[#EA7C69] " : "text-[#fff]"
          }`}
          onClick={() => setTabList("Cold Dishes")}
        >
          Cold Dishes
        </h3>
        <h3
          className={`text-[14px] font-semibold  cursor-pointer ${
            tabList === "Soup" ? "text-[#EA7C69] " : "text-[#fff]"
          }`}
          onClick={() => setTabList("Soup")}
        >
          Soup
        </h3>
        <h3
          className={`text-[14px] font-semibold  cursor-pointer ${
            tabList === "Grill" ? "text-[#EA7C69] " : "text-[#fff]"
          }`}
          onClick={() => setTabList("Grill")}
        >
          Grill
        </h3>
        <h3
          className={`text-[14px] font-semibold cursor-pointer  ${
            tabList === "Appetizer" ? "text-[#EA7C69] " : "text-[#fff]"
          }`}
          onClick={() => setTabList("Appetizer")}
        >
          Appetizer
        </h3>
        <h3
          className={`text-[14px] font-semibold cursor-pointer  ${
            tabList === "Dessert" ? "text-[#EA7C69]  " : "text-[#fff]"
          }`}
          onClick={() => setTabList("Dessert")}
        >
          Dessert
        </h3>
      </div>
      <div className="w-full h-[2px] bg-[#393C49] mt-[-2px] relative">
        <span
          className={`absolute w-[37px] h-[5px] mt-[-1px] transition-all ease-in-out duration-500 bg-[#EA7C69] rounded-full ${
            tabList == ""
              ? "left-[0] w-0"
              : tabList == "Hot Dishes"
              ? "left-[0]"
              : tabList == "Cold Dishes"
              ? "left-[105px]"
              : tabList == "Soup"
              ? "left-[217px]"
              : tabList == "Grill"
              ? "left-[285px]"
              : tabList == "Appetizer"
              ? "left-[345px]"
              : tabList == "Dessert"
              ? "left-[442px]"
              : "left-0"
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
        {renderProduct.map((item) => (
          <FootCard item={item} />
        ))}
      </div>
    </div>
  );
};

export default FootList;
