import website from '../assets/website.svg'
import mobile from '../assets/mobile_content.svg'
import designer from '../assets/designer.svg'

const Main = () => {
  return (
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
  )
}

export default Main