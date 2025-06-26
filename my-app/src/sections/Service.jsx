import React from 'react'
import Title from '../components/Title'
import { services } from '../assets/assets'

const Service = () => {
  return (
    <section id='services' className='py-20'>
      <div className='container mx-auto '>
      <Title
       title="Our Services" 
       subtitle="Comprehensive cleaning solution tailored to your specific needs."/>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {
              services.map((service, index)=>(
                <div key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-md p-3">
                  <div className="p-8 text-center"> 
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="font-poppins font-semibold text-xl text-[#333] mb-3">
                  {service.title}
                </h3>
                <p className="font-opensans text-gray-600 mb-4 text-sm leading-relaxed">
                  {service.desc}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex}
                      className="font-opensans text-sm text-[#007BFF] text-left flex items-center justify-center"
                    >
                      <span className="w-2 h-2 bg-[#6FCF97] rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                  </div>
                </div>
              ))
            }
          </div>
       <div>
        
       </div>
    </div>
    </section>
    
  )
}

export default Service
