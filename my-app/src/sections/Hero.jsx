import React from 'react'

const Hero = () => {
   const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id='hero' className='mt-10 bg-gradient-to-br from-[#F7F9FC] via-white to-blue-50'>
    <div className='container  relative m-auto py-12 md:px-20 px-14 overflow-hidden'>
      <div className='relative z-10 text-center flex flex-col gap-4 md:gap-9 justify-center items-center'>
      <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold mb-4'>Premium Cleaning <br /> <span className='text-[#007BFF]'>Made Simple</span></h1>
      <p className='text-xl md:text-2xl text-[#333333] max-w-2xl'> SwiftClean brings spotless, stress-free cleaning to your doorstep—on time, every time.
          </p>
      <div className='flex flex-wrap justify-center items-center gap-5'>
        <button onClick={scrollToBooking} className='bg-[#007BFF] text-lg text-[#F7F9FC] px-8 py-4 hover:scale-105 hover:shadow-xl transform transition-all duration-300 shadow-lg rounded-full'>Book a Cleaning Now</button>
        <button className=' border-[#007BFF] border-2 text-[#007BFF] hover:bg-[#007BFF] hover:text-white font-semibold text-lg px-8 py-4 transition-all duration-300 rounded-full'> See How It Works </button>
      </div>

      {/**Achievement */}
      <div className='md:mt-7 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8 text-center'>
        <div className='p-6'>
          <h1 className='text-[#007BFF] text-3xl font-bold'>500+</h1>
          <p className='text-[#333333] text-base'>Happy Customers</p>
        </div>
        <div className='p-6'>
          <h1 className='text-[#007BFF] text-3xl font-bold'>100%</h1>
          <p className='text-[#333333] text-base'>Satisfaction</p>
        </div>
        <div className='p-6'>
          <h1 className='text-[#007BFF] text-3xl font-bold'>24/7</h1>
          <p className='text-[#333333] text-base'>Support</p>
        </div>
        <div className='p-6'>
          <h1 className='text-[#007BFF] text-3xl font-bold'>5★</h1>
          <p className='text-[#333333] text-base'>Average Rating</p>
        </div>

      </div>
</div>
      {/**Background elements */}
        <div className='absolute top-1/4 left-1/6 w-27 h-27 rounded-full animate-pulse bg-[#007BFF]/10'> </div>
        <div className='absolute top-15 right-15 w-22 h-22 rounded-full animate-pulse bg-[#007BFF]/10'> </div>
        <div className='absolute top-1/2 left-2/3 w-27 h-27 rounded-full animate-pulse bg-[#007BFF]/10'> </div>
        <div className='absolute top-3/4 left-2/6 w-22 h-22 rounded-full animate-pulse bg-[#007BFF]/10'> </div>

    </div>
    </section>
  )
}

export default Hero

