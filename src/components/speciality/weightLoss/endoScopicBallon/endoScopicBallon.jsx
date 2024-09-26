import banner from '../../../../../public/ENDODCOPIC BALLOM TREATMENT.jpg';
import Form from '../../../form';
import consult from '../../../../../public/doctors3.png';

export default function EndoscopicBalloon() {
  return (
    <>
      {/* Banner Section */}
      <div className="relative w-screen">
        <img src={banner} alt="Endoscopic Balloon Banner" className="w-full h-auto object-cover" />

      </div>

      {/* Introduction Section */}
      <div className="w-screen sm:py-8  py-4 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-base md:text-lg lg:text-xl font-normal text-gray-700">
            At Healing Gloves, we offer a safe and effective way to help you lose weight without surgery. One of our top methods is the endoscopic balloon, a simple procedure that helps you feel full faster and eat less.
          </p>
        </div>
      </div>

      {/* Endoscopic Balloon Explanation */}
      <div className="bg-white sm:py-8  py-4 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-4 text-center">What is Endoscopic Balloon?</h2>
          <p className="text-sm md:text-lg lg:text-xl font-normal text-gray-700 mb-4 text-center">
            The endoscopic balloon is a small balloon that is placed in your stomach to help you lose weight. Here’s how it works:
          </p>
          <ul className="list-disc list-inside sm:space-y-4 space-y-1 text-sm md:text-lg lg:text-xl text-gray-700 mx-auto max-w-md">
            <li>A thin tube called an endoscope is used to insert the deflated balloon into your stomach through your mouth.</li>
            <li>Once inside, the balloon is filled with saline, taking up space in your stomach.</li>
            <li>With the balloon in place, you will feel full faster, so you eat smaller portions and lose weight more easily.</li>
            <li>The balloon is temporary and usually stays in your stomach for six months. After that, it is removed, giving you time to develop healthier eating habits.</li>
          </ul>
        </div>
      </div>

      {/* Expertise Section */}
      <div className="bg-white rounded-lg sm:py-8 px-4 md:px-8 sm:mb-12 mb-4 ">
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
