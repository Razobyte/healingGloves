import banner from '../../../../../public/WOMAN HYGIENE.jpg';
import Form from '../../../form';
import abhilasha from '../../../../../public/abhilasha.png';

export default function WomenHygin() {
  return (
    <>
      {/* Banner Section */}
      <div className="relative w-screen">
        <img src={banner} alt="Women's Hygiene Banner" className="w-full h-auto object-cover shadow-sm" />
        {/* Optional overlay, gradient, and form */}
        {/* <div className="absolute top-1/2 left-10 transform -translate-y-1/2">
          <h1 className="text-4xl md:text-6xl font-bold text-white animate-fade-in-down">
            Women's Hygiene and Care
          </h1>
          <p className="text-sm md:text-lg font-medium text-white mt-4 animate-fade-in-up">
            Extensive Women's Hygiene and Care at Healing Gloves with Dr. Abhilasha Mehta
          </p>
        </div>
        <div className="hidden lg:block absolute top-10 right-10 animate-fade-in">
          <Form />
        </div>
        <div className="absolute inset-x-0 bottom-[-1px] h-20 bg-gradient-to-b from-transparent to-white transform rotate-2"></div> */}
      </div>

      {/* Main Content Section */}
      <div className='w-screen bg-gray-50 py-6'>
        <div className="max-w-5xl mx-auto px-4 md:px-10 py-6">

          {/* Section 1 */}
          <section className="mb-12 rounded-xl p-6 md:p-8 shadow">
            <h2 className="text-xl md:text-2xl font-bold text-blue-900 mb-4">
              Empowering Women with Comprehensive Hygiene and Care at Healing Gloves
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              At Healing Gloves, we understand the importance of women’s hygiene and care in maintaining overall health and well-being. Led by Dr. Abhilasha Mehta, our clinic provides comprehensive services designed to educate and empower women to take proactive steps in their personal health. We ensure that you receive the best care, particularly after childbirth.
            </p>
          </section>

          {/* Section 2 with Image */}
          {/* <section className="mb-12 flex flex-col lg:flex-row items-center rounded-xl p-6 md:p-8 shadow-lg">
            <img src={abhilasha} alt="Dr. Abhilasha Mehta" className="w-full lg:w-1/3 mb-6 lg:mb-0 lg:mr-8 rounded-full shadow-md border-t-4 border-pink-500" />
            <p className="text-base md:text-lg text-gray-700 leading-relaxed lg:w-2/3">
              Dr. Mehta, an expert in maternal health, emphasizes the importance of proper care following delivery to aid recovery, promote healthy bonding, and address any complications. Our post-delivery care includes monitoring maternal physical recovery, providing support for feeding and caring for the newborn, and offering guidance on postpartum health issues like depression or anxiety.
            </p>
          </section> */}

          {/* Section 3 */}
          <section className="mb-12 rounded-xl p-6 md:p-8 shadow-lg">
            <p className="text-base md:text-lg font-normal text-gray-800">
              <b>Women’s hygiene</b> involves more than just routine cleanliness. It encompasses practices related to menstrual health, sexual health, and general bodily care. Dr. Mehta emphasizes the importance of proper hygiene practices and regular medical check-ups to prevent infections, manage health during different life stages, and ensure reproductive health.
            </p>
          </section>

          {/* Section 4 */}
          <section className="mb-12 rounded-xl p-6 md:p-8 shadow-lg">
            <p className="text-base md:text-lg font-normal text-gray-800">
              <b>D&C, or dilation and curettage,</b> is a medical procedure where the cervix is widened, and the lining of the uterus is gently scraped out. It's commonly used to diagnose or treat certain uterine conditions or to clear the uterine lining after a miscarriage. It's typically quick and done under anesthesia.
            </p>
          </section>

          <section className="mb-12 rounded-xl p-6 md:p-8 shadow-lg">
            <p className="text-base md:text-lg font-normal text-gray-800">
              Our services include guidance on menstrual hygiene management, tips for maintaining a healthy vaginal microbiome, and strategies for preventing common infections. Dr. Mehta’s approach is holistic and personalized, ensuring that each woman receives care tailored to her specific needs.
            </p>
          </section>

          <section className="rounded-xl p-6 md:p-8 shadow-lg">
            <p className="text-base md:text-lg font-normal text-gray-800">
              Choose Healing Gloves for expert advice and support in women’s hygiene. Dr. Mehta’s dedication to female health education provides a foundation for women to lead healthier, more confident lives.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
