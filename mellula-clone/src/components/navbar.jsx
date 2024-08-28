import { MdOutlineShoppingCart } from "react-icons/md";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="text-white top-0 left-0 bg-[#002D5A] z-10 fixed w-full md:bg-transparent">
          <div className="w-full py-[8px] h-[78px] px-[12px] md:pt-[40px] md:px-[50px] items-center">
              <nav className="flex justify-between items-center">
                  <div>
                      <img src={'./logo2.png'} className="md:w-[152px] md:h-[52px] w-[69px] h-[24px]" alt="Logo" />
                  </div>
                  <ul className="list-none flex md:space-x-4 text-[15px] font-semibold">
                      <li><a href="#" className="hidden md:flex">SHOP</a></li>
                      <li><a href="#" className="hidden md:flex">ABOUT</a></li>
                      <MdOutlineShoppingCart className="md:h-[35px] md:w-[35px] w-[30px] h-[30px] md:hidden" />
                  </ul>
                  <div className="flex items-center">
                      <MdOutlineShoppingCart className="md:h-[35px] md:w-[35px] w-[30px] h-[30px] hidden md:flex" />
                      <button onClick={toggleMenu} className="md:hidden ml-4">
                          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                      </button>
                  </div>
              </nav>

              {isOpen && (
                  <div className="md:hidden bg-white w-full h-[100vh] top-0 z-10 absolute ">
                      <div className="flex flex-col items-start px-3 py-4 space-y-3">
                          <button onClick={toggleMenu} className="md:hidden ml-1">
                              {isOpen ? <FiX size={24} className="text-black" /> : <h1></h1>}
                          </button>
                          <div className="flex-col flex ml-10  font-semibold text-[21px]">
                              <a href="/" className="text-black pb-[13px] hover:text-gray-600">
                                  SHOP
                              </a>
                              <a href="/" className="text-black hover:text-gray-600">
                                  ABOUT
                              </a>
                          </div>
                      </div>
                  </div>
              )}
          </div>
      </div>
  );
};
