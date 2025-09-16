import React, { useContext, useEffect } from "react";
import Nav from "../components/Nav";
import Categories from "../category";
import Card from "../components/Card";
import { food_items } from "../food";
import { dataContext } from "../context/UserContext";
import { ImCross } from "react-icons/im";

const Home = () => {
  let { input, cate, setCate, showCart, setShowCart } = useContext(dataContext);

  // Update cate based on search input
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

  // Filter by category
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

  return (
    <div className="bg-slate-200 w-full min-h-screen">
      <Nav />
      {!input ? (
        <div className="flex flex-wrap justify-center items-center gap-5 w-[100%]">
          {Categories.map((item) => (
            <div
              key={item.id}
              onClick={() => filter(item.name)}
              className="w-[140px] h-[150px] bg-white flex flex-col items-start gap-5 p-5 justify-start text-[20px] font-semibold text-gray-600 rounded-lg shadow-xl hover:bg-green-200 cursor-pointer transition-all duration-200"
            >
              {item.icon}
              {item.name}
            </div>
          ))}
        </div>
      ) : null}

      <div className="w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8">
        {cate.map((item) => (
          <Card
            key={item.id}
            name={item.food_name}
            image={item.food_image}
            price={item.price}
            id={item.id}
            type={item.food_type}
          />
        ))}
      </div>

      <div
        className={`w-[40vw] h-full fixed top-0 right-0 bg-white shadow-xl p-6 transition-all duration-500 ${
          showCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="w-full flex justify-between items-center">
          <span className="text-green-400 text-[18px] font-semibold">
            Order items
          </span>
          <ImCross
            className="w-[20px] h-[20px] cursor-pointer text-green-400 text-[18px] font-semibold hover:text-gray-600"
            onClick={() => setShowCart(false)}
          />
        </header>
      </div>
    </div>
  );
};

export default Home;
