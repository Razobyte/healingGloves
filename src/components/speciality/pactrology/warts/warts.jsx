
import banner from '../../../../../public/banner-wart.jpg.webp'
import Form from '../../../form';
import { FaArrowRight } from 'react-icons/fa6';
import consult from '../../../../../public/consultdoctor.jpg'


export default function Warts() {
  const causesoFwarts = [
    "Direct contact with HPV, often through small cuts or abrasions in the skin",
    "Sharing personal items such as towels or razors",
    "Walking barefoot in public places like swimming pools or locker rooms",
    "Weakened immune system"
  ];
  const symptoms = [
    "Raised, rough-surfaced bumps on the skin",
    "Black pinpoints, which are small clotted blood vessels",
    "Itching or discomfort around the wart",
    "Clusters of warts in a single area",
    "Pain when pressure is applied (especially for warts on the feet)"
  ];


  return (
    <>
      <div className="relative w-screen ">
        <img src={banner} alt="banner" className="w-full h-auto shaodw-md z-10" />
        <div className="absolute inset-0 gradient-overlay "></div>
        <h1 className='xxl:text-6xl xl:text-6xl  lg:text-5xl  md:text-4xl text-lg  font-bold text-white absolute xxl:top-40  xl:top-40 lg:top-36 md:top-32
        top-10 sm:left-10 left-5 '>Warts</h1>
        <div className='sm:text-2xl  text-xs font-medium text-white absolute sm:top-56 top-16 sm:left-10 left-5'>Wart Removal-Expert Care at Healing Gloves with <br />Dr. Shambhav Chandra
        </div>

        
      </div>
      <div className='w-screen flex justify-center items-center sm:py-8 py-4'>
        <div className='max-w-6xl flex justify-center items-center flex-col'>
          <div className='sm:px-0 px-5'>
            <p className='sm:text-lg text-xs font-regular text-[#474747] sm:text-center'><strong className='pe-2'>Warts</strong> 
             are small, benign growths on the skin caused by an infection with the human papillomavirus (HPV). These growths can appear on various parts of the body, including the hands, feet, and genital area. Warts are typically rough to the touch and may have a pattern of tiny black dots, which are small, clotted blood vessels. They are a common dermatological condition, especially among children and young adults, and can vary in size and appearance. Warts are generally harmless but can be unsightly and sometimes painful, particularly when located on weight-bearing areas like the soles of the feet.


            </p>
          </div>

        </div>

      </div>
      <div className='w-screen flex flex-col justify-center items-center sm:pb-5  pb-2 sm:py-5 py-3'>
        <div className='max-w-6xl flex flex-col justify-center items-center'>
          <div className='flex flex-col md:flex-row sm:gap-12 gap-4 w-full'>
            {/* Symptoms Section */}
            <div className='flex-1  bg-blue-50 rounded-lg border shadow p-4 border-gray-50'>
              <h2 className='m:text-2xl text-lg text-[#474747] font-semibold sm:mb-4 mb-2  text-center'>Symptoms</h2>
              <ul className='list-disc list-inside sm:space-y-3 space-y-1'>
                {symptoms.map((symptom, index) => (
                  <li key={index} className='text-pink-600 sm:text-[15px] text-xs  font-medium sm:py-2'>{symptom}</li>
                ))}
              </ul>
            </div>
            {/* Causes Section */}
            <div className='flex-1  bg-blue-50 rounded-lg  border shadow p-4 border-gray-50'>
              <h2 className='m:text-2xl text-lg text-[#474747] font-semibold sm:mb-4 mb-2  text-center'>Causes</h2>
              <ul className='list-disc list-inside sm:space-y-8 space-y-1'>
                {causesoFwarts.map((cause, index) => (
                  <li key={index} className='text-pink-600 sm:text-[15px] text-xs font-medium'>{cause}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='w-screen flex justify-center items-center sm:py-8 py-4 '>
        <div className='max-w-6xl flex justify-center items-center flex-col'>
          <div className='sm:px-0 px-5'>
            <h1 className='xxl:text-4xl xl:text-4xl lg:text-3xl md:text-2xl text-lg font-bold  text-[#474747] underline sm:py-5  py-0 sm:pb-0 pb-2'>Unique Treatment Requirements</h1>
            <p className='sm:text-lg  text-xs font-normal text-[#474747] text-left'>Treatment for warts depends on their size, location, and type. Many warts resolve on their own over time, but various treatments can expedite their removal. Over-the-counter treatments, such as salicylic acid preparations, can help dissolve the wart tissue. Cryotherapy, or freezing the wart with liquid nitrogen, is another common method performed by our doctor Shambhav Chandra. Other treatments include laser therapy, surgical removal, or applying prescription-strength wart medications. In cases of genital warts, it is important to seek medical advice for appropriate treatment and to discuss preventive measures such as the HPV vaccine. Maintaining good personal hygiene and avoiding direct contact with warts can help prevent the spread of HPV(Human Papillomavirus).

            </p>
          </div>

        </div>

      </div>






    </>
  )
}