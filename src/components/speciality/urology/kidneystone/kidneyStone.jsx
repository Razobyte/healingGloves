import React from 'react';
import banner from '../../../../../public/kidney stone.jpg';
import Form from '../../../form';
import { FaArrowRight, FaClipboardCheck, FaShieldAlt } from 'react-icons/fa';
import doctor from '../../../../../public/doctors3.png';
import { ModalButton } from '../../../Button';

export default function KidneyStones() {
  return (
    <>
      {/* Hero Section */}
      <div className=" w-screen  flex justify-center items-center">
        <img src={banner} alt="Kidney Stones Banner" className="w-full h-full object-cover" />

      </div>

      {/* Main Content */}
      <div className="w-screen  flex justify-center items-center flex-col ">
        <div className="max-w-6xl mx-auto px-6">
          {/* Kidney Stones Definition */}
          <section className="bg-white sm:py-12 py-4">
            <p className='sm:text-xl text-sm text-gray-700'>
              <strong> Kidney</strong> stones are hard deposits made of minerals and salts that form inside the kidneys, causing severe pain when they move through the urinary tract.
            </p>
          </section>

          {/* Symptoms */}
          <section className="flex flex-col items-center pb-10">
            <h2 className='xxl:text-3xl xl:text-3xl lg:text-2xl md:text-xl text-lg font-semibold text-gray-800 sm:mb-4 mb-4'>
              Symptoms of Kidney Stones
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-8 gap-3 max-w-6xl w-full px-4">
              <div className="bg-blue-100 rounded-lg sm:shadow-lg shadow-sm sm:p-6 p-3 flex flex-col items-start">
                <h3 className="xxl:text-2xl  xl:text-2xl lg:text-xl  text-base font-semibold text-pink-500 sm:mb-4">Severe Pain</h3>
                <p className="text-gray-700  sm:text-lg text-sm">Sharp pain in the side, back, lower abdomen, and groin.</p>
              </div>
              <div className="bg-blue-100 rounded-lg sm:shadow-lg shadow-sm sm:p-6 p-3 flex flex-col items-start">
                <h3 className="xxl:text-2xl  xl:text-2xl lg:text-xl  text-base font-semibold text-pink-500 sm:mb-4">Blood in Urine</h3>
                <p className="text-gray-700  sm:text-lg text-sm">Pink, red, or brown urine.</p>
              </div>
              <div className="bg-blue-100 rounded-lg sm:shadow-lg shadow-sm sm:p-6 p-3 flex flex-col items-start">
                <h3 className="xxl:text-2xl  xl:text-2xl lg:text-xl  text-base font-semibold text-pink-500 sm:mb-4">Frequent Urination</h3>
                <p className="text-gray-700  sm:text-lg text-sm">Increased need to urinate.</p>
              </div>
              <div className="bg-blue-100 rounded-lg sm:shadow-lg shadow-sm sm:p-6 p-3 flex flex-col items-start">
                <h3 className="xxl:text-2xl  xl:text-2xl lg:text-xl  text-base font-semibold text-pink-500 sm:mb-4">Painful Urination</h3>
                <p className="text-gray-700  sm:text-lg text-sm">Discomfort during urination.</p>
              </div>
              <div className="bg-blue-100 rounded-lg sm:shadow-lg shadow-sm sm:p-6 p-3 flex flex-col items-start">
                <h3 className="xxl:text-2xl  xl:text-2xl lg:text-xl  text-base font-semibold text-pink-500 sm:mb-4">Nausea and Vomiting</h3>
                <p className="text-gray-700  sm:text-lg text-sm">Often accompanies the pain.</p>
              </div>
            </div>
          </section>


          {/* Causes and Types */}
          <section className="sm:mb-16 bg-white rounded-lg shadow-md sm:p-8 p-4">
            <h2 className='xxl:text-3xl xl:text-3xl lg:text-2xl md:text-xl text-lg font-semibold text-gray-800 sm:mb-4 mb-0'>
              <FaClipboardCheck className="mr-3 text-blue-600 sm:flex hidden" />
              Causes and Types
            </h2>
            <div className="grid md:grid-cols-2 sm:gap-6  gap-4">
              <div>
                <h3 className="xxl:text-xl xl:text-xl lg:text-xl md:text-lg text-base font-semibold text-gray-800 mb-2">Causes</h3>
                <ul className='space-y-2 text-gray-700 sm:text-base text-xs pl-5'>
                  <li><b>Dehydration</b> -  Not drinking enough water.</li>
                  <li><b>Diet - </b> High intake of protein, sodium, and sugar.</li>
                  <li><b>Medical Conditions</b> - Certain conditions and medications.</li>
                </ul>
              </div>
              <div>
                <h3 className="xxl:text-xl xl:text-xl lg:text-xl md:text-lg text-base font-semibold text-gray-800 mb-2">Types</h3>
                <ul className='space-y-2 text-gray-700 sm:text-base text-xs '>
                  <li>Calcium, Struvite, Uric Acid, and Cystine stones.</li>

                </ul>
              </div>
            </div>
          </section>

          {/* Diagnosis and Treatment */}
          <section className="mb-16 sm:block hidden">
            <h2 className='xxl:text-3xl xl:text-3xl lg:text-2xl md:text-xl text-lg font-semibold text-gray-800 sm:mb-4 mb-0'>
              <FaClipboardCheck className="mr-3 text-blue-600 sm:bloc hidden" />
              Diagnosis and Treatment
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Tests</h3>
                <ul className='space-y-2 text-gray-700 list-disc pl-5'>
                  <li>USG</li>
                  <li>Imaging (CT scans, X-rays)</li>
                  <li>Blood tests</li>
                  <li>Urine tests</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Treatment</h3>
                <ul className='space-y-2 text-gray-700 list-disc pl-5'>
                  <li>Hydration, medications, procedures like ESWL, ureteroscopy, and percutaneous nephrolithotomy, RIRS.</li>

                </ul>
              </div>
            </div>
          </section>

          {/* Prevention */}
          <section className="mb-16 bg-white rounded-lg shadow-md p-8 sm:block hidden">
            <h2 className='xxl:text-3xl xl:text-3xl lg:text-2xl md:text-xl text-lg font-semibold text-gray-800 sm:mb-4 mb-0'>
              <FaShieldAlt className="mr-3 text-blue-600" />
              Prevention
            </h2>
            <ul className='space-y-4 text-gray-700'>
              <li className="flex items-center">
                <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <FaShieldAlt className="text-blue-600" />
                </span>
                <span><strong>Hydration:</strong> Drink plenty of fluids.</span>
              </li>
              <li className="flex items-center">
                <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <FaShieldAlt className="text-blue-600" />
                </span>
                <span><strong>Diet:</strong> Reduce salt and animal protein, limit oxalate-rich foods.</span>
              </li>
              <li className="flex items-center">
                <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <FaShieldAlt className="text-blue-600" />
                </span>
                <span><strong>Medication:</strong> To control mineral levels in urine.</span>
              </li>
            </ul>
          </section>

          {/* Expert Care */}
          <div className="max-w-6xl mx-auto px-6  mb-12">
            <h2 className='xxl:text-3xl xl:text-3xl lg:text-2xl md:text-xl text-lg font-semibold text-gray-800 sm:mb-4 sm:my-0 my-4'>Expert Care with Healing Gloves</h2>
            <div className="flex flex-col lg:flex-row items-center bg-gray-50 rounded-lg shadow-lg p-8">
              <img src={doctor} alt="Dr. Shambhav Chandra" className="w-full lg:w-1/3 rounded-lg mb-6 lg:mb-0 lg:mr-8" />
              <div className="flex flex-col justify-center">
                <p className='sm:text-lg text-xs text-gray-700 sm:mb-6 mb-0'>
                  Dr. Shambhav, Specialized in urology, offers comprehensive care for kidney stones at Healing Gloves clinics. He provides accurate diagnosis, effective treatment, and personalized prevention strategies.

                </p>
                <div>
                  <ModalButton btnname="Request an Appointment" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
