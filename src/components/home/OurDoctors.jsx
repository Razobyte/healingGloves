import React from 'react';
import doctors from '../../../public/doctors3.png';
import doctors1 from '../../../public/abhilasha2.png';
import doctors2 from '../../../public/manihsa.jpg';
import { useNavigate } from 'react-router-dom';

export default function OurDoctorsMainPage() {
  const navigate = useNavigate();

  return (
    <div id="carouselExampleCaptions" className="relative bg-white w-full flex flex-col justify-center items-center py-8 sm:py-16">
      <h1 className='text-[#474747] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-center capitalize mb-4'>
        Our Team Of Expert Doctors
      </h1>
      <p className='text-[#474747] font-medium text-xs sm:text-sm md:text-md text-center mb-8'></p>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 px-4 sm:px-5 w-full max-w-6xl">
        
        {/* Doctor 1 */}
        <div className="flex flex-col items-center justify-center text-center bg-[#293986] p-4 sm:p-8 rounded-md cursor-pointer"
          onClick={() => navigate('/doctors1')}>
          <img 
            src={doctors} 
            className="w-20 h-20 sm:w-32 sm:h-32 object-cover rounded-full mb-4" 
            alt="Dr. Shambhav Chandra" 
          />
          <div>
            <h5 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-white mb-1">Dr. Shambhav Chandra</h5>
            <p className='text-xs sm:text-sm md:text-sm lg:text-base font-medium text-white'>General Surgeon</p>
          </div>
        </div>

        {/* Doctor 2 */}
        <div className="flex flex-col items-center justify-center text-center bg-[#293986] p-4 sm:p-8 rounded-md cursor-pointer"
          onClick={() => navigate('/doctors2')}>
          <img 
            src={doctors1} 
            className="w-16 h-16 sm:w-32 sm:h-32 object-cover rounded-full mb-4" 
            alt="Dr. Abhilasha Mehta" 
          />
          <div>
            <h5 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-white mb-1">Dr. Abhilasha Mehta</h5>
            <p className='text-xs sm:text-sm md:text-sm lg:text-base font-medium text-white'>Gynecologist & Obstetrics</p>
          </div>
        </div>

        {/* Doctor 3 */}
        <div className="flex flex-col items-center justify-center text-center bg-[#293986] p-4 sm:p-8 rounded-md cursor-pointer"
          onClick={() => navigate('/doctors3')}>
          <img 
            src={doctors2} 
            className="w-20 h-20 sm:w-32 sm:h-32 object-cover rounded-full mb-4" 
            alt="Dr. Manisha Yadav" 
          />
          <div>
            <h5 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-white mb-1">Dr. Manisha Yadav</h5>
            <p className='text-xs sm:text-sm md:text-sm lg:text-base font-medium text-white'>Aesthetics & Maxillofacial Surgery</p>
          </div>
        </div>

      </div>
    </div>
  );
}
