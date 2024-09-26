
import banner from '../../../../../public/pilonidalsbanner.png';
import Form from '../../../form';


export default function Pilonidal() {
  const causesoFpilonidal = [
    "Ingrown hairs",
    "Prolonged sitting",
    "Friction or pressure in the sacrococcygeal area",
    "Trauma to the buttocks",
    "Poor hygiene",
    "Family history of pilonidal disease"
  ];
  const symptoms = [
    "Pain and swelling in the lower back or tailbone area",
    "Redness and tenderness at the site",
    "Drainage of pus or blood from an opening in the skin",
    "Foul odor from the discharge",
    "Fever and malaise if infection is present"
  ];
  
    return (
        <>
            <div className="relative w-screen ">
            <div className="absolute inset-0 bg-gradient-to-b from-black to-black opacity-50"></div>
                <img src={banner} alt="banner" className="w-full h-auto shaodw-md z-10" />
        
                <h1 className='xxl:text-6xl xl:text-6xl  lg:text-5xl  md:text-4xl text-lg  font-bold text-white absolute xxl:top-40  xl:top-40 lg:top-36 md:top-40
        top-10 sm:left-10 left-5 '>Pilonidal Sinus <br /> Treatment </h1>
                <div className='sm:text-2xl  text-xs font-medium text-white absolute sm:top-72 top-16 sm:left-10 left-5 sm:flex hidden '>Specialized Care for Relief</div>

               
            </div>
            <div className='w-screen flex justify-center items-center sm:py-8 py-4 bg-[#E3E8FF]'>
                <div className='max-w-6xl flex justify-center items-center flex-col'>
                    <div>
                        <p className='sm:text-lg text-xs font-regular text-[#474747] sm:text-center sm:px-0 px-5'>A <strong>Pilonidal</strong> sinus is a small, tunnel-like tract that develops under the skin in the crease of the buttocks near the tailbone (sacrococcygeal area). This condition typically occurs when hair punctures the skin and becomes embedded, leading to the formation of a cyst or abscess. Pilonidal sinuses are more common in young adults, particularly males, and can cause significant discomfort and recurrent infections. The term "pilonidal" means "NEST of hair," reflecting the condition's association with hair follicles
                        </p>
                    </div>
                </div>
            </div>
            <div className='w-screen flex flex-col justify-center items-center sm:pb-5 pb-2 sm:py-5 py-2'>
        <div className='max-w-6xl flex flex-col justify-center items-center'>
          <div className='flex flex-col md:flex-row sm:gap-12 gap-4 w-full'>
            {/* Symptoms Section */}
            <div className='flex-1  bg-blue-50 rounded-lg border shadow p-4 border-gray-50'>
              <h2 className='sm:text-2xl text-lg text-[#474747] font-semibold sm:mb-4 mb-2  text-center'>Symptoms</h2>
              <ul className='list-disc list-inside sm:space-y-3 space-y-1'>
                {symptoms.map((symptom, index) => (
                  <li key={index} className='text-pink-600 sm:text-[15px]  text-xs font-medium sm:py-2'>{symptom}</li>
                ))}
              </ul>
            </div>
            {/* Causes Section */}
            <div className='flex-1  bg-blue-50   border shadow p-4 border-gray-50 rounded-lg'>
              <h2 className='text-2xl text-[#474747] font-semibold sm:mb-4 text-center'>Causes</h2>
              <ul className='list-disc list-inside sm:space-y-8 space-y-2'>
                {causesoFpilonidal.map((cause, index) => (
                  <li key={index} className='text-pink-600 sm:text-[15px] text-xs font-medium'>{cause}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='w-screen flex justify-center items-center sm:py-8 py-3'>
        <div className='max-w-6xl flex justify-center items-center flex-col sm:px-0 px-5 '>
          <div>
            <h1 className='xxl:text-4xl xl:text-4xl lg:text-3xl md:text-2xl text-lg font-bold  text-[#474747] underline sm:py-5  py-0 sm:pb-0 pb-2'>Unique Treatment Requirements</h1>
            <p className='sm:text-lg  text-xs font-normal text-[#474747] text-left'>Treatment for pilonidal sinus typically involves draining the abscess and removing the sinus tract. This can be done through various surgical procedures, such as incision and drainage, excision and primary closure, or minimally invasive techniques like laser treatment. Post-operative care includes maintaining good hygiene, keeping the area clean and dry, <strong>hair reduction</strong> and preventing hair from re-entering the wound. This condition differs from fissures and fistulas as it primarily involves a hair-related cyst or abscess in the skin of the buttocks, rather than an abnormal internal connection or a superficial tear.
            </p>
          </div>

        </div>

      </div>
       
     


               
           
            
        </>
    )
}