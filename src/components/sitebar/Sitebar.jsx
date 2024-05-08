import React from "react";
import nav1 from "../../../public/assest/logo.png";
import nav2 from "../../../public/assest/exit.png";
import { VscHome } from "react-icons/vsc";
import { IoNotificationsOutline, IoSettingsOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { LuPieChart } from "react-icons/lu";
import { RiDiscountPercentLine } from "react-icons/ri";
import { RxExit } from "react-icons/rx";
const nav = [
  {
    img: <VscHome size={20} />,
  },
  {
    img: <RiDiscountPercentLine size={20} />,
  },
  {
    img: <LuPieChart size={20} />,
  },
  {
    img: <MdOutlineMail size={20} />,
  },
  {
    img: <IoNotificationsOutline size={20} />,
  },
  {
    img: <IoSettingsOutline size={20} />,
  },
];
const Sitebar = () => {
  return (
    <div className="flex-[.04] sitebar  bg-[#1F1D2B] rounded-2xl pl-4 flex justify-center">
      <ul className="flex flex-col gap-5">
        <div className="flex justify-center w-[90px] h-20 items-center p-3  relative ">
          <div className=" mt-6 w-[56px] bg-[#eb956a3d] p-3 h-[56px] rounded-lg flex justify-center items-center">
            <img src={nav1} alt="" />
          </div>
        </div>
        {nav.map((item) => (
          <li className="flex justify-center w-[92px] cursor-pointer h-20 items-center p-3 relative  rounded-[-20px] ">
            <div className="  w-[56px] h-[56px] rounded-lg flex justify-center items-center icon">
              {item.img}
            </div>
            {/* <div className=" absolute w-[10px] h-[10px] bg-[#252836] right-[10px] top-[0] rounded-t-full circleTop"></div> */}
          </li>
        ))}
        <li className="flex justify-center w-[92px] mt-[60px] cursor-pointer h-20 items-center p-3  ">
          <div className="  w-[56px] h-[56px] rounded-lg flex justify-center items-center icon">
            <RxExit />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sitebar;
