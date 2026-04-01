import React from 'react';

const Cart = ({carts}) => {

    const totalPrice = carts.reduce((sum, item) => sum + 
    item.price, 0 )
    console.log(totalPrice.toFixed(2))
    return (
        <div>
            <div className='space-y-4'>
                <h1 className=' text-3xl  '> Your Cart</h1> 
                {
                carts.map(item => <div key={item.id}>
                     {/* Item section  */}
                    <div className='flex justify-between border-2  p-4 rounded-'> 
                        
                        <div className='grid gap-2'>
                        <div className='flex gap-4' >
                        <img src={item.image} alt="" /> 
                        <h1 className='text-xl font-semibold'>{item.name}</h1>
                        </div>
                        <p>{item.price}</p>
                        </div>
                        <div> 
                            
                        </div>
                    </div>

                   
                </div> )
            }
             {/* total section  */}
                    <div className='bg-gray-400 flex justify-between '>
                        <div>Total</div>
                        <div>${totalPrice.toFixed(2)}</div>
                    </div>

                    <button className='btn btn-primary mt-5 w-full' > Proced To Checkout </button>

            </div>
        </div>
    );
};

export default Cart;