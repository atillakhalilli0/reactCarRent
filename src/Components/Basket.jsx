import React from "react";
import { FaBasketShopping } from "react-icons/fa6";

function Basket() {
  return (
    <button className="bg-indigo-500 text-white px-4 py-2 rounded flex items-center gap-1 cursor-pointer hover:bg-indigo-600 transition-all duration-[.4s]">
      <FaBasketShopping /> Basket
    </button>
  );
}

export default Basket;
