import React, { useRef } from "react";
import "./FancyButton.css";

function Home() {
  const buttonRef = useRef(null);

  const handleMouseMove = (e) => {
    const button = buttonRef.current;
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
    button.style.transform = "rotateX(0deg) rotateY(0deg)";
  };
  return (
    <div className="w-[70%] mx-auto py-7 bg-transparent flex flex-col gap-8">
      <div className="flex justify-between">
        <div>
          <img
            className="w-[200px]"
            src="https://carrentbaku.az/wp-content/uploads/2022/11/rent-logo-01-1-2048x261-1.png"
            alt="Logo"
          />
        </div>
        <ul className="flex gap-11 text-base font-semibold">
          <li className="border-b-[3px] transition-all duration-[.4s] border-transparent hover:border-black pb-1">
            <a href="#homepage">Homepage</a>
          </li>
          <li className="border-b-[3px] transition-all duration-[.4s] border-transparent hover:border-black pb-1">
            <a href="#our-cars">Our cars</a>
          </li>
          <li className="border-b-[3px] transition-all duration-[.4s] border-transparent hover:border-black pb-1">
            <a href="#rent-a-car">Rent a car</a>
          </li>
          <li className="border-b-[3px] transition-all duration-[.4s] border-transparent hover:border-black pb-1">
            <a href="#airport-transfer">Airport transfer</a>
          </li>
          <li className="flex items-center justify-center border-b-[3px] transition-all duration-[.4s] border-transparent hover:border-black pb-1">
            <a href="#discover-azerbaijan">Discover Azerbaijan</a>
          </li>
          <li className="border-b-[3px] transition-all duration-[.4s] border-transparent hover:border-black pb-1">
            <a href="#contacts">Contacts</a>
          </li>
        </ul>
      </div>
      <div className="flex justify-between text-white text-2xl font-bold capitalize">
        <a
          href="#"
          className="flex w-full items-center justify-center bg-green-500 hover:bg-green-600 transition-all duration-[.4s] py-3 gap-3"
        >
          <i className="fa-brands fa-whatsapp"></i>
          <p>book by whatsapp</p>
        </a>
        <a
          href="#"
          className="flex w-full items-center justify-center bg-blue-500 hover:bg-blue-600 transition-all duration-[.4s] py-3 gap-3"
        >
          <i className="fa-brands fa-telegram"></i>
          <p>book by telegram</p>
        </a>
        <a
          href="#"
          className="flex w-full items-center justify-center bg-orange-500 hover:bg-orange-600 transition-all duration-[.4s] py-3 gap-3"
        >
          <i className="fa-solid fa-car"></i>
          <p>click to fast booking</p>
        </a>
      </div>
      <div className="flex flex-col justify-center items-center my-10">
        <h1 className="text-3xl font-extrabold">
          Rental Cars From Just 50₼/Day without Deposit
        </h1>
        <p className="w-[60%] text-center text-xl my-3">
          Our cars are matching all required standards and we are offering you
          car rental on most profitable conditions in Azerbaijan Republic area.
        </p>
        <div className="flex justify-center items-center my-20">
          <button
            ref={buttonRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={resetTransform}
            className="ultimate-btn group relative px-10 py-4 rounded-full font-bold uppercase tracking-wide text-white text-xl z-10"
          >
            <span className="z-10 relative pointer-events-none">Book Now</span>
            <div className="sparkle absolute inset-0 z-0 pointer-events-none"></div>
            <div className="glow absolute inset-0 z-0 pointer-events-none"></div>
            <div className="shimmer absolute inset-0 z-0 pointer-events-none"></div>
          </button>
        </div>
        <img
          className="my-5"
          src="https://carrentbaku.az/wp-content/uploads/2025/03/cars-bg-2.webp"
          alt="hero-img"
        />
      </div>
      <div className="w-full flex flex-wrap justify-between my-10 gap-6">
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
            className="relative w-[120px] h-[120px] transition-all duration-300 ease-in-out group"
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
  );
}

export default Home;
