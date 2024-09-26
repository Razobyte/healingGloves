import banner from '../../../../../public/Open Hysterectomy-BANNER.jpg';
import Form from '../../../form';
import abhilasha from '../../../../../public/abhilasha.png';

export default function OpenHysterectomy() {
  return (
    <>
      {/* Banner Section */}
      <div className="w-screen relative">
        <img src={banner} alt="Open Hysterectomy" className="w-full h-auto object-cover shadow-sm" />
       
      </div>

      {/* Main Content Section */}
      <div className="max-w-5xl mx-auto px-4 py-6 md:py-12">
        {/* Section 1 */}
        <section className="mb-6 md:mb-12 rounded-xl p-4 md:p-8 shadow">
          <div className="mb-4 md:mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-blue-900">
              Comprehensive Open Hysterectomy Care at Healing Gloves
            </h2>
          </div>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            At Healing Gloves, we provide comprehensive care for women requiring an open hysterectomy, a traditional surgical method for removing the uterus. Under the expert guidance of Dr. Abhilasha Mehta, this procedure is performed with the highest standards of safety and patient care.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-6 md:mb-12 rounded-xl p-4 md:p-8 shadow">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            An <strong>open hysterectomy</strong> may be necessary for various reasons, including severe endometriosis, large fibroids, or uterine cancer, where less invasive methods are not suitable. This procedure involves a larger incision in the abdomen, allowing direct access to the reproductive organs for complete removal of the uterus.
          </p>
        </section>

        {/* Section 3 with Image */}
        <section className="mb-6 md:mb-12 flex flex-col lg:flex-row items-center rounded-xl p-4 md:p-8 shadow-lg">
          <img src={abhilasha} alt="Dr. Abhilasha Mehta" className="w-full lg:w-1/3 mb-4 lg:mb-0 lg:mr-4 rounded-full shadow-md border-t-4 border-pink-500" />
          <p className="text-base md:text-lg text-gray-700 leading-relaxed lg:w-2/3">
            Dr. <strong>Abhilasha Mehta</strong>, with her vast experience in gynecological surgeries, ensures that each open hysterectomy is conducted with precision and personal attention to the patient’s specific medical needs. Her approach prioritizes minimizing recovery time and maximizing patient comfort and health outcomes.
          </p>
        </section>

        {/* Section 4 */}
        <section className="rounded-xl p-4 md:p-8 shadow-lg">
          <p className="text-base md:text-lg font-normal text-gray-800">
            Choose Healing Gloves for an open hysterectomy where Dr. Mehta’s expertise and our caring environment support you through every step of the process. Our commitment is to provide not just medical excellence but also a compassionate recovery journey.
          </p>
        </section>
      </div>
    </>
  );
}
