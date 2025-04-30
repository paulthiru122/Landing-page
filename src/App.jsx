import './App.css'

import  {Footer, Hero as Heros, Main, Navbar, PricingSection, StoriesSection}  from './components/index'

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
   <StoriesSection />
   <Footer />
    </>
 

  )
}

export default App
