import React from "react";

function Navbar() {
  return (
    <div className="py-5 bg-[#039BE5]">
      <div className="w-[70%] mx-auto text-white ">
        <div className="flex justify-between">
          <div className="flex gap-15 items-center">
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-phone"></i>
              <a href="tel:+994504777714">+994504777714</a>
            </div>
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-envelope"></i>
              <a href="mailto:office@carrentbaku.az">office@carrentbaku.az</a>
            </div>
            <div className="flex items-center text-lg gap-15">
              <a className="hover:text-fuchsia-600 transition-all duration-[.4s]" href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a className="hover:text-blue-800 transition-all duration-[.4s]" href="#">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </div>
          </div>
          <div className="flex gap-10 font-medium text-lg">
            <span className="hover:scale-[1.2] transition-all duration-[.4s] cursor-pointer">AZ</span>
            <span className="hover:scale-[1.2] transition-all duration-[.4s] cursor-pointer">EN</span>
            <span className="hover:scale-[1.2] transition-all duration-[.4s] cursor-pointer">RU</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
