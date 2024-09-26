import React from 'react';
import banner from '../../../../../public/gallstonesbanner.png';
import Form from '../../../form';
import consult from '../../../../../public/doctors3.png';
import { FaArrowRight } from 'react-icons/fa';
import { MdPlayArrow } from 'react-icons/md';
import { ModalButton } from '../../../Button';

export default function GallStones() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative ">
        <img src={banner} alt="Gallstones Banner" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent"></div>
        <div className="absolute inset-0 flex flex-col lg:flex-row items-center justify-between px-4 lg:px-20">
          <div className="text-white text-center lg:text-left lg:pt-20 pt-5 px-4 lg:px-0">
            <h1 className='text-2xl sm:text-5xl lg:text-7xl font-bold'>Gall Stones</h1>
            <p className='text-sm sm:text-xl lg:text-2xl font-medium sm:mt-4 mt-1'>
              Vigilant Care for Gall Stones <br /> at Healing Gloves with <br />Dr. Shambhav Chandra
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full bg-gray-50 py-6 lg:py-12">
        <div className="max-w-6xl mx-auto px-4 lg:px-6">
          {/* Introduction */}
          <div className="text-center mb-6 lg:mb-12">
            <h4 className='text-xl sm:text-2xl lg:text-4xl font-bold text-[#474747] text-blue-900'>What are Gallbladder Stones?</h4>
            <p className='text-xs sm:text-base lg:text-md text-[#474747] mt-2'>
              The gallbladder is a small, pear-shaped organ located beneath the liver. Its primary function is to store bile, a digestive fluid produced by the liver that aids in digestion. Gallbladder stones, also known as gallstones, form when substances in the bile, such as cholesterol or bilirubin, harden into solid particles. These stones can vary in size from tiny grains to larger masses and may be present in multiples.
            </p>
          </div>

          {/* Types of Gallstones */}
          <div className="grid gap-6 sm:gap-8 lg:gap-8 mb-6 lg:mb-12 grid-cols-1 sm:grid-cols-2">
            <div className="bg-white rounded-lg shadow-md p-4 lg:p-6">
              <h2 className='text-lg sm:text-xl lg:text-2xl font-semibold text-blue-900 mb-2'>Types of Gallstones</h2>
              <p className='text-xs sm:text-sm lg:text-lg font-normal text-pink-400 pb-4'>Gallstones are primarily categorized into three types</p>
              <ul className='pl-4 text-gray-700 space-y-2'>
                <li><b>Cholesterol Stones - </b> Typically yellow-green, these are the most common type, forming from excess cholesterol in the bile.</li>
                <li><b>Pigment Stones - </b> Smaller and darker, these stones are composed of bilirubin, a substance derived from the breakdown of red blood cells.</li>
                <li><b>Mixed Stones - </b> These stones are composed of both cholesterol and bilirubin, combining characteristics of both types. They often form in the gallbladder and are varied in size and color, reflecting the mixed composition.</li>
              </ul>
            </div>

            {/* Causes of Gallstones */}
            <div className="bg-white rounded-lg shadow-md p-4 lg:p-6">
              <h2 className='text-lg sm:text-xl lg:text-2xl font-semibold text-blue-900 mb-2'>Causes of Gallstones</h2>
              <p className='text-xs sm:text-sm lg:text-lg font-normal text-pink-400 pb-4'>The exact reasons for gallstone formation are not entirely clear, but several factors are believed to contribute.</p>
              <ul className='pl-4 text-gray-700 space-y-2'>
                <li><b>Excess Cholesterol in Bile - </b> When the liver secretes more cholesterol than the bile can dissolve, the excess may crystallize into stones.</li>
                <li><b>Excess Bilirubin in Bile - </b> Conditions like liver cirrhosis, biliary tract infections, and certain blood disorders can lead to increased bilirubin production, resulting in pigment stones.</li>
                <li><b>Gallbladder Function Issues - </b> Inefficient emptying of the gallbladder can cause bile to become overly concentrated, promoting the formation of stones.</li>
              </ul>
            </div>
          </div>

          {/* Symptoms Section */}
          <div className="bg-white rounded-lg shadow-md p-4 lg:p-8 mb-6 lg:mb-12">
            <h2 className='text-lg sm:text-xl lg:text-4xl font-semibold text-blue-900 mb-4'>Symptoms of Gallbladder Stones</h2>
            <p className='text-xs sm:text-sm lg:text-lg font-normal text-pink-500 pb-4'>Gallstones often go unnoticed without symptoms. However, when a stone obstructs a bile duct, it can cause significant discomfort and complications, such as:</p>
            <ul className='pl-4 text-gray-700 space-y-1'>
              <li><MdPlayArrow className="inline-block mr-2 text-blue-500" />Sudden and intense pain in the upper right abdomen</li>
              <li><MdPlayArrow className="inline-block mr-2 text-blue-500" />Pain between the shoulder blades</li>
              <li><MdPlayArrow className="inline-block mr-2 text-blue-500" />Pain in the right shoulder</li>
              <li><MdPlayArrow className="inline-block mr-2 text-blue-500" />Nausea and vomiting</li>
              <li><MdPlayArrow className="inline-block mr-2 text-blue-500" />Dark urine</li>
              <li><MdPlayArrow className="inline-block mr-2 text-blue-500" />Burping and indigestion</li>
              <li><MdPlayArrow className="inline-block mr-2 text-blue-500" />Diarrhea</li>
            </ul>
          </div>

          {/* Diagnosis Section */}
          <div className="bg-white rounded-lg shadow-md p-4 lg:p-8 mb-6 lg:mb-12">
            <h2 className='text-lg sm:text-xl lg:text-4xl font-semibold text-blue-900 mb-4'>Diagnosing Gallbladder Stones</h2>
            <p className='text-xs sm:text-sm lg:text-lg font-normal text-pink-500 pb-4'>To diagnose gallstones, healthcare providers may use several methods:</p>
            <ul className='pl-4 text-gray-700 space-y-4'>
              <li><b>Physical Examination - </b> Checking for signs of jaundice, which can indicate a bile duct blockage.</li>
              <li><b>Ultrasound - </b> A preferred imaging technique for detecting gallstones and assessing the gallbladder.</li>
              <li><b>Abdominal CT Scan - </b> Provides detailed images of the liver and abdomen to identify gallstones.</li>
              <li><b>Gallbladder Radionuclide Scan - </b> Involves injecting a radioactive substance to detect gallbladder function and blockages.</li>
              <li><b>Blood Tests - </b> Measure bilirubin levels and liver function to help diagnose gallstones.</li>
              <li><b>Endoscopic Retrograde Cholangiopancreatography (ERCP) - </b> Combines endoscopy and X-rays to examine the bile and pancreatic ducts.</li>
            </ul>
          </div>

          {/* Treatment Section */}
          <div className="bg-white rounded-lg shadow-md p-4 lg:p-8 mb-6 lg:mb-12">
            <h2 className='text-lg sm:text-xl lg:text-4xl font-semibold text-blue-900 mb-4'>Treatment for Gallbladder Stones</h2>
            <p className='text-xs sm:text-sm lg:text-lg font-normal text-pink-500 pb-4'>Many gallstones do not require treatment unless they cause symptoms. For symptomatic cases, treatment options include:</p>
            <div className="flex flex-col sm:flex-row lg:flex-row">
              <div className="w-full mb-6 lg:mb-0 sm:w-1/2">
                <h3 className='text-lg sm:text-xl lg:text-xl font-semibold text-blue-900 mb-4'>Surgical Treatment</h3>
                <ul className='pl-4 text-gray-700 space-y-2'>
                  <li><b>Laparoscopic Gallbladder Removal -</b> A minimally invasive procedure where small incisions are made to remove the gallbladder using a camera-guided tool. Patients typically recover quickly and may go home the same day.</li>
                  <li><b>SILS Cholecystectomy -</b> Single Incision Laparoscopic Surgery (SILS) Cholecystectomy involves removing the gallbladder through a single incision, usually at the navel. This method results in less scarring and faster recovery compared to traditional laparoscopic surgery.</li>
                </ul>
              </div>
              <div className="w-full sm:w-1/2">
                <h3 className='text-lg sm:text-xl lg:text-xl font-semibold text-gray-800 mb-4'>Nonsurgical Treatments</h3>
                <ul className='list-disc pl-4 text-gray-700'>
                  <li><b>Medication -</b> For patients unable to undergo surgery, medications may be prescribed to dissolve gallstones. However, this method is less effective and takes longer to work.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Expert Care Section */}
          <div className="bg-white rounded-lg shadow-md p-4 lg:p-8 mb-6 lg:mb-12">
            <h2 className='text-lg sm:text-xl lg:text-4xl font-semibold text-blue-900 mb-4 underline'>Specialized Care at Healing Gloves</h2>
            <div className="flex flex-col lg:flex-row">
              <img src={consult} alt="Dr. Shambhav Chandra" className="w-full lg:w-1/3 rounded-lg mb-6 lg:mb-0 lg:mr-8" />
              <div className="flex flex-col justify-center">
                <p className='text-xs sm:text-sm lg:text-lg text-gray-700 mb-6'>
                  Dr. Shambhav Chandra provides expert treatment for gallbladder stones. Specializing in general surgery with a focus on proctology, Dr. Chandra offers both surgical and nonsurgical treatments tailored to the specific needs of each patient. His comprehensive approach ensures that patients receive the highest standard of care, utilizing the latest techniques and technologies for optimal outcomes.
                </p>
                <div>
                  <ModalButton btnname="Request an Appointment" />
                </div>
              </div>
            </div>
          </div>

          {/* Conclusion Section */}
          <div className="text-center mb-6 lg:mb-12">
            <h1 className='text-lg sm:text-xl lg:text-4xl text-blue-900 font-semibold underline pb-4'>Conclusion</h1>
            <p className='text-xs sm:text-sm lg:text-lg text-gray-700'>
              Gallbladder stones can range from being asymptomatic to causing significant discomfort and complications. Proper diagnosis and timely treatment are essential for managing symptoms and preventing further issues. If you experience symptoms suggestive of gallstones, consult Dr. Shambhav Chandra at Healing Gloves for a thorough evaluation and personalized treatment plan.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

