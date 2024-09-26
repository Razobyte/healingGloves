import banner from '../../../../public/hair trnsprent.jpg';
import Form from '../../form';



export default function Filer() {

  return (
    <>
      <div className="relative w-screen ">
        <img src={banner} alt="banner" className="w-full h-auto shaodw-md z-10" />
        {/* <div className="absolute inset-0 gradient-overlay"></div>
        <h1 className='text-7xl font-[700] text-[#fff] absolute top-40 left-10'>Hair Transplant</h1>
        <div className='text-xl font-[500] text-[#fff] absolute top-60 left-10'>
        Restore Your Confidence at Healing Gloves with Dr. Manisha Devi

        </div>

        <div className="absolute lg:top-10 xxl:top-5 right-40 p-0 w-1/4">
          <Form />
        </div> */}
      </div>
      <div className="max-w-6xl mx-auto sm:p-8 p-4">
      {/* Introduction Section */}
      <section className="sm:mb-10 mb-4 ">
        <p className="sm:text-lg text-sm  leading-relaxed text-gray-700 font-medium">
        Hair loss can significantly impact one's confidence and self-esteem. Various factors contribute to hair loss, including genetics, hormonal changes, medical conditions, and lifestyle choices. Hair transplant surgery is a proven and effective solution for restoring hair in areas of thinning or baldness.

        </p>
      </section>

      {/* Benefits Section */}
      <section className="sm:mb-10 mb-4 sm:p-6 p-3 bg-gray-50 shadow-md rounded-lg">
        <h3 className='text-blue-900 xxl:text-3xl xl:text-3xl lg:text-2xl md:text-xl text-lg font-bold sm:mb-4 mb-2'>Benefits of Hair Transplant
        </h3>
        <ul className="list-disc list-inside text-gray-800 sm:text-lg  text-sm sm:space-y-3 space-y-1 cursor-pointer">
          <li>Natural Hair Growth

          </li>
          <li>Permanent Solution
          </li>
          <li>Improved Appearance</li>
          <li>Minimal Downtime</li>

        </ul>
      </section>

      {/* How Fillers Work Section */}
      <section >
        <p className="sm:text-lg  text-base leading-relaxed text-gray-700">
        Modern hair transplant techniques ensure minimal scarring and a quicker recovery time. By addressing hair loss comprehensively, hair transplant surgery can significantly enhance an individual's overall appearance and confidence.


        </p>
      </section>
    </div>

    
    </>
  );
}
