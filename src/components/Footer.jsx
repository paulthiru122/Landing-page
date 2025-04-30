import React from 'react'
import fbicon from '../assets/fbicon.svg'
import twitter from '../assets/twitter.svg'
import insta from '../assets/insta.svg'

const Footer = () => {
  return (
    <footer className='bg-gray-200 mt-12 '>
      <div className='container mx-auto flex  flex-col md:flex-row sm:gap-5 py-10 md:pt-32'> 
        {/* width  25%  */}
        <div className='w-1/4 '>
        <p className='text-2xl font-medium'>Developer</p></div>

    
      {/* width -50%  */}
      <div className='w-1/2 flex flex-col md:flex-row'>
      <div className='pr-24'>
        <h2 className='text-2xl font-bold'>Links</h2>
        <ul className='space-y-2 mt-4 '>
          <li><a href="#">Products</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </div>

      <div className='pr-24' >
        <h2 className='text-2xl font-bold'>Links</h2>
        <ul className='space-y-2 mt-4 '>
          <li><a href="#">Products</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </div>

      <div className='pr-24'>
        <h2 className='text-2xl font-bold'>Links</h2>
        <ul className='space-y-2 mt-4 '>
          <li><a href="#">Products</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </div>


      </div>
      {/* width 25%  */} 
      <div className='w-1/4 flex justify-end gap-4 '>
      <button>
        <img src={fbicon} className='h-10 w-10' alt="" />
      </button>
      <button>
        <img src={twitter} className='h-10 w-10' alt="" />
      </button>
      <button>
        <img src={insta} className='h-10 w-10' alt="" />
      </button>

      </div>
      </div>
    </footer>
  )
}

export default Footer
