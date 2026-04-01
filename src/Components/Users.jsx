import React from 'react';

import Package from "../assets/package.png"
import user from "../assets/user.png"
import rocket from "../assets/rocket.png"
import Frame1 from "../assets/Frame1.png"
import Frame2 from "../assets/Frame2.png"
import Frame3 from "../assets/Frame3.png"
            
const Users = () => {
    return (
        <div>
            <section className='bg-[#F9FAFC] py-20 space-y-10'>
                <div className=' w-[100%] lg:w-[1300px] md:w-[768px]  m-auto space-y-10'>
                                <div className=''> 

                                <h1 className='text-4xl text-center font-bold leading-[74px] ' >Get Started in 3 Steps</h1>
                                <p className='text-center'>Start using premium digital tools in minutes, not hours.</p>
                                        
                                </div>
                                <div className=' grid lg:grid-cols-3 md:grid-cols-2 gap-5 '>
                                    <div className='bg-white shadow-sm rounded-2xl p-10 '>
                                        <span className='flex justify-end'>
                                            <img className='flex text-end' src={Frame1} alt="" />
                                        </span>
                                        <img className='mb-3 m-auto p-2 rounded  bg-purple-100' src={user} alt="" />
                                        <h3 className='text-center font-bold'>Start Creating</h3>
                                        <p className='text-center'>Download and start using your premium tools immediately.</p>
                                    </div>
                                    <div className='bg-white shadow-sm rounded-2xl p-10'>
                                        <span className='flex justify-end'>
                                            <img className='flex text-end' src={Frame2} alt="" />
                                        </span>
                                        <img className='mb-3 m-auto p-2 rounded  bg-purple-100' src={Package} alt="" />
                                        <h3 className='text-center font-bold'>Choose Products</h3>
                                        <p className='text-center'>Browse our catalog and select the tools that fit your needs.</p>
                                    </div>
                                    <div className='bg-white shadow-sm rounded-2xl p-10'>
                                        <span className='flex justify-end'>
                                            <img className='flex text-end' src={Frame3} alt="" />
                                        </span>
                                        <img className='mb-3 m-auto p-2 rounded  bg-purple-100' src={rocket} alt="" />
                                        <h3 className='text-center font-bold'>Create Account</h3>
                                        <p className='text-center'>Sign up for free in seconds. No credit card required to get started.</p>
                                    </div>

                                </div>
                </div>
                        
            </section> 
        </div>
            );
};
            
export default Users;
            