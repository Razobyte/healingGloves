import banner from '../../../../../public/INFERTLITY TRAETMENT.jpg';
import Form from '../../../form';
import { TbTriangleFilled } from 'react-icons/tb';
import abhilasha from '../../../../../public/abhilasha.png';

export default function BestInfinity() {
  return (
    <>
      {/* Hero Section */}
      <div className=" w-screen">
        <img src={banner} alt="banner" className="w-full  object-cover shadow-sm" />
      </div>

      {/* Main Content Section */}
      <div className="max-w-6xl mx-auto sm:p-10 p-4">
        
        {/* Section 1 */}
        <section className="sm:mb-12 mb-4 rounded-xl sm:p-8 p-4 sm:shadow-lg shadow-sm">
          <div className="flex items-center mb-3">
          
            <h2 className="lg:text-2xl sm:text-xl text-lg font-bold text-gray-800">Achieve Your Dream of Parenthood with Healing Gloves</h2>
          </div>
          <p className="lg:text-lg sm:text-base text-sm text-gray-700 leading-relaxed">
            At Healing Gloves, we understand that the journey to parenthood can be challenging, but you're not alone. Our dedicated fertility center offers the best infertility treatments, designed to give you the highest chances of success. Under the expert guidance of Dr. Abhilasha Mehta, our treatments are tailored to meet your unique needs in a compassionate and supportive environment.
          </p>
        </section>

        {/* Section 2 with Image */}
        <section className="sm:mb-12  mb-3 flex flex-col lg:flex-row items-center rounded-xl sm:p-8 p-4  sm:shadow-lg shadow-sm">
          <img src={abhilasha} alt="Dr. Abhilasha Mehta" className="w-1/2 lg:w-1/3 sm:mb-6 mb-3 lg:mb-0 lg:mr-8 rounded-full shadow-md border-t-4 border-pink-500" />
          <p className="md:text-lg text-sm text-gray-700 leading-relaxed lg:w-2/3">
            Dr. Abhilasha Mehta, a renowned infertility specialist, combines cutting-edge technology with a personalized approach to care. With over a decade of experience, she has helped countless couples navigate the complex process of conception. Her expertise spans a wide range of effective treatments, including IVF, IUI, and hormone therapies, ensuring that you receive the most appropriate and effective care.
          </p>
        </section>

        {/* Section 3 */}
        <section className="sm:mb-12 rounded-xl sm:p-8  p-4 sm:shadow-lg">
          <div className="flex items-center sm:mb-6">
            <p className="md:text-xl sm:text-lg text-sm font-medium text-gray-800">
              Our clinic is equipped with state-of-the-art technology to provide comprehensive diagnostic and treatment services. Dr. Mehta is dedicated to making your dream of becoming a parent a reality, offering support and guidance every step of the way.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section className="rounded-xl sm:p-8 p-4 sm:shadow-lg  shadow-sm">
          <div className="flex items-center sm:mb-6">
        
            <p className="md:text-xl sm:text-lg text-sm font-medium text-gray-800">
              Begin your journey to parenthood with Healing Gloves, where care meets innovation to fulfill your deepest aspirations. Contact us today to schedule a consultation.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
