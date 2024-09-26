import banner from '../../../../../public/PRENTAL CARE-banner.jpg';
import Form from '../../../form';
import { TbTriangleFilled } from 'react-icons/tb';
import abhilasha from '../../../../../public/abhilasha.png';

export default function PrenatalCare() {
  return (
    <>
      {/* Banner Section */}
      <div className="w-screen">
        <img src={banner} alt="banner" className="w-full h-auto object-cover shadow-sm" />
      </div>

      {/* Main Content Section */}
      <div className="max-w-6xl mx-auto px-4 py-6 md:py-12">
        {/* Section 1 */}
        <section className="mb-6 md:mb-12 rounded-xl p-4 md:p-8 shadow">
          <div className="flex items-center mb-4 md:mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-blue-900">Experience Comprehensive Prenatal Care with Dr. Abhilasha Mehta at Healing Gloves</h2>
          </div>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            At Healing Gloves, we provide exceptional prenatal care to ensure a healthy pregnancy journey for you and your baby. Under the expert guidance of Dr. Abhilasha Mehta, our prenatal services support every step of your pregnancy with personalized attention and advanced medical practices.
          </p>
        </section>

        {/* Section 2 with Image */}
        <section className="mb-6 md:mb-12 flex flex-col lg:flex-row items-center rounded-xl p-4 md:p-8 shadow-lg">
          <img src={abhilasha} alt="Dr. Abhilasha Mehta" className="w-full lg:w-1/3 mb-4 lg:mb-0 lg:mr-4 rounded-full shadow-md border-t-4 border-pink-500" />
          <p className="text-base md:text-lg text-gray-700 leading-relaxed lg:w-2/3">
            Dr. Abhilasha Mehta, renowned for her expertise in maternal-fetal medicine, offers comprehensive care that begins even before conception. Her approach integrates all aspects of health management to optimize pregnancy outcomes. From nutritional guidance to routine screenings and genetic testing, Dr. Mehta ensures that both mother and baby receive the best possible care.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-6 md:mb-12 rounded-xl p-4 md:p-8 shadow-lg">
          <div className="flex items-center mb-4 md:mb-6">
            <p className="text-base md:text-lg font-medium text-gray-800">
              Our prenatal program is designed to address each trimester's unique needs, providing continuous monitoring and support. Dr. Mehta’s dedication to maternal and fetal health means she is available to answer your questions and ease your concerns, ensuring a confident and comfortable pregnancy experience.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section className="rounded-xl p-4 md:p-8 shadow-lg">
          <div className="flex items-center mb-4 md:mb-6">
            <p className="text-base md:text-lg font-normal text-gray-800">
              Choose Healing Gloves for prenatal care that nurtures and protects. With Dr. Mehta’s compassionate and expert care, you can look forward to a joyful and healthy pregnancy. Contact us today to schedule your first appointment and start your journey with the best in prenatal support.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
