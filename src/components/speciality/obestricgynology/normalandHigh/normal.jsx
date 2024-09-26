import banner from '../../../../../public/NORMAL AND HIGH RISK PREGNACIES.jpg';
import Form from '../../../form';
import { TbTriangleFilled } from 'react-icons/tb';
import abhilasha from '../../../../../public/abhilasha.png';

export default function NormalAndHighRiskDelivery() {
  return (
    <>
      {/* Banner Section */}
      <div className="w-screen relative">
        <img src={banner} alt="banner" className="w-full h-auto object-cover shadow-sm" />
        {/* Optional overlay, gradient, and form */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
        <div className="absolute top-1/2 left-10 transform -translate-y-1/2">
          <h1 className="text-4xl md:text-6xl font-bold text-white animate-fade-in-down">Normal and High-Risk
          <br/>Delivery
          </h1>
          <p className="text-sm md:text-lg font-medium text-white mt-4 animate-fade-in-up">
          Safe and Skilled Normal and High-Risk Delivery at Healing Gloves with Dr. Abhilasha Mehta
          </p>
        </div>
        <div className="hidden lg:block absolute top-10 right-40 animate-fade-in">
          <Form />
        </div>
        <div className="absolute inset-x-0 bottom-[-1px] h-20 bg-gradient-to-b from-transparent to-white transform rotate-2"></div> */}
      </div>

      {/* Main Content Section */}
      <div className="max-w-5xl mx-auto px-4 py-6 md:py-12">
        {/* Section 1 */}
        <section className="mb-6 md:mb-12 rounded-xl p-4 md:p-8 shadow">
          <div className="flex items-center mb-4 md:mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-blue-900">
              Safe and Nurturing Delivery Services at Healing Gloves with Dr. Abhilasha Mehta
            </h2>
          </div>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            At Healing Gloves, we specialize in both normal and high-risk deliveries, ensuring a safe and nurturing environment for every mother and baby. Led by Dr. Abhilasha Mehta, our maternity services are designed to provide the highest standard of care, whether your pregnancy is straightforward or complex.
          </p>
        </section>

        {/* Section 2 with Image */}
        <section className="mb-6 md:mb-12 flex flex-col lg:flex-row items-center rounded-xl p-4 md:p-8 shadow-lg">
          <img src={abhilasha} alt="Dr. Abhilasha Mehta" className="w-full lg:w-1/3 mb-4 lg:mb-0 lg:mr-4 rounded-full shadow-md border-t-4 border-pink-500" />
          <p className="text-base md:text-lg text-gray-700 leading-relaxed lg:w-2/3">
            Dr. Mehta, an expert in obstetrics, has a wealth of experience managing both normal and high-risk pregnancies. Her approach is to tailor the care to each woman's specific needs, providing close monitoring, state-of-the-art diagnostics, and personalized support. For high-risk deliveries, Dr. Mehta’s expertise in managing complications such as preeclampsia, gestational diabetes, and preterm labor ensures the best outcomes for mother and child.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-6 md:mb-12 rounded-xl p-4 md:p-8 shadow-lg">
          <div className="flex items-center mb-4 md:mb-6">
            <p className="text-base md:text-lg font-medium text-gray-800">
              Our team, under Dr. Mehta’s leadership, is committed to making your delivery experience as comfortable and joyful as possible. From prenatal preparation to postnatal care, we ensure that you receive comprehensive support throughout your journey.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section className="rounded-xl p-4 md:p-8 shadow-lg">
          <div className="flex items-center mb-4 md:mb-6">
            <p className="text-base md:text-lg font-normal text-gray-800">
              Choose Healing Gloves for a delivery experience where safety, comfort, and personalized care are our top priorities. Contact us today to learn more about our delivery services and how Dr. Abhilasha Mehta can guide you through a safe and healthy pregnancy.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
