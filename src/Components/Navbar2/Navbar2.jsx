import React from 'react'

const Navbar2 = () => {
  return (
    <>
        <nav className='py-2 bg-slate-200 mt-2'>
            <div className="container">
                <div className="manu  flex justify-between items-center">
                    <div className="manu_logo w-28"><a href="#"><img src="/imge/it.png" alt="Fresh" /></a></div>
                    <div>
                        <ul className='flex  gap-20'>
                            <li><a className='text-lg text-red-800 font-bold hover:text-green-800 ease-linear duration-200' href="#">Home</a></li>
                            <li><a className='text-lg text-red-800 font-bold hover:text-green-800 ease-linear duration-200'href="#">About us</a></li>
                            <li><a className='text-lg text-red-800 font-bold hover:text-green-800 ease-linear duration-200'href="#">Success story</a></li>
                            <li><a className='text-lg text-red-800 font-bold hover:text-green-800 ease-linear duration-200'href="#">Freelancing</a></li>
                            <li><a className='text-lg text-red-800 font-bold hover:text-green-800 ease-linear duration-200'href="#">Contact</a></li>
                            <div className='bg-red-600 py-2 px-2 rounded hover:bg-green-800 ease-linear duration-200'><a href="#"><h2 className='text-sm font-bold text-white '>Browse Course</h2></a></div>
                        </ul>
                        
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar2