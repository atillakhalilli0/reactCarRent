import React, { useState } from "react";

function Navbar() {
  const [contactsOpen, setContactsOpen] = useState(false);
  
  const toggleContacts = () => {
    setContactsOpen(!contactsOpen);
  };

  return (
    <div className="py-3 md:py-5 bg-[#039BE5]">
      <div className="w-full lg:w-[85%] xl:w-[70%] mx-auto px-4 md:px-6 text-white">
        <div className="flex flex-col sm:flex-row justify-between">
          <div className="flex flex-col sm:flex-row sm:gap-4 md:gap-6 lg:gap-8 items-start sm:items-center">
            <button 
              className="sm:hidden flex items-center mb-2 text-sm"
              onClick={toggleContacts}
            >
              <i className={`fa-solid ${contactsOpen ? 'fa-chevron-up' : 'fa-chevron-down'} mr-2`}></i>
              Contact Info
            </button>

            <div className={`${contactsOpen ? 'flex' : 'hidden'} sm:flex flex-col sm:flex-row sm:gap-4 md:gap-6 lg:gap-8 w-full sm:w-auto mb-2 sm:mb-0`}>
              <div className="flex items-center gap-2 text-sm md:text-base">
                <i className="fa-solid fa-phone"></i>
                <a href="tel:+994504777714" className="hover:underline">+994504777714</a>
              </div>
              <div className="flex items-center gap-2 text-sm md:text-base">
                <i className="fa-solid fa-envelope"></i>
                <a href="mailto:office@carrentbaku.az" className="hover:underline">office@carrentbaku.az</a>
              </div>
            </div>

            <div className="flex items-center text-base md:text-lg gap-4 sm:gap-6 md:gap-8">
              <a className="hover:text-fuchsia-600 transition-all duration-[.4s]" href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a className="hover:text-blue-800 transition-all duration-[.4s]" href="#">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </div>
          </div>

          <div className="flex gap-4 md:gap-6 lg:gap-8 font-medium text-base md:text-lg mt-2 sm:mt-0">
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