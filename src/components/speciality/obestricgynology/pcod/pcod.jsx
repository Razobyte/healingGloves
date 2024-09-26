import banner from '../../../../../public/PCOD TREATMENT-banner.jpg';
import Form from '../../../form';
import abhilasha from '../../../../../public/abhilasha.png';

export default function PcodTreatment() {
  return (
    <>
      {/* Banner Section */}
      <div className="w-screen relative">
        <img src={banner} alt="PCOD Treatment Banner" className="w-full h-auto object-cover shadow-sm" />
        {/* Optional overlay, gradient, and form */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
        <div className="absolute top-1/2 left-10 transform -translate-y-1/2">
          <h1 className="text-4xl md:text-6xl font-bold text-white animate-fade-in-down">PCOD Treatment</h1>
          <p className="text-sm md:text-lg font-medium text-white mt-4 animate-fade-in-up">
            Effective PCOD Treatment at Healing Gloves with Dr. Abhilasha Mehta
          </p>
        </div>
        <div className="hidden lg:block absolute top-10 right-10 animate-fade-in">
          <Form />
        </div>
        <div className="absolute inset-x-0 bottom-[-1px] h-20 bg-gradient-to-b from-transparent to-white transform rotate-2"></div> */}
      </div>

      {/* Main Content Section */}
      <div className="max-w-5xl mx-auto px-4 py-6 md:py-12">
        {/* Section 1 */}
        <section className="mb-6 md:mb-12 rounded-xl p-4 md:p-8 shadow">
          <h2 className="text-xl md:text-2xl font-bold text-blue-900 mb-4">
            Comprehensive PCOD Treatment at Healing Gloves
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            At Healing Gloves, we offer a personalized approach to managing Polycystic Ovarian Disease (PCOD), under the expert guidance of Dr. Abhilasha Mehta. PCOD is a common hormonal disorder that can affect women's reproductive health, leading to irregular menstrual cycles, fertility issues, and other metabolic complications.
          </p>
        </section>

        {/* Section 2 with Image */}
        <section className="mb-6 md:mb-12 flex flex-col lg:flex-row items-center rounded-xl p-4 md:p-8 shadow-lg">
          <img src={abhilasha} alt="Dr. Abhilasha Mehta" className="w-full lg:w-1/3 mb-4 lg:mb-0 lg:mr-6 rounded-full shadow-md border-t-4 border-pink-500" />
          <p className="text-base md:text-lg text-gray-700 leading-relaxed lg:w-2/3">
            Dr. Mehta specializes in diagnosing and treating PCOD with a combination of lifestyle modifications, medication, and holistic care. Her approach focuses on addressing the root causes of PCOD, such as insulin resistance and hormonal imbalances, to effectively manage symptoms and restore hormonal health.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-6 md:mb-12 rounded-xl p-4 md:p-8 shadow-lg">
          <p className="text-base md:text-lg font-medium text-gray-800">
            Our treatment plans are tailored to each patient's specific needs, encompassing dietary advice, exercise routines, and medical therapies that are proven to help manage PCOD. Dr. Mehta’s extensive experience in women’s health ensures that you receive compassionate and effective care aimed at improving your overall well-being.
          </p>
        </section>

        {/* Section 4 */}
        <section className="rounded-xl p-4 md:p-8 shadow-lg">
          <p className="text-base md:text-lg font-normal text-gray-800">
            Choose Healing Gloves for your PCOD treatment where Dr. Mehta’s expertise and a caring approach help you regain control over your health. We are committed to supporting you through your journey to better hormonal balance and improved reproductive health.
          </p>
        </section>
      </div>
    </>
  );
}
