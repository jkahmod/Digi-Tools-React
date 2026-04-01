import React from 'react';
import Cart from "../assets/products/shopping-cart.png"
const Header = () => {
    return (
        <div>
            

            <header className="shadow-sm">
                <div className="max-w-[1400px] flex justify-between items-center py-3 m-auto px-4">

                    
                    <div>
                    <h1 className="bg-gradient-to-r from-[#652df7] to-[#8c19fa] bg-clip-text text-transparent font-bold text-3xl cursor-pointer">
                        DigiTools
                    </h1>
                    </div>

                    
                    <div className="hidden md:flex gap-5 text-sm font-semibold">
                    <a href="">Products</a>
                    <a href="">Features</a>
                    <a href="">Pricing</a>
                    <a href="">Testimonials</a>
                    <a href="">FAQ</a>
                    </div>

                    
                    <div className="flex items-center gap-3">

                    
                    <div className="flex md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </div>

                    
                    <span className="relative">
                        <img src={Cart} alt="Cart" className="w-6 h-6 md:w-8 md:h-8" />
                        
                    </span>

                    
                    <p className="hidden md:flex font-semibold">Login</p>

                    
                    <button className="hidden md:flex btn bg-gradient-to-r from-[#652df7] to-[#8c19fa] text-white px-6 py-3 rounded-xl transition-all duration-300 ease-in-out hover:from-[#8c19fa] hover:to-[#652df7] hover:scale-105 hover:shadow-xl">
                        Get Started
                    </button>
                    </div>

                </div>
            </header>


            
      
        </div>
    );
};

export default Header;