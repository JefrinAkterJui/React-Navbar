import React from 'react'

const Navbar4 = () => {
  return (
    <>
        <nav className='py-2 bg-slate-200 mt-3'>
            <div className="container">
                <div className="manu ">
                    <div>
                        <ul className='flex  '>
                            <div className='flex justify-between gap-10 mt-10'>
                            <li><a className='text-lg text-black font-bold ' href="#">Women</a></li>
                            <li><a className='text-lg text-black font-bold 'href="#">Men</a></li>
                            <li><a className='text-lg text-black font-bold 'href="#">Teen</a></li>
                            <li><a className='text-lg text-black font-bold 'href="#">Kids</a></li>
                            <li><a className='text-lg text-black font-bold 'href="#">Home</a></li>

                            </div>
                            <div className="manu_logo  ml-72  mr-[430px] mb-10 mt-10">
                                <a href="#"><img className='w-40 flex justify-center' src="/imge/mango.png" alt="Fresh" /></a>
                            </div>
                            <div className="flex   gap-10 mt-5">
                                <a href="#" className=" items-center  text-center flex flex-col">
                                    <img className="w-9 h-9" src="/imge/search.png" alt="search"/>
                                    <span className="text-lg text-black">Search</span>
                                </a>
                                <a href="#" className="items-center text-center flex flex-col">
                                    <img className="w-9 h-9" src="/imge/user.png" alt="Sign in"/>
                                    <span className="text-lg  text-black">Sign in</span>
                                </a>
                                <a href="#" className="items-center text-center flex flex-col">
                                    <img className="w-9 h-9" src="/imge/favorite.png" alt="Wishlist"/>
                                    <span className="text-lg text-black">Wishlist</span>
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

export default Navbar4