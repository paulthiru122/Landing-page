import './App.css'
import Hero from './assets/hero.png'
import website from './assets/website.svg'
import mobile from './assets/mobile_content.svg'
import designer from './assets/designer.svg'
import check from './assets/check.svg'

function App() {
 

  return (
    <>
    
   <div className='container mx-auto bg-green-200'>
    <nav className='flex justify-between items-center '>
      <div className='h-16 w-16'>
        <a href="#"><img src={'https://picsum.photos/200/300'} className='rounded-full' alt="" /></a>
      </div>
      <ul className='flex space-x-6'>
        <li><a href="" className='text-black-700 hover:text-white font-medium'>Services</a></li>
        <li><a href="" className='text-black-700 font-medium hover:text-white'>Pricing</a></li>
        <li><a href="" className='text-black-700 font-medium hover:text-white'>About</a></li>
        <li><a href="" className='text-black-700 font-medium hover:text-white'>Contact</a></li>
      </ul>
      <button className='bg-green-500 px-6 py-2 rounded-full font-medium text-white hover:bg-blue-300'>Sign Up</button>
    </nav>

   </div>
   {/* Hero Section */}
   <div className='container mx-auto mt-12 flex'>

    <div className='w-1/2 text-center'>
      <p className='mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad voluptates, sapiente, id ipsam vitae non commodi similique rem dolor inventore animi libero. Labore facere iure dicta voluptatum perspiciatis alias fuga?</p>
      <button className='bg-indigo-700 text-white px-6 py-2 rounded-full mt-6 font-medium '>Get Started</button>
      </div>
      <div className='w-1/2'>
        <img src={Hero} alt="" className='mx-auto ' />
      </div>
   </div>

   {/* Mainsection */}
   <div className='container mx-auto flex mt-12'>
    <div className='w-1/3 text-center flex flex-col items-center'>
      <h1 className='text-2xl'>Web Development</h1>
      <img src={website} alt=""  className='h-40 w-40 '/>
      <p>Lorem ipsum dolor sit ametiunt maxime ipsa tempora luptatem eius maiores minima itaque excepturi eum quae minus dicta laboriosam tenetur fugit.</p>
    </div>
    <div className='w-1/3 text-center flex flex-col items-center'>
      <h1 className='text-2xl'>Mobile App Development</h1>
      <img src={mobile} alt="" className='h-40 w-40 ' />
      <p>Lorem ipsum dolor sit ametiunt maxime ipsa tempora luptatem eius maiores minima itaque excepturi eum quae minus dicta laboriosam tenetur fugit.</p>
    </div>
    <div className='w-1/3 text-center flex flex-col items-center'>
      <h1 className='text-2xl'>Design</h1>
      <img src={designer} alt="" className='h-40 w-40 ' />
      <p>Lorem ipsum dolor sit ametiunt maxime ipsa tempora luptatem eius maiores minima itaque excepturi eum quae minus dicta laboriosam tenetur fugit.</p>
    </div>
   </div>

   {/* PricingSection */}
   <div className='container mx-auto mt-6'>
    <div className='text-center'>
      <h1 className='font-bold text-green-500 text-3xl'>Pricing</h1>
      <p className='text-2xl'>Offers multiple packages for monthly and yearly Subscriptions</p>
      <p className='text-2xl'>Featured plans are here</p>
    </div>
    <div className='grid grid-cols-3 gap-4 '>
      <div className='bg-gray-400  w-80  rounded-2xl hover:shadow-2xl text-center'>
        <h1 className='font-bold text-5xl '>$99</h1>
        <h2 className='text-green-500 mb-3 '>Basic</h2>
        <p>All the basic feature</p>
        <ul>
          <li className='flex items-center mt-4 '>
            <div>
              <img src={check} alt=""  className='h-6 w-6 text-indigo-400' />
            </div>
            <div>
              Core Bussiness System
            </div>
          </li>
         < li className='flex items-center mt-4 '>
            <div>
              <img src={check} alt=""  className='h-6 w-6 text-indigo-400' />
            </div>
            <div>
              Core Bussiness System
            </div>
          </li>
         < li className='flex items-center mt-4 '>
            <div>
              <img src={check} alt=""  className='h-6 w-6 text-indigo-400' />
            </div>
            <div>
              Customized Feature
            </div>
          </li>
        </ul>

      </div>
      <div className='bg-gray-400 h-40 w-80 rounded-2xl hover:shadow-2xl'>
<h2 className='text-green-500 mb-3 '>Basic</h2>
<p>All the basic feature</p>
      </div>
      <div className='bg-gray-400 h-40 w-80 rounded-2xl hover:shadow-2xl'>
<h2 className='text-green-500 mb-3 '>Basic</h2>
<p>All the basic feature</p>
      </div>
    </div>
   </div>

    </>
 
 
  )
}

export default App
