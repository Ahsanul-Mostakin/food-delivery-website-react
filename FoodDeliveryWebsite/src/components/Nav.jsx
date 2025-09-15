import React from "react";
import { MdFastfood } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";
function Nav() {
  return (
    <div className="w-full h-[100px]">
      <div className="w-[60px] h-[60px] bg-white flex justify-center items-center">
        <MdFastfood />
      </div>
      <form action="">
        <FaSearch />
        <input type="text" placeholder="Search Items..." />
      </form>
      <div className="w-[60px] h-[60px] bg-white flex justify-center items-center">
        <LuShoppingBag />
      </div>
    </div>
  );
}

export default Nav;
