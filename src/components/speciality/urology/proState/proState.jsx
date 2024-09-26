import React from 'react';
import banner from '../../../../../public/PROSTATE-banner.jpg'; // Replace with the actual image path
import consult from '../../../../../public/doctors3.png'; // Replace with the actual image path
import { ModalButton } from '../../../Button';

export default function Prostate() {
  return (
    <>
      {/* Hero Section */}
      <div className="w-screen">
        <img src={banner} alt="Prostate Health Banner" className="w-full h-auto object-cover" />
      </div>

      {/* Introduction */}
      <section className="w-screen bg-gray-50 sm:py-8 py-4">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className='xxl:text-3xl xl:text-3xl lg:text-2xl md:text-xl text-lg font-semibold text-gray-800 sm:mb-4 mb-0'>Understanding the Prostate</h2>
          <p className='sm:text-lg text-xs text-gray-700'>
            The prostate is a small gland found only in men, about the size of a walnut, located just below the bladder and in front of the rectum. It surrounds part of the urethra, the tube carrying urine and semen out of the body.
          </p>
        </div>
      </section>

      {/* Common Prostate Issues */}
      <section className="w-screen bg-white sm:py-8 py-4">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className='xxl:text-3xl xl:text-3xl lg:text-2xl md:text-xl text-lg font-semibold text-gray-800 sm:mb-4 mb-2'>Common Prostate Issues</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='p-6 border border-gray-200 rounded-lg shadow-lg'>
              <h3 className='sm:text-lg text-base  font-semibold text-gray-800'>Benign Prostatic Hyperplasia (BPH)</h3>
              <p className='sm:text-base text-xs text-gray-700'>Enlarged prostate causing urination problems.</p>
            </div>
            <div className='p-6 border border-gray-200 rounded-lg shadow-lg'>
              <h3 className='sm:text-lg text-base  font-semibold text-gray-800'>Prostatitis</h3>
              <p className='sm:text-base text-xs text-gray-700'>Inflammation of the prostate, often causing pain and urinary issues.</p>
            </div>
            <div className='p-6 border border-gray-200 rounded-lg shadow-lg'>
              <h3 className='sm:text-lg text-base  font-semibold text-gray-800'>Prostate Cancer</h3>
              <p className='sm:text-base text-xs text-gray-700'>A serious condition where cancer cells form in the prostate.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Symptoms */}
      <section className="w-screen bg-gray-50 sm:py-8 py-4">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className='xxl:text-3xl xl:text-3xl lg:text-2xl md:text-xl text-lg font-semibold text-gray-800 sm:mb-4 mb-2'>Symptoms</h2>
          <ul className='list-disc pl-5 text-gray-700 sm:text-lg text-xs space-y-2'>
            <li>Frequent urination, especially at night.</li>
            <li>Difficulty urinating.</li>
            <li>Painful urination or ejaculation.</li>
            <li>Blood in urine or semen.</li>
            <li>Pelvic pain.</li>
          </ul>
        </div>
      </section>

      {/* Treatment Options */}
      <section className="w-screen bg-white sm:py-8 py-4">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className='xxl:text-3xl xl:text-3xl lg:text-2xl md:text-xl text-lg font-semibold text-gray-800 sm:mb-4 mb-2'>Treatment Options</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            <div className='bg-gray-100 p-6 rounded-lg shadow-lg'>
              <h3 className='sm:text-lg text-base  font-semibold text-gray-800'>Medications</h3>
              <p className=' sm:text-base text-xs text-gray-700'>To manage BPH and prostatitis.</p>
            </div>
            <div className='bg-gray-100 p-6 rounded-lg shadow-lg'>
              <h3 className='sm:text-lg text-base  font-semibold text-gray-800'>Surgery</h3>
              <p className='sm:text-base text-xs text-gray-700'>For severe cases.</p>
            </div>
            <div className='bg-gray-100 p-6 rounded-lg shadow-lg'>
              <h3 className='sm:text-lg text-base  font-semibold text-gray-800'>Radiation Therapy</h3>
              <p className='sm:text-base text-xs text-gray-700'>For prostate cancer.</p>
            </div>
            <div className='bg-gray-100 p-6 rounded-lg shadow-lg'>
              <h3 className='sm:text-lg text-base font-semibold text-gray-800'>Lifestyle Changes</h3>
              <p className='sm:text-base text-xs text-gray-700'>Diet and fluid intake adjustments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Care Section */}
      <section className="w-screen bg-gray-50 sm:py-8 py-4">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className='xxl:text-3xl xl:text-3xl lg:text-2xl md:text-xl text-lg font-semibold text-gray-800 mb-8 text-center'>Expert Care with Dr. Shambhav Chandra</h2>
          <div className="flex flex-col lg:flex-row items-center bg-white rounded-lg shadow-lg p-8">
            <img src={consult} alt="Dr. Shambhav Chandra" className="w-full lg:w-1/3 rounded-lg mb-6 lg:mb-0 lg:mr-8" />
            <div className="flex flex-col justify-center">
              <p className='text-sm sm:text-lg text-gray-700 mb-6'>
                Dr. Shambhav Chandra specializes in diagnosing and treating prostate conditions at Healing Gloves clinics. His patient-centered approach ensures you receive the best possible care, emphasizing early detection and effective management.
              </p>
              <ModalButton btnname="Request an Appointment" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
