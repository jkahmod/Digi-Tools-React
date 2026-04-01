import { useState } from 'react'
import './App.css'
import Cart from './Components/Cart'
import Counter from './Components/Counter'
import CtaBtn from './Components/CtaBtn'
import Footer from './Components/footer'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Models from './Components/Models'
import Users from './Components/Users'

const getModels = async () => {
  const res = await fetch("/Models.json")
  return res.json()
}
const modelsPromise = getModels()

function App() {
  
  const [activeTab,setActiveTab] = useState("model")

  const [carts,setCarts]=useState([])

  
  

  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <Counter> </Counter>

      {/* TabButton  */}
     
      <div className="tabs tabs-box justify-center mt-10">
        <input type="radio" name="my_tabs_1" className="tab" aria-label="Model"  onClick={()=>setActiveTab("model")} defaultChecked />
        <input type="radio" name="my_tabs_1" className="tab" aria-label="Cart"  onClick={()=>setActiveTab("Cart")}   />
      </div>
      {/* TabButton  */}

      { activeTab === "model" &&  <Models modelsPromise={modelsPromise} carts={carts} setCarts={setCarts}  ></Models>}
      { activeTab === "Cart" &&  <Cart carts={carts} setCarts={setCarts} ></Cart>}
      
      <Users></Users>
      {/* Simple, Transparent Pricing */}
      {/* Simple, Transparent Pricing */}

      <CtaBtn></CtaBtn>


      <Footer></Footer>


    </>
  )
}

export default App
