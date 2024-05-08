import React from "react";
import { FaTrash } from "react-icons/fa";
import useCartStore from "../../context/useCart";
const ItemCard = ({ item }) => {
  const { removeItem } = useCartStore();

  const handleDelate = (id) => {
    console.log(id);
    removeItem({ id: id });
  };
  const { price, img, name, quantity, totalPrice, id } = item;

  return (
    <div className="flex justify-between gap-4 my-[30px]">
      <div className="flex-[1] flex flex-col gap-4">
        <div className="flex justify-between">
          <div className="flex gap-2">
            <img
              src={img}
              alt=""
              className="w-[45px] h-[45px] rounded-lg bg-[red]"
            />
            <div className=" flex flex-col gap-1">
              <h3 className="text-[15px] font-medium leading-[130%]  text-[#fff]">
                {name}
              </h3>
              <p className="text-[12px] font-medium leading-[140%] text-[#fff]">
                $ {price}
              </p>
            </div>
          </div>
          <button className="w-[50px] h-[50px] border rounded-lg border-[#393C49] text-[#fff] bg-[#2D303E]">
            {quantity}
          </button>
        </div>
        <input
          type="text"
          placeholder="Order Note..."
          className="w-full p-[14px] bg-[#2D303E] text-[#E0E6E9] placeholder:text-[#889898] border outline-none border-[#393C49] rounded-lg"
        />{" "}
      </div>
      <div className="flex flex-col justify-between items-center gap-6">
        <p className="text-[16px] font-medium leading-[140%] text-[#fff] pt-3">
          ${totalPrice.toFixed(2)}
        </p>
        <button
          onClick={() => handleDelate(id)}
          className="w-[55px] h-[55px] mt-[5px] border rounded-lg border-[#FF7CA3] text-[#FF7CA3] flex justify-center items-center"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
