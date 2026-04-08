import React from "react";
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { AddItem } from "../redux/cartSlice";
import { toast } from "react-toastify";

function Card({ name, image, id, price, type }) {
  let dispatch = useDispatch();
  return (
    <div className="w-[300px] h-[400px] bg-white p-3 rounded-xl flex flex-col gap-3 shadow-md hover:shadow-xl hover:border-2 border-orange-300 transition-all duration-200">
      <div className="w-[100%] h-[60%] overflow-hidden rounded-xl">
        <img src={image} alt="" className="object-cover w-full h-full hover:scale-105 transition-transform duration-300" />
      </div>
      <div className="text-2xl font-semibold text-gray-800">{name}</div>
      <div className="w-full flex justify-between items-center">
        <div className="text-lg font-bold text-orange-500">BDT {price}/-</div>
        <div className="flex justify-center items-center gap-2 text-green-500 text-lg font-semibold">
          {type === "veg" ? <LuLeafyGreen className="text-green-500" /> : <GiChickenOven className="text-orange-400" />}
          <span className={type === "veg" ? "text-green-500" : "text-orange-400"}>{type}</span>
        </div>
      </div>
      <button
        className="w-full p-3 bg-orange-500 rounded-xl text-white font-semibold hover:bg-orange-400 active:scale-95 transition-all duration-150"
        onClick={() => {
          dispatch(
            AddItem({ id: id, name: name, price: price, image: image, qty: 1 })
          );
          toast.info("item added");
        }}
      >
        Add to Dish
      </button>
    </div>
  );
}

export default Card;