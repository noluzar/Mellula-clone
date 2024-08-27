// import React from 'react'

export const Navbar = () => {
  return (
    <div className="text-white top-0 left-0 bg-transparent z-10 fixed w-full">
        <nav className="flex justify-between w-full pt-[40px] px-[50px] items-center">
            <div>
                <img src={'./logo2.png'} className="w-[152px] h-[52px]"></img>
            </div>
            <ul className="list-none flex space-x-4 text-[15px] font-semibold">
                <li><a href="#">SHOP</a></li>
                <li><a href="#">ABOUT</a></li>
            </ul>
            <div>Icon</div>
        </nav>
    </div>
  )
}
