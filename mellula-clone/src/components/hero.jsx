// import React from 'react'


export const Hero = () => {
  return (
    <div className="top-0 overflow-x-hidden relative bg-cover w-full h-full z-0 flex justify-center items-center flex-col" style={{backgroundImage:`url('./22.jpg')`,
        height: '100vh',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: ""
        
    }}>
        <div className="text-white text-[67px] text-center  font-semibold">FOR COLOURFUL </div>
        <div className="text-white text-[67px] text-center pb-[17px] font-semibold">STEPS IN LIFE</div>
        <button className="bg-[#0DF8AD]   px-[34px] py-[21px] rounded-full text-[18px] text-white p-[17px] font-semibold">VISIT OUR SHOP</button>
    </div>
  )
}
