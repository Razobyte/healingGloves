import banner from '../../../../../public/C-SECTION LSCS DELIVERY.jpg';
import Form from '../../../form';
import abhilasha from '../../../../../public/abhilasha.png';

export default function CSectionLSCS() {
  return (
    <>
      {/* Banner Section */}
      <div className="w-screen relative">
        <img src={banner} alt="banner" className="w-full h-auto object-cover shadow-sm" />
        {/* Optional overlay, gradient, and form */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
        <div className="absolute top-1/2 left-10 transform -translate-y-1/2">
          <h1 className="text-4xl md:text-6xl font-bold text-white animate-fade-in-down">C-Section/LSCS Delivery
          </h1>
          <p className="text-sm md:text-lg font-medium text-white mt-4 animate-fade-in-up">
            Safe C-Section/LSCS Delivery at Healing Gloves with Dr. Abhilasha Mehta
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
              Safe and Specialized C-Section Care at Healing Gloves
            </h2>
          </div>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            At Healing Gloves, we provide expert care for mothers needing a Cesarean section (C-section), specifically through the Lower Segment Cesarean Section (LSCS) approach. This surgical method involves making a horizontal cut in the lower part of the uterus, which is safer and heals more efficiently than other types.
          </p>
        </section>

        {/* Section 2 with Image */}
        <section className="mb-6 md:mb-12 flex flex-col lg:flex-row items-center rounded-xl p-4 md:p-8 shadow-lg">
          <img src={abhilasha} alt="Dr. Abhilasha Mehta" className="w-full lg:w-1/3 mb-4 lg:mb-0 lg:mr-4 rounded-full shadow-md border-t-4 border-pink-500" />
          <p className="text-base md:text-lg text-gray-700 leading-relaxed lg:w-2/3">
            Dr. Abhilasha Mehta, a seasoned obstetrician, specializes in LSCS, offering a safer alternative for childbirth when natural delivery isn't advisable. Reasons for opting for a C-section include prolonged labor, fetal distress, or health concerns for the mother like hypertension or diabetes.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-6 md:mb-12 rounded-xl p-4 md:p-8 shadow-lg">
          <div className="flex items-center mb-4 md:mb-6">
            <p className="text-base md:text-lg font-medium text-gray-800">
              Our LSCS services focus on ensuring the well-being of both mother and baby. Dr. Mehta’s expertise in this precise procedure minimizes complications and promotes quicker recovery, allowing new mothers to embrace motherhood with confidence and comfort.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section className="rounded-xl p-4 md:p-8 shadow-lg">
          <div className="flex items-center mb-4 md:mb-6">
            <p className="text-base md:text-lg font-normal text-gray-800">
              Opt for Healing Gloves for your delivery needs where Dr. Mehta’s skilled hands and compassionate care guide you through a safe and personalized birthing experience. Contact us to learn more about our C-section services and how we can support you during this special time.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
