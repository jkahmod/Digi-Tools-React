

const Counter = () => {
    return (
        <div>
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

export default Counter;