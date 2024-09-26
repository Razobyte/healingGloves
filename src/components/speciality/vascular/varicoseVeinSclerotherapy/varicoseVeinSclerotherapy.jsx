import React from 'react';
import banner from '../../../../../public/ADVANCED VEIN CARE.jpg';
import Form from '../../../form';
import consult from '../../../../../public/doctors3.png';


const VaricoseVeinByLaser = () => {

  return (
    <>


      <div className=" w-screen ">
        <img src={banner} alt="banner" className="w-full h-auto " />

      </div>
      <div className="max-w-6xl mx-auto md:p-8 p-4">
        {/* Introduction Section */}
        <section className="md:mb-10 mb-4">
          <p className="md:text-lg text-sm leading-relaxed text-gray-700 font-medium">
            <h1 className='xl:text-3xl lg:text-3xl md:text-2xl text-lg text-blue-900 font-bold md:pb-5 pb-1'>Varicose Vein Treatment by Sclerotherapy and Embolization at Healing Gloves
            </h1>
            Do varicose veins make you uncomfortable or self-conscious? At Healing Gloves, we offer simple and effective treatments like sclerotherapy and embolization to help you feel better.

          </p>
        </section>
        <section className="md:mb-10 mb-4 ">
          <p className="md:text-lg text-sm leading-relaxed text-gray-700 font-medium">

            <b>  Varicose Veins?</b> -
            Varicose veins are large, twisted veins that often appear on your legs. They can cause pain and swelling and sometimes lead to other health issues if not treated.


          </p>
        </section>
        <section className="md:mb-10 mb-4 ">
          <p className="md:text-lg text-sm leading-relaxed text-gray-700 font-medium">

            <b>Sclerotherapy</b>  -
            In sclerotherapy, a special solution is injected directly into the varicose veins. This solution makes the vein collapse and disappear over time. The procedure is quick, doesn’t involve surgery, and you can go home the same day.


          </p>
        </section>
        <section className="md:mb-10 mb-4 ">
          <p className="md:text-lg text-sm leading-relaxed text-gray-700 font-medium">

            <b>Embolization</b> -
            Embolization is another minimally invasive treatment. A small tube is placed into the affected vein, and tiny particles or coils are used to block the vein. This causes the vein to close and be absorbed by the body. It’s especially good for larger veins.


          </p>
        </section>

        {/* Benefits Section */}
        <section className="md:mb-10 mb-4 md:p-6 p-2  bg-gray-50 md:shadow-md rounded-lg">
          <h3 className='text-blue-900  xl:text-3xl lg:text-3xl md:text-2xl text-lg font-bold md:mb-4 mb-2'>Benefits of These Treatments
          </h3>
          <ul className="list-inside text-gray-800 'md:text-lg text-sm md:space-y-3 space-y-1 cursor-pointer">
            <li><b>Non-Surgical - </b>No major surgery is needed.
            </li>
            <li> <b>Quick Recovery</b> -Most people return to normal activities in a day or two.

            </li>
            <li> <b>Effective </b> - You'll see improvements in how your legs look and feel.
            </li>

          </ul>
        </section>
        <div className="bg-white rounded-lg  md:p-8 p-4 md:mb-10 mb-4 w-full flex justify-center">
          <div className='max-w-6xl'>
            <h2 className='xl:text-3xl lg:text-3xl md:text-2xl text-lg font-semibold text-blue-900 md:mb-4 mb-0 underline'>Expert Care by Dr. Shambhav Chandra</h2>
            <div className="flex flex-col lg:flex-row">
              <img src={consult} alt="Dr. Shambhav Chandra" className="w-full lg:w-1/3 rounded-lg mb-0 lg:mb-0 lg:mr-8" />
              <div className="flex flex-col justify-center">
                <p className='md:text-lg text-sm text-gray-700 md:mb-6 mb-0'>
                  At Healing Gloves, Dr. Shambhav Chandra, a specialist in general surgery, will take care of your treatment. He has lots of experience with sclerotherapy and embolization, ensuring you get the best care possible.

                </p>
                <div>

                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="mb-10 ">
          <p className="md:text-lg text-sm leading-relaxed text-gray-700 font-medium">


            Don’t let varicose veins bother you any longer. Contact Healing Gloves today to book a consultation with Dr. Shambhav Chandra and find out how these treatments can help you feel better.


          </p>
        </section>
        {/* How Fillers Work Section */}

      </div>






    </>
  );
};

export default VaricoseVeinByLaser;
