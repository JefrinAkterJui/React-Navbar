import React from 'react'

const Navbar3 = () => {
  return (
    <>
        <nav className='py-2 bg-[#e3f0f8] mt-3'>
            <div className="container">
                <div className="manu ">
                    <div className="manu_logo  flex justify-center items-center"><a href="#"><img src="/imge/fresh2.png" alt="Fresh" /></a></div>
                    <div>
                        <ul className='flex justify-center items-center gap-20 mt-4'>
                            <li><a className='text-lg text-cyan-950 font-normal hover:text-black hover:font-semibold  ease-linear duration-200' href="#">GIFTING</a></li>
                            <li><a className='text-lg text-cyan-950 font-normal hover:text-black hover:font-semibold  ease-linear duration-200'href="#">NEW</a></li>
                            <li><a className='text-lg text-cyan-950 font-normal hover:text-black hover:font-semibold  ease-linear duration-200'href="#">BEST SELLERS</a></li>
                            <li><a className='text-lg text-cyan-950 font-normal hover:text-black hover:font-semibold  ease-linear duration-200'href="#">SKINCARE</a></li>
                            <li><a className='text-lg text-cyan-950 font-normal hover:text-black hover:font-semibold  ease-linear duration-200'href="#">LIP CARE</a></li>
                            <li><a className='text-lg text-cyan-950 font-normal hover:text-black hover:font-semibold  ease-linear duration-200'href="#">BODY</a></li>
                            <li><a className='text-lg text-cyan-950 font-normal hover:text-black hover:font-semibold  ease-linear duration-200'href="#">FRAGRANCE</a></li>
                        </ul>
                        
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar3