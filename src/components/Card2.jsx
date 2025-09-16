import React from "react";
import image1 from "../assets/image1.avif";
import { RiDeleteBin5Line } from "react-icons/ri";
const Card2 = () => {
  return (
    <div className="w-full h-[120px] p-2 shadow-lg flex justify-between ">
      <div className="w-[60%] h-full flex gap-5">
        <div className="w-[60%] h-full overflow-hidden rounded-lg">
          <img src={image1} alt="" className="object-cover" />
        </div>
        <div className="w-[40%] h-full flex flex-col gap-5">
          <div className="text-lg text-gray-600 font-semibold">Pancake</div>
          <div className="w-[110px] h-[50px] bg-slate-400 flex rounded-lg overflow-hidden shadow-lg font-semibold border-2 border-green-400 text-xl">
            <button className="w-[30%] h-full bg-white justify-center items-center text-green-400 hover:bg-gray-200">
              -
            </button>
            <span className="w-[40%] h-full bg-slate-200 flex justify-center items-center  text-green-400">
              1
            </span>
            <button className="w-[30%] h-full bg-white  text-green-400  hover:bg-gray-200">
              +
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-end gap-6 ">
        <span className="text-xl text-green-400 font-semibold">Rs 499/-</span>
        <RiDeleteBin5Line className="text-red-400 size-6" />
      </div>
    </div>
  );
};

export default Card2;
