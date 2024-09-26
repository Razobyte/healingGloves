import doctors1banner from '../../../public/bannera.jpeg'
import doctors from "../../../public/abhilasha.png";
import img2 from "../../../public/dpctors2 (3).png";
import img3 from "../../../public/dpctors2 (2).png";
import img4 from "../../../public/dpctors2 (1).png";
import img from "../../../public/doctors1 (5).png";
import call from "../../../public/blue-doctors1 (1).png";
import mail from "../../../public/blue-doctors1 (2).png";
import { useNavigate } from "react-router-dom";
export default function Doctors2() {
  const navigate = useNavigate();
  return (
    <>
    <div className="relative w-screen flex justify-center items-center">
    <img src={doctors1banner} alt="banner" className="w-full h-[450px] object-cover shadow-md" />
    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
    <div className="absolute flex justify-center items-center flex-col ">
      <h1 className="text-5xl font-bold text-white text-center"> Dr. Abhilasha Mehta -  Gynecologist & IVF Specialist </h1>
      <p className='pt-2 text-3xl font-medium text-white'>Committed to Advanced Reproductive Care</p>
     
    </div>
    {/* <div className="hidden lg:block absolute top-10 right-40 p-6 bg-white shadow-lg rounded-lg">
      <Form />
    </div> */}
  </div>
      <div className="w-screen flex justify-center items-center bg-[#36A1FC] pt-5">
        <div className="max-w-6xl flex justify-center items-center">
          <div className="w-full pb-12">
            <h1 className="text-5xl font-[800] text-white py-2">
              Dr. Abhilasha Mehta 
            </h1>

            <div className="text-sm font-regular text-white pb-2">
              Dr. Abhilasha Mehta: Renowned Gynecologist and IVF Specialist Dr.
              Abhilasha Mehta is a renowned gynecologist and IVF specialist
              dedicated to advancing reproductive technology. Known for her
              expertise and compassionate approach, Dr. Mehta stands out in
              helping couples navigate the journey of pregnancy. With extensive
              experience in women's health, she provides personalized care at
              every stage of life, ensuring comprehensive treatment tailored to
              each individual's needs.
            </div>
            <div className="text-sm font-regular text-white pb-2">
              Dr. Mehta specializes in reproductive healthcare, excelling as an
              IVF specialist. She offers advanced fertility options for those
              facing challenges in conceiving, utilizing the latest techniques
              and technologies in the field. Her dedication to reproductive
              health is evident in her commitment to breaking limitations in
              reproductive technological know-how, constantly seeking innovative
              solutions to assist her patients.
            </div>
            <div className="text-sm font-regular text-white pb-2">
              Kindness is the cornerstone of Dr. Mehta's practice. Her
              patient-centric philosophy ensures that every individual receives
              not only the highest quality medical care but also the emotional
              support necessary during their journey towards pregnancy and
              reproductive health. Dr. Mehta's compassionate demeanor and
              professional expertise make her a trusted and sought-after
              specialist in the field of gynecology and reproductive medicine.
            </div>
            <div className="text-sm font-regular text-white pb-2">
              For couples seeking guidance and advanced fertility treatments,
              Dr. Abhilasha Mehta offers unparalleled expertise and a
              supportive, empathetic approach, making her a leader in women's
              health and reproductive care.
            </div>
          </div>

          <div className="w-full">
            <img src={doctors} alt="banner" className="max-w-full " />
          </div>
        </div>
      </div>
      <div className="w-screen flex justify-center items-center py-10">
        <div className="max-w-6xl flex justify-center gap-40">
          <div>
            <h1 className="text-[#3E3E3E] text-5xl font-[800] text-center py-12">
              Specialized Medical Expertise
            </h1>
            <div className="flex justify-center items-center gap-20  pb-10">
              <div
                onClick={() => navigate("/speciality/obestric-gyno")}
                className="cursor-pointer"
              >
                <img
                  src={img2}
                  alt="General Surgery"
                  className="max-w-full h-auto"
                />
                <h2 className="text-[#3E3E3E] text-xl font-[550] text-center">
                  Obstetrics
                </h2>
              </div>
              <div
                onClick={() =>
                  navigate("/speciality/obstetrics-gyno/prenatal-care")
                }
                className="cursor-pointer"
              >
                <img
                  src={img3}
                  alt="Laparoscopic Surgery"
                  className="max-w-full h-auto"
                />
                <h2 className="text-[#3E3E3E] text-xl font-[550] text-center">
                  Parental Care
                </h2>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div
                onClick={() => navigate("/speciality/ivf-fertility")}
                className="cursor-pointer"
              >
                <img
                  src={img4}
                  alt="General Surgery"
                  className="max-w-full h-auto"
                />
                <h2 className="text-[#3E3E3E] text-xl font-[550] text-center">
                  IVF
                </h2>
              </div>
            </div>
          </div>
          <div className="bg-[#2A3986]  px-8 py-6">
            <img src={img} alt="" className="max-w-full h-auto" />
            <div className="justify-center flex items-center bg-white mb-5"
            onClick={()=>navigate('/contact-us')}>
              <button className="text-[#2A3986] text-2xl font-[800] text-opacity-90 py-2">
                Book Appointment
              </button>
            </div>
            <h2 className="text-3xl font-[800] text-white text-opacity-90 pb-4">
              CONTACT INFO
            </h2>
            <div className="flex items-center gap-4 pb-3">
              <img src={mail} alt="" className="max-w-full h-auto" />
              <p className="text-white text-lg font-medium">+91 70158 81552</p>
            </div>
            <div className="flex items-center gap-4">
              <img src={call} alt="" className="max-w-full h-auto" />
              <p className="text-white text-lg font-medium">
              <a
              href="mailto:hgpolyclinic@gmail.com"
            
            >
              hgpolyclinic@gmail.com
            </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
