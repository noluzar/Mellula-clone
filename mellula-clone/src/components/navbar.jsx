import { MdOutlineShoppingCart } from "react-icons/md";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <motion.div 
        initial={{ opacity: 0, y: 25, }}
        whileInView={{ opacity: 1, y: 0, }}
        transition={{ duration: 1, delay: 1.2, }} 
        className="text-white top-0 left-0 bg-[#002D5A] z-10 fixed w-full md:bg-transparent">
            <div className="w-full py-[20px] h-[78px] px-[12px] md:pt-[40px] md:px-[50px] items-center">
                <nav className="flex justify-between items-center">
                    <div>
                        <a href="/">
                        <img src={'./logo2.png'} className="md:w-[152px] md:h-[52px] w-[69px] h-[24px]" alt="Logo"  />
                        </a>
                    </div>
                    <ul className="list-none flex md:space-x-4 text-[15px] font-semibold">
                        <li><a href="/shop" className="hidden md:flex">SHOP</a></li>
                        <li><a href="#" className="hidden md:flex">ABOUT</a></li>
                        <div className="flex items-center relative">
                            <MdOutlineShoppingCart className="md:h-[35px] md:w-[35px] w-[30px] h-[30px] md:hidden" />
                            <div className="absolute bg-[#fbb498] top-[-8px] right-[-8px] w-[28px] h-[28px] rounded-full md:hidden flex items-center justify-center">
                                <p className="text-white text-[12px]">0</p>
                            </div>
                        </div>
                    </ul>
                    <div className="flex items-center">
                        <div className="flex  items-center relative">
                            <MdOutlineShoppingCart className="md:h-[35px] md:w-[35px] w-[30px] h-[30px] hidden md:flex" />
                            <div className="absolute bg-[#fbb498] top-[-8px] right-[-8px] w-[28px] h-[28px] hidden rounded-full md:flex items-center justify-center">
                                <p className="text-white text-[12px]">0</p>
                            </div>
                        </div>


                        <button onClick={toggleMenu} className="md:hidden ml-4">
                            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>
                </nav>

                {isOpen && (
                    <div className="md:hidden bg-white w-full h-[100vh] top-0 left-0 z-10 absolute ">
                        <div className="flex flex-col items-start px-3 py-4 space-y-3">
                            <button onClick={toggleMenu} className="md:hidden ml-1">
                                {isOpen ? <FiX size={24} className="text-black" /> : <h1></h1>}
                            </button>
                            <div className="flex-col flex ml-10  font-semibold text-[21px]">
                                <a href="/shop" className="text-black pb-[13px] hover:text-gray-600">
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
        </motion.div>
    );
};
