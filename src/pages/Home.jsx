import React, { useContext, useEffect } from "react";
import Nav from "../components/Nav";
import Categories from "../category";
import Card from "../components/Card";
import { food_items } from "../food";
import { dataContext } from "../context/UserContext";
import { ImCross } from "react-icons/im";
import Card2 from "../components/Card2";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const Home = () => {
  let { input, cate, setCate, showCart, setShowCart } = useContext(dataContext);
  let items = useSelector((state) => state.cart);

  useEffect(() => {
    if (input === "") {
      setCate(food_items);
    } else {
      let filtered = food_items.filter((item) =>
        item.food_name.toLowerCase().includes(input.toLowerCase())
      );
      setCate(filtered);
    }
  }, [input, setCate]);

  function filter(category) {
    if (category === "All") {
      setCate(food_items);
    } else {
      let newList = food_items.filter(
        (item) => item.food_category === category
      );
      setCate(newList);
    }
  }

  let subtotal = items.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );
  let deliveryFee = 20;
  let taxes = (subtotal * 0.5) / 100;
  let total = Math.floor(subtotal + deliveryFee + taxes);

  return (
    <div className="bg-orange-50 w-full min-h-screen">
      <Nav />

      {!input && (
        <div className="flex flex-wrap justify-center items-center gap-5 w-full py-6 px-5">
          {Categories.map((item) => (
            <div
              key={item.id}
              onClick={() => filter(item.name)}
              className="w-[140px] h-[150px] bg-white flex flex-col items-start gap-5 p-5 justify-start text-[20px] font-semibold text-gray-600 rounded-xl shadow-md hover:bg-orange-100 hover:text-orange-500 hover:shadow-lg cursor-pointer transition-all duration-200 border border-orange-100"
            >
              {item.icon}
              {item.name}
            </div>
          ))}
        </div>
      )}

      <div className="w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-4 pb-8">
        {cate.length > 0 ? (
          cate.map((item) => (
            <Card
              key={item.id}
              name={item.food_name}
              image={item.food_image}
              price={item.price}
              id={item.id}
              type={item.food_type}
            />
          ))
        ) : (
          <div className="text-center text-2xl text-orange-400 font-semibold pt-5">
            No Dish Found
          </div>
        )}
      </div>

      {/* Cart Sidebar */}
      <div
        className={`w-full md:w-[40vw] h-full fixed top-0 right-0 bg-white shadow-2xl transition-all duration-500 flex flex-col items-center overflow-auto ${
          showCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Cart Header */}
        <header className="w-full flex justify-between items-center px-6 py-5 border-b border-orange-100 bg-orange-500">
          <span className="text-white text-[18px] font-bold tracking-wide">
            🛒 Your Order
          </span>
          <ImCross
            className="w-[16px] h-[16px] cursor-pointer text-white hover:text-orange-200 transition-colors"
            onClick={() => setShowCart(false)}
          />
        </header>

        {items.length > 0 ? (
          <div className="w-full flex flex-col flex-1 px-6">
            {/* Cart Items */}
            <div className="w-full mt-5 flex flex-col gap-4">
              {items.map((item) => (
                <Card2
                  key={item.id}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  id={item.id}
                  qty={item.qty}
                />
              ))}
            </div>

            {/* Price Breakdown */}
            <div className="w-full mt-6 rounded-xl bg-orange-50 border border-orange-100 p-5 flex flex-col gap-3">
              <div className="w-full flex justify-between items-center">
                <span className="text-base text-gray-500 font-medium">Subtotal</span>
                <span className="text-orange-500 font-semibold text-base">
                  BDT {subtotal}/-
                </span>
              </div>
              <div className="w-full flex justify-between items-center">
                <span className="text-base text-gray-500 font-medium">Delivery Fee</span>
                <span className="text-orange-500 font-semibold text-base">
                  BDT {deliveryFee}/-
                </span>
              </div>
              <div className="w-full flex justify-between items-center">
                <span className="text-base text-gray-500 font-medium">Taxes</span>
                <span className="text-orange-500 font-semibold text-base">
                  BDT {taxes}/-
                </span>
              </div>
              <div className="w-full border-t border-orange-200 pt-3 flex justify-between items-center">
                <span className="text-xl text-gray-700 font-bold">Total</span>
                <span className="text-orange-500 font-bold text-xl">
                  BDT {total}/-
                </span>
              </div>
            </div>

            {/* Place Order Button */}
            <button
              className="w-full mt-5 mb-6 p-4 bg-orange-500 rounded-xl text-white font-bold text-lg hover:bg-orange-400 active:scale-95 transition-all duration-150 shadow-md"
              onClick={() => toast.info("Order Placed...")}
            >
              Place Order →
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center flex-1 gap-3 pb-20">
            <span className="text-6xl">🛒</span>
            <div className="text-center text-xl text-orange-400 font-semibold">
              Your cart is empty
            </div>
            <p className="text-gray-400 text-sm">Add some delicious items!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;