import banner from '../../../../../public/POST DELIVERY CARE-BANNER.jpg';
import Form from '../../../form';
import abhilasha from '../../../../../public/abhilasha.png';

export default function PostDeliveryCare() {
  return (
    <>
      {/* Banner Section */}
      <div className="w-screen relative">
        <img src={banner} alt="banner" className="w-full h-auto object-cover shadow-sm" />
        {/* Optional overlay, gradient, and form */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
        <div className="absolute top-1/2 left-10 transform -translate-y-1/2">
          <h1 className="text-4xl md:text-6xl font-bold text-white animate-fade-in-down">Post-Delivery Care
          </h1>
          <p className="text-sm md:text-lg font-medium text-white mt-4 animate-fade-in-up">
            Thorough Post Delivery Care at Healing Gloves with Dr. Abhilasha Mehta
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
              Comprehensive Post-Delivery Care at Healing Gloves
            </h2>
          </div>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            At Healing Gloves, we understand that the post-delivery period is crucial for new mothers and their babies. That's why we offer comprehensive post-delivery care designed to support and nurture both during this important time. Led by Dr. Abhilasha Mehta, our services ensure that you receive the best care after childbirth.
          </p>
        </section>

        {/* Section 2 with Image */}
        <section className="mb-6 md:mb-12 flex flex-col lg:flex-row items-center rounded-xl p-4 md:p-8 shadow-lg">
          <img src={abhilasha} alt="Dr. Abhilasha Mehta" className="w-full lg:w-1/3 mb-4 lg:mb-0 lg:mr-4 rounded-full shadow-md border-t-4 border-pink-500" />
          <p className="text-base md:text-lg text-gray-700 leading-relaxed lg:w-2/3">
            Dr. Mehta, an expert in maternal health, emphasizes the importance of proper care following delivery to aid recovery, promote healthy bonding, and address any complications. Our post-delivery care includes monitoring maternal physical recovery, providing support for feeding and caring for the newborn, and offering guidance on postpartum health issues like depression or anxiety.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-6 md:mb-12 rounded-xl p-4 md:p-8 shadow-lg">
          <div className="flex items-center mb-4 md:mb-6">
            <p className="text-base md:text-lg font-medium text-gray-800">
              The focus of our care is to ensure that mothers feel supported, informed, and comfortable as they navigate the initial weeks of motherhood. We also provide routine checks and educational resources to empower mothers with the knowledge and confidence they need during the postpartum period.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section className="rounded-xl p-4 md:p-8 shadow-lg">
          <div className="flex items-center mb-4 md:mb-6">
            <p className="text-base md:text-lg font-normal text-gray-800">
              Choose Healing Gloves for a post-delivery experience where your health and well-being are prioritized. Contact us today to learn more about our personalized post-delivery care programs, where Dr. Mehta and our dedicated team are ready to support you every step of the way.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
