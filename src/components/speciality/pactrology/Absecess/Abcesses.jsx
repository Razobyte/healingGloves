
import banner from '../../../../../public/abscessbanner.png'
import Form from '../../../form';
import { FaArrowRight } from 'react-icons/fa6';
import consult from '../../../../../public/consultdoctor.jpg'
import AbcessTreatment from './do';

export default function Abscess() {

  const causesoFabSeces = [
    "Bacterial infection (commonly Staphylococcus aureus)",
    "Obstruction of oil or sweat glands",
    "Foreign objects in the skin",
    "Complications from minor skin injuries or punctures",
    "Inflammatory conditions such as Crohn's disease"
  ];

  const symptoms = [
    "A swollen, red, and tender area",
    "Painful lump that may feel warm to the touch",
    "Visible pus drainage or the presence of a white or yellow center",
    "Fever and chills (if the infection is severe)",
    "Fatigue and general malaise"
  ];

  return (
    <>
      <div className="relative w-screen ">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-black opacity-50"></div>
        <img src={banner} alt="banner" className="w-full h-auto shaodw-md z-10" />

        <h1 className='xxl:text-6xl xl:text-6xl  lg:text-5xl  md:text-4xl text-lg  font-bold text-white absolute xxl:top-40  xl:top-40 lg:top-36 md:top-32
        top-10 sm:left-10 left-5 '>Abscess Treatment </h1>
        <div className='sm:text-2xl  text-xs font-medium text-white absolute sm:top-56 top-16 sm:left-10 left-5'>Expert Care for Quick Recovery</div>

      </div>
      <div className='w-screen flex justify-center items-center sm:py-8 py-4  bg-[#E3E8FF]'>
        <div className='max-w-6xl flex justify-center items-center flex-col'>
          <div>

            <p className='sm:text-lg text-xs font-regular text-[#474747] sm:text-center sm:px-0 px-4'>An <strong> Abscess </strong> is a localized collection of pus within the tissues of the body, typically caused by an infection. This condition can occur in various parts of the body, including the skin, organs, and other soft tissues. Abscesses are characterized by swelling, redness, and tenderness in the affected area, often accompanied by pain and warmth. They are a common medical issue that can affect individuals of all ages and can vary in size from small, superficial lesions to large, deep-seated infections. The formation of an abscess usually results from the body's response to infection, where white blood cells rush to the site to combat the invading bacteria or other pathogens, leading to the accumulation of pus.


            </p>
          </div>

        </div>
      </div>
      <div className='w-screen flex flex-col justify-center items-center sm:pb-5  pb-2 sm:py-5 py-3'>
        <div className='max-w-6xl flex flex-col justify-center items-center'>
          <div className='flex flex-col md:flex-row sm:gap-12  gap-4 w-full'>
            {/* Symptoms Section */}
            <div className='flex-1  bg-blue-50 rounded-lg border shadow p-4 border-gray-50'>
              <h2 className='sm:text-2xl text-lg text-[#474747] font-semibold sm:mb-4 mb-2  text-center'>Symptoms</h2>
              <ul className='list-disc list-inside sm:space-y-3 space-y-1'>
                {symptoms.map((symptom, index) => (
                  <li key={index} className='text-pink-600 sm:text-[15px] text-xs font-medium sm:py-2 py-0'>{symptom}</li>
                ))}
              </ul>
            </div>
            {/* Causes Section */}
            <div className='flex-1  bg-blue-50  border shadow p-4 border-gray-50 rounded-lg'>
              <h2 className='text-2xl text-[#474747] font-semibold mb-4 text-center'>Causes</h2>
              <ul className='list-disc list-inside sm:space-y-8 space-y-2'>
                {causesoFabSeces.map((cause, index) => (
                  <li key={index} className='text-pink-600 sm:text-[15px] text-xs font-medium'>{cause}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='w-screen flex justify-center items-center sm:py-8 py-4'>
        <div className='max-w-6xl flex justify-center items-center flex-col'>
          <div className='sm:px-0 px-5'>
            <h1   className='xxl:text-4xl xl:text-4xl lg:text-3xl md:text-2xl text-lg font-bold  text-[#474747] underline sm:py-5  py-0 sm:pb-0 pb-2'>Unique Treatment Requirements</h1>
            <p className='sm:text-lg text-xs font-normal text-[#474747] text-left'>Treatment for abscesses typically involves draining the pus to relieve pain and prevent the spread of infection. Small abscesses may drain naturally, but larger or more painful ones often require medical intervention. Dr Shambhav Chandra, a skilled proctologist and a general surgeon, may perform an incision and drainage procedure, sometimes using local anesthesia to numb the area. Antibiotics are usually prescribed to treat the underlying infection and prevent recurrence. It's important to keep the wound clean and covered during the healing process. In cases where abscesses are related to underlying health conditions, managing those conditions is crucial to prevent further occurrences



            </p>
          </div>

        </div>

      </div>
    </>
  )
}