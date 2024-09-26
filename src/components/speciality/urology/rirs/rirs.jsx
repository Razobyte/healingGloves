import React from 'react';
import banner from '../../../../../public/appendixbanner.png'; // Replace with the actual image path
import doctors from '../../../../../public/doctors3.png'; // Replace with the actual image path
import { ModalButton } from '../../../Button';

export default function RIRS() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-screen overflow-hidden">
        <img src={banner} alt="RIRS banner" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-between px-10 lg:px-20">
          <div className="w-full lg:w-1/2">
            <h1 className='xxl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl text-2xl font-bold text-white leading-tight sm:mb-4'>RIRS</h1>
            <p className="text-lg lg:text-3xl font-normal text-white">Effective Retrograde Intrarenal Surgery</p>
          </div>
        </div>
      </div>

      {/* What is RIRS? */}
      <section className="w-screen bg-gray-50 sm:py-8 py-4">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className='xxl:text-3xl xl:text-3xl lg:text-2xl md:text-xl text-lg font-semibold text-gray-800 sm:mb-4 mb-2'>What is RIRS?</h2>
          <p className='xxl:text-xl xl:text-xl lg:text-lg md:text-base text-sm text-gray-700'>
            RIRS, or Retrograde Intrarenal Surgery, is a minimally invasive procedure used to treat kidney stones. It allows doctors to remove or break up stones inside the kidney without making any external cuts.
          </p>
        </div>
      </section>

      {/* Why is RIRS Done? */}
      <section className="w-screen bg-white sm:py-8 py-4">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className='xxl:text-3xl xl:text-3xl lg:text-2xl md:text-xl text-lg font-semibold text-gray-800 sm:mb-4 mb-2'>Why is RIRS Done?</h2>
          <ul className='xxl:text-lg xl:text-lg lg:text-base md:text-sm text-xs text-gray-700 list-disc pl-5 space-y-2'>
            <li><strong>Kidney Stones:</strong> To remove or break up stones too large to pass on their own.</li>
            <li><strong>Other Blockages:</strong> To treat kidney obstructions.</li>
          </ul>
        </div>
      </section>

      {/* How is RIRS Performed? */}
      <section className="w-screen bg-gray-50 sm:py-8 py-4">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className='xxl:text-3xl xl:text-3xl lg:text-2xl md:text-xl text-lg font-semibold text-gray-800 sm:mb-4 mb-2'>How is RIRS Performed?</h2>
          <ul className='xxl:text-lg xl:text-lg lg:text-base md:text-sm text-xs text-gray-700 list-disc pl-5 space-y-4'>
            <li><strong>Preparation:</strong> Fasting may be required.</li>
            <li><strong>Procedure:</strong> A flexible ureteroscope with a camera is inserted through the urethra into the kidney. Laser energy breaks stones into smaller pieces for removal or natural passage.</li>
            <li><strong>Duration:</strong> 1 to 2 hours.</li>
          </ul>
        </div>
      </section>

      {/* Recovery After RIRS */}
      <section className="w-screen bg-white sm:py-8 py-4">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className='xxl:text-3xl xl:text-3xl lg:text-2xl md:text-xl text-lg font-semibold text-gray-800 sm:mb-4 mb-2'>Recovery After RIRS</h2>
          <ul className='xxl:text-lg xl:text-lg lg:text-base md:text-sm text-xs text-gray-700 list-disc pl-5 space-y-4'>
            <li><strong>Post-Procedure:</strong> Mild discomfort and blood in urine for a few days.</li>
            <li><strong>Hydration:</strong> Drink plenty of water.</li>
            <li><strong>Medications:</strong> Pain relievers and antibiotics may be prescribed.</li>
          </ul>
        </div>
      </section>

      {/* Benefits and Risks */}
      <section className="w-screen bg-gray-50 sm:py-8 py-4">
        <div className="max-w-4xl mx-auto px-4">
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <ul className='xxl:text-lg xl:text-lg lg:text-base md:text-sm text-xs text-gray-700 list-disc pl-5 space-y-4'>
              <h2 className='xxl:text-3xl xl:text-3xl lg:text-2xl md:text-xl text-lg font-semibold text-gray-800 mb-4'>Benefits of RIRS</h2>
              <li><strong>Minimally Invasive - </strong>No external cuts.</li>
              <li><strong>High Success Rate - </strong> Effective for various kidney stones.</li>
              <li><strong>Quick Recovery - </strong> Return to normal activities in a few days.</li>
            </ul>
            <ul className='xxl:text-lg xl:text-lg lg:text-base md:text-sm text-xs text-gray-700 list-disc pl-5 space-y-4'>
              <h2 className='xxl:text-3xl xl:text-3xl lg:text-2xl md:text-xl text-lg font-semibold text-gray-800 mb-4'>Risks and Complications</h2>
              <li>Potential risks include infection, bleeding, and urinary tract injury, but these are rare.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Expert Care Section */}
      <section className="w-screen bg-white sm:py-8 py-4">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className='xxl:text-3xl xl:text-3xl lg:text-2xl md:text-xl text-lg font-semibold text-gray-800 mb-8 text-center'>Expert Care with Dr. Shambhav Chandra</h2>
          <div className="flex flex-col lg:flex-row items-center bg-gray-50 rounded-lg shadow-lg p-8">
            <img src={doctors} alt="Dr. Shambhav Chandra" className="w-full lg:w-1/3 rounded-lg mb-6 lg:mb-0 lg:mr-8" />
            <div className="flex flex-col justify-center">
              <p className='xxl:text-lg xl:text-lg lg:text-base md:text-sm text-xs text-gray-700 mb-6'>
                Dr. Shambhav, specialized in RIRS, offers expert care at Healing Gloves clinics. His patient-centered approach ensures the best treatment and recovery.
              </p>
              <ModalButton btnname="Request an Appointment" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
