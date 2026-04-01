import React from 'react';
import empty from "../assets/products/shopping (1).png"
import { toast } from 'react-toastify';

const Cart = ({carts,setCarts}) => {

    const totalPrice = carts.reduce((sum, item) => sum + 
    item.price, 0 )
    console.log(totalPrice.toFixed(2))

    const handlePayment = ()=>{
        setCarts([])
        toast.success("Payment Successfull")
    };

    const handleDelet = (item) =>{
        const filterArray = carts.filter(c =>c.id !== item.id)
        setCarts(filterArray)
        toast.error("Items Remove")
    }

    return (
        <div>
            <div className='space-y-4 w-[1200px] p-7 rounded-2xl mt-10 m-auto bg-gray-100'>
                <h1 className=' text-3xl font-bold text-purple-600 '> Your Cart</h1> 
                <div>
                    {
                        carts.length === 0 ? 
                        <div className='bg-white rounded-lg p-10 text-center space-y-5'>
                            <img className='m-auto w-[100px]  ' src={empty} alt="" />
                            <p className='text-4xl mt-5' >Your Cart Is Currently Empty</p>
                        </div>
                        
                        :
                         <div>
                         {
                         carts.map(item => <div key={item.id}>
                        {/* Item section  */}
                        <div className='flex justify-between shadow-lg mt-5  p-4 rounded-lg  items-center '> 
                        
                        <div className='grid gap-2'>

                            <div className='flex gap-4' >
                            <img src={item.image} alt="" /> 
                            <h1 className='text-xl font-semibold'>{item.name}</h1>
                            </div>
                            <p className='font-bold'>{item.price}</p>
                        </div>
                        <div>
                             <button onClick={()=>handleDelet(item)} className='btn btn-error font-semibold'>Remove</button>
                        </div>
                        
                            </div>
                        </div> )}
                    </div>
                    }
                </div>
                      
             {/* total section  */}
                    <div className='bg-gray-200 rounded-lg border-1 border-gray-300 flex  mt-10 p-5 justify-between '>
                        <div className='text-2xl font-bold'>Total</div>
                        <div className='text-2xl'>${totalPrice.toFixed(2)}</div>
                    </div>

                    <button onClick={handlePayment} className='btn btn-primary mt-5 p-8 rounded-lg w-full text-2xl ' > Proced To Checkout </button>

            </div>
        </div>
    );
};

export default Cart;