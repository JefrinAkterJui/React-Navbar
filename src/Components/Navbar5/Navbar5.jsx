import React from 'react'

const Navbar5 = () => {
  return (
    <>
        <nav className='py-2 bg-[#1E3E62] mt-2'>
            <div className="container">
                <div className="manu  flex  items-center">
                    <div className="manu_logo w-28 mr-32"><a href="#"><img src="/imge/winner.png" alt="Fresh" /></a></div>
                    <div>
                        <ul className='flex  gap-20'>
                            <div className='mt-8 mb-8 mr-28 ml-96'>
                                <input type="text" placeholder='Search..' className='w-96 h-10 bg-transparent outline-none border-2 rounded-lg border-lime-600 text-[#fff] pl-3 ' />
                            </div>
                            
                            
                            <div className="flex   gap-10 mt-5 mr-auto">
                                <a href="#" className=" items-center  text-center flex flex-col ">
                                    <img className="w-9 h-9" src="/imge/profile.png" alt="search"/>
                                    <span className="text-lg text-white hover:text-[#859F3D] ease-linear duration-200">My account</span>
                                </a>
                                <a href="#" className="items-center text-center flex flex-col ">
                                    <img className="w-9 h-9" src="/imge/arrow.png" alt="Sign in"/>
                                    <span className="text-lg  text-white hover:text-[#859F3D] ease-linear duration-200">Compare list</span>
                                </a>
                                <a href="#" className="items-center text-center flex flex-col ">
                                    <img className="w-9 h-9" src="/imge/favorite.png" alt="Wishlist"/>
                                    <span className="text-lg text-white hover:text-[#859F3D] ease-linear duration-200">Wishlist</span>
                                </a>
                           </div>
                        </ul>
                        
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar5