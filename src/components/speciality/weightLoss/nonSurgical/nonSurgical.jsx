import React from 'react';
import banner from '../../../../../public/non-surgical-banner.jpg';
import Form from '../../../form';
import consult from '../../../../../public/doctors3.png';

export default function NonSurgical() {
  return (
    <>
      {/* Banner Section */}
      <div className="relative w-screen">
        <img src={banner} alt="Non-Surgical Weight Loss Banner" className="w-full h-auto shadow-sm object-cover" />
        {/* Uncomment and adjust if needed */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent"></div>
        <div className="absolute inset-0 flex flex-col lg:flex-row items-center justify-between px-10 lg:px-20">
          <div className="relative z-20 text-white max-w-lg lg:max-w-xl">
            <h1 className='text-5xl lg:text-6xl font-bold leading-tight mb-4'>
              Non-Surgical <br /> Weight Loss
            </h1>
            <p className='text-lg lg:text-xl font-medium'>
              Effective Non-Surgical Weight Loss Solutions <br /> at Healing Gloves with Dr. Shambhav Chandra
            </p>
          </div>
          <div className="absolute lg:top-10 lg:right-20 top-80 right-10 z-20 p-0 w-1/4">
            <Form />
          </div>
        </div> */}
      </div>

      {/* Introduction Section */}
      <div className='w-screen  sm:py-16 py-4 '>
        <div className='max-w-6xl mx-auto px-6'>
          <p className='text-base lg:text-xl font-normal text-gray-700'>
            At Healing Gloves, we understand that not everyone is ready or able to undergo surgery for weight loss. That’s why we offer advanced, non-surgical weight loss options to help you achieve your health and wellness goals without the need for invasive procedures. These methods are designed to help you lose weight safely and effectively.
          </p>
        </div>
      </div>

      {/* Why Choose Section */}
      <div className='w-full sm:py-12 py-4  bg-gradient-to-r from-blue-100 to-blue-200'>
        <div className='max-w-6xl mx-auto px-6'>
          <h4 className='text-xl lg:text-4xl font-bold text-blue-900 mb-4'>
            Why Choose Non-Surgical Weight Loss Solutions?
          </h4>
          <p className='text-base lg:text-lg font-normal text-gray-700'>
            Many people opt for non-surgical weight loss solutions because they are less invasive and come with fewer risks compared to surgery. These methods can help you lose weight without the long recovery times and potential complications associated with surgical procedures. Non-surgical options are ideal for those looking to make gradual and sustainable changes to their lifestyle.
          </p>
        </div>
      </div>

      {/* How It Helps Section */}
      <div className='w-full sm:py-8 py-4 bg-white'>
        <div className='max-w-6xl mx-auto px-6'>
          <h4 className='text-xl lg:text-4xl font-bold text-blue-900 mb-6'>
            How Non-Surgical Weight Loss Helps
          </h4>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-gray-100 rounded-lg p-6 shadow-lg">
              <h5 className='text-lg font-semibold mb-2'>Feel Full Faster</h5>
              <p className='text-base text-gray-700'>
                These methods make you feel full sooner, so you eat less.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 shadow-lg">
              <h5 className='text-lg font-semibold mb-2'>Adopt Healthier Habits</h5>
              <p className='text-base text-gray-700'>
                They give you the time and support to develop better eating habits.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 shadow-lg">
              <h5 className='text-lg font-semibold mb-2'>Achieve Gradual Weight Loss</h5>
              <p className='text-base text-gray-700'>
                By making small, sustainable changes, you can achieve lasting weight loss without the drastic measures of surgery.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 shadow-lg">
              <h5 className='text-lg font-semibold mb-2'>Reduce Health Risks</h5>
              <p className='text-base text-gray-700'>
                Losing weight can lower your risk of serious health conditions like diabetes, heart disease, and high blood pressure.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Non-Surgical Methods Section */}
      <div className='w-full sm:py-12 py-4  bg-blue-50'>
        <div className='max-w-6xl mx-auto px-6'>
          <h4 className='text-2xl lg:text-4xl font-bold text-blue-900 sm:mb-6 mb-2'>
            Non-Surgical Weight Loss Methods
          </h4>
          <div className="flex flex-wrap sm:gap-8 gap-4">
            <div className="w-full md:w-1/2 lg:w-1/4">
              <h5 className='text-lg font-semibold mb-2'>Endoscopic Balloon</h5>
              <p className='text-base text-gray-700'>
                A small balloon is inserted into your stomach and filled with saline, helping you feel full faster and eat less.
              </p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4">
              <h5 className='text-lg font-semibold mb-2'>Allurion Balloon</h5>
              <p className='text-base text-gray-700'>
                A swallowable balloon inflates in your stomach, making you feel full and helping you eat smaller portions to lose weight effectively.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Expertise Section */}
      <div className="bg-white rounded-lg sm:p-8  p-3 sm:mb-12 mb-4 w-full flex justify-center">
        <div className='max-w-5xl'>
          <h2 className='text-xl lg:text-4xl font-semibold text-blue-900 sm:mb-4 underline'>
            Dr. Shambhav Chandra’s Expertise
          </h2>
          <div className="flex flex-col lg:flex-row">
            <img src={consult} alt="Dr. Shambhav Chandra" className="w-full lg:w-1/3 rounded-lg mb-6 lg:mb-0 lg:mr-8" />
            <div className="flex flex-col justify-center">
              <p className='text-base lg:text-lg text-gray-700 mb-6'>
                At Healing Gloves, you will be under the expert care of Dr. Shambhav Chandra. Dr. Shambhav is a highly experienced general surgeon specializing in weight loss treatments. He is dedicated to helping you achieve your weight loss goals with personalized and compassionate care. With his expertise, you can be confident that you are receiving the highest quality treatment tailored to your needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
