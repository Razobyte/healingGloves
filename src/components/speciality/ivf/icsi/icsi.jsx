import banner from '../../../../../public/ICSI-BANNER.jpg';
import Form from '../../../form';
import { TbTriangleFilled } from 'react-icons/tb';
import abhilasha from '../../../../../public/abhilasha.png';

export default function Icsi() {
  return (
    <>
      <div className="e w-screen">
        <img src={banner} alt="banner" className="w-full  object-cover shadow-sm" />
        {/* <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
        <div className="absolute top-1/2 left-10 transform -translate-y-1/2">
          <h1 className="text-7xl font-bold text-white animate-fade-in-down">Specialized ICSI
          </h1>
          <p className="text-md font-medium text-white mt-4 animate-fade-in-up">
            Introduction to Intracytoplasmic Sperm
            Injection (ICSI)
          </p>
        </div>
        <div className="hidden lg:block absolute top-10 right-40  animate-fade-in">
          <Form />
        </div>
        <div className="absolute inset-x-0 bottom-[-1px] h-20 bg-gradient-to-b from-transparent to-white transform rotate-2"></div> */}
      </div>

      {/* Main Content Section */}
      <div className="max-w-6xl mx-auto sm:p-10 p-4 ">

        {/* Section 1 */}
        <section className="sm:mb-12 mb-4  rounded-xl sm:p-8  p-4 sm:shadow-lg shadow-sm">
          <div className="flex items-center sm:mb-6 mb-2 ">

            <h2 className="lg:text-2xl sm:text-xl text-lg  font-bold text-gray-800">Embark on Your Path to Parenthood with ICSI at Healing Glove</h2>
          </div>
          <p className="lg:text-lg sm:text-base text-sm text-gray-700 leading-relaxed">
            At Healing Gloves, we specialize in Intracytoplasmic Sperm Injection (ICSI), a revolutionary technique that enhances the chances of conception through IVF. ICSI is particularly beneficial for couples facing male infertility challenges. This procedure involves directly injecting a single sperm into an egg, improving fertilization rates significantly.


          </p>
        </section>

        {/* Section 2 with Image */}
        <section className="sm:mb-12 mb-4  flex flex-col lg:flex-row items-center rounded-xl sm:p-8 p-4  sm:shadow-lg shadow-sm">
          <img src={abhilasha} alt="Dr. Abhilasha Mehta" className="w-1/2 lg:w-1/3 mb-6 lg:mb-0 lg:mr-8 rounded-full shadow-md border-t-4 border-pink-500" />
          <p className="lg:text-lg sm:text-base text-sm text-gray-700 leading-relaxed lg:w-2/3">
            Dr. Abhilasha Mehta, a leader in reproductive medicine, brings her extensive expertise in ICSI to every case. With a deep understanding of the intricacies of fertilization, Dr. Mehta tailors this procedure to meet the unique needs of each couple, ensuring the highest possibility of success. Her compassionate
            approach and precision in handling delicate procedures have helped countless couples achieve their dreams of parenthood.

          </p>
        </section>

        {/* Section 3 */}
        <section className="sm:mb-12 mb-4  rounded-xl sm:p-8 p-4 sm:shadow-lg  shadow-sm">
          <div className="flex items-center mb-6">
            <p className="lg:text-lg sm:text-base text-sm font-medium text-gray-800">
              ICSI at Healing Gloves is not just about advanced technology; it’s about creating families. With Dr. Mehta’s guidance, couples receive comprehensive support throughout their journey, from initial consultation to the final stages of pregnancy.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section className="rounded-xl sm:p-8 p-4  sm:shadow-lg shadow-sm">
          <div className="flex items-center mb-6">

            <p className="lg:text-lg sm:text-base text-sm font-medium text-gray-800">

              Take the first step towards expanding your family with Dr. Abhilasha Mehta and the team at Healing Gloves. Contact us today to learn how ICSI can make a difference in your fertility journey.


            </p>
          </div>
        </section>
      </div>
    </>
  );
}
