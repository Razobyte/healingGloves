import banner from '../../../../public/DERMAL FILLAR (1).jpg';
import Form from '../../form';



export default function Filer() {

  return (
    <>
      <div className="relative w-screen ">
        <img src={banner} alt="banner" className="w-full h-auto shaodw-md z-10" />
        {/* <div className="absolute inset-0 gradient-overlay"></div>
        <h1 className='text-7xl font-[700] text-[#fff] absolute top-40 left-10'> Fillers</h1>
        <div className='text-xl font-[500] text-[#fff] absolute top-60 left-10'>
        Rediscover Your Beauty with
        </div>

        <div className="absolute lg:top-10 xxl:top-5 right-40 p-0 w-1/4">
          <Form />
        </div> */}
      </div>
      <div className="max-w-6xl mx-auto sm:p-8 p-4">
      {/* Introduction Section */}
      <section className="sm:mb-10 mb-2 ">
        <p className="sm:text-lg  text-sm leading-relaxed text-gray-700 font-medium">
          As we age, our skin loses volume and elasticity, leading to wrinkles, fine lines, and sagging. 
          Fillers can help address these changes by:
        </p>
      </section>

      {/* Benefits Section */}
      <section className="sm:mb-10  mb-4 sm:p-6 p-2 bg-gray-50 shadow-md rounded-lg">
        <ul className="list-disc list-inside text-gray-800 sm:text-lg text-sm sm:space-y-3 space-y-1  cursor-pointer">
          <li>Smoothing out wrinkles and fine lines</li>
          <li>Adding volume to cheeks and lips</li>
          <li>Filling in deep folds and creases</li>
          <li>Improving the appearance of scars</li>
          <li>Contouring and defining facial features</li>
        </ul>
      </section>

      {/* How Fillers Work Section */}
      <section >
        <p className="sm:text-lg text-sm leading-relaxed text-gray-700">
          Fillers work by adding volume and fullness to areas that have lost their youthful plumpness. 
          This helps to smooth out wrinkles and lines, giving you a refreshed look. The results are subtle 
          and natural-looking, so you still look like yourself, just a more youthful version.
        </p>
      </section>
    </div>

    
    </>
  );
}
