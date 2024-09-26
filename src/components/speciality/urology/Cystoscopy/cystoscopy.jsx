import React from 'react';
import banner from '../../../../../public/cystocopy-banner.jpg';
import Form from '../../../form';
import { FaArrowRight } from 'react-icons/fa';
import { ModalButton } from '../../../Button';
import doctors from '../../../../../public/doctors3.png';

export default function Cystoscopy() {
  return (
    <>
      {/* Hero Section */}
      <div className="w-full">
        <img src={banner} alt="banner" className="w-full h-auto object-cover" />
      </div>

      {/* Cystoscopy Definition */}
      <div className="w-full bg-gray-50 flex justify-center">
        <div className="max-w-6xl w-full px-4 sm:py-10 py-4 mx-auto">
          <h2 className="xxl:text-3xl xl:text-3xl lg:text-2xl md:text-xl text-lg font-semibold text-gray-800 sm:mb-4 mb-0">Cystoscopy</h2>
          <p className='sm:text-lg text-sm text-gray-700'>
            Cystoscopy is a medical procedure that allows doctors to view the inside of the bladder and urethra using a cystoscope, a thin tube with a camera and light.
          </p>
        </div>
      </div>

      {/* Why is Cystoscopy Done */}
      <div className="w-full bg-white flex justify-center">
        <div className="max-w-6xl w-full px-4  sm:py-10 py-4  mx-auto">
          <h2 className='xxl:text-3xl xl:text-3xl lg:text-2xl md:text-xl text-lg font-semibold text-gray-800 sm:mb-4 mb-0'>Why is Cystoscopy Done?</h2>
          <ul className='space-y-2 text-gray-700 list-disc pl-5 sm:text-lg text-sm'>
            <li><strong>Diagnosis -</strong> Identifies causes of urinary issues like infections, blood in urine, and difficulty urinating. </li>
            <li><strong>Treatment -</strong> Addresses conditions such as bladder stones, tumors, and urethral strictures.</li>
          </ul>
        </div>
      </div>

      {/* What to Expect */}
      <div className="w-full bg-gray-50 flex justify-center">
        <div className="max-w-6xl w-full px-4  sm:py-10 py-4  mx-auto">
          <h2 className='xxl:text-3xl xl:text-3xl lg:text-2xl md:text-xl text-lg font-semibold text-gray-800 sm:mb-4 mb-0'>What to Expect</h2>
          <ul className='sm:space-y-4 space-y-2 text-gray-700 list-disc pl-5'>
            <li><strong>Preparation -</strong> Empty your bladder; local or general anesthesia may be used.</li>
            <li><strong>Procedure -</strong> The cystoscope is inserted through the urethra to the bladder, providing clear images and enabling treatment if needed. It usually takes 15-30 minutes.</li>
          </ul>
        </div>
      </div>

      {/* After the Procedure */}
      <div className="w-full bg-white flex justify-center">
        <div className="max-w-6xl w-full px-4  sm:py-10 py-4  mx-auto">
          <h2 className='xxl:text-3xl xl:text-3xl lg:text-2xl md:text-xl text-lg font-semibold text-gray-800 sm:mb-4 mb-0'>After the Procedure</h2>
          <ul className='sm:space-y-4 space-y-2 text-gray-700 list-disc pl-5 sm:text-lg text-sm'>
            <li><strong>Recovery -</strong> Mild burning during urination for a day or two; drink water to reduce irritation.</li>
            <li><strong>Follow-Up -</strong> Doctor discusses findings and next steps.</li>
          </ul>
        </div>
      </div>

      {/* Benefits and Risks */}
      <div className="w-full bg-gray-50 flex justify-center">
        <div className="max-w-6xl w-full px-4  sm:py-10 py-4  mx-auto">
          <h2 className='xxl:text-3xl xl:text-3xl lg:text-2xl md:text-xl text-lg font-semibold text-gray-800 sm:mb-4 mb-0'>Benefits and Risks</h2>
          <ul className='sm:space-y-4 space-y-2 text-gray-700 list-disc pl-5 sm:text-lg text-sm'>
            <li><strong>Benefits -</strong> Accurate diagnosis and immediate treatment.</li>
            <li><strong>Risks  -</strong> Low risk of infections, bleeding, and discomfort.</li>
          </ul>
        </div>
      </div>

      {/* Expert Care Section */}
      <div className="w-full bg-gray-50 flex justify-center">
        <div className="max-w-6xl w-full px-4  sm:py-10 py-4  mx-auto flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 flex flex-col justify-center lg:pr-8">
            <h2 className='txxl:text-3xl xl:text-3xl lg:text-2xl md:text-xl text-lg font-semibold text-gray-800 sm:mb-4 mb-0'>
              Expert Care with Dr. Shambhav Chandra
            </h2>
            <p className='sm:text-lg text-sm text-gray-700 sm:mb-6 mb-2'>
              Dr. Shambhav Chandra specializes in circumcision, offering expert care at Healing Gloves clinics. His patient-centered approach ensures safe and effective procedures with optimal outcomes.
            </p>
            <div className='flex justify-center lg:justify-start'>
              <ModalButton btnname="Request an Appointment" />
            </div>
          </div>
          <div className='lg:w-1/2 flex justify-center lg:pl-8'>
            <img src={doctors} alt="Dr. Shambhav Chandra" className="w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </>
  );
}
