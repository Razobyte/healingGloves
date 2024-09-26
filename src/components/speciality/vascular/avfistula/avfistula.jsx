import React from 'react';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import banner from '../../../../../public/AV FISTULA.jpg';
import doctorImage from '../../../../../public/doctors3.png';
import Form from '../../../form';

const AVFistula = () => {
  return (
    <div>
      {/* Banner Section */}
      <div className="w-screen">

        <img src={banner} alt="AV Fistula Treatment Banner" className="w-full h-auto shadow-sm" />


      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 md:py-12 py-4">
        <div>
          <h2 className="xl:text-3xl lg:text-3xl md:text-2xl text-lg font-bold text-[#2a3986] md:mb-4 mb-1">AV Fistula Treatment at Healing Gloves</h2>
          <p className="md:mb-6 mb-2 md:text-lg text-sm">
            Are you or a loved one in need of dialysis and looking for the best long-term solution? At Healing Gloves, we offer expert treatment for AV (Arteriovenous) Fistula, a reliable and effective way to access the bloodstream for dialysis.

          </p>

        </div>
        <h2 className="xl:text-3xl lg:text-3xl md:text-2xl text-lg font-bold text-[#2a3986] md:mb-4 mb-1">What is an AV Fistula?</h2>
        <p className="md:mb-6 mb-2 md:text-lg text-sm">
          An AV fistula is a connection made between an artery and a vein, usually in the arm. This connection creates a strong blood vessel that can handle the repeated needle sticks required for dialysis. It's the preferred method because it has a lower risk of infection and lasts longer than other options.
        </p>

        {/* Why Choose Section */}
        <h3 className="xl:text-3xl lg:text-3xl md:text-2xl text-lg font-bold text-[#2a3986] md:mb-4 mb-1">Why Choose an AV Fistula?</h3>
        <ul className="list-none mb-6 md:text-lg text-sm">
          {[
            'Durable - AV fistulas can last many years, providing a reliable access point for dialysis.',
            'Lower Infection Risk -  Compared to other methods, AV fistulas have a much lower risk of infection.',
            'Better Blood Flow -  Provides good blood flow for effective dialysis treatment.'
          ].map((benefit, index) => (
            <li key={index} className="flex items-center mb-2">
              <FaCheckCircle className="text-green-500 mr-2" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>

        {/* Procedure Section */}
        <h3 className="xl:text-3xl lg:text-3xl md:text-2xl text-lg font-bold text-[#2a3986] md:mb-4 mb-1">Procedure</h3>
        <p className="md:mb-6 mb-2 md:text-lg text-sm">
          The creation of an AV fistula is a minor surgical procedure done on an outpatient basis. During the procedure, a surgeon connects an artery to a vein, usually in your arm. This process allows the vein to grow stronger and larger, making it suitable for dialysis.
        </p>

        {/* Expert Care Section */}
        <div className="flex items-center bg-[#E3E8FF] md:p-6 p-3 rounded-lg mb-6">
          <img src={doctorImage} alt="Dr. Shambhav Chandra" className="w-32 h-32 rounded-full mr-6" />
          <div>
            <h3 className="xl:text-3xl lg:text-3xl md:text-2xl text-lg font-bold text-[#2a3986] md:mb-2 mb-1">Expert Care by Dr. Shambhav Chandra</h3>
            <p className='md:text-base text-sm'>
              Dr. Shambhav Chandra, our experienced general surgeon at Healing Gloves, specializes in creating AV fistulas. His expertise ensures that the procedure is done with precision, giving you the best possible outcome.
            </p>
          </div>
        </div>

        {/* Aftercare Section */}
        <h3 className="xl:text-3xl lg:text-3xl md:text-2xl text-lg font-bold text-[#2a3986] md:mb-4 mb-1">Aftercare</h3>
        <p className="md:mb-6 mb-2 md:text-lg text-sm">
          Proper care of your AV fistula is essential. Dr. Shambhav Chandra will guide you on how to take care of it to ensure it functions well for your dialysis needs.
        </p>

        {/* Call to Action */}
        <div className=" md:mt-8 mt-3">
          <p className="md:text-xl  text-sm mb-4">Don't settle for less when it comes to your health. Contact Healing Gloves today to schedule a consultation with Dr. Shambhav Chandra.</p>
          {/* <button className="bg-[#2a3986] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1e2a61] transition duration-300">
            Schedule Consultation
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default AVFistula;