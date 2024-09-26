import banner from '../../../../public/RF REJUVENTION.jpg';
import Form from '../../form';



export default function Filer() {

  return (
    <>
      <div className="relative w-screen ">
        <img src={banner} alt="banner" className="w-full h-auto shaodw-sm z-10" />
        {/* <div className="absolute inset-0 gradient-overlay"></div>
        <h1 className='text-7xl font-[700] text-[#fff] absolute top-40 left-10'>RF Rejuvenation</h1>
        <div className='text-xl font-[500] text-[#fff] absolute top-60 left-10'>
        Revitalize Your Skin at Healing Gloves with Dr. Manisha Devi
        </div>

        <div className="absolute lg:top-10 xxl:top-5 right-40 p-0 w-1/4">
          <Form />
        </div> */}
      </div>
      <div className="max-w-6xl mx-auto sm:p-8 p-5">
        {/* Introduction Section */}
        <section className="sm:mb-10 mb-5 ">
          <p className="sm:text-lg  text-sm leading-relaxed text-gray-700 font-medium">
            As we grow older, our skin undergoes various changes, including the formation of wrinkles, fine lines, and a loss of elasticity. These changes occur due to a decline in collagen and elastin production, the essential components that keep our skin firm and youthful.
          </p>
        </section>

        {/* Benefits Section */}
        <section className="sm:mb-10 mb-5  sm:p-6 p-3 bg-gray-50 shadow-md rounded-lg">
          <h3 className='text-blue-900 xxl:text-3xl xl:text-3xl lg:text-2xl md:text-xl text-lg font-bold sm:mb-4 mb-2'>Benefits of RF Rejuvenation:
          </h3>
          <ul className="list-disc list-inside text-gray-800 sm:text-lg text-sm sm:space-y-3 space-y-1 cursor-pointer">
            <li>Reducing Wrinkles and Fine Lines.
            </li>
            <li>Tightening Loose Skin
            </li>
            <li>Enhancing Skin Texture and Tone</li>
            <li>Minimizing Pores</li>
            <li>Revitalizing Dull Skin</li>
          </ul>
        </section>

        {/* How Fillers Work Section */}
        <section >
          <p className="sm:text-lg text-base leading-relaxed text-gray-700">
            RF Rejuvenation, or Radiofrequency Rejuvenation, is an advanced treatment designed to combat these signs of aging. This non-invasive procedure uses radiofrequency energy to gently heat the deeper layers of the skin, stimulating collagen production and promoting skin tightening.
          </p>
        </section>
      </div>


    </>
  );
}
