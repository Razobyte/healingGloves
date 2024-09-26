import React from 'react';
import banner from '../../../../../public/VARICCOCELE TREATMENT.jpg';
import Form from '../../../form';
import consult from '../../../../../public/doctors3.png';

const Varicocele = () => {
  return (
    <>
      <div className="relative w-screen">
        <img src={banner} alt="banner" className="w-full h-auto" />
       
      </div>
      <div className="max-w-6xl mx-auto md:p-8 p-4">
        {/* Introduction Section */}
        <section className="md:mb-10 mb-3">
          <h1 className='xl:text-3xl lg:text-3xl md:text-2xl text-lg text-blue-900 font-bold md:pb-3 pb-1'>Varicocele Treatment at Healing Gloves</h1>
          <p className="md:text-lg text-sm leading-relaxed text-gray-700 font-medium">
            Do you have a dull ache or discomfort in your scrotum? You might be dealing with a varicocele, a common condition in men. At Healing Gloves, we provide expert treatment to help you feel better.
          </p>
        </section>
        <section className="md:mb-10 mb-3">
          <h1 className='xl:text-3xl lg:text-3xl md:text-2xl text-lg text-blue-900 font-bold md:pb-3 pb-1'>Varicocele?</h1>
          <p className="md:text-lg text-sm leading-relaxed text-gray-700 font-medium">
          Varicocele? A varicocele is a swollen and enlarged vein in the scrotum, similar to varicose veins that some people get in their legs. It can cause pain, swelling, and sometimes problems with fertility.
          </p>
        </section>
        

        {/* Symptoms Section */}
        <section className="md:mb-10 mb-3 md:p-6 p-3 bg-gray-50 md:shadow-md rounded-lg">
          <h2 className='text-[#474747] xl:text-3xl lg:text-3xl md:text-2xl text-lg font-bold mb-4'>Symptoms of Varicocele</h2>
          <ul className=" list-disc list-inside text-gray-700 md:text-lg text-sm space-y-3 cursor-pointer font-normal">
            <li>A dull ache or pain in the scrotum </li>
            <li>Swelling or a lump in the scrotum </li>
            <li>Enlarged veins that feel like a bag of worms</li>
          </ul>
        </section>

        {/* Benefits Section */}
        <section className="md:mb-10 mb-3 md:p-6 p-3 bg-blue-100 md:shadow-md rounded-lg">
          <h3 className='text-gray-900 xl:text-3xl lg:text-3xl md:text-2xl text-lg font-bold md:mb-4 mb-2'>Benefits of These Treatments</h3>
          <ul className="list-inside text-gray-800 md:text-lg text-sm  md:space-y-3 space-y-1">
            <li><b>Pain Relief - </b> Say goodbye to discomfort and swelling.</li>
            <li><b>Quick Recovery - </b> Most treatments have a short recovery time.</li>
            <li><b>Improved Fertility - </b> Treatment can help improve sperm quality and fertility.</li>
          </ul>
        </section>

        {/* Expert Care Section */}
        <div className="bg-white rounded-lg md:p-8 p-0 md:mb-10 mb-3 w-full flex justify-center">
          <div className='max-w-6xl'>
            <h2 className='xl:text-3xl lg:text-3xl md:text-2xl text-lg font-semibold text-blue-900 md:mb-4 underline text-center'>Expert Care by Dr. Shambhav Chandra</h2>
            <div className="flex flex-col lg:flex-row">
              <img src={consult} alt="Dr. Shambhav Chandra" className="w-full lg:w-1/3 rounded-lg mb-0 lg:mb-0 lg:mr-8" />
              <div className="flex flex-col justify-center">
                <p className='md:text-lg text-sm text-gray-700 md:mb-6'>
                Dr. Shambhav Chandra, our experienced general surgeon at Healing Gloves, specializes in treating varicoceles. His expertise ensures you receive the best possible care tailored to your needs.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <section className="mb-10">
          <p className="md:text-lg text-sm leading-relaxed text-gray-700 font-medium">
            Don’t let a varicocele affect your life any longer. Contact Healing Gloves today to schedule a consultation with Dr. Shambhav Chandra.
          </p>
        </section>
      </div>
    </>
  );
};

export default Varicocele;
