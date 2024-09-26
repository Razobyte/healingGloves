import banner from '../../../../public/PRP THERPY-BAnne.jpg';
import Form from '../../form';



export default function Filer() {

  return (
    <>
      <div className="relative w-screen">
        <img src={banner} alt="Prostate Health Banner" className="w-full h-auto  shadow-sm object-cover" />
       
      </div>
      <div className="max-w-5xl mx-auto sm:p-8 p-4">
      {/* Introduction Section */}
      <section className="sm:mb-10 mb-4">
        <p className="sm:text-lg text-sm  leading-relaxed text-gray-700 font-medium">
        Platelet-Rich Plasma (PRP) Therapy is an innovative treatment that harnesses the healing power of your own blood to stimulate hair growth, and promote overall healing. By using concentrated platelets from your blood, PRP Therapy accelerates the body’s natural healing processes, offering a versatile solution for various aesthetic and medical concerns.

        </p>
      </section>

      {/* Benefits Section */}
      <section className="sm:mb-10 sm:p-6 p-3 bg-gray-50 shadow-md rounded-lg mb-4">
        <h3 className='text-blue-900 xxl:text-3xl xl:text-3xl lg:text-2xl md:text-xl text-lg font-bold sm:mb-4 mb-2'>Benefits of PRP Therapy
        </h3>
        <ul className="list-disc list-inside text-gray-800 sm:text-lg text-sm  sm:space-y-3 space-y-1 cursor-pointer">
          <li>Skin Rejuvenation

          </li>
          <li>Hair Restoration
          </li>
          <li>Scar Improvement</li>
          <li>Minimal Downtime</li>
          <li>Natural Results</li>

        </ul>
      </section>

      {/* How Fillers Work Section */}
      <section >
        <p className="sm:text-lg text-base leading-relaxed text-gray-700">
        PRP is derived from the patient's own blood, which is processed to concentrate the platelets and growth factors. These components are then injected into the targeted areas, where they work to accelerate healing and regeneration.


        </p>
      </section>
    </div>

    
    </>
  );
}
