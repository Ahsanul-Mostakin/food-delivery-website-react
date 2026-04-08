import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { DecrementQty, IncrementQty, RemoveItem } from "../redux/cartSlice";

function Card2({ name, id, price, image, qty }) {
  let dispatch = useDispatch();
  return (
    <div className="w-full h-[120px] p-3 rounded-xl shadow-sm border border-orange-100 flex justify-between bg-white hover:shadow-md transition-shadow">
      <div className="w-[60%] h-full flex gap-4">
        <div className="w-[60%] h-full overflow-hidden rounded-xl">
          <img src={image} alt="" className="object-cover w-full h-full" />
        </div>
        <div className="w-[40%] h-full flex flex-col gap-3 justify-center">
          <div className="text-sm text-gray-700 font-semibold leading-tight">{name}</div>
          <div className="w-[110px] h-[36px] flex rounded-lg overflow-hidden shadow-sm font-semibold border border-orange-300 text-lg">
            <button
              className="w-[30%] h-full bg-orange-50 flex justify-center items-center text-orange-500 hover:bg-orange-100 transition-colors"
              onClick={() => (qty > 1 ? dispatch(DecrementQty(id)) : 1)}
            >
              -
            </button>
            <span className="w-[40%] h-full bg-white flex justify-center items-center text-orange-500 font-bold">
              {qty}
            </span>
            <button
              className="w-[30%] h-full bg-orange-50 flex justify-center items-center text-orange-500 hover:bg-orange-100 transition-colors"
              onClick={() => dispatch(IncrementQty(id))}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between items-end py-1">
        <span className="text-base text-orange-500 font-bold">
          BDT {price}/-
        </span>
        <RiDeleteBin5Line
          size={20}
          className="text-red-400 cursor-pointer hover:text-red-600 hover:scale-110 transition-all"
          onClick={() => dispatch(RemoveItem(id))}
        />
      </div>
    </div>
  );
}

export default Card2;