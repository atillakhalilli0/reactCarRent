import React, { useState } from "react";
import "./FooterStyle.css";
function Footer() {
  const [contactsExpanded, setContactsExpanded] = useState(false);

  const toggleContacts = () => {
    setContactsExpanded(!contactsExpanded);
  };

  return (
    <div className="bg-[#234896]">
      <div className="w-full lg:w-[85%] xl:w-[70%] mx-auto px-4 md:px-6 py-5">
        <button
          className="md:hidden flex items-center justify-between w-full text-white mb-3 py-2 px-3 border border-white/30 rounded"
          onClick={toggleContacts}
        >
          <span className="font-medium">Contact Information</span>
          <i
            className={`fa-solid ${
              contactsExpanded ? "fa-chevron-up" : "fa-chevron-down"
            }`}
          ></i>
        </button>

        <ul
          className={`${
            contactsExpanded ? "grid" : "hidden"
          } md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-white text-sm md:text-base items-center font-medium capitalize`}
        >
          {[
            { icon: "fa-map-location-dot", text: "Main office", href: "#" },
            { icon: "fa-map-location-dot", text: "Second office", href: "#" },
            {
              icon: "fa-phone",
              text: "+994504777714",
              href: "tel:+994504777714",
            },
            {
              icon: "fa-phone",
              text: "+994504777714",
              href: "tel:+994504777714",
            },
            {
              icon: "fa-phone",
              text: "+994504777714",
              href: "tel:+994504777714",
            },
            {
              icon: "fa-envelope",
              text: "office@carrentbaku.az",
              href: "mailto:office@carrentbaku.az",
            },
          ].map((item, index) => (
            <li
              key={index}
              className="px-4 py-3 bg-transparent shadow-lg md:shadow-2xl w-full border-2 border-white/10 rounded flex items-center transition-transform duration-300 ease-in-out transform hover:scale-105 hover:border-2 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500"
            >
              <i className={`fa-solid ${item.icon} text-xl`}></i>
              <a
                className="ml-3 truncate text-lg hover:text-blue-500 transition-colors duration-300"
                href={item.href}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <hr className="border-white/20" />

      <div className="w-full lg:w-[85%] xl:w-[70%] mx-auto px-4 md:px-6 flex flex-col md:flex-row md:justify-around items-center py-5 text-white gap-4 md:gap-0">
        <div className="w-[180px] md:w-[220px] lg:w-[250px]">
          <img
            className="object-cover w-full"
            src="https://carrentbaku.az/wp-content/uploads/2022/11/carrentbaku-white-logo.png"
            alt="logo"
          />
        </div>

        <div className="text-xl md:text-2xl flex gap-4 md:gap-5">
          <a
            href="#"
            className="hover:text-green-600 transition-all duration-300"
          >
            <i className="fa-brands fa-whatsapp"></i>
          </a>
          <a
            href="#"
            className="hover:text-fuchsia-500 transition-all duration-300"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="#"
            className="hover:text-blue-500 transition-all duration-300"
          >
            <i className="fa-brands fa-facebook"></i>
          </a>
        </div>

        <p className="text-xs md:text-sm font-medium text-gray-300 text-center md:text-left">
          © 2025 Site crafted by{" "}
          <a
            href="https://github.com/atillakhalilli0"
            className="relative overflow-hidden font-mono text-white bg-gray-900 px-6 py-2 rounded-md inline-flex items-center gap-2 hover:shadow-lg transition-all duration-300 border border-gray-700 hover:border-blue-500 group"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-500 to-fuchsia-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-green-600 via-blue-500 to-fuchsia-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            <i className="fa-brands fa-github text-lg"></i>
            <span className="relative">Atilla Khalilli</span>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
