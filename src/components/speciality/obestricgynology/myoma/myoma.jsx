import banner from '../../../../../public/MYOMA SURGERY.jpg';
import Form from '../../../form';
import abhilasha from '../../../../../public/abhilasha.png';

export default function MyomaSurgery() {
  return (
    <>
      {/* Banner Section */}
      <div className="w-screen relative">
        <img src={banner} alt="Myoma Surgery" className="w-full h-auto object-cover shadow-sm" />
        {/* Optional overlay, gradient, and form */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
        <div className="absolute top-1/2 left-10 transform -translate-y-1/2">
          <h1 className="text-4xl md:text-6xl font-bold text-white animate-fade-in-down">Myoma Surgery
          </h1>
          <p className="text-sm md:text-lg font-medium text-white mt-4 animate-fade-in-up">
            Precise Myoma Surgery at Healing Gloves with Dr. Abhilasha Mehta
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
          <div className="mb-4 md:mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-blue-900">
              Specialized Myoma Surgery at Healing Gloves
            </h2>
          </div>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            At Healing Gloves, we provide specialized myoma surgery to effectively treat uterine fibroids, enhancing women’s health and well-being. Under the expert care of Dr. Abhilasha Mehta, this surgical procedure is designed to remove fibroids, which are non-cancerous growths that develop in or on the uterus.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-6 md:mb-12 rounded-xl p-4 md:p-8 shadow">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            <strong>Myoma surgery</strong> is often recommended when fibroids cause persistent symptoms such as heavy menstrual bleeding, pelvic pain, or complications with fertility. Dr. Abhilasha Mehta, a skilled surgeon with extensive experience in gynecological procedures, uses advanced techniques to ensure precise removal while aiming to preserve uterine function.
          </p>
        </section>

        {/* Section 3 with Image */}
        {/* <section className="mb-6 md:mb-12 flex flex-col lg:flex-row items-center rounded-xl p-4 md:p-8 shadow-lg">
          <img src={abhilasha} alt="Dr. Abhilasha Mehta" className="w-full lg:w-1/3 mb-4 lg:mb-0 lg:mr-4 rounded-full shadow-md border-t-4 border-pink-500" />
          <p className="text-base md:text-lg text-gray-700 leading-relaxed lg:w-2/3">
            Dr. <strong>Abhilasha Mehta</strong>, with her vast experience in gynecological surgeries, ensures that each myoma surgery is conducted with precision and personal attention to the patient’s specific medical needs. Her approach prioritizes minimizing recovery time and maximizing patient comfort and health outcomes.
          </p>
        </section> */}

        {/* Section 4 */}
        <section className="mb-6 md:mb-12 rounded-xl p-4 md:p-8 shadow-lg">
          <p className="text-base md:text-lg font-normal text-gray-800">
            Our approach to myoma surgery focuses on minimizing discomfort and promoting a quick recovery, allowing patients to return to their daily activities as soon as possible. Dr. Mehta’s dedication to patient care is evident in her personalized treatment plans and her commitment to discussing all available options with her patients.
          </p>
        </section>

        {/* Section 5 */}
        <section className="rounded-xl p-4 md:p-8 shadow-lg">
          <p className="text-base md:text-lg font-normal text-gray-800">
            Choose Healing Gloves for your myoma surgery, where Dr. Mehta’s expertise ensures a safe and effective treatment outcome. We are here to support you every step of the way in your journey to better health.
          </p>
        </section>
      </div>
    </>
  );
}
