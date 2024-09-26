import banner from '../../../../../public/LAPROSCOPY HYSTERCTOMY.jpg';
import Form from '../../../form';
import abhilasha from '../../../../../public/abhilasha.png';

export default function LabroScopic() {
  return (
    <>
      {/* Banner Section */}
      <div className="w-screen relative">
        <img src={banner} alt="banner" className="w-full h-auto object-cover" />
        {/* Optional overlay, gradient, and form */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
        <div className="absolute top-1/2 left-10 transform -translate-y-1/2">
          <h1 className="text-4xl md:text-6xl font-bold text-white animate-fade-in-down">Advanced Laparoscopic Hysterectomy
          </h1>
          <p className="text-sm md:text-lg font-medium text-white mt-4 animate-fade-in-up">
            Minimally Invasive Surgery at Healing Gloves with Dr. Abhilasha Mehta
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
              Advanced Laparoscopic Hysterectomy at Healing Gloves
            </h2>
          </div>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            At Healing Gloves, we offer laparoscopic hysterectomy, a minimally invasive surgical procedure that provides an effective solution for women needing a hysterectomy. Led by Dr. Abhilasha Mehta, our approach minimizes discomfort and speeds recovery, allowing patients to resume their daily lives more quickly.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-6 md:mb-12 rounded-xl p-4 md:p-8 shadow-lg">
          <div className="flex items-center mb-4 md:mb-6">
            <p className="text-base md:text-lg font-normal text-gray-800">
              A <strong>laparoscopic hysterectomy</strong> involves removing the uterus through small incisions in the abdomen, using specialized instruments and a camera for guidance. This technique is beneficial for treating conditions like uterine fibroids, endometriosis, or abnormal bleeding, which might not respond to other treatments.
            </p>
          </div>
        </section>

        {/* Section 3 with Image */}
        <section className="mb-6 md:mb-12 flex flex-col lg:flex-row items-center rounded-xl p-4 md:p-8 shadow-lg">
          <img src={abhilasha} alt="Dr. Abhilasha Mehta" className="w-full lg:w-1/3 mb-4 lg:mb-0 lg:mr-4 rounded-full shadow-md border-t-4 border-pink-500" />
          <p className="text-base md:text-lg text-gray-700 leading-relaxed lg:w-2/3">
            Dr. Abhilasha Mehta, an expert in minimally invasive gynecological surgery, brings precision and compassionate care to each procedure. Her extensive experience ensures that each patient receives the best possible outcomes with reduced surgical risks and less postoperative pain.
          </p>
        </section>

        {/* Section 4 */}
        <section className="rounded-xl p-4 md:p-8 shadow-lg">
          <div className="flex items-center mb-4 md:mb-6">
            <p className="text-base md:text-lg font-normal text-gray-800">
              Choose Healing Gloves for your laparoscopic hysterectomy where patient safety, comfort, and recovery are our top priorities. Dr. Mehta’s expertise in advanced surgical techniques offers a smoother, less invasive treatment alternative, ensuring you receive the highest standard of care.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
