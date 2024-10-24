import React from 'react'

const Navbar = () => {
  return (
    <>
        <nav className='py-2 bg-pink-300'>
            <div className="container">
                <div className="manu  flex justify-between items-center">
                    <div className="manu_logo w-28"><a href="#"><img src="/imge/fresh.png" alt="Fresh" /></a></div>
                    <div>
                        <ul className='flex  gap-20'>
                            <li><a className='text-lg text-rose-500 font-bold hover:text-white ease-linear duration-200' href="#">Home</a></li>
                            <li><a className='text-lg text-rose-500 font-bold hover:text-white ease-linear duration-200'href="#">Docs</a></li>
                            <li><a className='text-lg text-rose-500 font-bold hover:text-white ease-linear duration-200'href="#">About</a></li>
                            <li><a className='text-lg text-rose-500 font-bold hover:text-white ease-linear duration-200'href="#">Blog</a></li>
                            <div className='flex gap-2'>
                            <span className='text-lg text-white font-bold '>Your profile</span>
                            <img width={40}  src="/imge/profile.png" alt="profile" />
                            </div>
                        </ul>
                        
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar