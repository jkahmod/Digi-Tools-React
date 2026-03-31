import img1 from "../assets/banner.png"
import Play from "../assets/Play.png"


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

            




        </div>
    );
};

export default Index;