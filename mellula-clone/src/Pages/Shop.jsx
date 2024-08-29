// import React from 'react'

export const Shop = () => {
    const shoes = [
        { 
            id: 1,
            name: 'Bue',
            price: 45.00,
            url: './shoes/1.jpg'
        },

        { 
            id: 2,
            name: 'Skjold',
            price: 45.00,
            url: './shoes/2.jpg'
        },

        { 
            name: 'Fille',
            price: 45.00,
            url: './shoes/3.jpg'
        },

        { 
            id: 4,
            name: 'Mint',
            price: 45.00,
            url: './shoes/5.jpg'
        },

        { 
            name: 'Mikka',
            price: 45.00,
            url: './shoes/4.jpg'
        },

        { 
            name: 'Purple',
            price: 45.00,
            url: './shoes/6.jpg'
        },

        { 
            name: 'Patent Mint',
            price: 45.00,
            url: './shoes/7.jpg'
        },

        { 
            name: 'Gold',
            price: 45.00,
            url: './shoes/8.jpg'
        },

        { 
            name: 'Peoni',
            price: 45.00,
            url: './shoes/8.jpg'
        },

        { 
            name: 'Bue',
            price: 45.00,
            url: './shoes/1.jpg'
        },

        { 
            name: 'Bue',
            price: 45.00,
            url: './shoes/1.jpg'
        },

        { 
            name: 'Bue',
            price: 45.00,
            url: './shoes/1.jpg'
        },

        { 
            name: 'Bue',
            price: 45.00,
            url: './shoes/1.jpg'
        },

        { 
            name: 'Bue',
            price: 45.00,
            url: './shoes/1.jpg'
        },

        { 
            name: 'Bue',
            price: 45.00,
            url: './shoes/1.jpg'
        },

        { 
            name: 'Bue',
            price: 45.00,
            url: './shoes/1.jpg'
        },

        { 
            name: 'Bue',
            price: 45.00,
            url: './shoes/1.jpg'
        }
    ]
  return (
    <div>
        <div className="top-0 overflow-x-hidden relative bg-cover w-full h-full z-0 flex justify-center items-center flex-col" style={{
      backgroundImage: `url('./22.jpg')`,
      height: '50vh',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: ""

    }}>
        <h1 className="text-7xl text-white font-semibold">SHOP</h1>
    </div>
        <div className="p-[100px]">
            <div>
            <ul className="flex justify-center gap-11">
                <li><a href="">All</a></li>
                <li><a href="">Kids shoes</a></li>
                <li><a href="">No-tie Laces</a></li>
            </ul>
            </div>
             <div className="grid grid-cols-3 "> 
                 {shoes.map((shoe) => {

                    <div className="w-auto h-auto"  >
                        <img src={shoe.url} alt="" className="w-[100px] h-7"/>
                        <h1>{shoe.name}</h1>
                        <p>{shoe.price}</p>
                    </div>       
                    
                })}

            {/* <div>
                <img src="./shoes/1.jpg"></img>
                <h2>Blue</h2>
                <p>R45,00</p>
            </div>
            <div>
                <img src="./shoes/1.jpg"></img>
                <h2>Blue</h2>
                <p>R45,00</p>
            </div>
            <div>
                <img src="./shoes/1.jpg"></img>
                <h2>Blue</h2>
                <p>R45,00</p>
            </div>
            <div>
                <img src="./shoes/1.jpg"></img>
                <h2>Blue</h2>
                <p>R45,00</p>
            </div>
            <div>
                <img src="./shoes/1.jpg"></img>
                <h2>Blue</h2>
                <p>R45,00</p>
            </div>  */}
        </div>
        </div>
     </div>
  )
}


// const Card = ({url, name, price}) => {
//     return(
//         <div>
//             <img src={url}></img>
//             <h2>{name}</h2>
//             <p>{price}</p>
//         </div>

//     )
// }