import React from 'react'
import Title from '../components/Title'
import { whyChooseUs } from '../assets/assets'

const WhyChooseUs = () => {
  return (
    <section className='bg-[#F7F9FC]'>
      <div className='container mx-auto  p-8 md:py-14'>
      <Title
      title='Why Choose SwiftClean'
      subtitle="We're committed to delivering exceptional cleaning services with reliability and trust."/>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {
          whyChooseUs.map((item, index)=>(
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group">
                            <div className="flex items-start space-x-4">
                <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-lg text-[#333] mb-2">
                    {item.title}
                  </h3>
                  <p className="font-opensans text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
      </div>
    </section>
    
  )
}

export default WhyChooseUs
