import React from 'react';
import banner from '../../../../../public/circumssicion-banner.jpg';
import Form from '../../../form';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import doctors from '../../../../../public/doctors3.png';
import { ModalButton } from '../../../Button';
export default function Circumcision() {
  return (
    <>
      {/* Hero Section */}
      <div className="w-screen flex justify-center items-center">
        <img src={banner} alt="banner" className="w-full h-full object-cover" />
      </div>

      {/* Main Content */}
      <div className="w-screen flex justify-center items-center bg-gray-50">
        <div className="max-w-4xl mx-auto sm:py-16 py-4  px-6">
          <div className="sm:mb-12 mb-3">
            <p className='xxl:text-xl xl:text-xl lg:text-xl md:text-lg text-base text-gray-700'>
              <strong>Circumcision</strong> is a simple surgical procedure where the foreskin covering the tip of the penis is removed. This is done for cultural, religious, and medical reasons.
            </p>
          </div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-2 sm:gap-8 gap-4  sm:mb-12 sm:text-lg text-sm">
            <InfoCard title="Why Do People Get Circumcised?">
              <li><b>Cultural and Religious - </b> Common in cultures like Judaism and Islam.</li>
              <li><b>Health - </b>  Prevents infections, reduces risks of urinary tract infections, sexually transmitted infections, and conditions like phimosis and penile cancer..</li>
            </InfoCard>
            <InfoCard title="Benefits of Circumcision">
              <li><b>Improved Hygiene - </b> Easier to keep the penis clean.</li>
              <li><b>Lower Infection Risk- </b> Reduces chances of infections.</li>
              <li><b>Prevents Medical Issues- </b> Avoids certain conditions.</li>
              <li><b>Cosmetic/Aesthetic purpose</b></li>
              <li><b> Improves fertility</b></li>
            </InfoCard>
          </div>

          {/* Procedure Section */}
          <div className="bg-white rounded-lg sm:shadow-md  shadow-sm p-8  sm:mb-12  mb-5 sm:text-lg text-sm">
            <h2 className='text-2xl font-semibold text-gray-800 mb-4'>How is Circumcision Done?</h2>
            <p className='text-md text-gray-700 mb-4'>
              <b>Procedure:</b> Quick, under local anesthesia for adults and general for children. Foreskin is removed and the area is stitched.
            </p>

            <div className="flex justify-around">
              {['Conventional', 'Laser', 'Stapler/ZSR circumcision'].map((method, index) => (
                <div key={index} className="text-center">
                  <div className="sm:w-16 sm:h-16 h-10 w-10  bg-blue-100 rounded-full flex items-center justify-center mb-2 mx-auto">
                    <FaCheckCircle className="text-blue-500 sm:text-2xl text-lg" />
                  </div>
                  <p className="sm:text-sm text-xs font-medium">{method}</p>
                </div>
              ))}
            </div>
            <p className='text-md text-gray-700 mb-4 mt-5'> <b> Recovery </b> - Minor discomfort for a few days, full recovery in a week or two.</p>
          </div>

          {/* Recovery and Aftercare */}
          <div className="bg-blue-100 rounded-lg sm:p-8 p-5 sm:mb-12 mb-4">
            <h2 className='text-2xl font-semibold text-gray-800 mb-4'> Aftercare</h2>

            <ul className='sm:space-y-2 space-y-1 text-gray-700 sm:text-lg text-sm'>
              <li><FaCheckCircle className="inline-block mr-2 text-green-500" /> <b>Cleanliness - </b> Use warm water and mild soap.</li>
              <li><FaCheckCircle className="inline-block mr-2 text-green-500" /> <b>Medications - </b> Apply prescribed ointments.</li>
              <li><FaCheckCircle className="inline-block mr-2 text-green-500" /> <b>Activity - </b> Avoid heavy activities until healed.</li>
              <li><FaCheckCircle className="inline-block mr-2 text-green-500" /> <b>Monitor - </b> Watch for signs of infection.</li>
            </ul>
          </div>

          {/* Expert Care Section */}
          <div className="bg-white rounded-lg sm:p-8 p-4 sm:mb-12 mb-4">
            <h2 className='xxl:text-3xl xl:text-3xl lg:text-2xl md:text-2xl text-lg font-semibold text-gray-800 sm:mb-4 mb-2 sm:text-left text-center'>Expert Care with Dr. Shambhav Chandra</h2>
            <div className="flex flex-col lg:flex-row justify-center items-center">
              <img src={doctors} alt="Dr. Shambhav Chandra" className="w-full lg:w-1/3 rounded-lg sm:mb-6 lg:mb-0 lg:mr-8"/>
              <div className="flex flex-col justify-center">
                <p className='sm:text-lg text-sm text-gray-700 sm:mb-6 sm:text-left text-center'>
                Dr. Shambhav Chandra specializes in circumcision, offering expert care at Healing Gloves clinics. His patient-centered approach ensures safe and effective procedures with optimal outcomes.
                </p>
             <div className='sm:block flex justify-center items-center '>
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

function InfoCard({ title, children }) {
  return (
    <div className="bg-white rounded-lg sm:shadow-md shadow-sm p-6">
      <h2 className='text-xl font-semibold text-gray-800 mb-4'>{title}</h2>
      <ul className='space-y-2 text-gray-700'>
        {children}
      </ul>
    </div>
  );
}
