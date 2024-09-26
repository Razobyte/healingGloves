import React from 'react';
import banner from '../../../../../public/appendixbanner.png';
import Form from '../../../form';
import { FaStethoscope, FaHospital, FaDiagnoses, FaSyringe } from 'react-icons/fa';
import consult from '../../../../../public/doctors3.png';
import { ModalButton } from '../../../Button';

export default function Appendix() {
  return (
    <>
      {/* Banner Section */}
      <div className="relative w-screen ">
        <img src={banner} alt="Appendix Banner" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent"></div>
        <div className="absolute inset-0 flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20">
          <div className="text-white text-center lg:text-left lg:pt-20 pt-4">
            <h1 className='text-2xl sm:text-5xl lg:text-6xl font-extrabold'>Appendix</h1>
            <p className='text-base sm:text-lg lg:text-xl sm:mt-2'>
              Thorough Care for Appendix Issues at Healing Gloves <br /> with Dr. Shambhav Chandra
            </p>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className='w-full flex justify-center sm:py-12 py-4'>
        <div className='w-full max-w-4xl px-4'>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 sm:mb-6">Appendicitis</h1>
          <p className="mb-6 text-gray-800 leading-relaxed text-sm sm:text-base lg:text-lg">
            The appendix is a small, finger-shaped pouch attached to the beginning of the large intestine. Appendicitis is the inflammation of the appendix and is one of the most common causes of emergency abdominal surgery. This condition typically occurs when the appendix becomes blocked by stool, a foreign object, or, in rare cases, a tumor.
          </p>
        </div>
      </div>

      {/* Symptoms Section */}
      <div className='w-full flex justify-center sm:py-12 py-4  bg-gray-100'>
        <div className='w-full max-w-4xl px-4'>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-900 mb-4">Symptoms of Appendicitis</h3>
              <p className="mb-4 text-gray-700 text-sm sm:text-base lg:text-lg">The symptoms of appendicitis can vary, but typically include:</p>
              <ul className="pl-6 mb-6 text-gray-700 space-y-3 text-sm sm:text-base lg:text-lg">
                <li><FaStethoscope className="inline mr-2 text-blue-600" /><strong>Initial Pain - </strong> Begins around the navel and may start as vague discomfort but becomes increasingly sharp and severe.</li>
                <li><FaHospital className="inline mr-2 text-blue-600" /><strong>Localized Pain - </strong> As the inflammation progresses, the pain moves to the lower right abdomen, directly above the appendix.</li>
                <li><FaDiagnoses className="inline mr-2 text-blue-600" /><strong>Other Symptoms - </strong> Reduced appetite, nausea, vomiting, and a low-grade fever are common. In severe cases, if the appendix ruptures, pain may briefly subside before worsening again as peritonitis (inflammation of the abdominal cavity lining) sets in.</li>
              </ul>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-900 mb-4">Later Symptoms</h3>
              <ul className="pl-6 mb-6 text-gray-700 space-y-2 text-sm sm:text-base lg:text-lg">
                <li><FaSyringe className="inline mr-2 text-blue-600" /> Chills</li>
                <li><FaSyringe className="inline mr-2 text-blue-600" /> Constipation or diarrhea</li>
                <li><FaSyringe className="inline mr-2 text-blue-600" /> Fever</li>
                <li><FaSyringe className="inline mr-2 text-blue-600" /> Loss of appetite</li>
                <li><FaSyringe className="inline mr-2 text-blue-600" /> Nausea and vomiting</li>
                <li><FaSyringe className="inline mr-2 text-blue-600" /> Shaking</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Diagnosis Section */}
      <div className='w-full flex justify-center sm:py-12 py-4'>
        <div className='w-full max-w-4xl px-4'>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-4">Diagnosing Appendicitis</h2>
          <p className="mb-4 text-gray-800 text-sm sm:text-base lg:text-lg">Diagnosing appendicitis involves a combination of methods to ensure accuracy:</p>
          <ul className="pl-6 mb-6 text-gray-700 space-y-3 text-sm sm:text-base lg:text-lg">
            <li><strong>Medical History:</strong> Reviewing the patient's symptoms and medical history.</li>
            <li><strong>Physical Examination:</strong> Checking for tenderness in the lower right abdomen.</li>
            <li><strong>Abdominal Ultrasound:</strong> Imaging to visualize the appendix and surrounding areas.</li>
            <li><strong>Abdominal CT Scan:</strong> Detailed images to confirm inflammation or rupture of the appendix.</li>
          </ul>
        </div>
      </div>

      {/* Treatment Section */}
      <div className='w-full flex justify-center sm:py-12 py-4  bg-gray-100'>
        <div className='w-full max-w-4xl px-4'>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-4">Treatment Options for Appendicitis</h2>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-900 mb-4">Surgical Treatment</h3>
          <ul className="pl-6 mb-6 text-gray-700 text-sm sm:text-base lg:text-lg">
            <li><strong>Appendectomy - </strong> The most common treatment for uncomplicated appendicitis, involving the surgical removal of the appendix. This can be performed as a minimally invasive laparoscopic surgery or an open surgery, depending on the case's complexity.</li>
          </ul>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-900 mb-4">Treatment for Ruptured Appendix</h3>
          <p className="mb-6 text-gray-700 text-sm sm:text-base lg:text-lg">
            If a CT scan reveals an abscess due to a ruptured appendix, initial treatment focuses on managing the infection and inflammation with antibiotics. Once stabilized, the patient undergoes an appendectomy to remove the appendix.
          </p>
        </div>
      </div>

      {/* Specialized Care Section */}
      <div className="w-full flex justify-center sm:py-12 py-4 bg-white rounded-lg shadow-md">
        <div className='w-full max-w-4xl px-4'>
          <h2 className='text-2xl sm:text-3xl lg:text-4xl font-semibold text-blue-900 mb-4 underline'>Specialized Care at Healing Gloves</h2>
          <div className="flex flex-col lg:flex-row">
            <img src={consult} alt="Dr. Shambhav Chandra" className="w-full lg:w-1/3 rounded-lg mb-6 lg:mb-0 lg:mr-8" />
            <div className="flex flex-col justify-center">
              <p className='text-sm sm:text-base lg:text-lg text-gray-700 mb-6'>
                At Healing Gloves, Dr. Shambhav Chandra specializes in the diagnosis and treatment of appendicitis. With a focus on general surgery and proctology, Dr. Chandra and his team provide expert care, ensuring that patients receive timely and effective treatment for appendicitis. Healing Gloves is equipped with advanced diagnostic tools and state-of-the-art surgical facilities to manage both uncomplicated and complicated cases of appendicitis.
              </p>
              <div>
                <ModalButton btnname="Request an Appointment" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conclusion Section */}
      <div className='w-full flex justify-center sm:py-12 py-4 bg-gray-100'>
        <div className='w-full max-w-4xl px-4'>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-4">Conclusion</h2>
          <p className="mb-6 text-gray-700 text-sm sm:text-base lg:text-lg">
            Appendicitis requires prompt medical attention to prevent serious complications. If you experience symptoms indicative of appendicitis, such as severe abdominal pain, nausea, or fever, seek immediate medical care. At Healing Gloves, Dr. Shambhav Chandra and his team are dedicated to providing comprehensive and compassionate care, utilizing the latest techniques to ensure the best possible outcomes for their patients.
          </p>
        </div>
      </div>
    </>
  );
}
