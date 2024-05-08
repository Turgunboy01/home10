import React from "react";

const PaymentForm = () => {
  return (
    <div>
      <form className="w-full flex flex-col">
        <label className=" text-[16px] leading-[130%] font-medium text-[#FFFFFF]">
          Cardholder Name
        </label>

        <input
          type="text"
          placeholder="Levi Ackerman"
          className="p-[14px] border border-[#393C49] mt-2 bg-[#2D303E] mb-4 rounded-lg outline-none text-white"
        />
        <label className=" text-[16px] leading-[130%] font-medium text-[#FFFFFF]">
          Card Number
        </label>
        <input
          type="number"
          placeholder="2564 1421 0897 1244"
          className="p-[14px] border border-[#393C49] mt-2 bg-[#2D303E] w-full mb-4 rounded-lg outline-none text-white"
        />
        <div className="flex gap-3">
          <div className="">
            <label className=" text-[16px] leading-[130%] font-medium text-[#FFFFFF]">
              Expiration Date
            </label>
            <input
              type="date"
              className="p-[14px] border border-[#393C49] mt-2 bg-[#2D303E] mb-4 rounded-lg w-full outline-none text-white"
            />
          </div>
          <div className="">
            <label className=" text-[16px] leading-[130%] font-medium text-[#FFFFFF]">
              CVV
            </label>
            <input
              placeholder="123"
              type="password"
              className="p-[14px] border border-[#393C49] mt-2 bg-[#2D303E] mb-4 rounded-lg w-full outline-none text-white"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;
