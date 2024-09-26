import React from 'react';
import herniaBanner from '../../../../../public/hernia-banner.jpg';
import doctorImage from '../../../../../public/doctors3.png';
import Form from '../../../form';
import { ModalButton } from '../../../Button';

export default function HerniaOverview() {
  return (
    <>
      <div className="w-full">
        <img src={herniaBanner} alt="Hernia Overview Banner" className="w-full h-full object-cover shadow-sm" />
      </div>

      {/* Overview Section */}
      <div className="w-full bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-6 lg:mb-12">
            <h2 className='text-lg sm:text-xl lg:text-4xl font-bold text-blue-900'>Hernia Overview</h2>
            <p className='text-xs sm:text-sm lg:text-md text-gray-700 mt-2'>
              A hernia occurs when an organ or tissue protrudes through a weak spot in the surrounding muscle or connective tissue. This condition commonly affects the abdomen, but hernias can also develop in the groin, belly button, and upper thighs. While hernias are not typically life-threatening, they do not resolve on their own and often require surgical intervention to prevent complications.
            </p>
          </div>

          {/* Common Types of Hernias */}
          <h1 className='text-lg sm:text-xl lg:text-4xl font-bold text-blue-900 pb-6 lg:pb-12'>Common Types of Hernias</h1>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 mb-6 lg:mb-12">
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
              <h3 className='text-lg sm:text-xl lg:text-xl font-semibold text-blue-900 mb-2'>Inguinal Hernia</h3>
              <p className='text-xs sm:text-sm lg:text-md font-normal text-pink-400 mb-2'>
                Inguinal hernias are the most common type, making up approximately 75% of all hernias. They occur when the intestines push through a weak spot in the lower abdominal wall, specifically in the inguinal canal. This type of hernia is more prevalent in men due to the presence of the spermatic cord, which descends through the inguinal canal.
              </p>
              <ul className='list-disc pl-4 text-gray-700 space-y-1'>
                <strong>Symptoms</strong>
                <li>A noticeable bulge in the groin area</li>
                <li>Pain or discomfort in the groin, especially when bending over, coughing, or lifting</li>
                <li>A heavy or dragging sensation in the groin</li>
                <li>Weakness or pressure in the groin</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
              <h3 className='text-lg sm:text-xl lg:text-xl font-semibold text-blue-900 mb-2'>Hiatal Hernia</h3>
              <p className='text-xs sm:text-sm lg:text-md font-normal text-pink-400 mb-2'>
                A hiatal hernia occurs when part of the stomach pushes through the diaphragm into the chest cavity. This condition is more common in individuals over the age of 50.
              </p>
              <ul className='list-disc pl-4 text-gray-700 space-y-1'>
                <strong>Symptoms</strong>
                <li>Difficulty swallowing</li>
                <li>Chest pain</li>
                <li>Acid reflux or heartburn</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
              <h3 className='text-lg sm:text-xl lg:text-xl font-semibold text-blue-900 mb-2'>Umbilical Hernia</h3>
              <p className='text-xs sm:text-sm lg:text-md font-normal text-pink-400 mb-2'>
                Umbilical hernias are most common in newborns and occur when the intestine bulges through the abdominal wall near the belly button. This type of hernia can also occur in adults, particularly in those who are overweight or have had multiple pregnancies.
              </p>
              <ul className='list-disc pl-4 text-gray-700 space-y-1'>
                <strong>Symptoms</strong>
                <li>A bulge near the belly button</li>
                <li>Discomfort or pain around the bulge</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
              <h3 className='text-lg sm:text-xl lg:text-xl font-semibold text-blue-900 mb-2'>Incisional Hernia</h3>
              <p className='text-xs sm:text-sm lg:text-md font-normal text-pink-400 mb-2'>
                An incisional hernia can develop after abdominal surgery, where the intestine or other tissue protrudes through the incision site. This type of hernia is less common but can occur if the surgical site does not heal properly.
              </p>
              <ul className='list-disc pl-4 text-gray-700 space-y-1'>
                <strong>Symptoms</strong>
                <li>A bulge at the site of a previous surgical incision</li>
                <li>Pain or discomfort at the bulge site, especially when lifting or straining</li>
              </ul>
            </div>
          </div>

          {/* Diagnosing Hernias Section */}
          <div className="bg-blue-50 rounded-lg shadow-md p-4 sm:p-6 lg:p-8 mb-6 lg:mb-12">
            <h2 className='text-lg sm:text-xl lg:text-2xl font-semibold text-blue-900 mb-4'>Diagnosing Hernias</h2>
            <p className='text-xs sm:text-sm lg:text-lg font-normal text-pink-500 pb-4'>
              Healthcare providers may use several methods to diagnose hernias:
            </p>
            <ul className='list-disc pl-4 text-gray-700 space-y-2'>
              <li><b>Physical Examination:</b> Checking for visible bulges and conducting a manual examination to feel for hernias</li>
              <li><b>Ultrasound:</b> Imaging technique used to detect hernias and assess the abdominal area.</li>
              <li><b>CT Scan or MRI:</b> Provides detailed images to identify the presence and extent of hernias.</li>
              <li><b>Endoscopy or Barium X-ray:</b> Used specifically for diagnosing hiatal hernias.</li>
            </ul>
          </div>

          {/* Treatment Section */}
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 lg:p-8 mb-6 lg:mb-12">
            <h2 className='text-lg sm:text-xl lg:text-2xl font-semibold text-blue-900 mb-4'>Treatment Options for Hernias</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <h3 className='text-lg sm:text-xl lg:text-xl font-semibold text-blue-900 mb-4'>Surgical Treatment</h3>
                <ul className='list-disc pl-4 text-gray-700 space-y-2'>
                  <li><b>Laparoscopic Hernia Repair:</b> A minimally invasive procedure involving small incisions and a camera to guide the repair of the hernia. This technique often results in quicker recovery and less post-operative pain compared to traditional open surgery.</li>
                  <li><b>Open Hernia Repair:</b> Involves a larger incision to directly access and repair the hernia.</li>
                </ul>
              </div>
              <div>
                <h3 className='text-lg sm:text-xl lg:text-xl font-semibold text-blue-900 mb-4'>Non-Surgical Treatment</h3>
                <ul className='list-disc pl-4 text-gray-700 space-y-2'>
                  <li><b>Watchful Waiting:</b> In cases where the hernia is small and asymptomatic, monitoring the condition may be recommended. Surgery is often required if the hernia grows or causes pain.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Expert Care Section */}
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 lg:p-8 mb-6 lg:mb-12">
            <h2 className='text-lg sm:text-xl lg:text-3xl font-semibold text-blue-900 mb-4 underline'>Specialized Care at Healing Gloves</h2>
            <div className="flex flex-col lg:flex-row">
              <img src={doctorImage} alt="Dr. Shambhav Chandra" className="w-full lg:w-1/3 rounded-lg mb-6 lg:mb-0 lg:mr-8" />
              <div className="flex flex-col justify-center">
                <p className='text-xs sm:text-sm lg:text-lg text-gray-700 mb-6'>
                  At Healing Gloves, Dr. Shambhav Chandra specializes in the treatment of various types of hernias. With extensive experience in general surgery and a focus on proctology, Dr. Chandra provides comprehensive and personalized care for hernia patients. Healing Gloves is equipped with state-of-the-art facilities and a dedicated team to ensure the best possible outcomes for hernia repair surgeries.
                </p>
                <div>
                  <ModalButton btnname="Request an Appointment" />
                </div>
              </div>
            </div>
          </div>

          {/* Conclusion Section */}
          <div className='text-center mb-6 lg:mb-12'>
            <h1 className='text-lg sm:text-xl lg:text-4xl text-blue-900 font-semibold underline pb-4'>Conclusion</h1>
            <p className='text-xs sm:text-sm lg:text-lg text-gray-700'>
              Hernias are a common but manageable condition. If you experience symptoms of a hernia, it is important to seek medical advice for an accurate diagnosis and appropriate treatment plan. At Healing Gloves, Dr. Shambhav Chandra and his team are committed to providing expert care and advanced treatment options to help you recover and regain your quality of life.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
