
import img1 from "../assets/banner.png"
import Play from "../assets/Play.png"

const Hero = () => {
    return (
        <div>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 gap-5  w-[100%] lg:w-[1300px] md:w-[768px] justify-between items-center m-auto py-[100px] '> 
                <div className='space-y-8 p-2 lg:p-10'>
                    {/* Badge  */}
                    <div className="flex items-center gap-3 bg-purple-200/40 px-4 py-2 justify-center rounded-full w-[100%] md:w[80%] lg:w-[75%]">
                        <span className="relative flex h-4 w-4">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-purple-600"></span>
                        </span>
                        <h4 className="text-sm lg:text-xl font-medium text-purple-600 ">
                            New: AI-Powered Tools Available
                        </h4>
                    </div>

                    {/* hero Title  */}
                    <h1 className='text-2xl md:text-4xl lg:text-6xl font-bold lg:leading-[74px]   '>
                    Supercharge Your <br />
                    Digital Workflow</h1>
                    <p>Access premium AI tools, design assets, templates, and productivity  <br />
                    software—all in one place. Start creating faster today. <br />
                    Explore Products
                    </p>


                    <div className='flex gap-4 '>
                    <button className="btn btn-primary rounded-full text-[12px] ">Explore Products </button> 
                    <button className="btn btn-outline btn-primary rounded-full text-[12px]"> <img src={Play} alt="" /> Watch Demo</button> 
                    </div>


                </div>

                <div className=''>
                    <img className="w-[90%] lg:w-[100%] m-auto" src={img1} alt="" />

                </div>

                
            </div>
        </div>
    );
};

export default Hero;