import React from "react";
import Nav from "../components/Nav";
import Categories from "../category";

const Home = () => {
  return (
    <div className="bg-slate-200 w-full min-h-screen">
      <Nav />
      <div className="flex flex-wrap justify-center items-center gap-5 w-[100%]">
        {Categories.map((item) => {
          return (
            <div
              key={item.id}
              className="w-[140px] h-[150px] bg-white flex flex-col items-start gap-5 p-5 justify-start text- [20px] font-semibold text-gray-600 rounded-lg shadow-x hover:bg-green-200 cursor-pointer transition-all duration-200"
            >
              {item.icon}
              {item.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
