import banner from '../../../../../public/ALLURION INNOVATIVE.jpg';
import Form from '../../../form';
import consult from '../../../../../public/doctors3.png';

export default function Allurion() {
  return (
    <>
      {/* Banner Section */}
      <div className="relative w-screen">
        <img src={banner} alt="Allurion Banner" className="w-full h-auto object-cover" />
        {/* Uncomment and use this if you want the overlay and text as in the EndoscopicBalloon component */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent"></div>
        <div className="absolute inset-0 flex flex-col lg:flex-row items-center justify-between px-10 lg:px-20">
          <h1 className="text-7xl font-bold text-[#fff] absolute left-10">Allurion</h1>
          <div className="text-xl font-medium text-[#fff] absolute top-80 left-10">
            Innovative Weight Loss with Allurion Balloon
          </div>
        </div>
        <div className="absolute lg:top-10 xxl:top-5 right-40 p-0 w-1/4">
          <Form />
        </div> */}
      </div>

      {/* Introduction Section */}
      <div className="w-screen py-4 sm:py-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm md:text-lg lg:text-xl font-normal text-gray-700">
            At Healing Gloves, we provide a simple and effective way to help you lose weight without surgery. The Allurion Balloon is a cutting-edge weight loss solution that helps you feel full faster, so you eat less and lose weight more easily.
          </p>
        </div>
      </div>

      {/* Allurion Balloon Explanation */}
      <div className="bg-white py-4 sm:py-8 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl md:text-3xl font-semibold text-blue-900 mb-4 text-center">What is Allurion Balloon?</h2>
          <p className="text-sm md:text-lg lg:text-xl font-normal text-gray-700 mb-4 text-center">
            The Allurion Balloon is a swallowable balloon that helps you lose weight. Here’s how it works:
          </p>
          <ul className="list-disc list-inside sm:space-y-4 space-y-1 text-sm md:text-lg lg:text-xl text-gray-700 mx-auto">
            <li>You swallow the balloon in a capsule form during a simple outpatient visit.</li>
            <li>Once the capsule reaches your stomach, it inflates, taking up space and making you feel full.</li>
            <li>Over the next 16 weeks, the balloon helps you eat smaller portions and reduce your weight.</li>
            <li>After 16 weeks, the balloon naturally deflates and passes out of your body, making the process easy and hassle-free.</li>
          </ul>
        </div>
      </div>
      {/* Expertise Section */}
      <div className="bg-white rounded-lg py-4 sm:py-8 px-4 md:px-8 sm:mb-12">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-center">
          <img src={consult} alt="Dr. Shambhav Chandra" className="w-full lg:w-1/3 rounded-lg mb-6 lg:mb-0 lg:mr-8 object-cover" />
          <div className="flex flex-col justify-center text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-blue-900 mb-4 underline">
              Dr. Shambhav Chandra’s Expertise
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-6">
              At Healing Gloves, you will be under the expert care of Dr. Shambhav Chandra. Dr. Shambhav is a highly experienced general surgeon specializing in weight loss treatments. He is dedicated to helping you achieve your weight loss goals with personalized and compassionate care. With his expertise, you can be confident that you are receiving the highest quality treatment tailored to your needs.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
