import React from 'react';
import Cart from "../assets/products/shopping-cart.png"
const Header = () => {
    return (
        <div>
            <header className=' shadow-sm '>
                        <div className='max-w-[1400px] flex justify-between items-center py-3 m-auto'>
                                <div>
                                
                                <h1 className='bg-gradient-to-r from-[#652df7] to-[#8c19fa] bg-clip-text text-transparent font-bold text-3xl  cursor-pointer'>DigiTools</h1>                          
                            </div>
                            <div>
                                <ul className='flex gap-5 text-sm font-semibold'>
                                    <li> <a href="">Products </a></li>
                                    <li> <a href="">Features </a></li>
                                    <li> <a href="">Pricing </a></li>
                                    <li> <a href="">Testimonials </a></li>
                                    <li> <a href="">FAQ </a></li>
                                    
                                </ul>
                            </div>
                            <div className='flex gap-1.5 items-center '>
                                <div className='flex gap-3 items-center'>
                                    <span>
                                        <img src={Cart} alt="" />
                                    </span>
                                    <p className='font-semibold'> 
                                    <img src="" alt="" />  
                                    login
                                    </p>
                                    
                                </div>
                                <button className='btn bg-gradient-to-r from-[#652df7] to-[#8c19fa]  text-white px-6 py-5 rounded-xl  transition-all duration-300 ease-in-out hover:from-[#8c19fa] hover:to-[#652df7]  hover:scale-105 hover:shadow-xl'>
                                Get Started
                                </button>
                            </div>
                        </div>
                        </header>
            
        </div>
    );
};

export default Header;