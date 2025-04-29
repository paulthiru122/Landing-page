import check from '../assets/check.svg'
import minusCircle from '../assets/minus-cirlce.svg'

const PricingSection = () => {
  return (
    <div className='container mx-auto mt-6'>
    <div className='text-center'>
      <h1 className='font-bold text-green-500 text-3xl'>Pricing</h1>
      <p className='text-2xl'>Offers multiple packages for monthly and yearly Subscriptions</p>
      <p className='text-2xl'>Featured plans are here</p>
    </div>
    <div className='grid grid-cols-3 gap-4 mt-4'>
      <div className='bg-gray-200  mt-4 w-80  rounded-2xl hover:shadow-2xl text-center'>
        <h1 className='font-bold text-5xl '>$99</h1>
        <h2 className='text-green-500 mb-3 font-bold'>Basic</h2>
        <p>All the basic feature</p>
        <ul className='ml-4'>
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
              Core Bussiness System
            </div>
          </li>
         < li className='flex items-center mt-4 '>
            <div>
              <img src={minusCircle} alt=""  className='h-6 w-6 text-red-500 ' />
            </div>
            <div>
              Customized Feature
            </div>
          </li>
          < li className='flex items-center mt-4 '>
            <div>
              <img src={minusCircle} alt=""  className='h-6 w-6 text-indigo-400' />
            </div>
            <div>
             Dual Infrastructure
            </div>
          </li>
        </ul>
        <button className='bg-indigo-700 transform hover:scale-105 transition duration-400 text-white px-6 py-2 rounded-full mt-6 font-medium '>Get Started</button>

      </div>
      <div className='bg-gray-200  w-80 border border-4 border-indigo-500 border-dashed rounded-2xl hover:shadow-2xl text-center'>
        <h1 className='font-bold text-5xl '>$199</h1>
        <h2 className='text-green-500 mb-3 font-bold'>Advanced</h2>
        <p>All the basic feature</p>
        <ul className='ml-4'>
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
              Core Bussiness System
            </div>
          </li>
         < li className='flex items-center mt-4 '>
            <div>
              <img src={minusCircle} alt=""  className='h-6 w-6 text-red-500 ' />
            </div>
            <div>
              Customized Feature
            </div>
          </li>
          < li className='flex items-center mt-4 '>
            <div>
              <img src={minusCircle} alt=""  className='h-6 w-6 text-indigo-400' />
            </div>
            <div>
             Dual Infrastructure
            </div>
          </li>
        </ul>

      </div>
      <div className='bg-gray-200 mt-4 w-80  rounded-2xl hover:shadow-2xl text-center'>
        <h1 className='font-bold text-5xl '>$299</h1>
        <h2 className='text-green-500 mb-3 font-bold'>Business</h2>
        <p>All the basic feature</p>
        <ul className='ml-4'>
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
              Core Bussiness System
            </div>
          </li>
         < li className='flex items-center mt-4 '>
            <div>
              <img src={minusCircle} alt=""  className='h-6 w-6 text-red-500 ' />
            </div>
            <div>
              Customized Feature
            </div>
          </li>
          < li className='flex items-center mt-4 '>
            <div>
              <img src={minusCircle} alt=""  className='h-6 w-6 text-indigo-400' />
            </div>
            <div>
             Dual Infrastructure
            </div>
          </li>
        </ul>

      </div>
    </div>
   </div>

  )
}

export default PricingSection