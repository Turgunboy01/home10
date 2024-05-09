import React, { useState } from "react";
import { TbBrandPaypal } from "react-icons/tb";
import { TiCreditCard } from "react-icons/ti";
import PaymentForm from "./PaymentForm";
import { FaAngleDown, FaAngleUp, FaCheck } from "react-icons/fa";
import Cash from "../../../public/Cash";
import { motion } from "framer-motion";
import useCartStore from "../../context/useCart";
const Payment = ({
  clickSlect,
  selectedOption,
  handleSelect,
  setClickSlect,
  setSelect2,
  select2,
  setPaymentClick,
  paymentClick,
}) => {
  const [pay, setPay] = useState(0);
  const [endClick, setEndClick] = useState(true);
  const { clearCard } = useCartStore();

  const goHome = () => {
    setPaymentClick(!paymentClick);
    setEndClick();
    clearCard();
  };

  return (
    <div
      className={`bg-[#000000B3] fixed top-0 left-0 w-full h-full transition-all duration-500 flex justify-end  `}
    >
      <motion.div
        whileInView={{ translateX: ["-500%", 0], opacity: [0, 1] }}
        transition={{ duration: 0 }}
        className={`bg-[#1F1D2B] w-[400px] h-[100vh] rounded-2xl transition-all ease-in-out duration-500 p-6 ${
          paymentClick ? " translate-x-[100%]" : "translate-x-[100%]"
        }`}
      >
        {endClick ? (
          <>
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
                <div
                  onClick={() => setPay(0)}
                  className={`w-[100px] relative  h-[60px] cursor-pointer border ${
                    pay == 0 ? "border-[#ABBBC2]" : "border-[#393C49]"
                  } border-[#393C49] rounded-lg flex justify-center items-center flex-col gap-1`}
                >
                  {pay == 0 && (
                    <div className="w-3 h-3  bg-[#EA7C69] absolute flex justify-center items-center right-[6px] top-[6px] rounded-full">
                      <FaCheck className="p-[3px]" />
                    </div>
                  )}
                  <TiCreditCard
                    size={24}
                    className={`${pay == 0 ? "text-[#fff]" : "text-[#ABBBC2]"}`}
                  />
                  <h2
                    className={`${pay == 0 ? "text-[#fff]" : "text-[#ABBBC2]"}`}
                  >
                    Credit Card
                  </h2>
                </div>
                <div
                  onClick={() => setPay(1)}
                  className={`w-[100px]  h-[60px] border cursor-pointer ${
                    pay == 1 ? "border-[#ABBBC2]" : "border-[#393C49]"
                  } border-[#393C49] rounded-lg flex justify-center relative items-center flex-col gap-1`}
                >
                  {pay == 1 && (
                    <div className="w-3 h-3  bg-[#EA7C69] absolute flex justify-center items-center right-[6px] top-[6px] rounded-full">
                      <FaCheck className="p-[3px]" />
                    </div>
                  )}
                  <TbBrandPaypal
                    className={`${pay == 1 ? "text-[#fff]" : "text-[#ABBBC2]"}`}
                    size={24}
                  />
                  <h2
                    className={`${pay == 1 ? "text-[#fff]" : "text-[#ABBBC2]"}`}
                  >
                    Paypal
                  </h2>
                </div>
                <div
                  onClick={() => setPay(2)}
                  className={`w-[100px]  h-[60px] border cursor-pointer ${
                    pay == 2 ? "border-[#ABBBC2]" : "border-[#393C49]"
                  } border-[#393C49] rounded-lg flex justify-center relative items-center flex-col gap-1`}
                >
                  {pay == 2 && (
                    <div className="w-3 h-3  bg-[#EA7C69] absolute flex justify-center items-center right-[6px] top-[6px] rounded-full">
                      <FaCheck className="p-[3px]" />
                    </div>
                  )}
                  <Cash pay={pay} />
                  <h2
                    className={`${pay == 2 ? "text-[#fff]" : "text-[#ABBBC2]"}`}
                  >
                    Cash
                  </h2>
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
              <button
                onClick={() => setEndClick(false)}
                className="py-[14px]  rounded-lg cursor-pointer w-full text-[14px] font-semibold leading-[140%] bg-[#EA7C69] text-[#fff]"
              >
                Confirm Payment
              </button>
            </div>
          </>
        ) : (
          <div className="flex justify-center flex-col items-center h-full">
            <h1 className="text-[32px] font-semibold mb-3 text-[#fff]">
              Thank you
            </h1>
            <h1 className="text-center mb-[40px] font-semibold text-[#EA7C69] text-[16px]">
              Your application has been accepted. Thank you for using our
              services
            </h1>
            <button
              className="p-4 border rounded-lg hover:border-[#EA7C69] hover:text-[#EA7C69]  text-[#fff]"
              onClick={() => goHome()}
            >
              Go to Home
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Payment;
