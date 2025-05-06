import React from "react";

function Navbar() {
  return (
    <div className="py-5 bg-[#039BE5]">
      <div className="w-[70%] mx-auto text-white ">
        <div className="flex justify-between">
          <div className="flex gap-15 items-center">
            <div>
              <i className="fa-solid fa-phone"></i>
              <a href="tel:+994504777714">+994504777714</a>
            </div>
            <div>
              <i className="fa-solid fa-envelope"></i>
              <a href="mailto:office@carrentbaku.az">office@carrentbaku.az</a>
            </div>
            <div className="flex items-center text-lg gap-15">
              <a href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </div>
          </div>
          <div className="flex gap-10 font-medium text-lg">
            <span>AZ</span>
            <span>EN</span>
            <span>RU</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
