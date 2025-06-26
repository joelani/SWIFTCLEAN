import React from 'react'
import Title from '../components/Title'
import { useState } from 'react';
import { toast } from 'react-toastify';

const BookingForm = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    address: '',
    message: ''
  });

    const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

    const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.service) {
      toast.error("Please fill in all required fields");
      return;
    }


    // Simulate form submission
    console.log('Booking form submitted:', formData);
        toast.success("Booking Request Submitted!, We'll contact you within 2 hours to confirm your appointment.");
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      date: '',
      time: '',
      address: '',
      message: ''
    });
  };

    const serviceOptions = [
    'Residential Cleaning',
    'Office Cleaning',
    'Deep Cleaning',
    'Post-Construction Cleaning',
    'One-time Cleaning',
    'Regular Weekly Cleaning',
    'Regular Bi-weekly Cleaning',
    'Regular Monthly Cleaning'
  ];

  const timeSlots = [
    '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];
  return (
    <section id='booking' className='py-20 bg-Light-bg'>
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <Title
              title="Book Your Cleaning Service"
              subtitle="Get started with a free quote - no commitment required"/>

        <div className="shadow-xl border-0">
          <div  className="bg-white rounded-t-lg p-6">
            <h2 className="text-2xl text-Dark-Text text-center">Schedule Your Service</h2>
          </div>

            <div className="p-8 bg-white rounded-b-lg">
              <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">

                <div>
                  <label htmlFor="name" className="text-lg font-semibold text-Dark-Text">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 border-gray-300 focus:border-primary flex h-10 w-full rounded-md border border-input bg-Light-bg px-3 py-2 text-base ring-offset-Light-bg placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-lg font-semibold text-Dark-Text">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 border-gray-300  focus:border-primary flex h-10 w-full rounded-md border border-input bg-Light-bg px-3 py-2 text-base ring-offset-Light-bg placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="text-lg font-semibold text-Dark-Text">
                    Phone Number *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 border-gray-300  focus:border-primary flex h-10 w-full rounded-md border border-input bg-Light-bg px-3 py-2 text-base ring-offset-Light-bg placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="service" className="text-lg font-semibold text-Dark-Text">
                    Service Type *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="mt-1 w-full px-3 py-2 border border-gray-300 bg-Light-bg rounded-md text-gray-500 focus:outline-none  focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  >
                    <option value="">Select a service</option>
                    {serviceOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                 <div>
                  <label htmlFor="date" className="text-lg font-semibold text-Dark-Text">
                    Preferred Date
                  </label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="mt-1 w-full px-3 py-2 text-gray-500 border border-gray-300 bg-Light-bg rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                <div>
                  <label htmlFor="time" className="text-lg font-semibold text-Dark-Text">
                    Preferred Time
                  </label>
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="mt-1 w-full px-3 py-2 text-gray-500 bg-Light-bg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select a time</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="address" className="text-lg font-semibold text-Dark-Text">
                    Service Address
                  </label>
                  <input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="mt-1 border-gray-300 flex h-10 w-full rounded-md border bg-Light-bg px-3 py-2 text-base ring-offset-Light-bg placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Enter the address where service is needed"
                  />
                </div>

                 <div className="md:col-span-2">
                  <label htmlFor="message" className="text-lg font-semibold text-Dark-Text">
                    Additional Notes
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Any special instructions or requirements?"
                  />
                </div>

                  
                    <div className="md:col-span-2 text-center">
                    <button type='submit' className='py-2 px-6 text-lg font-semibold text-Light-bg rounded-lg bg-CTA shadow-lg hover:bg-CTA/90 hover:scale-105 hover:shadow-xl transition-all duration-300'>Request Free Quote</button>
                    <p className='text-sm text-gray-500 mt-2'>We'll contact you within two hours to confirm your booking</p>
                  </div>
              </form>
              
            </div>
        </div>
        </div>
      </div>
      


    </section>
  )
}

export default BookingForm
