import React from 'react';
import image from '../assets.//DigiTools.png';

const Index = () => {
    return (
        <div>
            <header className=' shadow-sm '>
            <div className='max-w-[1400px] flex justify-between items-center py-3 m-auto'>
                    <div>
                    {/* <img src="../assets/DigiTools.png" alt="" /> */}
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
                        <p> 
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg> 
                        </p>
                        <p className='font-semibold'>   
                        login
                        </p>
                        
                    </div>
                    <button className='btn'>Get Started</button>
                </div>
            </div>
            </header>
        </div>
    );
};

export default Index;