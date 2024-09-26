import React from 'react';
import banner from '../../../public/OUR-DOCTORS-BANNER.jpeg';
import Form from '../form';
import doctors from '../../../public/doctors3.png';
import doctors1 from '../../../public/abhilasha2.png';
import doctors2 from '../../../public/manihsa.jpg';
import { useNavigate } from 'react-router-dom';
import OurDoctorsMainPage from '../home/OurDoctors';

export default function OurDoctorsPage() {
  const navigate = useNavigate()
  return (
    <>
      <div className="relative w-screen  flex justify-center items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-black opacity-50"></div>
        <img src={banner} alt="banner" className="sm:w-full max-w-full  h-auto sm:h-[450px] object-cover" />
     
        <h1 className='xxl:text-7xl xl:text-7xl lg:text-6xl md:text-5xl text-2xl font-[700] text-[#fff] absolute flex justify-center items-center'>Our Doctors</h1>
     

      </div>
      <OurDoctorsMainPage/>
      <div className="sm:hidden block my-5">
        </div>
      
      
    </>
  );
}
