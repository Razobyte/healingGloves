import banner from '../../../../../public/BARIATRIC SURGERY.jpg';
import Form from '../../../form';
import consult from '../../../../../public/doctors3.png';


export default function Bariatric() {

  return (
    <>
      <div className="relative w-screen ">
        <img src={banner} alt="banner" className="w-full h-auto shadow-sm z-10" />
        {/* <h1 className="text-6xl font-[700] text-[#2a3986] absolute top-40 left-10">
          Bariatric Surgery
        </h1>
        <div className="text-xl font-[500] text-[#474747] absolute top-60 left-10">
          Transformative Bariatric Surgery at <br/>Healing Gloves
        </div>

        <div className="absolute lg:top-10 xxl:top-5 right-40 p-0 w-1/4">
          <Form />
        </div> */}
      </div>
      <div className="w-screen flex justify-center items-center sm:py-8 py-4 ">
        <div className="max-w-6xl flex flex-col items-center px-4">
          <div className="lg:text-lg text-sm font-normal text-[#474747]  sm:pb-8">
            <p>
              At Healing Gloves, we offer bariatric surgery to help you achieve significant and lasting weight loss. This surgical option is ideal for those struggling with severe obesity when other methods haven't worked. Bariatric surgery can greatly improve your health and quality of life.


            </p>
          </div>

          <div className="bg-white  max-w-5xl w-full">
            <h2 className="text-xl md:text-3xl font-semibold text-blue-900 sm:mb-4 mb-1 text-center">Bariatric Surgery?
            </h2>
            <p className="lg:text-lg text-base font-normal text-[#474747] mb-4">
              TBariatric surgery involves different procedures that change your digestive system to help you lose weight. Here are the common types


            </p>
            <ul className="list-disc list-inside mb-4 sm:text-lg text-sm  text-[#474747] sm:space-y-4 space-y-2">
              <li> <b>Gastric Bypass - </b> This surgery reduces the size of your stomach and reroutes part of your small intestine. This limits how much you can eat and reduces the number of calories your body absorbs.

              </li>
              <li> <b>Sleeve Gastrectomy - </b>In this procedure, a large part of your stomach is removed, leaving a small, banana-shaped section. This helps you feel full faster and eat less.</li>


              <li> <b>Adjustable Gastric Banding - </b>A band is placed around the upper part of your stomach to create a small pouch. This limits how much you can eat at one time.</li>
              <li><b>Biliopancreatic Diversion with Duodenal Switch (BPD/DS) - </b>This complex surgery reduces the size of your stomach and reroutes the intestines. It’s highly effective for weight loss.

              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg  sm:p-8 sm:mb-12  mb-4 w-full flex justify-center">
        <div className='max-w-6xl'>
          <h2 className='text-xl md:text-3xl font-semibold text-blue-900 sm:mb-4 text-center underline'>Dr. Shambhav Chandra’s Expertise</h2>
          <div className="flex flex-col lg:flex-row">
            <img src={consult} alt="Dr. Shambhav Chandra" className="w-full lg:w-1/3 rounded-lg sm:mb-6 lg:mb-0 lg:mr-8" />
            <div className="flex flex-col justify-center">
              <p className='sm:text-lg  text-sm  text-gray-700 sm:mb-6 sm:px-0 px-5 '>
                At Healing Gloves, you will be in the expert hands of Dr. Shambhav Chandra. Dr. Shambhav is a highly experienced general surgeon specializing in weight loss surgeries. He is committed to providing personalized and compassionate care, ensuring you receive the highest quality treatment tailored to your needs.

              </p>
              <div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
