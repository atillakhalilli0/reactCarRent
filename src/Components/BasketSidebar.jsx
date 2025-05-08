import React from "react";

function BasketSidebar({ isOpen, onClose, basket, removeFromBasket }) {
  return (
    <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 z-50 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-xl font-bold">Your Basket</h2>
        <button onClick={onClose} className="text-gray-600 hover:text-black text-2xl">
          &times;
        </button>
      </div>

      {basket.length === 0 ? (
        <div className="p-4 text-gray-500 text-center">Your basket is empty.</div>
      ) : (
        <div className="p-4 space-y-4 overflow-y-auto max-h-[calc(100%-60px)]">
          {basket.map((item) => (
            <div key={item.id} className="flex gap-3 items-center border p-2 rounded">
              <img src={item.img} alt={item.marka} className="w-16 h-16 object-cover rounded" />
              <div className="flex-1">
                <div className="font-semibold">{item.marka} {item.model}</div>
                <div className="text-sm text-gray-600">{item.qiymet} AZN</div>
              </div>
              <button
                onClick={() => removeFromBasket(item.id)}
                className="text-red-500 hover:text-red-700 text-sm"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BasketSidebar;
