import React, { useState } from 'react';
import homepageicon from '../../../public/homepageicon (1).png';
import homepageicon1 from '../../../public/homepageicon (2).png';
import homepageicon2 from '../../../public/homepageicon (3).png';
import bg1 from '../../../public/Frame.png';
import thumb from '../../../public/thumb (1).png';
import thumb2 from '../../../public/thumb (2).png';

const PatientTestimonials = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  const testimonials = [
    {
      name: "Manisha Mohan",
      comment: "Dr. Shambhav has extended 24*7 support and care for my family living in India and abroad.",
      icon: homepageicon2
    },
    {
      name: "Gauri Singh",
      comment: "Dr. Abhilasha Mehta is a Kind and experienced doctor. Thank you for your support.",
      icon: homepageicon1
    },
    {
      name: "Shishirant Chandra",
      comment: "Dr. Manisha is very soft spoken and caring person.",
      icon: homepageicon
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full md:p-8">
      <div className="max-w-6xl flex flex-col md:flex-row items-center gap-0 md:gap-20 px-4">
        <div className="w-full md:w-1/2 relative  md:py-20 sm:px-0">
          <div
            className="absolute inset-0 z-0 opacity-40"
            style={{ backgroundImage: `url(${bg1})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
          ></div>
          <div className="relative z-10">
            <h2 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-4 text-[#3E3E3E] text-center md:text-left sm:pt-0 pt-4"> 
              What Our Patients Are Saying
            </h2>
            <p className="mb-6 sm:flex hidden font-medium text-[#3E3E3E] text-sm md:text-md text-center md:text-left">
              Our patients' experiences speak volumes. Read their stories and see how our dedicated care has made a difference in their lives. Discover the positive impact we've had through their words.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 sm:space-y-6 space-y-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-start p-4 z-10 border-l-8 rounded-xl border-[#767676] shadow-md bg-white transition-all duration-300 ${hoverIndex === index ? 'hover:shadow-lg hover:border-[#293986] hover:md:-translate-x-12' : ''
                }`}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <div className="mb-4 md:mb-0 mr-0 md:mr-4">
                <img src={testimonial.icon} alt={testimonial.name} className="w-12 h-12 md:w-16 md:h-16 object-cover" />
              </div>
              <div className="flex-1">
                <div className='flex justify-between items-center mb-2'>
                  <h3 className="font-bold text-lg text-[#3E3E3E]">{testimonial.name}</h3>
                  <img
                    src={hoverIndex === index ? thumb2 : thumb}
                    alt=""
                    className="w-8 h-8 object-cover"
                  />
                </div>
                <p className="text-md text-[#3E3E3E] font-medium">{testimonial.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PatientTestimonials;
