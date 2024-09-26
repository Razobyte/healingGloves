import banner from '../../../../../public/fistulabanner.png';


export default function Fistula() {
  const causesofFistula = [
    "Infections (e.g., abscesses)",
    "Inflammatory bowel diseases (e.g., Crohn's disease, ulcerative colitis)",
    "Surgical complications",
    "Cancer",
    "Radiation therapy",
    "Trauma"
  ];

  const symptoms = [
    "Pain and swelling",
    "Discharge of pus or stool from an abnormal opening",
    "Recurrent abscesses",
    "Fever",
    "Irritation and infection at the site of the fistula"
  ];

  return (
    <>
      <div className="relative w-screen">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-black opacity-50"></div>
        <img src={banner} alt="banner" className="w-full h-auto shadow-md z-10" />

        <h1 className="xxl:text-6xl xl:text-6xl  lg:text-5xl  md:text-4xl text-xl  font-bold text-white absolute xxl:top-40  xl:top-40 lg:top-36 md:top-32
        top-10 sm:left-10 left-5">  Fistula Care</h1>
        <div className="sm:text-2xl  text-xs font-medium text-white absolute sm:top-56 top-16 sm:left-10 left-5">
          Expert Solutions for Complete Healing
        </div>

      </div>
      <div className="w-screen flex justify-center items-center sm:py-8 py-4 ">
        <div className="max-w-6xl flex flex-col justify-center items-center">
          <p className="xxl:text-lg xl:text-lg lg:text-lg md:text-base  text-xs font-normal text-gray-700 text-justify px-4">
            A <strong>Fistula</strong> is an abnormal connection or passageway that forms between two organs or vessels that do not normally connect, often resulting from infections, inflammatory diseases, surgical complications, cancer, radiation therapy, or trauma. Common types include anal fistulas (between the bowel and skin near the anus), rectovaginal fistulas (between the rectum and vagina), enterocutaneous fistulas (between the intestine and skin), gastrointestinal fistulas (between parts of the digestive tract), and urinary fistulas (involving the urinary tract). Symptoms vary based on the location but can include pain, discharge, infection, and leakage of bodily fluids. Diagnosis typically involves clinical examination, imaging studies, and endoscopy, while treatment may include antibiotics, anti-inflammatory medications, nutritional support, drainage, and surgical repair. Effective management is essential to prevent complications such as infections, malnutrition, and significant impacts on quality of life.
          </p>
        </div>
      </div>
      <div className='w-screen flex flex-col justify-center items-center sm:pb-5  bg-blue-50 sm:py-5'>
        <div className='max-w-6xl flex flex-col justify-center items-center'>
          <div className='flex flex-col md:flex-row sm:gap-12 gap-4 w-full'>
            {/* Symptoms Section */}
            <div className='flex-1 bg-white rounded-lg border shadow p-4 border-gray-50'>
              <h2 className='sm:text-2xl text-lg text-[#474747] font-semibold sm:mb-4 mb-2 text-center'>Symptoms</h2>
              <ul className='list-disc list-inside sm:space-y-3 space-y-1'>
                {symptoms.map((symptom, index) => (
                  <li key={index} className='text-pink-600 sm:text-[15px]  text-xs font-medium sm:py-2 py-0'>{symptom}</li>
                ))}
              </ul>
            </div>
            {/* Causes Section */}
            <div className='flex-1 bg-white  border shadow p-4 border-gray-50 rounded-lg'>
              <h2 className='sm:text-2xl text-lg text-[#474747] font-semibold sm:mb-4 mb-2 text-center'>Causes</h2>
              <ul className='list-disc list-inside sm:space-y-3 space-y-1'>
                {causesofFistula.map((cause, index) => (
                  <li key={index} className='text-pink-600 sm:text-[15px] text-xs font-medium'>{cause}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='w-screen flex flex-col justify-center items-center pb-5'>
        <div className='max-w-6xl flex flex-col justify-center items-center'>
          <h1 className='xxl:text-4xl xl:text-4xl lg:text-3xl md:text-2xl text-lg text-[#474747] font-bold mb-5 sm:pt-5 pt-2'>Types of Fistulas</h1>
          <div className='flex flex-col sm:gap-8  gap-3 w-full'>
            {/* Anal Fistula */}
            <div className='bg-blue-50 rounded-lg shadow sm:py-4 py-2 px-2'>
              <h2 className='xxl:text-2xl xl:text-2xl lg:text-xl  text-[#474747] font-semibold sm:mb-4 mb-2'>Anal Fistula</h2>
              <p className='sm:text-base text-xs font-normal text-[#2c2c2c]'><strong>Description:</strong> This is a small channel that develops between the end of the bowel and the skin near the anus.</p>
              <p className='sm:text-base text-xs font-normal text-[#2c2c2c]'><strong>Causes:</strong> Often results from an abscess (infected cavity) that did not heal properly. It can be associated with conditions like Crohn’s disease, tuberculosis, or trauma.</p>
              <p className='sm:text-base text-xs font-normal text-[#2c2c2c]'><strong>Symptoms:</strong> Pain, swelling, and discharge near the anus. There may be recurrent abscesses, and sometimes fever.</p>
            </div>
            {/* Rectovaginal Fistula */}
            <div className='bg-blue-50 rounded-lg shadow py-4 px-2'>
              <h2 className='xxl:text-2xl xl:text-2xl lg:text-xl  text-[#474747] font-semibold sm:mb-4 mb-2'>Rectovaginal Fistula</h2>
              <p className='sm:text-base text-xs font-normal text-[#2c2c2c]'><strong>Description:</strong> An abnormal connection between the rectum and the vagina.</p>
              <p className='sm:text-base text-xs font-normal text-[#2c2c2c]'><strong>Causes:</strong> Childbirth trauma, surgical complications, Crohn’s disease, or cancer.</p>
              <p className='sm:text-base text-xs font-normal text-[#2c2c2c]'><strong>Symptoms:</strong> Passage of gas, stool, or pus from the vagina, recurrent vaginal or urinary infections.</p>
            </div>
            {/* Enterocutaneous Fistula */}
            <div className='bg-blue-50 rounded-lg shadow py-4 px-2'>
              <h2 className='xxl:text-2xl xl:text-2xl lg:text-xl  text-[#474747] font-semibold sm:mb-4 mb-2'>Enterocutaneous Fistula</h2>
              <p className='sm:text-base text-xs font-normal text-[#2c2c2c]'><strong>Description:</strong> A connection between the intestine and the skin.</p>
              <p className='sm:text-base text-xs font-normal text-[#2c2c2c]'><strong>Causes:</strong> Surgical complications, inflammatory bowel disease, or trauma.</p>
              <p className='sm:text-base text-xs font-normal text-[#2c2c2c]'><strong>Symptoms:</strong> Leakage of intestinal contents through an opening in the skin, which can lead to infection and fluid imbalance.</p>
            </div>
            {/* Gastrointestinal Fistulas */}
            <div className='bg-blue-50 rounded-lg shadow py-4 px-2'>
              <h2 className='xxl:text-2xl xl:text-2xl lg:text-xl  text-[#474747] font-semibold sm:mb-4 mb-2'>Gastrointestinal Fistulas</h2>
              <p className='sm:text-base text-xs font-normal text-[#2c2c2c]'><strong>Description:</strong> Connections that form between different parts of the digestive tract.</p>
              <p className='sm:text-base text-xs font-normal text-[#2c2c2c]'><strong>Causes:</strong> Inflammatory bowel diseases, surgical complications, or cancers.</p>
              <p className='sm:text-base text-xs font-normal text-[#2c2c2c]'><strong>Symptoms:</strong> Vary depending on the specific organs involved but can include pain, nutritional deficiencies, and infections.</p>
            </div>
            {/* Urinary Fistula */}
            <div className='bg-blue-50 rounded-lg shadow py-4 px-2'>
              <h2 className='xxl:text-2xl xl:text-2xl lg:text-xl  text-[#474747] font-semibold sm:mb-4 mb-2'>Urinary Fistula</h2>
              <p className='sm:text-base text-xs font-normal text-[#2c2c2c]'><strong>Description:</strong> An abnormal connection involving the urinary tract, such as between the bladder and the skin or between the bladder and the vagina.</p>
              <p className='sm:text-base text-xs font-normal text-[#2c2c2c]'><strong>Causes:</strong> Surgical complications, radiation therapy, or trauma.</p>
              <p className='sm:text-base text-xs font-normal text-[#2c2c2c]'> <strong>Symptoms:</strong> Leakage of urine from unusual openings, recurrent urinary tract infections.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='w-screen flex justify-center items-center sm:py-8 '>
        <div className='max-w-6xl flex justify-center items-center flex-col sm:px-0 px-4'>
          <div>
            <h1 className='xxl:text-4xl xl:text-4xl lg:text-3xl md:text-2xl text-lg font-bold  text-[#474747] underline sm:py-5  py-0 sm:pb-0 pb-1'>Unique Treatment Requirements</h1>
            <p className='sm:text-lg text-xs font-normal text-[#474747] text-left sm:pb-0 pb-4'>Treatment for fistulas often involves addressing the underlying infection or inflammation, draining any abscesses, and surgically repairing the abnormal connection. Methods such as fistulotomy, seton placement,  <strong>LIFT, SLOFT, LASER FISTULA SURGERIES, coring, plugging, glue insertion, VAAFT</strong> or advancement flap procedures  may be used depending on the complexity and location of the fistula. This condition is distinct from fissures and pilonidal sinus due to its nature as an abnormal connection between two internal structures, requiring more complex surgical interventions to resolve.



            </p>
          </div>

        </div>

      </div>


    </>
  );
}
