import React from 'react';
import banner from '../../../../../public/URETEROSCOPY.jpg'; // Replace with the actual image path
import Form from '../../../form';
import { FaArrowRight } from 'react-icons/fa';
import doctors from '../../../../../public/doctors3.png'; // Replace with the actual image path
import { ModalButton } from '../../../Button';

export default function URS() {
  return (
    <>
      {/* Hero Section */}
      <div className="w-screen">
        <img src={banner} alt="banner" className="w-full h-auto object-cover" />
      </div>

      {/* URS Definition */}
      <section className="w-screen bg-gray-50 sm:py-8 py-4">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className='xxl:text-3xl xl:text-3xl lg:text-2xl md:text-xl text-lg font-semibold text-gray-800 sm:mb-4 mb-0'>URS (Ureteroscopy)</h2>
          <p className='sm:text-lg text-xs text-gray-700'>
            URS, or ureteroscopy, is a minimally invasive procedure used to diagnose and treat issues in the urinary tract, especially kidney stones. It allows doctors to see and address problems without making external incisions.
          </p>
        </div>
      </section>

      {/* Why is URS Done */}
      <section className="w-screen bg-white sm:py-8 py-4">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className='xxl:text-3xl xl:text-3xl lg:text-2xl md:text-xl text-lg font-semibold text-gray-800 sm:mb-4 mb-2'>Why is URS Done?</h2>
          <ul className='space-y-2 text-gray-700 list-disc pl-5 sm:text-lg text-xs'>
            <li><strong>Diagnosis:</strong> Identifies causes of urinary problems like pain or blood in the urine.</li>
            <li><strong>Treatment:</strong> Removes or breaks up kidney stones and treats blockages.</li>
          </ul>
        </div>
      </section>

      {/* Procedure Details */}
      <section className="w-screen bg-gray-50 sm:py-8 py-4">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className='xxl:text-3xl xl:text-3xl lg:text-2xl md:text-xl text-lg font-semibold text-gray-800 sm:mb-4  mb-2'>Procedure Details</h2>
          <ul className='sm:space-y-4 space-y-2 text-gray-700 list-disc pl-5 sm:text-lg text-xs'>
            <li><strong>Preparation:</strong> Fasting may be required.</li>
            <li><strong>Procedure:</strong> A thin, flexible tube with a camera (ureteroscope) is inserted through the urethra. Small instruments can remove or break up stones.</li>
            <li><strong>Duration:</strong> 30 minutes to an hour.</li>
          </ul>
        </div>
      </section>

      {/* Recovery */}
      <section className="w-screen bg-white sm:py-8 py-4">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className='xxl:text-3xl xl:text-3xl lg:text-2xl md:text-xl text-lg font-semibold text-gray-800 sm:mb-4 mb-2'>Recovery</h2>
          <ul className='sm:space-y-4 space-y-2 text-gray-700 list-disc pl-5 sm:text-lg text-xs'>
            <li><strong>Post-Procedure:</strong> Mild discomfort, possible blood in urine.</li>
            <li><strong>Hydration:</strong> Drink plenty of water.</li>
            <li><strong>Medications:</strong> Pain relievers and antibiotics may be prescribed.</li>
          </ul>
        </div>
      </section>

      {/* Benefits and Risks */}
      <section className="w-screen bg-gray-50 sm:py-8 py-4">
        <div className="max-w-4xl mx-auto px-4">
          <div className='grid grid-cols-1 md:grid-cols-2 sm:gap-8 gap-4'>
            <ul className='sm:space-y-4 space-y-2 text-gray-700 list-disc pl-5 sm:text-lg text-xs'>
              <h2 className='xxl:text-3xl xl:text-3xl lg:text-2xl md:text-xl text-lg font-semibold text-gray-800 sm:mb-4 mb-2'>Benefits</h2>
              <li><strong>Minimally Invasive - </strong>No external cuts, less pain, quicker recovery.</li>
              <li><strong>Effective - </strong> Treats various urinary tract issues.</li>
              <li><strong>Quick Recovery - </strong> Return to normal activities within days.</li>
            </ul>
            <ul className='sm:space-y-4 space-y-2 text-gray-700 list-disc pl-5'>
              <h2 className='xxl:text-3xl xl:text-3xl lg:text-2xl md:text-xl text-lg font-semibold text-gray-800 sm:mb-4 mb-2'>Risks</h2>
              <li className='sm:text-lg text-xs'><strong>Complications - </strong> Rare, but can include infection or bleeding.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Expert Care Section */}
      <section className="w-screen bg-white sm
      :py-8 py-4">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className='xxl:text-3xl xl:text-3xl lg:text-2xl md:text-xl text-lg font-semibold text-gray-800 mb-8 text-center'>Expert Care with Dr. Shambhav Chandra</h2>
          <div className="flex flex-col lg:flex-row items-center bg-gray-50 rounded-lg shadow-lg p-8">
            <img src={doctors} alt="Dr. Shambhav Chandra" className="w-full lg:w-1/3 rounded-lg mb-6 lg:mb-0 lg:mr-8" />
            <div className="flex flex-col justify-center">
              <p className='sm:text-lg text-sm text-gray-700 sm:mb-6 mb-3'>
                Dr. Shambhav at Healing Gloves clinics provides specialized ureteroscopy care, ensuring safe and effective treatment with a patient-focused approach.
              </p>
              <ModalButton btnname="Request an Appointment" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
