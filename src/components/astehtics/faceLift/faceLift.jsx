import banner from '../../../../public/face lift-banner.jpg';
import Form from '../../form';



export default function Filer() {

  return (
    <>
      <div className="relative w-screen ">
        <img src={banner} alt="banner" className="w-full h-auto shaodw-md z-10" />
        {/* <div className="absolute inset-0 gradient-overlay"></div>
        <h1 className='text-7xl font-[700] text-[#fff] absolute top-40 left-10'>Facelift</h1>
        <div className='text-xl font-[500] text-[#fff] absolute top-60 left-10'>
        Rejuvenate Your Appearance at Healing Gloves with Dr. Manisha Devi
        </div>

        <div className="absolute lg:top-10 xxl:top-5 right-40 p-0 w-1/4">
          <Form />
        </div> */}
      </div>
      <div className="max-w-6xl mx-auto sm:p-8 p-4">
      {/* Introduction Section */}
      <section className="sm:mb-10 mb-4 ">
        <p className="sm:text-lg text-sm leading-relaxed text-gray-700 font-medium">
        Due to a decrease in the production of collagen and elastin, essential proteins that maintain the skin's structure and youthful appearance, our skin naturally loses elasticity and firmness, resulting in wrinkles, fine lines, and sagging.  Environmental factors such as sun exposure and lifestyle choices can accelerate these changes, making the signs of aging more prominent. A facelift, or rhytidectomy, is a surgical procedure designed to address these issues by tightening and lifting the facial tissues. 
        </p>
      </section>

      {/* Benefits Section */}
      <section className="sm:mb-10 mb-4 sm:p-6 p-3 bg-gray-50 shadow-md rounded-lg">
        <h3 className='text-blue-900 xxl:text-3xl xl:text-3xl lg:text-2xl md:text-xl text-lg font-bold sm:mb-4 mb-2'>Benefits of a Facelift
        </h3>
        <ul className="list-disc list-inside text-gray-800 sm:text-lg text-sm sm:space-y-3 space-y-1 cursor-pointer">
          <li>Reduction of Wrinkles and Fine Lines
          </li>
          <li>Lifting Sagging Skin
          </li>
          <li>Enhancing Facial Contours</li>
          <li>Natural-Looking Results</li>
          <li>Long-Lasting Effects</li>
        </ul>
      </section>

      {/* How Fillers Work Section */}
      <section >
        <p className="sm:text-lg text-base leading-relaxed text-gray-700">
        It's important to note that a facelift can be customized to address specific areas of concern, whether it's the midface, lower face, or neck. Dr. Manisha, a skilled maxillofacial surgeon, ensures that each procedure is tailored to the individual's unique facial structure and aesthetic goals.


        </p>
      </section>
    </div>

    
    </>
  );
}
