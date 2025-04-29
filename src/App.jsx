import './App.css'

import  {Hero as Heros, Main, Navbar, PricingSection}  from './components/index'

function App() {
 

  return (
    <>
        <Navbar />

   {/* Hero Section */}
        <Heros />

   {/* Mainsection */}
   <Main />
 

   {/* PricingSection */}
   <PricingSection />
    </>
 

  )
}

export default App
