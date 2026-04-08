import React, { useContext, useEffect } from "react";
import { MdFastfood } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";
import { dataContext } from "../context/UserContext";
import { food_items } from "../food";
import { useSelector } from "react-redux";

function Nav() {
  let { input, setInput, setCate, setShowCart } =
    useContext(dataContext);
  let items = useSelector((state) => state.cart);

  useEffect(() => {
    let newlist = food_items.filter((item) =>
      item.food_name.toLowerCase().includes(input.toLowerCase())
    );
    setCate(newlist);
  }, [input, setCate]);

  return (
    <div className="w-full h-[80px] flex justify-between items-center px-5 md:px-8 bg-white shadow-sm border-b border-orange-100">
      <div className="w-[55px] h-[55px] bg-orange-500 flex justify-center items-center rounded-xl shadow-md">
        <MdFastfood className="w-[28px] h-[28px] text-white" />
      </div>
      <form
        className="w-[45%] h-[48px] bg-orange-50 border border-orange-200 flex items-center px-4 gap-3 rounded-xl md:w-[60%] focus-within:border-orange-400 focus-within:shadow-md transition-all"
        onSubmit={(e) => e.preventDefault()}
      >
        <FaSearch className="text-orange-400 w-[16px] h-[16px] shrink-0" />
        <input
          className="bg-transparent w-full outline-none text-[15px] md:text-[17px] text-gray-700 placeholder-gray-400"
          type="text"
          placeholder="Search for food..."
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </form>
      <div
        className="w-[55px] h-[55px] bg-orange-500 flex justify-center items-center rounded-xl shadow-md relative cursor-pointer hover:bg-orange-400 transition-colors"
        onClick={() => setShowCart(true)}
      >
        <span className="absolute -top-1 -right-1 bg-red-500 text-white font-bold text-[11px] w-5 h-5 flex items-center justify-center rounded-full shadow">
          {items.length}
        </span>
        <LuShoppingBag className="w-[26px] h-[26px] text-white" />
      </div>
    </div>
  );
}

export default Nav;