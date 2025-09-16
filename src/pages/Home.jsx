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
    <div className="bg-slate-200 w-full min-h-screen">
      <Nav />
      {!input && (
        <div className="flex flex-wrap justify-center items-center gap-5 w-[100%]">
          {Categories.map((item) => (
            <div
              key={item.id}
              onClick={() => filter(item.name)}
              className="w-[140px] h-[150px] bg-white flex flex-col items-start gap-5 p-5 justify-start text-[20px] font-semibold text-gray-600 rounded-lg shadow-xl hover:bg-blue-200 cursor-pointer transition-all duration-200"
            >
              {item.icon}
              {item.name}
            </div>
          ))}
        </div>
      )}

      <div className="w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8">
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
          <div className="text-center text-2xl text-blue-500 font-semibold pt-5">
            No Dish Found
          </div>
        )}
      </div>

      <div
        className={`w-full md:w-[40vw] h-full fixed top-0 right-0 bg-white shadow-xl p-6 transition-all duration-500 flex flex-col items-center overflow-auto ${
          showCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="w-full flex justify-between items-center">
          <span className="text-blue-400 text-[18px] font-semibold">
            Order items
          </span>
          <ImCross
            className="w-[20px] h-[20px] cursor-pointer text-blue-400 text-[18px] font-semibold hover:text-gray-600"
            onClick={() => setShowCart(false)}
          />
        </header>
        {items.length > 0 ? (
          <>
            <div className="w-full mt-9 flex flex-col gap-8">
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
            <div className="w-full border-t-2 border-gray-400 mt-7 flex flex-col gap-2 p-8"></div>
            <div className="w-full flex justify-between items-center">
              <span className="text-lg text-gray-600 font-semibold">
                Subtotal
              </span>
              <span className="text-blue-400 font-semibold text-lg">
                BDT {subtotal}/-
              </span>
            </div>
            <div className="w-full flex justify-between items-center">
              <span className="text-lg text-gray-600 font-semibold">
                Delivery Fee
              </span>
              <span className="text-blue-400 font-semibold text-lg">
                BDT {deliveryFee}/-
              </span>
            </div>
            <div className="w-full flex justify-between items-center">
              <span className="text-lg text-gray-600 font-semibold">Taxes</span>
              <span className="text-blue-400 font-semibold text-lg">
                BDT {taxes}/-
              </span>
            </div>
            <div className="w-full flex justify-between items-center">
              <span className="text-2xl text-gray-600 font-semibold">
                Total
              </span>
              <span className="text-blue-400 font-semibold text-2xl">
                BDT {total}/-
              </span>
            </div>
            <button
              className="w-[80%] p-3 bg-blue-500 rounded-lg text-white hover:bg-blue-400 transition-all"
              onClick={() => {
                toast.info("Order Placed...");
              }}
            >
              Place Order
            </button>
          </>
        ) : (
          <div className="text-center text-2xl text-blue-500 font-semibold pt-5">
            Empty Cart
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
