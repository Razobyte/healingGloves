import banner from '../../../../../public/OVARIAN CYST.jpg';
import Form from '../../../form';

export default function OvarianCystSurgery() {
  return (
    <>
      {/* Banner Section */}
      <div className="w-screen relative">
        <img src={banner} alt="Ovarian Cyst Surgery" className="w-full h-auto object-cover shadow-sm" />
        {/* Optional overlay, gradient, and form */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
        <div className="absolute top-1/2 left-10 transform -translate-y-1/2">
          <h1 className="text-4xl md:text-6xl font-bold text-white animate-fade-in-down">Ovarian Cyst Surgery
          </h1>
          <p className="text-sm md:text-lg font-medium text-white mt-4 animate-fade-in-up">
            Skilled Ovarian Cyst Surgery at Healing Gloves with Dr. Abhilasha Mehta
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
              Expert Ovarian Cyst Surgery at Healing Gloves
            </h2>
          </div>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            At Healing Gloves, we offer specialized ovarian cyst surgery to effectively treat and manage ovarian cysts, ensuring optimal reproductive health. Led by Dr. Abhilasha Mehta, our approach utilizes the latest minimally invasive techniques to enhance recovery and minimize discomfort.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-6 md:mb-12 rounded-xl p-4 md:p-8 shadow-lg">
          <div className="flex items-center mb-4 md:mb-6">
            <p className="text-base md:text-lg font-normal text-gray-800">
              <strong>Ovarian</strong> cysts are fluid-filled sacs on the ovaries that can cause pain, swelling, and complications like torsion or rupture. While many cysts resolve on their own, surgery may be necessary for persistent, large, or symptomatic cysts. Dr. Mehta, with her extensive expertise in gynecological surgery, excels in performing surgeries that require precision and care.
            </p>
          </div>
        </section>

        {/* Section 3 with Image */}
        {/* <section className="mb-6 md:mb-12 flex flex-col lg:flex-row items-center rounded-xl p-4 md:p-8 shadow-lg">
          <img src={abhilasha} alt="Dr. Abhilasha Mehta" className="w-full lg:w-1/3 mb-4 lg:mb-0 lg:mr-4 rounded-full shadow-md border-t-4 border-pink-500" />
          <p className="text-base md:text-lg text-gray-700 leading-relaxed lg:w-2/3">
            Dr. Abhilasha Mehta, an expert in minimally invasive gynecological surgery, brings precision and compassionate care to each procedure. Her extensive experience ensures that each patient receives the best possible outcomes with reduced surgical risks and less postoperative pain.
          </p>
        </section> */}

        {/* Section 4 */}
        <section className="mb-6 md:mb-12 rounded-xl p-4 md:p-8 shadow-lg">
          <div className="flex items-center mb-4 md:mb-6">
            <p className="text-base md:text-lg font-normal text-gray-800">
              Our minimally invasive surgeries, including laparoscopy, allow for small incisions, reducing recovery time and post-surgical pain. Dr. Mehta's skilled approach ensures that the procedure is as non-intrusive as possible, focusing on preserving ovarian health and function.
            </p>
          </div>
        </section>

        {/* Section 5 */}
        <section className="rounded-xl p-4 md:p-8 shadow-lg">
          <div className="flex items-center mb-4 md:mb-6">
            <p className="text-base md:text-lg font-normal text-gray-800">
              Choose Healing Gloves for your ovarian cyst surgery where Dr. Abhilasha Mehta’s expert care and advanced surgical techniques come together to provide a supportive and healing environment. Our team is dedicated to ensuring you receive the best possible care and support throughout your treatment.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
