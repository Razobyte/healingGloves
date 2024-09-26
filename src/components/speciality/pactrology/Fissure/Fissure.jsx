
import banner from '../../../../../public/fissures-banner.jpg'
import Form from '../../../form';

export default function Fissures() {
  const causesofFissures = [
    "Passing large or hard stools",
    "Chronic constipation or diarrhea",
    "Straining during bowel movements",
    "Childbirth",
    "Inflammatory bowel diseases (e.g., Crohn's disease)",
    "Anal intercourse"
  ];

  const symptoms = [
    "Severe pain during and after bowel movements",
    "Bright red blood on the stool or toilet paper",
    "Itching or irritation around the anus",
    "A visible crack or tear in the anal area",
    "A small lump or skin tag near the fissure"
  ];

 


  return (
    <>
     <div className="w-screen ">
        <img src={banner} alt="banner" className="w-full h-auto shaodw-md z-10" />
        {/* <div className="absolute inset-0 gradient-overlay"></div>
        <h1 className='text-7xl font-[700] text-[#fff] absolute top-40 left-10'>Fissures</h1>
        <div className='text-md font-[500] text-[#fff] absolute top-60 left-10'>Precision care for a comfortable tomorrow.
        <br />  Expert solutions for every proctological need.</div>

        <div className="absolute lg:top-10 xxl:top-5 right-40 p-0 w-1/4">
          <Form />
        </div> */}
      </div>
      <div className='w-screen flex justify-center items-center sm:py-8 py-4'>
        <div className='max-w-6xl flex justify-center items-center flex-col'>
          <div>
            <p className='sm:text-lg text-xs font-normal text-[#474747] text-left sm:px-0 px-5'>A <strong>Fissure</strong>, also known as an anal fissure, is a small tear or cut in the lining of the anus. This condition is characterized by severe pain and bleeding during bowel movements. Anal fissures are a common and often painful condition that can affect individuals of all ages, though they are particularly prevalent among young adults and middle-aged individuals. The tear is usually caused by the passage of hard or large stools, leading to a linear split in the mucosal lining of the anal canal. Chronic fissures can result in a cycle of repeated injury and spasm of the anal sphincter muscles, further exacerbating the problem.

            </p>
          </div>

        </div>

      </div>
      <div className='w-screen flex flex-col justify-center items-center sm:pb-5 '>
        <div className='max-w-6xl flex flex-col justify-center items-center'>
          {/* <h1 className='text-3xl text-[#474747] font-bold mb-8'>Symptoms and Causes of Piles</h1> */}
          <div className='flex flex-col md:flex-row sm:gap-8 gap-3 w-full '>
            {/* Symptoms Section */}
            <div className='flex-1 bg-blue-50 rounded-lg sm:shadow-lg shadow-sm p-4'>
              <h2 className='xxl:text-2xl xl:text-2xl lg:text-xl text-lg text-[#474747] font-semibold sm:mb-4  text-center'>Symptoms</h2>
              <ul className='list-disc list-inside sm:space-y-3 space-y-1'>
                {symptoms.map((symptom, index) => (
                  <li key={index} className='text-pink-600 sm:text-[15px]  text-xs font-medium  sm:py-2 py-1 '>{symptom}</li>
                ))}
              </ul>
            </div>
            {/* Causes Section */}
            <div className='flex-1 p-4 bg-blue-50 rounded-lg sm:shadow-lg shadow-sm'>
              <h2 className='text-2xl text-[#474747] font-semibold sm:mb-4 mb-2 text-center'>Causes</h2>
              <ul className='list-disc list-inside sm:space-y-3 space-y-2 '>
                {causesofFissures.map((cause, index) => (
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
            <h1 className='xxl:text-4xl xl:text-4xl lg:text-3xl md:text-2xl text-lg font-bold text-left  text-[#474747] underline sm:py-5 sm:pb-0 pb-2'>Unique Treatment Requirements</h1>
            <p className='xxl:text-lg xl:text-lg lg:text-lg md:text-base  text-xs  font-normal text-[#474747] text-left'>Treatment for anal fissures often involves measures to reduce pain and promote healing, such as increasing fiber intake, using stool softeners, and applying topical anesthetics or nitroglycerin ointment to relax the sphincter muscles. In more severe or chronic cases, procedures like Botox injections to relax the sphincter or surgical intervention (lateral internal sphincterotomy) to cut a portion of the sphincter muscle may be necessary. This condition differs from others like fistulas and pilonidal sinus in that it primarily involves a superficial tear in the anal lining rather than an abnormal connection or an infected tract.


            </p>
          </div>

        </div>

      </div>
    
     




    </>
  )
}