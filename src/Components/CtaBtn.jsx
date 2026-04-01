import React from 'react';

const CtaBtn = () => {
    return (
        <div>
            <section className='bg-gradient-to-r from-[#652df7] to-[#8c19fa] py-10'>

                <div className='w-[1400px] m-auto py-10 space-y-10'> 

                <h1 className='text-4xl text-white text-center font-bold leading-[74px]'>Ready to Transform Your Workflow?</h1>
                <p className='text-center text-white'>Join thousands of professionals who are already using Digitools to work smarter. <br /> Start your free trial today.</p>

                <div className='flex gap-4 justify-center'>
                    <button className='btn rounded-full'>Explore Products</button>
                <button className='btn text-white bg-transparent border-2 border-white  rounded-full'>View Pricing</button>
                </div>
                <p className='text-center text-white'>14-day free trial • No credit card required • Cancel anytime</p>

                </div>
                              
            </section>
        </div>
    );
};

export default CtaBtn;