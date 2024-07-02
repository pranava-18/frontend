import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Homepage() {
  return (
    <div className='overflow-hidden '>
      <Navbar/>


      
       <div className=' flex flex-col items-center justify-center h-[70vh] w-screen '>
            <h1 className='text-[42px] font-semibold text-black '>Preview and extract data from any file.</h1>
            <p className='mt-[40px] text-[23px] '>FilePreviews is a powerful tool that allows you to </p>
            <p className='text-[23px] '>generate image previews and metadata from any file.</p>
            <button  className='bg-slate-950 text-white rounded-2xl px-[20px] py-[10px] mt-[40px] hover:animate-bounce '><a href="/upload">Get Started </a></button>
            <p className='mt-[1vh] '>No credit card required :)</p>

      </div>

      <div className='bg-red-300 flex flex-col items-center justify-center h-[90vh] w-screen'>
        <h1 className=' text-[42px] font-semibold text-black'>Many formats, lots of options</h1>
        <p className=' text-3xl bg-black text-white w-full pl-[40vw]'>Add file formats supported</p>
       <p className='mt-[40px] text-[23px]'>Each file type is treated specially to maximize the amount of data that we extract.</p>
      </div>
      <Footer/>



 
    </div>
  )
}

export default Homepage
