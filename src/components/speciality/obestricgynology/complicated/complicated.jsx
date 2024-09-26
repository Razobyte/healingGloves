import banner from '../../../../../public/complication pregnacy-BANNE.jpg';
import Form from '../../../form';
import abhilasha from '../../../../../public/abhilasha.png';

export default function Complicated() {
  return (
    <>
      {/* Banner Section */}
      <div className="w-screen relative">
        <img src={banner} alt="banner" className="w-full h-auto object-cover shadow-sm" />
        {/* Optional overlay, gradient, and form */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
        <div className="absolute top-1/2 left-10 transform -translate-y-1/2">
          <h1 className="text-4xl md:text-6xl font-bold text-white animate-fade-in-down">Complicated Pregnancies
          </h1>
          <p className="text-sm md:text-lg font-medium text-white mt-4 animate-fade-in-up">
            Skilled Management of Complicated Pregnancies at Healing Gloves with Dr. Abhilasha Mehta
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
              Expert Care for Complicated Pregnancies at Healing Gloves
            </h2>
          </div>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            At Healing Gloves, we specialize in managing complicated pregnancies with the highest level of expertise and care. Led by Dr. Abhilasha Mehta, our approach is tailored to meet the unique challenges that these pregnancies present, ensuring safety and health for both mother and baby.
          </p>
        </section>

        {/* Section 2 with Image */}
        {/* <section className="mb-6 md:mb-12 flex flex-col lg:flex-row items-center rounded-xl p-4 md:p-8 shadow-lg">
          <img src={abhilasha} alt="Dr. Abhilasha Mehta" className="w-full lg:w-1/3 mb-4 lg:mb-0 lg:mr-4 rounded-full shadow-md border-t-4 border-pink-500" />
          <p className="text-base md:text-lg text-gray-700 leading-relaxed lg:w-2/3">
            Dr. Abhilasha Mehta, renowned for her expertise in maternal-fetal medicine, offers comprehensive care that begins even before conception. Her approach integrates all aspects of health management to optimize pregnancy outcomes. From nutritional guidance to routine screenings and genetic testing, Dr. Mehta ensures that both mother and baby receive the best possible care.
          </p>
        </section> */}

        {/* Section 3 */}
        <section className="mb-6 md:mb-12 rounded-xl p-4 md:p-8 shadow-lg">
          <div className="flex items-center mb-4 md:mb-6">
            <p className="text-base md:text-lg font-normal text-gray-800">
              <strong>Complicated pregnancies</strong> may involve issues like gestational diabetes, hypertension, or pre-existing medical conditions that can affect the health of the mother and the development of the baby. Dr. Mehta, an expert in high-risk obstetrics, utilizes advanced monitoring and treatment methods to manage these risks effectively.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section className="mb-6 md:mb-12 rounded-xl p-4 md:p-8 shadow-lg">
          <div className="flex items-center mb-4 md:mb-6">
            <p className="text-base md:text-lg font-normal text-gray-800">
              Our services include detailed screenings, continuous monitoring, and personalized care plans developed in consultation with each patient. Dr. Mehta’s focus is on providing comprehensive support that addresses both physical and emotional health, helping expectant mothers navigate their pregnancies with confidence and peace of mind.
            </p>
          </div>
        </section>

        {/* Section 5 */}
        <section className="rounded-xl p-4 md:p-8 shadow-lg">
          <div className="flex items-center mb-4 md:mb-6">
            <p className="text-base md:text-lg font-normal text-gray-800">
              Choose Healing Gloves for a supportive and informed pregnancy experience, even in the face of complications. Dr. Mehta and our dedicated team are committed to delivering the best possible outcomes for you and your baby.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
