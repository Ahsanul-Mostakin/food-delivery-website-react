import { createContext, useState } from "react";
import { food_items } from "../food";
/* eslint-disable-next-line react-refresh/only-export-components */
export const DataContext = createContext();

const UserProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [cate, setCate] = useState(food_items);
  const [showCart, setShowCart] = useState(false);

  return (
    <DataContext.Provider value={{ input, setInput, cate, setCate, showCart, setShowCart }}>
      {children}
    </DataContext.Provider>
  );
};

export default UserProvider;