import {use} from "react";
import ModelsCard from "./ModelsCard";

const Models = ({modelsPromise,carts,setCarts}) => {

    const models = use(modelsPromise)
    return (
        <div>
            <div className="w-[100%] md:w-[576px] lg:w-[1400px]  m-auto py-20  space-y-10"> 
                <div className='text-center'> 

                        <h1 className='text-4xl text-center font-bold leading-[74px] ' >Premium Digital Tools</h1>
                        <p className='text-center'>Choose from our curated collection of premium digital products designed <br />  
                            to boost your productivity and creativity.</p>                  
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-5">
                    {
                        models.map(model =>( 
                            
                       <ModelsCard key={model.id} model={model} carts={carts} setCarts={setCarts} ></ModelsCard>     

                      ))}
                </div>
            </div>
        </div>
    );
};

export default Models;