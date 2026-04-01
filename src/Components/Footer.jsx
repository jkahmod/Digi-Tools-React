import insta from "../assets/Instagram.png"
import facebook from "../assets/Facebook.png"
import x from "../assets/Twitter.png"

const Footer = () => {
    return (
        <div>
            
            <footer className='bg-[#101727] pt-20 pb-10 overflow-hidden p-10' >
                <div className=' w-[100%] lg:w-[1300px] md:w-[768px]  m-auto  grid grid-cols-1 lg:grid-cols-5 md:grid-cols-2 gap-5'>
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
                
                <div className='flex justify-between  w-[100%] lg:w-[1300px] md:w-[768px]   mt-6 m-auto pt-10'>
                    
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

export default Footer;