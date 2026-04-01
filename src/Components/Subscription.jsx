import React from 'react';
import Check from "../assets/Check.png"
const Subscription = () => {
    return (
        <div>
             <div className=' w-[100%] md:w-[576px] lg:w-[1400px] mt-20 mb-20 m-auto py-10 space-y-5'> 
              <div>
                 <h1 className='text-4xl text-center font-bold leading-[74px]'>Ready to Transform Your Workflow?</h1>
                <p className='text-center'>Join thousands of professionals who are already using Digitools to work smarter. <br /> Start your free trial today.</p>
              </div>

              <div className=' grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-15'>
                <div className='bg-[#F2F2F2] p-5 border-1 border-gray-200 rounded-2xl'>
                   <h2 className='font-bold'>Starter</h2> 
                   <p>Perfect for getting started</p>
                   <h3><span className='text-2xl font-bold'> $0</span>/month</h3>
                   <ul>
                    <li><img src={Check}/> Access to 10 free tools</li>

                    <li><img src={Check}/>Basic templates</li>

                    <li><img src={Check}/> Community support</li>
                    <li><img src={Check}/> 1 project per month</li>
                    <button className='btn bg-gradient-to-r from-[#652df7] to-[#8c19fa] text-white w-full rounded-full mt-5 p-6'>Get Started Free</button>
                   </ul>
                </div>

            
                <div className='bg-gradient-to-r from-[#652df7] to-[#8c19fa] text-white p-5 border-1 border-gray-200 rounded-2xl'>
                    <div className="badge badge-warning p-4 mt-[-40px] flex  m-auto rounded-full">Most Popular</div>
                   <h2 className='font-bold'>Pro </h2> 
                   <p>Best for professionals</p>
                   <h3><span className='text-2xl font-bold'> $29</span>/month</h3>
                   <ul>
                    <li><img src={Check}/> Access to all premium tools</li>

                    <li><img src={Check}/>Unlimited templates</li>

                    <li><img src={Check}/> Priority support</li>
                    <li><img src={Check}/> Unlimited projects</li>
                    <li><img src={Check}/> Cloud sync</li>
                    <li><img src={Check}/> Advanced analytics</li>
                    <button className='btn bg-gradient-to-r from-[#652df7] to-[#8c19fa] text-white w-full rounded-full mt-5 p-6'>Get Started Free</button>
                   </ul>
                </div>


                <div className='bg-[#F2F2F2] p-5 border-1 border-gray-200 rounded-2xl'>
                   <h2 className='font-bold'>Enterprise</h2> 
                   <p>For teams and businesses</p>
                   <h3><span className='text-2xl font-bold'> $99</span>/month</h3>
                   <ul>
                    <li><img src={Check}/> Everything in Pro</li>

                    <li><img src={Check}/>Team collaboration</li>

                    <li><img src={Check}/> Custom integrations</li>
                    <li><img src={Check}/> Dedicated support</li>
                    <li><img src={Check}/> SLA guarantee</li>
                    <li><img src={Check}/> Custom branding</li>
                    <button className='btn bg-gradient-to-r from-[#652df7] to-[#8c19fa] text-white w-full rounded-full mt-5 p-6'>Get Started Free</button>
                   </ul>
                </div>
                
              </div>
                
            </div>


        </div>
    );
};

export default Subscription;