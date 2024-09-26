import banner from '../../../../../public/HYSTEROSCOPY  LAPAROSCOPY.jpg';
import Form from '../../../form';
import { TbTriangleFilled } from 'react-icons/tb';
import abhilasha from '../../../../../public/abhilasha.png';

export default function Hysterscopy() {
  return (
    <>
      {/* Hero Section */}
      <div className=" w-screen">
        <img src={banner} alt="banner" className="w-full  object-cover shadow-sm" />
        {/* <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
        <div className="absolute top-1/2 left-10 transform -translate-y-1/2">
          <h1 className="text-6xl font-bold text-white animate-fade-in-down">Hysteroscopy And<br/>
Laparoscopic
<br/>Treatment</h1>
          <p className="text-md font-medium text-white mt-4 animate-fade-in-up">
          Precise Hysteroscopy and Laparoscopic Treatme-
          nt at Healing Gloves with Dr. Abhilasha Meh
          </p>
        </div>
        <div className="hidden lg:block absolute top-10 right-40 rounded-lg animate-fade-in">
          <Form />
        </div>
        <div className="absolute inset-x-0 bottom-[-1px] h-20 bg-gradient-to-b from-transparent to-white transform rotate-2"></div> */}
      </div>

      {/* Main Content Section */}
      <div className="max-w-6xl mx-auto sm:p-10 p-4 ">

        {/* Section 1 */}
        <section className="sm:mb-12  mb-4 rounded-xl sm:p-8  p-4 sm:shadow-lg shadow-sm flex">

          <p className="lg:text-lg sm:text-base text-sm text-gray-700 leading-relaxed">
            Start your journey to parenthood with Healing Gloves, where Dr. Abhilasha Mehta's expertise in fertility treatment helps turn the dream of having a child into reality. Schedule a consultation today to discover how we can assist you.

          </p>
        </section>
        <section className="sm:mb-12 mb-4  rounded-xl sm:p-8 p-4  sm:shadow-lg shadow-sm">
          <div className="flex items-center sm:mb-6">
            <p className="lg:text-lg sm:text-base text-sm font-medium text-gray-800">
              Hysteroscopy and laparoscopic treatments are advanced, minimally invasive procedures that help diagnose and treat various conditions related to women's reproductive health. Hysteroscopy involves inserting a thin, flexible telescope into the uterus through the vagina, allowing doctors to view the uterine cavity directly. This technique is crucial for evaluating abnormal bleeding, fibroids, polyps, or potential causes of infertility. Laparoscopy, on the other hand, involves small incisions in the abdomen through which a camera and surgical instruments are inserted, enabling the treatment of conditions like endometriosis, cysts, and other pelvic issues.


            </p>
          </div>
        </section>
        {/* Section 2 with Image */}
        <section className="lg:mb-12 sm:mb-6 mb-4 flex flex-col lg:flex-row items-center rounded-xl sm:p-8  p-4 sm:shadow-lg shadow-sm">
          <img src={abhilasha} alt="Dr. Abhilasha Mehta" className="w-1/2 lg:w-1/3 mb-6 lg:mb-0 lg:mr-8 rounded-full shadow-md border-t-4 border-pink-500" />
          <p className="lg:text-lg sm:text-base text-sm text-gray-700 leading-relaxed lg:w-2/3">
            Dr. Abhilasha Mehta is an expert in these techniques, employing them effectively to provide tailored treatments that focus on patient comfort and swift recovery. Her proficiency in using these sophisticated tools allows for precise interventions, significantly reducing recovery time and enhancing treatment outcomes. With her deep understanding of reproductive health, Dr. Mehta ensures that each procedure is conducted with the utmost care, aligning with the individual needs of her patients.

          </p>
        </section>

        {/* Section 3 */}


        {/* Section 4 */}
        <section className="rounded-xl sm:p-8 p-4  sm:shadow-lg shadow-sm">
          <div className="flex items-center sm:mb-6">

            <p className="lg:text-lg sm:text-base text-sm font-medium text-gray-800">

              These procedures represent the forefront of fertility and reproductive health treatments, offering effective solutions with minimal physical impact.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
