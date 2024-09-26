import React from 'react';
import banner from '../../../../public/botoxbanner.jpeg';
import Form from '../../form';
import { TbTriangleFilled } from 'react-icons/tb';

export default function Botox() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full">
        <img src={banner} alt="banner" className="w-full h-auto sm:h-[400px] md:h-[500px] object-cover shadow-md" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
        <div className="absolute top-1/2 left-4 sm:left-10 transform -translate-y-1/2 w-3/4 sm:w-auto">
          <h1 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white">Botox</h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-medium text-white mt-2 sm:mt-4">
            Enhance Your Potential <br className="sm:hidden" />at Healing Gloves with <br className="hidden sm:block" />Dr. Manisha Devi
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-4xl mx-auto p-4 sm:p-6 md:p-8 lg:p-10 text-sm sm:text-base md:text-lg">
        <section className="mb-4 sm:mb-6 md:mb-8">
          <p className="text-sm sm:text-base md:text-lg">
            Botox is a popular, non-surgical treatment designed to reduce the appearance of fine lines
            and wrinkles, offering a more youthful and refreshed look.
          </p>
        </section>

        <section className="mb-4 sm:mb-6 md:mb-8">
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2 sm:mb-4 text-blue-900 font-bold">Botox helps with:</h3>
          <ul className="flex flex-col sm:flex-row flex-wrap justify-start items-start sm:items-center gap-2 sm:gap-3 text-gray-900 font-medium text-sm sm:text-base">
            {['Forehead Lines', 'Frown Lines', 'Crow\'s Feet', 'Bunny Lines', 'Neck Bands'].map((item, index) => (
              <li key={index} className="flex items-center">
                <TbTriangleFilled className="text-blue-900 mr-1" /> {item}
              </li>
            ))}
          </ul>
        </section>

        {['Botox works by temporarily relaxing the muscles that cause these lines, resulting in smoother skin.',
          'People often seek Botox for cosmetic reasons, such as looking younger, but it can also be used to treat medical conditions like chronic migraines, excessive sweating, and muscle spasms.',
          'Typically, Botox effects last for three to six months, after which the treatment can be repeated to maintain the desired results.'
        ].map((text, index) => (
          <section key={index} className="mb-4 sm:mb-6 md:mb-8">
            <p className="text-sm sm:text-base md:text-lg font-medium text-[#474747]">
              {text}
            </p>
          </section>
        ))}
      </div>
    </>
  );
}