import React from 'react';
import step1Icon from '../../../public/hpmepagewhoItWorks (4).png';
import step2Icon from '../../../public/hpmepagewhoItWorks (3).png';
import step3Icon from '../../../public/hpmepagewhoItWorks (2).png';
import doctorIllustration from '../../../public/hpmepagewhoItWorks (1).png';
import './home.css';
import { ModalButton } from '../Button';

const steps = [
  {
    number: 1,
    text: 'Enter Your Information',
    bgColor: '#21b0a4',
    img: step2Icon,
  },
  {
    number: 2,
    text: 'Select Appointment Location',
    bgColor: '#2896e4',
    img: step3Icon,
  },
  {
    number: 3,
    text: 'Submit Your Request',
    bgColor: '#232f7b',
    img: doctorIllustration,
  },
];

export default function HowItWorks() {
  return (
    <div className="w-full md:flex hidden items-center justify-center bg-[#E3E8FF]">
      <div className="max-w-7xl flex flex-col md:flex-row items-center justify-center gap-20">
        <div className="flex justify-center mb-10 md:mb-0 max-w-full flex-col items-center pt-8">
          <h1 className="text-3xl text-[#3E3E3E] font-[800] text-center pb-5">
            Booking Your Appointment  Request Online?
          </h1>
          <img src={step1Icon} alt="Doctor Illustration" className="max-w-full h-auto object-cover" />
        </div>
        <div className="flex flex-col items-center justify-center gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex items-center justify-center md:h-[80px] shadow lg:w-[500px] w-[500px] rounded"
              style={{ backgroundColor: step.bgColor }}
            >
              <div className="flex items-center justify-center text-3xl font-bold w-[30px] text-white text-center">
                {step.number}
              </div>
              <div className="bg-white flex items-center justify-center w-20 h-20 px-3">
                <img src={step.img} alt={`Step ${step.number}`} className="object-cover" />
              </div>
              <div className="flex-1 py-2 text-center">
                <h3 className="text-xl font-bold text-white">{step.text}</h3>
              </div>
            </div>
          ))}
          <ModalButton btnname="Book Appointment" />
        </div>
        
      </div>
      
     
    </div>
    
  );
}
