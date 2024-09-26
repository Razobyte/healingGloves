import banner from '../../../../../public/IVF & IUI-BANNER.jpg';
import Form from '../../../form';
import { TbTriangleFilled } from 'react-icons/tb';
import abhilasha from '../../../../../public/abhilasha.png';

export default function BestInfinity() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-screen">
        <img src={banner} alt="banner" className="w-full  object-cover shadow-sm" />
        {/* <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
        <div className="absolute top-1/2 left-10 transform -translate-y-1/2">
          <h1 className="text-7xl font-bold text-white animate-fade-in-down">IVF & IUI</h1>
          <p className="text-md font-medium text-white mt-4 animate-fade-in-up">
          Personalized IVF & IUI Treatments at Healing
          Gloves with Dr. Abhilasha Mehta
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
        <section className="sm:mb-12 rounded-xl sm:p-8 p-4 sm:shadow-lg shadow-sm">
          <div className="flex items-center sm:mb-6">
       
            <h2 className="lg:text-2xl sm:text-xl text-lg font-bold text-gray-800">Explore Advanced Fertility Solutions: IVF & IUI at Healing Gloves</h2>
          </div>
          <p className="lg:text-lg sm:text-base text-sm text-gray-700 leading-relaxed">
          At Healing Gloves, we provide advanced fertility solutions that open the door to parenthood for many aspiring families. Led by Dr. Abhilasha Mehta, our center specializes in In Vitro Fertilization (IVF) and Intrauterine Insemination (IUI), two of the most effective fertility treatments available today.

          </p>
        </section>

        {/* Section 2 with Image */}
        <section className="sm:mb-12 mb-4 flex flex-col lg:flex-row items-center rounded-xl sm:p-8 p-4  sm:shadow-lg shadow-sm">
          <img src={abhilasha} alt="Dr. Abhilasha Mehta" className="w-1/2 lg:w-1/3 sm:mb-6 mb-2 lg:mb-0 lg:mr-8 rounded-full shadow-md border-t-4 border-pink-500" />
          <p className="lg:text-lg sm:text-base text-sm text-gray-700 leading-relaxed lg:w-2/3">
          Dr. Abhilasha Mehta, a distinguished infertility specialist, brings her extensive expertise and a personal touch to each treatment. With over years of experience in the field, she has a profound understanding of the emotional and physical challenges faced by couples. Her approach is to offer individualized care, ensuring that every procedure is tailored to the specific needs of her patients
          </p>
        </section>

        {/* Section 3 */}
        <section className="sm:mb-12 mb-4  rounded-xl sm:p-8 p-4  sm:shadow-lg shadow-sm">
          <div className="flex items-center sm:mb-6">
            <p className="lg:text-lg sm:text-base text-sm font-medium text-gray-800">
            IVF involves combining eggs and sperm outside the body in a laboratory setting, while IUI involves directly placing sperm into a woman’s uterus to facilitate fertilization. Dr. Mehta’s deep knowledge and skilled application of these techniques greatly enhance the chances of a successful pregnancy.

            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section className="rounded-xl sm:p-8 p-4  sm:shadow-lg shadow-sm">
          <div className="flex items-center sm:mb-6">
            <p className="lg:text-lg sm:text-base text-sm font-medium text-gray-800">
              <b>Ultrasound guided follicular monitoring</b> -
              Ultrasound-guided follicular monitoring is a painless, non-invasive method used to track the development of ovarian follicles. It helps doctors determine the best time for ovulation and improves the chances of successful conception. This technique is crucial in fertility treatments, providing clear, real-time images of the ovaries
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
