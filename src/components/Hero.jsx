import Main from '../assets/hero.png';

const Hero = () => {
  return (
      <div className='container mx-auto mt-12 flex flex-col md:flex-row'>
        <div className='md:w-1/2 text-center '>
          <p className='mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad voluptates, sapiente, id ipsam vitae em dolor inventore animi libero. Labore facere iure dicta voluptatum perspiciatis alias fuga?</p>
          <button className='bg-indigo-700 transform hover:scale-105 transition duration-400 text-white px-6 py-2 rounded-full mt-6 font-medium '>Get Started</button>
          </div>
          <div className='md:w-1/2'>
            <img src={Main} alt="" className='mx-auto ' />
          </div>
       </div>
  )
}

export default Hero