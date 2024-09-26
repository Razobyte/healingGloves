import React from 'react';
import caresbg from '../../../public/caresbg2.jpeg';
import caresbg1 from '../../../public/cares (5).png';
import caresbg2 from '../../../public/cares (4).png';
import caresbg3 from '../../../public/cares (3).png';
import caresbg4 from '../../../public/cares (2).png';
import caresbg5 from '../../../public/cares (1).png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const CareServices = () => {
  return (
    <>
      <div className="w-screen flex flex-col items-center justify-center sm:py-10  py-5 bg-ingradient">
        <div className='max-w-6xl grid grid-cols-1 md:grid-cols-2 sm:gap-12'>
          <div className='w-full sm:block hidden'>
            <img src={caresbg} alt="Care Services" className="max-w-full h-auto object-cover" />
          </div>
          <div className='flex items-center flex-col justify-center'>
            <h1 className='lg:text-4xl  xxl:text-5xl xl:text-5xl md:text-3xl text-xl font-[800] text-opacity-90 text-[#3e3e3e] text-center sm:pb-8 pb-3'> Healing Gloves Cares</h1>
            <p className='text-md md:text-lg font-[400] text-[#474747] text-center md:text-left'>
              Healing Gloves is dedicated to revolutionizing healthcare by offering personalized, compassionate, and cutting-edge care. Our skilled team provides a broad spectrum of services, ensuring comprehensive and coordinated treatment for all patients.
            </p>
          </div>
        </div>
      </div>

      <div className='w-screen flex flex-col items-center justify-center sm:py-5 py-2 bg-gradient-to-t from-transparent to-gray-100'>
        <h1 className='xxl:text-6xl xl:text-5xl lg:text-4xl  md:text-3xl text-xl font-bold text-[#3e3e3e] text-center sm:pb-8 pb-0'>
          <span className='text-blue-500'>R</span>ange of <span className='text-blue-500'>C</span>ares
        </h1>
        <div className='max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* Doctor Consultation */}
          <div className='md:flex hidden flex-col items-center justify-center shadow-lg p-4 rounded bg-white'>
            <img src={caresbg1} alt="Doctor Consultation" className='sm:w-full sm:h-auto max-h-32 object-contain' />
            <h4 className='text-2xl font-bold text-[#474747] text-center pt-4'>Doctor Consultation</h4>
            <p className='text-md text-[#474747] text-center pt-2'>
              Book a consultation with our expert doctors for personalized healthcare. Your health is our priority.
            </p>
          </div>

          {/* Day Care */}
          <div className='md:flex hidden  flex-col items-center justify-center shadow-lg p-4 rounded bg-white'>
            <img src={caresbg2} alt="Day Care" className='w-full h-auto max-h-60 object-contain' />
            <h4 className='text-2xl font-bold text-[#474747] text-center pt-4'>Day Care</h4>
            <p className='text-md text-[#474747] text-center pt-2'>
              Experience our day care services with expert medical staff, personalized care plans, and a compassionate environment.
            </p>
          </div>

          {/* Ambulance Services */}
          <div className='md:flex hidden  flex-col items-center justify-center shadow-lg p-4 rounded bg-white'>
            <img src={caresbg3} alt="Ambulance Services" className='w-full h-auto max-h-60 object-contain' />
            <h4 className='text-2xl font-bold text-[#474747] text-center pt-4'>Ambulance Services</h4>
            <p className='text-md text-[#474747] text-center pt-2'>
              Reliable 24/7 ambulance services with advanced medical support for your safety.
            </p>
          </div>
        </div>

        <div className='max-w-6xl  w-full px-2 grid grid-cols-2 md:grid-cols-2 sm:gap-8  gap-2 sm:pt-8 pt-3 sm:pb-0 pb-3'>
          {/* Home Visits */}
          <div className='flex flex-col items-center justify-center shadow-lg sm:p-4 p-2  rounded bg-white h-auto'>
            <img src={caresbg4} alt="Home Visits" className='sm:w-full sm:h-40 h-20 object-contain' />
            <h4 className='text-base sm:text-2xl font-bold text-[#474747] text-center pt-4'>Home Visits</h4>
            <p className='sm:text-lg text-xs text-[#474747] text-center pt-2'>
              Get quality healthcare at your doorstep with our home visit services. Our medical professionals provide personalized care in the comfort of your home.
            </p>
          </div>

          {/* Lab Investigations At Doorstep */}
          <div className='flex flex-col items-center justify-center shadow-lg sm:p-4  p-2 rounded bg-white h-auto'>
            <img src={caresbg5} alt="Lab Investigations At Doorstep" className='sm:w-full sm:h-40 h-20 object-contain' />
            <h4 className='sm:text-2xl text-base font-bold text-[#474747] text-center pt-4'>Lab Investigations At Doorstep</h4>
            <p className='sm:text-lg text-xs text-[#474747] text-center pt-2'>
              Our team collects samples from your home, ensuring accurate results without the hassle of visiting a lab.
            </p>
          </div>
        </div>
      </div>
    </>

  );
};

export default CareServices;
