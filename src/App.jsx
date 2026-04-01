import './App.css'
import Counter from './Components/Counter'
import CtaBtn from './Components/CtaBtn'
import Footer from './Components/footer'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Models from './Components/Models'
import Users from './Components/Users'
import Index from './Home/Index'

const getModels = async () => {
  const res = await fetch("/Models.json")
  return res.json()
}

const modelsPromise = getModels()

function App() {
  

  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <Counter> </Counter>
      <Models modelsPromise={modelsPromise}></Models>
      <Users></Users>
      {/* Simple, Transparent Pricing */}
      {/* Simple, Transparent Pricing */}

      <CtaBtn></CtaBtn>


      <Footer></Footer>


    </>
  )
}

export default App
