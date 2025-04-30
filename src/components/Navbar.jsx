import menu from '../assets/menubar.svg'
import { useState } from 'react'
const Navbar = () => {
  const [menuOpen,setMenuOpen] = useState(false)

  const toggler =  ()=> {
    setMenuOpen (!menuOpen)
  }

  return (
       <>
    <div className=' px-4 bg-green-200'>
    <nav className='flex justify-between items-center '>
      <div className='h-16 w-16'>
        <a href="#"><img src={'https://picsum.photos/200'} className='rounded-full' alt="" /></a>
      </div>
      <ul className=' space-x-6 hidden md:flex'>
        <li><a href="" className='text-black-700 hover:text-white font-medium'>Services</a></li>
        <li><a href="" className='text-black-700 font-medium hover:text-white'>Pricing</a></li>
        <li><a href="" className='text-black-700 font-medium hover:text-white'>About</a></li>
        <li><a href="" className='text-black-700 font-medium hover:text-white'>Contact</a></li>
      </ul>
      <button className='bg-green-500 hidden md:block px-6 py-2 rounded-full font-medium text-white hover:bg-blue-300'>Sign Up</button>
      <button className= 'md:hidden hover:text-white' onClick={toggler}>
        <img src={menu} className='w-10 h-7 mr-3 ' alt="" />
      </button>
    </nav>
   </div>

    {/* mobile nav  */}
  <div className={`md:hidden  ${menuOpen ? 'block' : 'hidden'}`}>
    <ul className=' space-y-6  flex flex-col items-center bg-green-200'>
        <li><a href="" className='text-black-700 hover:text-white font-medium'>Services</a></li>
        <li><a href="" className='text-black-700 font-medium hover:text-white'>Pricing</a></li>
        <li><a href="" className='text-black-700 font-medium hover:text-white'>About</a></li>
        <li><a href="" className='text-black-700 font-medium hover:text-white'>Contact</a></li>
        <li><button className='bg-green-500   px-6 py-2 rounded-full font-medium text-white hover:bg-blue-300 mb-3'>Sign Up</button>
        <button></button></li>
      </ul>
     
  </div>
  
</>



  )
}

export default Navbar