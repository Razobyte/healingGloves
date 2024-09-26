import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import banner from '../../../../../public/DEEP VEIN THROMBOSIS.jpg';
import doctorImage from '../../../../../public/doctors3.png';
import Form from '../../../form';

const DVT = () => {
  return (
    <div >
      {/* Banner Section */}
      <div className="w-screen flex justify-center items-center ">
        <img src={banner} alt="DVT Treatment Banner" className="w-full h-auto" />
       
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 md:py-12 py-4">
      <div >
        <h2 className="xl:text-3xl lg:text-3xl md:text-2xl text-lg font-bold text-[#2a3986] md:mb-4 mb-1">Deep Vein Thrombosis (DVT) Treatment at Healing Gloves</h2>
        <p className="md:mb-6 mb-2 md:text-lg text-sm">
        Are you experiencing unexplained pain or swelling in your legs? You might have Deep Vein Thrombosis (DVT), a serious condition that needs prompt treatment. At Healing Gloves, we offer expert care to manage and treat DVT effectively.
        </p>
        </div>
        <h2 className="xl:text-3xl lg:text-3xl md:text-2xl text-lg font-bold text-[#2a3986] mb-6">What is Deep Vein Thrombosis (DVT)?</h2>
        <p className="md:mb-6 mb-2 md:text-lg text-sm">
          DVT is a condition where a blood clot forms in a deep vein, usually in the legs. This can cause pain, swelling, and can be dangerous if the clot travels to the lungs, causing a pulmonary embolism.
        </p>

        {/* Symptoms Section */}
        <h3 className="xl:text-3xl lg:text-3xl md:text-2xl text-lg font-semibold text-[#2a3986] mb-4">Symptoms of DVT:</h3>
        <ul className="list-disc pl-6 md:mb-6 mb-2 md:text-lg text-sm">
          <li>Swelling in one leg</li>
          <li>Pain or tenderness in your leg, which may feel like a cramp</li>
          <li>Red or discolored skin on the leg</li>
          <li>Warmth in the affected leg</li>
        </ul>

        {/* Treatment Options Section */}
        <h3 className="xl:text-3xl lg:text-3xl md:text-2xl text-lg font-semibold text-[#2a3986] mb-2">Treatment Options</h3>
      <p className='md:text-base text-xs  font-normal text-gray-600 mb-3'>At Healing Gloves, we offer several treatments for DVT, including</p>
      
        <div className="grid md:grid-cols-3 md:gap-6 gap-3 md:mb-6">
          <div className="bg-[#E3E8FF] md:p-6 p-3 rounded-lg">
            <h4 className="font-bold mb-2 md:text-lg text-sm">Medications</h4>
            <p className=' md:text-base text-sm'>Blood thinners help prevent clots from getting bigger and stop new clots from forming.</p>
          </div>
          <div className="bg-[#E3E8FF] p-6 rounded-lg">
            <h4 className="font-bold mb-2 md:text-lg text-sm">Compression Stockings</h4>
            <p className='md:text-base text-sm'>Special stockings can reduce swelling and prevent clots from forming.</p>
          </div>
          <div className="bg-[#E3E8FF] p-6 rounded-lg">
            <h4 className="font-bold mb-2 md:text-lg text-sm">Procedures</h4>
            <p className='md:text-base text-sm'>In some cases, procedures to remove or dissolve the clot may be necessary.</p>
          </div>
        </div>

        {/* Benefits Section */}
        <h3 className="xl:text-3xl lg:text-3xl md:text-2xl text-lg font-semibold text-[#2a3986] md:mb-4 mb-1">Benefits of Treatment:</h3>
        <ul className="list-none md:mb-6 mb-2 md:text-base text-sm">
        
            <li className="flex items-center mb-2">
              <FaArrowRight className="text-[#2a3986] mr-2" />
              <span><b>Relief from Pain</b> -Reduce discomfort and swelling.
              </span>
            </li>
            <li className="flex items-center mb-2">
              <FaArrowRight className="text-[#2a3986] mr-2" />
              <span><b>Prevent Complications</b> -Lower the risk of clots moving to other parts of your body.
              </span>
            </li>
            <li className="flex items-center mb-2">
              <FaArrowRight className="text-[#2a3986] mr-2" />
              <span><b>Improved Mobility</b> - Regain normal movement and activities
              </span>
            </li>
       
        </ul>

        {/* Doctor Info Section */}
        <div className="flex items-center bg-[#E3E8FF] md:p-6 p-3 rounded-lg">
          <img src={doctorImage} alt="Dr. Shambhav Chandra" className="w-32 h-32 rounded-full mr-6" />
          <div>
            <h3 className="xl:text-3xl lg:text-3xl md:text-2xl text-lg font-semibold text-[#2a3986] mb-2">Expert Care by Dr. Shambhav Chandra</h3>
            <p className='md:text-lg text-sm'>
              Dr. Shambhav Chandra, our experienced general surgeon at Healing Gloves, specializes in treating DVT. His expertise ensures you receive the best care tailored to your needs.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center md:mt-8 mt-4">
          <p className="lg:text-xl sm:text-lg text-sm md:mb-4 mb-0">Don't ignore the symptoms of DVT. Contact Healing Gloves today to schedule a consultation with Dr. Shambhav Chandra.</p>
        
        </div>
      </div>
    </div>
  );
};

export default DVT;