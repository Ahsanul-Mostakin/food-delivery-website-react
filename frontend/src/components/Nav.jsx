import React, { useContext, useEffect } from "react";
import { MdFastfood } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";
import { DataContext } from "../context/UserContext";
import { food_items } from "../food";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";

function Nav() {
  const { input, setInput, setCate, setShowCart } = useContext(DataContext);
  const items = useSelector((state) => state.cart);
  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setCate(
      food_items.filter((item) =>
        item.food_name.toLowerCase().includes(input.toLowerCase())
      )
    );
  }, [input, setCate]);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/auth");
  };

  return (
    <div className="w-full h-[80px] flex justify-between items-center px-5 md:px-8 bg-white shadow-sm border-b border-orange-100">
      {/* Logo */}
      <div
        className="w-[55px] h-[55px] bg-orange-500 flex justify-center items-center rounded-xl shadow-md cursor-pointer flex-shrink-0"
        onClick={() => navigate("/")}
      >
        <MdFastfood className="w-[28px] h-[28px] text-white" />
      </div>

      {/* Search */}
      <div className="flex-1 mx-4 h-[48px] bg-orange-50 border border-orange-200 flex items-center px-4 gap-3 rounded-xl focus-within:border-orange-400 focus-within:shadow-md transition-all">
        <FaSearch className="text-orange-400 w-[16px] h-[16px] shrink-0" />
        <input
          className="bg-transparent w-full outline-none text-[15px] md:text-[17px] text-gray-700 placeholder-gray-400"
          type="text"
          placeholder="Search for food..."
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-3 flex-shrink-0">
        {/* Cart */}
        <div
          className="w-[48px] h-[48px] bg-orange-500 flex justify-center items-center rounded-xl shadow-md relative cursor-pointer hover:bg-orange-400 transition-colors"
          onClick={() => setShowCart(true)}
        >
          <span className="absolute -top-1 -right-1 bg-red-500 text-white font-bold text-[11px] w-5 h-5 flex items-center justify-center rounded-full">
            {items.length}
          </span>
          <LuShoppingBag className="w-[22px] h-[22px] text-white" />
        </div>

        {/* User Info + Logout */}
        {token && user ? (
          <div className="flex items-center gap-2">
            <div className="flex flex-col items-end">
              <span className="text-gray-800 font-semibold text-sm leading-tight">
                {user.name}
              </span>
              <span className="text-gray-400 text-xs leading-tight">
                {user.email}
              </span>
            </div>
            <button
              onClick={handleLogout}
              className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-400 transition text-sm font-semibold"
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            onClick={() => navigate("/auth")}
            className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-400 transition text-sm font-semibold"
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
}

export default Nav;