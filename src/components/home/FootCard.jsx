import React, { useState } from "react";
import useCartStore from "../../context/useCart";

const FootCard = ({ item }) => {
  const { addToCart, data } = useCartStore();
  const [counted, setcounted] = useState(0);
  const [qty, setQty] = useState(1);
  let num = item.count;
  const handleAddToCart = (product) => {
    if (item.count - counted > 0) {
      let totalPrice = qty * product.price;
      const tempProduct = {
        ...product,
        quantity: qty,
        totalPrice,
      };
      addToCart(tempProduct);
    }
    setcounted(counted + 1);
  };

  console.log(item.count - counted, "counted");

  return (
    <div
      onClick={() => handleAddToCart(item)}
      key={item.id}
      className="w-[200px] hover:scale-105 transition-all ease-in-out duration-00 h-[230px] mt-[62px] relative px-6 pb-6 bg-[#1F1D2B] rounded-2xl flex justify-center text-center items-center flex-col"
    >
      <img
        src={item.img}
        alt=""
        className="w-[140px] h-[140px]   rounded-full object-cover mt-[-36px]"
      />
      <h2 className="pt-[14px] pb-[10px]  text-[16px] font-medium leading-[130%] text-[#fff]">
        {item.name}
      </h2>
      <p className=" text-[14px] font-medium leading-[140%] text-[#fff]">
        ${item.price}
      </p>
      <p className="pt-[4px] text-[14px] font-medium leading-[140%] text-[#ABBBC2]">
        {num > 0 && num - counted} Bowls available
      </p>
    </div>
  );
};

export default FootCard;
