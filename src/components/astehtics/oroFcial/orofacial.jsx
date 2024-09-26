import banner from '../../../../public/OROFACIAL SURGERY.jpg';
import Form from '../../form';



export default function Filer() {

  return (
    <>
      <div className="w-screen ">
        <img src={banner} alt="banner" className="w-full h-auto shaodw-sm z-10" />
        {/* <div className="absolute inset-0 gradient-overlay"></div>
        <h1 className='text-7xl font-[700] text-[#fff] absolute top-40 left-10'>Orofacial Surgery</h1>
        <div className='text-xl font-[500] text-[#fff] absolute top-60 left-10'>
        Enhance Function and Aesthetics at Healing Gloves<br/> with Dr. Manisha Devi
        </div>

        <div className="absolute lg:top-10 xxl:top-5 right-40 p-0 w-1/4">
          <Form />
        </div> */}
      </div>
      <div className="max-w-6xl mx-auto sm:p-8 p-3">
        {/* Introduction Section */}
        <section className="sm:mb-10 mb-4 ">
          <p className="sm:text-lg text-sm  leading-relaxed text-gray-700 font-medium">
            This specialized field addresses both functional and aesthetic concerns, providing solutions for patients with congenital anomalies, trauma-related injuries, or chronic conditions. Orofacial surgery encompasses a wide range of procedures aimed at treating conditions affecting the mouth, jaws, and face.


          </p>
        </section>

        {/* Benefits Section */}
        <section className="sm:mb-10 mb-4  sm:p-6 p-3 bg-gray-50 shadow-md rounded-lg">
          <h3 className='text-blue-900 xxl:text-3xl xl:text-3xl lg:text-2xl md:text-xl text-lg font-bold sm:mb-4 mb-2'>Benefits of Orofacial Surgery
          </h3>
          <ul className="list-disc list-inside text-gray-800 sm:text-lg text-sm space-y-1 sm:space-y-3 cursor-pointer">
            <li>Functional Improvement


            </li>
            <li>Aesthetic Enhancement
            </li>
            <li>Pain Relief</li>
            <li>Improved Self-Confidence</li>
            <li>Comprehensive Solutions</li>

          </ul>
        </section>

        {/* How Fillers Work Section */}
        <section >
          <p className="sm:text-lg text-base leading-relaxed text-gray-700">
            Common orofacial procedures include corrective jaw surgery, treatment of temporomandibular joint (TMJ) disorders, facial reconstruction, and cosmetic enhancements. By improving the function and appearance of the orofacial region, these surgeries can significantly enhance a patient's quality of life.
          </p>
        </section>
      </div>


    </>
  );
}
