import img1 from "../assets/banner.png"
import Play from "../assets/Play.png"
import Package from "../assets/package.png"
import user from "../assets/user.png"
import rocket from "../assets/rocket.png"
import Frame1 from "../assets/Frame1.png"
import Frame2 from "../assets/Frame2.png"
import Frame3 from "../assets/Frame3.png"
import insta from "../assets/Instagram.png"
import facebook from "../assets/Facebook.png"
import x from "../assets/Twitter.png"


const Index = () => {
    return (
        <div>
            {/* Header section  */}
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
                        <p> 
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg> 
                        </p>
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

            {/* Hero section  */}
            <div className='flex w-[1400px] justify-between items-center m-auto py-[100px] '> 
                <div className='space-y-8 p-10'>
                    {/* Badge  */}
                    <div class="flex items-center gap-3 bg-purple-200/40 px-4 py-2 justify-center rounded-full w-[75%]">
                        <span class="relative flex h-4 w-4">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-4 w-4 bg-purple-600"></span>
                        </span>
                        <h4 class="text-xl font-medium text-purple-600">
                            New: AI-Powered Tools Available
                        </h4>
                    </div>

                    {/* hero Title  */}
                    <h1 className='text-6xl font-bold leading-[74px] '>
                    Supercharge Your <br />
                    Digital Workflow</h1>
                    <p>Access premium AI tools, design assets, templates, and productivity  <br />
                    software—all in one place. Start creating faster today. <br />
                    Explore Products
                    </p>


                    <div className='flex gap-4'>
                    <button className="btn btn-primary rounded-full">Explore Products </button> 
                    <button className="btn btn-outline btn-primary rounded-full"> <img src={Play} alt="" /> Watch Demo</button> 
                    </div>


                </div>

                <div className=''>
                    <img src={img1} alt="" />

                </div>

                
            </div>

            {/* Counter Section  */}
            <section className='bg-gradient-to-r from-[#652df7] to-[#8c19fa] py-10'>
                <div className=' w-[1400px] m-auto  grid grid-cols-3 justify-center '> 
                    <div>
                        <h1 className='text-white text-5xl font-bold text-center '>50K+</h1>
                        <p className='text-white text-center' >Active Users</p>
                    </div>
                    <div>
                        <h1 className='text-white text-2xl font-bold text-center text-5xl'>200+</h1>
                        <p className='text-white text-center' >Premium Tools</p>
                    </div>
                    <div>
                        <h1 className='text-white text-2xl font-bold text-center text-5xl '>4.9</h1>
                        <p className='text-white text-center' >Rating</p>
                    </div>
                </div>
            </section>

                        {/* Premium Digital Tools */}

            {/* Premium Digital Tools */}
            

            {/* Get Started in 3 Steps  */}
             <section className='bg-[#F9FAFC] py-20 space-y-10'>
                <div className='w-[1200px] m-auto space-y-10'>
                    <div className=''> 

                    <h1 className='text-4xl text-center font-bold leading-[74px] ' >Get Started in 3 Steps</h1>
                    <p className='text-center'>Start using premium digital tools in minutes, not hours.</p>
                            
                    </div>
                    <div className=' grid grid-cols-3 m-auto gap-10'>
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

            {/* Simple, Transparent Pricing */}

            {/* Simple, Transparent Pricing */}
            

            {/* Ready to Transform Your Workflow? */}
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

            {/* footer section  */}

            <footer className='bg-[#101727] pt-20 pb-10'>
                <div className='w-[1400px] m-auto grid grid-cols-5 gap-5'>
                    <div className='space-y-4'>
                         <h1 className='text-white font-bold text-3xl  cursor-pointer'>DigiTools</h1> 
                         <p className='text-white'>
                            Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
                         </p>
                    </div>
                    
                    <nav className='text-white grid '>
                        <h6 className="footer-title ">Services</h6>
                        <a className="link link-hover">Features</a>
                        <a className="link link-hover">Pricing</a>
                        <a className="link link-hover">Integrations</a>
                        <a className="link link-hover">Templates</a>
                    </nav>
                    <nav className='text-white grid '>
                        <h6 className="footer-title ">Company</h6>
                        <a className="link link-hover">About </a>
                        <a className="link link-hover">Blog</a>
                        <a className="link link-hover">Careers</a>
                        <a className="link link-hover">Press</a>
                    </nav>
                    <nav className='text-white grid '>
                        <h6 className="footer-title ">Resources</h6>
                        <a className="link link-hover">Documentation</a>
                        <a className="link link-hover">Help Center</a>
                        <a className="link link-hover">Community</a>
                        <a className="link link-hover">Contact</a>
                    </nav>

                    <div>
                        <h6 className="footer-title text-white">Social Links</h6>
                        <div className='flex gap-3'> 
                            <img className='cursor-pointer' src={insta} alt="" />
                            <img className='cursor-pointer' src={facebook} alt="" />
                            <img className='cursor-pointer' src={x} alt="" />
                        </div>
                    </div>
                    
                </div>
                
                <div className='flex justify-between w-[1400px] border-t-2 border-zinc-700 mt-6 m-auto pt-10'>
                    
                    <p className='text-gray-400'>© 2026 Digitools. All rights reserved. </p>
                    <ul className='flex gap-6 text-gray-400'> 
                        <li>Privacy Policy</li>
                        <li>  Terms of Service </li>
                        <li> Cookies</li>
                    </ul>


                </div>
            </footer>


            




        </div>
    );
};

export default Index;