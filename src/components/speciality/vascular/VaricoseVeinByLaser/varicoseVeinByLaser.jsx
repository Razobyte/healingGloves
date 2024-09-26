import React from 'react';
import banner from '../../../../../public/LASER TREATMNET.jpg';
import Form from '../../../form';
import consult from '../../../../../public/doctors3.png';


const VaricoseVeinByLaser = () => {

  return (
    <>

      <div className=" w-screen ">
        <img src={banner} alt="banner" className="w-full h-auto shaodw-sm z-10" />
       
      </div>
      <div className="max-w-5xl mx-auto md:p-8 p-5">
        {/* Introduction Section */}
        <section className="md:mb-10 mb-4 ">
          <p className="text-lg leading-relaxed text-gray-700 font-medium">
            <span className='xl:text-3xl lg:text-3xl md:text-2xl text-lg  text-blue-900 font-bold md:pb-5 pb-2'>
              Varicose Vein Treatment by Laser at Healing Gloves
            </span>
            <br/>
             <span className='md:text-lg text-sm'>
             Do you suffer from painful, bulging varicose veins? At Healing Gloves, we offer a state-of-the-art solution: laser treatment for varicose veins. This minimally invasive procedure is quick, effective, and virtually pain-free.
             </span>
          </p>
        </section>
        <section className="md:mb-10 mb-4 ">
          <p className="md:text-lg text-sm  leading-relaxed text-gray-700 font-medium">
           
            <b className='md:text-xl text-base'>  Varicose Veins?</b>
            <br/>
            Varicose veins are swollen, twisted veins that can cause discomfort and pain. They often appear on the legs and can worsen over time if not treated.

          </p>
        </section>
        <section className="md:mb-10 mb-4 ">
          <p className="md:text-lg text-sm leading-relaxed text-gray-700 font-medium">
         
            <b className='md:text-xl text-base'> Why Choose Laser Treatment?</b>
            Laser treatment for varicose veins involves using focused light to collapse the affected veins, which are then naturally absorbed by your body. This procedure is done on an outpatient basis, meaning you can go home the same day.

          </p>
        </section>

        {/* Benefits Section */}
        <section className="md:mb-10 mb-4 md:p-6 p-2 bg-gray-50 md:shadow-md rounded-lg">
          <h3 className='text-blue-900 xl:text-3xl lg:text-3xl md:text-2xl text-lg  font-bold md:mb-4 mb-2' >Benefits of Laser Treatment?
          </h3>
          <ul className="list-inside text-gray-800 md:text-lg text-sm md:space-y-3 space-y-1 cursor-pointer">
            <li><b className='md:text-lg text-base'>Minimally Invasive - </b>No large incisions are needed.
            </li>
            <li> <b  className='md:text-lg text-base'>Quick Recovery</b> - Most patients resume normal activities within a day or two.

            </li>
            <li> <b  className='md:text-lg text-base'>Effective Results</b> - Noticeable improvement in both appearance and symptoms.
            </li>

          </ul>
        </section>
        <div className="bg-white rounded-lg  md:p-8 p-4 md:mb-12 w-full flex justify-center">
        <div className='max-w-5xl'>
            <h2 className='  text-center xl:text-3xl lg:text-3xl md:text-2xl text-lg  font-semibold text-blue-900 md:mb-4 underline'>Dr. Shambhav Chandra’s Expertise</h2>
            <div className="flex flex-col lg:flex-row">
              <img src={consult} alt="Dr. Shambhav Chandra" className="w-full lg:w-1/3 rounded-lg md:mb-6  lg:mb-0 lg:mr-8" />
              <div className="flex flex-col justify-center">
                <p className='md:text-lg text-sm text-gray-700 md:mb-6'>
                At Healing Gloves, you will be in the expert hands of Dr. Shambhav Chandra. Dr. Shambhav is a highly experienced general surgeon specializing in weight loss surgeries. He is committed to providing personalized and compassionate care, ensuring you receive the highest quality treatment tailored to your needs.

                </p>
               <div>
              
               </div>
              </div>
              </div>
            </div>
          </div>
        {/* How Fillers Work Section */}
      
      </div>






    </>
  );
};

export default VaricoseVeinByLaser;
