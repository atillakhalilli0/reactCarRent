import React, { useRef, useState } from "react";
import "./FancyButton.css";
import BasketSidebar from "./BasketSidebar";

function Home({ basket, removeFromBasket }) {
  const buttonRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [basketOpen, setBasketOpen] = useState(false);

  const toggleBasket = () => {
    setBasketOpen(!basketOpen);
  };

  const handleMouseMove = (e) => {
    const button = buttonRef.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 30;
    const rotateY = ((x - centerX) / centerX) * -30;

    button.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    button.style.setProperty("--x", `${x}px`);
    button.style.setProperty("--y", `${y}px`);
  };

  const resetTransform = () => {
    const button = buttonRef.current;
    if (button) {
      button.style.transform = "rotateX(0deg) rotateY(0deg)";
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative">
      <BasketSidebar
        isOpen={basketOpen}
        onClose={toggleBasket}
        basket={basket}
        removeFromBasket={removeFromBasket}
      />

      <div className="w-full lg:w-[85%] xl:w-[70%] mx-auto px-4 md:px-6 py-4 md:py-7 bg-transparent flex flex-col gap-4 md:gap-8">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="flex justify-between items-center">
            <img
              className="w-[150px] md:w-[200px]"
              src="https://carrentbaku.az/wp-content/uploads/2022/11/rent-logo-01-1-2048x261-1.png"
              alt="Logo"
            />
            <button className="md:hidden text-2xl" onClick={toggleMenu}>
              <i
                className={`fa-solid ${menuOpen ? "fa-times" : "fa-bars"}`}
              ></i>
            </button>
          </div>

          <ul
            className={`${
              menuOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row gap-4 items-center text-base font-semibold py-4 md:py-0`}
          >
            <li>
              <a href="#homepage">Homepage</a>
            </li>
            <li>
              <a href="#our-cars">Our cars</a>
            </li>
            <li>
              <a href="#rent-a-car">Rent a car</a>
            </li>
            <li>
              <a href="#airport-transfer">Airport transfer</a>
            </li>
            <li>
              <a href="#discover-azerbaijan">Discover Azerbaijan</a>
            </li>
            <li>
              <a href="#contacts">Contacts</a>
            </li>
            <li>
            <button onClick={toggleBasket} className="cursor-pointer relative">
            <i className="fa-solid fa-basket-shopping text-3xl"></i>
            {basket.length > 0 && (
              <span className="absolute -top-2 -right-3 text-xs bg-red-600 text-white rounded-full px-1.5">
                {basket.length}
              </span>
            )}
          </button>
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row justify-between text-white text-lg md:text-xl lg:text-2xl font-bold capitalize gap-2 sm:gap-0">
          <a
            href="#"
            className="flex w-full items-center justify-center bg-green-500 hover:bg-green-600 hover:shadow-[0px_0px_10px_5px_rgb(0,166,62)] transition-all duration-[.4s] py-2 md:py-3 gap-2 md:gap-3"
          >
            <i className="fa-brands fa-whatsapp"></i>
            <p>book by whatsapp</p>
          </a>
          <a
            href="#"
            className="flex w-full items-center justify-center bg-blue-500 hover:bg-blue-600 hover:shadow-[0px_0px_10px_5px_rgb(21,93,252)] transition-all duration-[.4s] py-2 md:py-3 gap-2 md:gap-3"
          >
            <i className="fa-brands fa-telegram"></i>
            <p>book by telegram</p>
          </a>
          <a
            href="#"
            className="flex w-full items-center justify-center bg-orange-500 hover:bg-orange-600 hover:shadow-[0px_0px_10px_5px_rgb(255,105,0)] transition-all duration-[.4s] py-2 md:py-3 gap-2 md:gap-3"
          >
            <i className="fa-solid fa-car"></i>
            <p>click to fast booking</p>
          </a>
        </div>

        <div className="flex flex-col justify-center items-center my-5 md:my-10">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-center">
            Rental Cars From Just 50₼/Day without Deposit
          </h1>
          <p className="w-full md:w-[80%] lg:w-[60%] text-center text-base md:text-lg lg:text-xl my-2 md:my-3">
            Our cars are matching all required standards and we are offering you
            car rental on most profitable conditions in Azerbaijan Republic
            area.
          </p>
          <div className="flex justify-center items-center my-8 md:my-16 lg:my-20">
            <button
              ref={buttonRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={resetTransform}
              className="ultimate-btn group relative px-6 md:px-8 lg:px-10 py-3 md:py-4 rounded-full font-bold uppercase tracking-wide text-white text-base md:text-lg lg:text-xl z-10"
            >
              <span className="z-10 relative pointer-events-none">
                Book Now
              </span>
              <div className="sparkle absolute inset-0 z-0 pointer-events-none"></div>
              <div className="glow absolute inset-0 z-0 pointer-events-none"></div>
              <div className="shimmer absolute inset-0 z-0 pointer-events-none"></div>
            </button>
          </div>
          <img
            className="w-full my-3 md:my-5"
            src="https://carrentbaku.az/wp-content/uploads/2025/03/cars-bg-2.webp"
            alt="hero-img"
          />
        </div>

        <div className="w-full flex flex-wrap justify-center md:justify-between my-5 md:my-10 gap-4 md:gap-6">
          {[
            "kia",
            "bmw",
            "lexus",
            "mercedes",
            "Toyota",
            "range-rover",
            "Mitsubishi",
            "ford",
          ].map((brand, index) => (
            <div
              key={index}
              className="relative w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] transition-all duration-300 ease-in-out group"
            >
              <img
                src={`https://carrentbaku.az/wp-content/uploads/2022/11/${brand}-189x131-2.png`}
                alt={brand}
                className="w-full h-full object-contain rounded-lg shadow-lg group-hover:scale-105 group-hover:shadow-2xl group-hover:border-4 group-hover:border-blue-500 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-transparent opacity-0 group-hover:opacity-50 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
