import {useState} from "react";
import { toast } from "react-toastify";
import Check from "../assets/Check.png"


const ModelsCard = ({model,carts,setCarts}) => {
const [isSubscribe, setIsSubscribe] = useState(false)

const handelSubscription = ()=>{
    setIsSubscribe(true)

    const isFinded = carts.find(item => item.id === model.id)
    if(isFinded){
        toast.error("Item already added !")
        return;
    };

    setCarts([...carts, model])
    toast.success("Add to cart")
}

    return (
        
            <div className="shadow-sm p-5 rounded-2xl space-y-2">
                   
                    <div className="flex justify-between"> 
                        <span className="text-4xl mb-5"> {model.icon}</span>
                    <div className="badge badge-warning">{model.tag}</div>
                    </div>
                    <h1 className="text-xl font-bold">{model.name}</h1>
                    <p>{model.description}</p>
                    <p className="font-bold">${model.price}/Mo</p>
                    <ul>
                        {
                            model.features.map( fe => {
                                return <li className="flex gap-2"> <div><img  src={Check} alt="" /></div> {fe}</li> ;
                            })
                        }
                    </ul>
                    <button onClick={()=> handelSubscription()} className="btn btn-primary w-full">
                                    {isSubscribe ?"View Cart" : "Buy Now"}
                    </button>                
            </div>
        
    );
};

export default ModelsCard;