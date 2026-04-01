import {useState} from "react";
import { toast } from "react-toastify";



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
    toast.success("Items added to cart")
}

    return (
        
            <div className="shadow-sm p-5 rounded-2xl space-y-2">
                    <span className="flex text-center  ml-[280px] w-[130px] bg-yellow-100 text-yellow-600 rounded-full px-4  py-1">{model.tag} </span>
                    <img src={model.image} alt="" />
                    <h1 className="text-xl font-bold">{model.name}</h1>
                    <p>{model.description}</p>
                    <p className="font-bold">${model.price}/Mo</p>
                    <ul>
                    <li >{model.features1}</li>
                    <li >{model.features2}</li>
                    <li >{model.features3}</li>
                    </ul>
                    <button onClick={()=> handelSubscription()} className="btn btn-primary w-full">
                                    {isSubscribe ?"View Cart" : "Buy Now"}
                    </button>                
            </div>
        
    );
};

export default ModelsCard;