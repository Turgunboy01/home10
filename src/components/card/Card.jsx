import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import useCartStore from "../../context/useCart";

const Card = ({ selectedOption, handleSelect, setPaymentClick }) => {
  const { data, getCartTotal, clearCard } = useCartStore();
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const total = data.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.quantity;
    }, 0);
    setTotal(total);
  });
  console.log(total);
  return (
    <div className=" w-[400px] rounded-lg bg-[#1F1D2B]  p-6 ">
      <h1 className="text-[20px] font-semibold leading-[140%] text-[#fff]">
        Orders #34562
      </h1>
      <div className="flex gap-2 pt-7">
        <button
          onClick={() => handleSelect("Dine In")}
          className={`${
            selectedOption == "Dine In"
              ? "border-[#EA7C69] bg-[#EA7C69] text-[#fff]"
              : "border-[#393C49] bg-transparent text-[#EA7C69]"
          } px-4 py-2 border rounded-lg font-semibold text-[14px]`}
        >
          Dine In
        </button>
        <button
          onClick={() => handleSelect("To Go")}
          className={`${
            selectedOption == "To Go"
              ? "border-[#EA7C69] bg-[#EA7C69] text-[#fff]"
              : "border-[#393C49] bg-transparent text-[#EA7C69]"
          } px-4 py-2 border rounded-lg font-semibold text-[14px]`}
        >
          To Go
        </button>
        <button
          onClick={() => handleSelect("Delivery")}
          className={`${
            selectedOption == "Delivery"
              ? "border-[#EA7C69] bg-[#EA7C69] text-[#fff]"
              : "border-[#393C49] bg-transparent text-[#EA7C69]"
          } px-4 py-2 border rounded-lg font-semibold text-[14px]`}
        >
          Delivery
        </button>
      </div>
      <div className="py-6  border-b">
        <div className="flex justify-between items-center">
          <div className="">
            <h3 className="text-[16px] font-semibold leading-[140%] text-[#fff]">
              Item
            </h3>
          </div>
          <div className="flex gap-11">
            <h3 className="text-[16px] font-semibold leading-[140%] text-[#fff]">
              Qty
            </h3>
            <h3 className="text-[16px] font-semibold leading-[140%] text-[#fff]">
              Price
            </h3>
          </div>
        </div>
      </div>
      <div className="h-[55vh] scrolDiv overflow-y-scroll">
        {data.map((item) => (
          <ItemCard item={item} />
        ))}
      </div>
    
      <div className=" mt-5">
        <div className="flex justify-between">
          <h3 className="text-[16px] text-[#ABBBC2] font-normal">Discount</h3>
          <p className="text-[18px] text-[#fff] font-medium ">$0</p>
        </div>
        <div className="flex justify-between mt-5">
          <h3 className="text-[16px] text-[#ABBBC2] font-normal">Sub total</h3>
          <p className="text-[18px] text-[#fff] font-medium ">
            ${total.toFixed(2)}
          </p>
        </div>
        <button
          onClick={() => setPaymentClick(true)}
          className="py-[14px] w-full bg-[#EA7C69] mt-11  rounded-lg text-[#fff] font-semibold text-[16px] cartBtn"
        >
          Continue to Payment
        </button>
      </div>
    </div>
  );
};

export default Card;
