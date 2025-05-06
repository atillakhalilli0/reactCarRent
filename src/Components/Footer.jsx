import React from "react";

function Footer() {
  return (
    <div className="bg-[#234896]">
      <div className="w-[70%] mx-auto py-5">
        <ul className="flex justify-between text-white text-lg items-center font-medium capitalize">
          <li className="px-3 py-1 bg-transparent shadow-2xl w-full border-1 border-black">
            <i className="fa-solid fa-map-location-dot"></i>
            <a className="ml-2" href="#">
              main office
            </a>
          </li>
          <li className="px-3 py-1 bg-transparent shadow-2xl w-full border-1 border-black">
            <i className="fa-solid fa-map-location-dot"></i>
            <a className="ml-2" href="#">
              second office
            </a>
          </li>
          <li className="px-3 py-1 bg-transparent shadow-2xl w-full border-1 border-black">
            <i className="fa-solid fa-phone"></i>
            <a className="ml-2" href="tel:+994504777714">
              +994504777714
            </a>
          </li>
          <li className="px-3 py-1 bg-transparent shadow-2xl w-full border-1 border-black">
            <i className="fa-solid fa-phone"></i>
            <a className="ml-2" href="tel:+994504777714">
              +994504777714
            </a>
          </li>
          <li className="px-3 py-1 bg-transparent shadow-2xl w-full border-1 border-black">
            <i className="fa-solid fa-phone"></i>
            <a className="ml-2" href="tel:+994504777714">
              +994504777714
            </a>
          </li>
          <li className="px-3 py-1 bg-transparent shadow-2xl w-full border-1 flex items-center border-black">
            <i className="fa-solid fa-envelope"></i>
            <a className="ml-2" href="mailto:office@carrentbaku.az">
              office@carrentbaku.az
            </a>
          </li>
        </ul>
      </div>
      <hr className="text-white" />
      <div className="w-[70%] mx-auto flex justify-around items-center py-5 text-white">
        <div className="w-[250px]">
          <img
            className="object-cover"
            src="https://carrentbaku.az/wp-content/uploads/2022/11/carrentbaku-white-logo.png"
            alt="logo"
          />
        </div>
        <div className="text-2xl flex gap-5">
          <i className="fa-brands fa-whatsapp"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-facebook"></i>
        </div>
        <p className="text-sm font-medium text-gray-300">© 2025 Site crafted by Atilla Khalilli</p>
      </div>
    </div>
  );
}

export default Footer;
