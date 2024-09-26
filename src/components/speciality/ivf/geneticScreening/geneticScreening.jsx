import banner from '../../../../../public/GENETIC SCREENING.jpg';
import Form from '../../../form';
import { TbTriangleFilled } from 'react-icons/tb';
import abhilasha from '../../../../../public/abhilasha.png';

export default function GeneticScreening() {
  return (
    <>
     <div className=" w-screen">
        <img src={banner} alt="banner" className="w-full object-cover shadow-sm" />
        {/* <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
        <div className="absolute top-1/2 left-10 transform -translate-y-1/2">
          <h1 className="text-7xl font-bold text-white animate-fade-in-down">Genetic
          Screening</h1>
          <p className="text-md font-medium text-white mt-4 animate-fade-in-up">
          Extensive Genetic Screening at Healing Gloves
          with Dr. Abhilasha Mehta
          </p>
        </div>
        <div className="hidden lg:block absolute top-10 right-40  animate-fade-in">
          <Form />
        </div>
        <div className="absolute inset-x-0 bottom-[-1px] h-20 bg-gradient-to-b from-transparent to-white transform rotate-2"></div> */}
      </div>

      {/* Main Content Section */}
      <div className="max-w-6xl mx-auto sm:p-10 p-4">
        
        {/* Section 1 */}
        <section className="sm:mb-12 mb-4 rounded-xl sm:p-8  p-4 sm:shadow-lg shadow-sm">
          <div className="flex items-center sm:mb-6">
          
            <h2 className="lg:text-2xl sm:text-xl text-lg  font-bold text-gray-800">Reveal Your Health Blueprint with Genetic Screening at Healing Gloves</h2>
          </div>
          <p className="lg:text-lg sm:text-base text-sm text-gray-700 leading-relaxed">
          Discover the power of genetic screening at Healing Gloves, where we offer cutting-edge tests to uncover vital information about your genetic makeup. Led by Dr. Abhilasha Mehta, an expert in genetic health, our services provide insights into your risk for diseases such as cancer and cardiovascular conditions, helping you make informed decisions about your health and future.

          </p>
        </section>

        {/* Section 2 with Image */}
        <section className="sm:mb-12 flex flex-col lg:flex-row items-center rounded-xl sm:p-8 p-4  sm:shadow-lg shadow-sm">
          <img src={abhilasha} alt="Dr. Abhilasha Mehta" className="w-1/2 lg:w-1/3 mb-6 lg:mb-0 lg:mr-8 rounded-full shadow-md border-t-4 border-pink-500" />
          <p className="lg:text-lg sm:text-base text-sm text-gray-700 leading-relaxed lg:w-2/3">
          Our genetic screening process is simple, efficient, and can be a life-changing tool for managing your health proactively. Dr. Mehta’s extensive expertise ensures that each analysis of your DNA is performed with the utmost precision, identifying potential genetic disorders or predispositions. This information is invaluable in planning preventive measures or early treatments that are tailored specifically to your genetic profile
          </p>
        </section>

        {/* Section 3 */}
        <section className="sm:mb-12 mb-4  rounded-xl sm:p-8 p-4  sm:shadow-lg shadow-sm">
          <div className="flex items-center mb-6">
            <p className="lg:text-lg sm:text-base text-sm font-medium text-gray-800">
            At Healing Gloves, we ensure that the process is conducted with the highest level of privacy and precision. The insights gained from genetic screening under Dr. Mehta's guidance enable you and your healthcare provider to develop a personalized health plan that maximizes your well-being.

            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section className="rounded-xl sm:p-8 p-4  sm:shadow-lg ">
          <div className="flex items-center sm:mb-6 mb-4">
         
            <p className="lg:text-lg sm:text-base text-sm font-medium text-gray-800">
             
            Take control of your health journey with genetic screening at Healing Gloves. It’s not just a test—it’s a roadmap to a healthier life. Contact us today to learn more about how genetic screening can benefit you and your family.

            </p>
          </div>
        </section>
      </div>
    </>
  );
}
