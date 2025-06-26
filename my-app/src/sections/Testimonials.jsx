import React from 'react'
import Title from '../components/Title'
import { testimonials } from '../assets/assets'

const Testimonials = () => {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id='testimonials' className='py-20 bg-white'>
      <div className='container mx-auto px-4'>
        <Title
        title='What Our Customers Say'
        subtitle="Don't just take our word for it - hear from our satisfied customers"/>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index)=>(
            <div key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-md bg-gradient-to-br from-white to-swiftclean-light">
              <div className='p-6'>
                {/* Stars */}
                  <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>

                {/* Quote */}
                <p className=" text-gray-700 text-sm italic mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                {/* Customer Info */}
                <div className="border-t pt-4">
                  <h4 className="font-poppins font-semibold text-swiftclean-dark">
                    {testimonial.name}
                  </h4>
                  <p className="font-opensans text-sm text-gray-600">
                    {testimonial.location}
                  </p>
                  <p className="font-opensans text-xs text-swiftclean-blue mt-1">
                    {testimonial.service}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='mt-8 flex flex-col justify-center items-center'>
          <p className=' text-gray-700 text-lg italic mb-4 leading-relaxed'>Join hundreds of satisfied customers who trust SwiftClean</p>
          <button onClick={scrollToBooking} className='bg-[#007BFF] text-2xl text-[#F7F9FC] px-8 py-4 hover:scale-105 hover:shadow-xl transform transition-all duration-300 shadow-lg rounded-full'>Book a Cleaning Now</button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
