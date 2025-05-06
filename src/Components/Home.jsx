import React from "react";

function Home() {
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
          <li className="flex items-center justify-center">
            <a href="#discover-azerbaijan">
              Discover Azerbaijan <i className="fa-solid fa-sort-down"></i>
            </a>
          </li>
          <li>
            <a href="#contacts">Contacts</a>
          </li>
        </ul>
      </div>
      <div className="flex justify-between text-white text-2xl font-bold capitalize">
        <a
          href="#"
          className="flex w-full items-center justify-center bg-green-500 py-3 gap-3"
        >
          <i className="fa-brands fa-whatsapp"></i>
          <p>book by whatsapp</p>
        </a>
        <a
          href="#"
          className="flex w-full items-center justify-center bg-blue-500 py-3 gap-3"
        >
          <i className="fa-brands fa-telegram"></i>
          <p>book by telegram</p>
        </a>
        <a
          href="#"
          className="flex w-full items-center justify-center bg-orange-400 py-3 gap-3"
        >
          <i className="fa-solid fa-car"></i>
          <p>click to fast booking</p>
        </a>
      </div>
      <div className="flex flex-col justify-center items-center my-10">
        <h1 className="text-3xl font-extrabold">Rental Cars From Just 50₼/Day without Deposit</h1>
        <p className="w-[60%] text-center text-xl my-3">Our cars are matching all required standards and we are offering you car rental on most profitable conditions in Azerbaijan Republic area.</p>
        <button className="px-6 py-2 my-5 bg-[#039BE5] rounded-full uppercase font-bold text-lg text-white">book now</button>
        <img className="my-5" src="https://carrentbaku.az/wp-content/uploads/2025/03/cars-bg-2.webp" alt="hero-img" />
      </div>
      <div className="w-full flex flex-wrap justify-between my-10">
        <img className="w-[100px]" src="https://carrentbaku.az/wp-content/uploads/2022/11/kia-189x131-2.png" alt="" />
        <img className="w-[100px]" src="https://carrentbaku.az/wp-content/uploads/2022/11/bmw-189x131-2.png" alt="" />
        <img className="w-[100px]" src="https://carrentbaku.az/wp-content/uploads/2022/11/lexus-189x131-2.png" alt="" />
        <img className="w-[100px]" src="https://carrentbaku.az/wp-content/uploads/2022/11/mercedes-189x131-2.png" alt="" />
        <img className="w-[100px]" src="https://carrentbaku.az/wp-content/uploads/2022/11/Toyota-189x131-2.png" alt="" />
        <img className="w-[100px]" src="https://carrentbaku.az/wp-content/uploads/2022/11/range-rover-189x131-2.png" alt="" />
        <img className="w-[100px]" src="https://carrentbaku.az/wp-content/uploads/2022/11/Mitsubishi-189x131-2.png" alt="" />
        <img className="w-[100px]" src="https://carrentbaku.az/wp-content/uploads/2022/11/hyundai-190x132-2.png" alt="" />
        <img className="w-[100px]" src="https://carrentbaku.az/wp-content/uploads/2022/11/ford-189x131-2.png" alt="" />
      </div>
    </div>
  );
}

export default Home;
