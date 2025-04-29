import './App.css'

function App() {
 

  return (
    <>
    
   <div className='container mx-auto bg-green-200'>
    <nav className='flex justify-between items-center '>
      <div className='h-16 w-16'>
        <a href="#"><img src={'https://picsum.photos/200/300'} className='rounded-full' alt="" /></a>
      </div>
      <ul className='flex space-x-6'>
        <li><a href="" className='text-blue-700 hover:text-green-950 font-medium'>Services</a></li>
        <li><a href="" className='text-blue-700 font-medium hover:text-green-950'>Pricing</a></li>
        <li><a href="" className='text-blue-700 font-medium hover:text-green-950'>About</a></li>
        <li><a href="" className='text-blue-700 font-medium hover:text-green-950'>Contact</a></li>
      </ul>
      <button className='bg-green-500 px-6 py-2 rounded-full font-medium text-white hover:bg-blue-300'>Sign Up</button>
    </nav>

   </div>
   {/* Hero Section */}
   <div>
    <div>
      
    </div>
   </div>

    </>
 
 
  )
}

export default App
