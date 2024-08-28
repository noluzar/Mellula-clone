// import React from 'react'

export const PicGallery = () => {
  return (
    <>
     {/* First Container */}
    <div className="flex md:flex-row flex-col ">

      <div className="w-full h-[60vh] md:h-[80vh]">
         <img className="w-full h-full hover:scale-110 transition-transform" src="./pg1.jpg" alt="" />
      </div>
        
      <div className="md:w-[45vw] w-full h-auto">
         <img className="w-full md:h-[40vh] h-[60vh] hover:scale-110 transition-transform" src="./pg2.jpg" alt="" />
         <img className="w-full md:h-[40vh]  h-[60vh] hover:scale-110 transition-transform" src="./pg3.jpg" alt="" />
      </div>

    </div>


{/* Second Container */}
    <div className="flex md:flex-row flex-col "> 
      <div className="md:w-[45vw] w-full h-auto">
         <img className="w-full md:h-[40vh] h-[60vh] hover:scale-110 transition-transform" src="./pg4.jpg" alt="" />
         <img className="w-full md:h-[40vh] h-[60vh] hover:scale-110 transition-transform" src="./pg5.jpg" alt="" />
      </div>

      <div className="w-full h-[60vh] md:h-[80vh]">
         <img className="w-full h-full hover:scale-110 transition-transform" src="./pg6.jpg" alt="" />
      </div>

    </div>

         {/* Third Container */}
         <div className="flex md:flex-row flex-col ">

            <div className="w-full h-[60vh] md:h-[80vh]">
            <img className="w-full h-[80vh] hover:scale-110 transition-transform" src="./pg7.jpg" alt="" />
            </div>
            
            <div className="md:w-[45vw] w-full h-auto">
            <img className="w-full md:h-[40vh] h-[60vh] hover:scale-110 transition-transform" src="./pg8.jpg" alt="" />
            <img className="w-full md:h-[40vh] h-[60vh] hover:scale-110 transition-transform" src="./pg10.gif" alt="" />
            </div>

            </div>
    </>
  )
}
