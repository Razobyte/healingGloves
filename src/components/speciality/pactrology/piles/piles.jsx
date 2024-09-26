
import banner from '../../../../../public/proctologybanner.png'
import Form from '../../../form';
import { FaArrowRight } from 'react-icons/fa6';
import consult from '../../../../../public/consultdoctor.jpg'
import PilesTreatment from './dO';

export default function Piles() {
  const symptoms = [
    'Pain or discomfort during bowel movements',
    'Itching or irritation in the anal region',
    'Swelling or lumps around the anus',
    'Bleeding during bowel movements',
    'Mucus discharge after passing stool',
  ];
  const causesOfPiles = [
    "Straining during bowel movements can cause hemorrhoids.",
    "Chronic constipation or diarrhea can lead to the development of hemorrhoids.",
    "Sitting for long periods increases the risk of hemorrhoids.",
    "A low-fiber diet can contribute to hemorrhoids.",
    "Obesity puts extra pressure on the rectal veins, leading to hemorrhoids.",
    "Pregnancy increases the likelihood of developing hemorrhoids.",
    "Heavy lifting can strain the rectal veins and cause hemorrhoids.",
    "Aging weakens the tissues supporting the rectal veins, leading to hemorrhoids.",
    "A family history of hemorrhoids increases the risk of developing them."
  ];

  const reasons = [
    'Best Diagnosis and Assessment - This is an initial consultation that includes a detailed medical history, physical examination, and necessary diagnostic tests to confirm the condition.',
    'Natural Recommendations- High-fiber foods, stool softeners, topical treatments, increased water intake, and exercise are recommended.',
    'Minimally Invasive Procedures- Rubber band ligation, sclerotherapy injections, and infrared coagulation are used to treat hemorrhoids.',
    'Surgical Interventions- Hemorrhoidectomy for large piles, stapled hemorrhoidopexy, laser hemorrhoidopexy, DGHAL, FGHAL to secure hemorrhoids, and post-operative care with follow-up consultations.',
  ];
  return (
    <>
      <div className="relative w-screen ">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-black opacity-50"></div>
        <img src={banner} alt="banner" className="w-full h-auto shaodw-md z-10" />

        <h1 className='xxl:text-7xl xl:text-7xl lg:text-6xl md:text-5xl text-xl font-[700] text-[#fff] absolute xl:top-40  xxl:top-40  lg:top-36 md:top-40 top-6 sm:left-10 left-5'>PILES</h1>
        <div className='sm:text-base text-xs font-[500] text-[#fff] absolute xxl:top-60 xl:top-60 lg:top-56 md:top-60 top-14 sm:left-10 left-5'>Precision care for a comfortable tomorrow.
          <br />   Expert solutions for every proctological need.</div>


      </div>
      <div className='w-screen flex justify-center items-center sm:py-8 py-4'>
        <div className='max-w-6xl flex justify-center items-center flex-col'>
          <div className='sm:px-o px-5'>
            <h4 className='xxl:text-3xl xl:text-3xl lg:text-2xl text-lg font-bold text-[#474747] text-left sm:pb-4 pb-1 underline'>Piles - Understanding the Condition
            </h4>
            <p className='sm:text-base text-xs font-regular text-[#474747] text-left'>
              Hemorrhoids, also referred to as piles, are vascular structures in the anal canal that become swollen and inflamed, leading to discomfort and potential rectal bleeding. These can be classified as internal hemorrhoids, occurring within the rectum, or external hemorrhoids, located subcutaneously around the anus. At Healing Gloves in Gurgaon and Sohna, our esteemed proctology specialist, Dr. Shambhav Chandra, is committed to providing comprehensive and specialized care for patients afflicted with this condition. Utilizing his extensive expertise and empathetic approach, Dr. Chandra formulates individualized treatment protocols designed to alleviate symptoms and address the underlying etiologies of hemorrhoids, thereby ensuring optimal recovery and patient comfort.
            </p>
          </div>
        </div>
      </div>
      <div className='w-screen flex flex-col justify-center items-center sm:pb-5 pb-2 '>
        <div className='max-w-6xl flex flex-col justify-center items-center'>
          <div className='flex flex-col md:flex-row sm:gap-8 gap-2 w-full '>
            <div className='flex-1 bg-blue-50 rounded-lg sm:shadow-lg shadow-sm p-4'>
              <h2 className='xxl:text-2xl xl:text-2xl lg:text-xl text-lg text-[#474747] font-semibold sm:mb-4 mb-2  text-center'>
                Symptoms of Piles</h2>
              <ul className='list-disc list-inside sm:space-y-3 space-y-1'>
                {symptoms.map((symptom, index) => (
                  <li key={index} className='text-pink-600 sm:text-[15px] text-xs font-medium  sm:py-2 '>{symptom}</li>
                ))}
              </ul>
            </div>
            {/* Causes Section */}
            <div className='flex-1 bg-white rounded-lg sm:p-4 p-2 sm:shadow-lg shadow-sm '>
              <h2 className='xxl:text-2xl xl:text-2xl text-lg text-[#474747] font-semibold sm:mb-4 
         mb-2 text-center'>Causes of Piles</h2>
              <ul className='list-disc list-inside sm:space-y-3 space-y-1 sm:px-0 px-5'>
                {causesOfPiles.map((cause, index) => (
                  <li key={index} className='text-pink-600 sm:text-[15px] text-xs font-medium'>{cause}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='w-screen flex flex-col justify-center items-center sm:pb-12 sm:pt-5'>
        <div className='max-w-6xl flex sm:flex-row flex-col justify-center items-center'>
          <div className='sm:px-0 px-5'>
            <h1 className='xxl:text-3xl xl:text-3xl  text-lg text-[#474747] font-bold sm:py-5 py-2 underline'>Why Healing Gloves?</h1>
            {reasons.map((symptom, index) => (
              <div key={index} className='flex  sm:mb-4 mb-2'>
                <FaArrowRight className='text-[#474747] mr-2 sm:text-xl text-xs' />
                <span className='text-[#474747] sm:text-base text-[8px]'>{symptom}</span>
              </div>
            ))}
          </div>
          <div className='w-full sm:px-0 px-5 sm:flex hidden'>
            <img src={consult} alt="consult" className='sm:max-w-full w-full sm:h-[350px] h-[100px] object-cover' />
          </div>
        </div>
      </div>
      <PilesTreatment />
    </>
  )
}