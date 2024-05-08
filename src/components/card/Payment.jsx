import React from "react";
import { TbBrandPaypal } from "react-icons/tb";
import { TiCreditCard } from "react-icons/ti";
import PaymentForm from "./PaymentForm";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Payment = ({
  clickSlect,
  selectedOption,
  handleSelect,
  setClickSlect,
  setSelect2,
  select2,
  setPaymentClick,
}) => {
  console.log(select2, "de");
  return (
    <div className="bg-[#000000B3] fixed top-0 left-0 w-full h-full flex justify-end">
      <div className="bg-[#1F1D2B] w-[400px] h-[100vh] rounded-2xl p-6">
        <div className=" border-b mt-10 pb-6 border-[#393C49]">
          <h2 className="text-[28px] font-semibold leading-[140%] text-[#fff]">
            Payment
          </h2>
          <p className="text-[16px] font-medium mt-3 leading-[140%] text-[#ABBBC2]">
            3 payment method available
          </p>
        </div>
        <div className="pt-6  mb-4">
          <h1 className="text-[20px] font-semibold leading-[140%] text-[#fff]">
            Payment Method
          </h1>
          <div className="flex justify-between gap-2 mt-4 ">
            <div className="w-[100px]  h-[60px] border rounded-lg flex justify-center items-center flex-col gap-1">
              <TiCreditCard size={20} />
              <h2>Credit Card</h2>
            </div>
            <div className="w-[100px]  h-[60px] border rounded-lg flex justify-center items-center flex-col gap-1">
              <TbBrandPaypal size={20} />
              <h2>Paypal</h2>
            </div>
            <div className="w-[100px]  h-[60px] border rounded-lg flex justify-center items-center flex-col gap-1">
              <TbBrandPaypal size={20} />
              <h2>Cash</h2>
            </div>
          </div>
        </div>
        <PaymentForm />

        <hr />
        <div className="mt-4">
          <div className="flex justify-between gap-3">
            <div className="">
              <h2 className=" text-[16px] leading-[130%] font-medium text-[#FFFFFF]">
                Order Type
              </h2>
              <div
                onClick={() => setSelect2(!select2)}
                className=" w-[175px] mt-2 p-[19px] cursor-pointer border bg-[#1F1D2B] relative flex items-center gap-[10px] text-[#fff] rounded-lg border-[#393C49]"
              >
                <div className="flex gap-[10px] ">
                  {select2 ? <FaAngleUp /> : <FaAngleDown />}
                  <p className="text-[14px] font-medium leading-[100%]">
                    {selectedOption}
                  </p>
                </div>
              </div>
              {select2 && (
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
            <div className="w-full">
              <h2 className=" text-[16px] leading-[130%] font-medium text-[#FFFFFF]">
                Table no.
              </h2>
              <input
                type="text"
                placeholder="140"
                className="p-[14px] border w-full border-[#393C49] mt-2 bg-[#2D303E] mb-4 rounded-lg outline-none text-white"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-3 mt-20">
          <button
            onClick={() => setPaymentClick(false)}
            className="py-[14px] border rounded-lg text-[14px] font-semibold leading-[140%] text-[#EA7C69] border-[#EA7C69] w-full"
          >
            Cancel
          </button>
          <button className="py-[14px]  rounded-lg w-full text-[14px] font-semibold leading-[140%] bg-[#EA7C69] text-[#fff]">
            Confirm Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
