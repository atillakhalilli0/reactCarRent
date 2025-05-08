import React from "react";

function Cards({ search, data, handleDelete }) {
  const filteredCars = data.filter((car) => {
    if (!search) return true;
    const searchLower = search.toLowerCase().trim();
    return car.marka.toLowerCase().includes(searchLower);
  });

  return (
    <div className="w-full mx-auto flex flex-wrap justify-between gap-y-5 my-20">
      {filteredCars.length > 0 ? (
        filteredCars.map((item) => (
          <div
            key={item.id}
            className="max-w-[290px] w-full gap-1 rounded-2xl shadow-md overflow-hidden border border-gray-200 bg-white transition-transform duration-300 hover:scale-[1.02]"
          >
            <img
              src={item.img}
              alt={item.marka}
              className="w-full h-48 object-cover rounded-t-2xl"
            />
            <div className="p-5">
              <div className="text-sm text-blue-600 font-semibold uppercase tracking-wide">
                {item.model}
              </div>
              <div className="text-2xl font-bold text-gray-900 mt-1">
                {item.marka}
              </div>

              <div className="flex justify-between mt-4 bg-blue-600 text-white text-xl font-medium rounded-xl px-4 py-2">
                <div>Price:</div>
                <div>
                  <span className="underline">{item.qiymet}</span> AZN
                </div>
              </div>

              <div className="mt-5 space-y-2 text-gray-700 text-sm grid grid-cols-2">
                <div className="flex items-center gap-2">
                  <i className="fa-regular fa-calendar-days text-blue-700"></i>
                  <span>{item.il}</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-palette text-blue-700"></i>
                  <span className="capitalize">{item.reng}</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-users text-blue-700"></i>
                  <span>5 Seats</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-car-side text-blue-700"></i>
                  <span>{item.mator} L</span>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3">
                <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 rounded-full transition-colors duration-200">
                  RENT NOW
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="bg-red-700 hover:bg-red-800 text-white font-semibold py-2 rounded-full transition-colors duration-200"
                >
                  DELETE
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center text-gray-500 w-full">
          No cars found matching "{search}"
        </div>
      )}
    </div>
  );
}

export default Cards;
