import banner from '../../../../public/urologybanner.png'
import cys from '../../../../public/Cystoscopy.jpg';
import circu from '../../../../public/Circumcision.jpg';
import kidney from '../../../../public/KidneyStone.jpg';
import urs from '../../../../public/urs.png';
import Prostate from '../../../../public/Prostate.jpg';
import Rirs from '../../../../public/Rirs.png';
import doctors from '../../../../public/doctors3.png';
import Form from '../../form'
import { MdWork, MdSchedule } from "react-icons/md";

import { useNavigate } from 'react-router-dom';
import SpecialistSection from '../doctors';
export default function Urology() {
  const navigate = useNavigate()
  const doctorssar = {
    doctorsimg: doctors,
    label: 'Dr. Shambhav Chandra',
    content: 'General Surgeon',
    Exp: "11.5 years",
    link: '/doctors1' // Example link for Dr. Shambhav Chandra
  }
  return (
    <>
      <div className="relative w-screen flex items-center justify-center">
        <img src={banner} alt="banner" className="w-full sm:h-[450px] object-cover h-auto" />
        <div className="absolute inset-0 bg-gradient-to-b from-black to-black opacity-40"></div>
        <div className="absolute flex flex-col items-center justify-center">
          <h1 className="xxl:text-6xl xl:text-6xl lg:text-5xl md:text-4xl text-2xl font-[700] text-[#fff] text-center">
            Urology
          </h1>
          <p className="sm:text-3xl text-xs sm:font-[500] font-normal text-[#fff] text-center sm:pt-3 pt-1 px-5">
            Advanced care for all urological conditions.
          </p>
        </div>
      </div>

      <div className="w-screen flex justify-center items-center sm:py-8 py-4">
        <div className="max-w-6xl flex flex-col items-center">
          <div>
            <h4 className="xl:text-3xl lg:text-2xl md:text-xl text-lg font-bold text-[#474747] text-center sm:pb-4 pb-1">
              Urology Services at Healing Gloves
            </h4>
            <p className="sm:text-base text-xs font-regular text-[#474747] text-center sm:px-0 px-5">
              Urology is a medical specialty that focuses on the diagnosis and treatment of conditions related to the urinary tract and male reproductive system. At Healing Gloves, we provide comprehensive urological care, offering both medical and surgical solutions to address a wide range of urological issues. Our team of experienced urologists is dedicated to providing personalized care, ensuring that you receive the most effective treatments in a comfortable and supportive environment. Whether you are dealing with common conditions like kidney stones or more complex issues like prostate problems, we are here to help you achieve optimal urinary health.
            </p>
          </div>
        </div>
      </div>

      <div className="w-screen flex justify-center items-center sm:py-8 py-4 bg-[#E3E8FF]">
        <div className="max-w-6xl flex flex-col sm:flex-row justify-center items-center sm:gap-8 gap-4">
          <div className="w-full sm:hidden block px-5">
            <img src={circu} alt="circumcision" className="max-w-full h-auto object-cover" />
          </div>
          <div className="text-xs sm:text-base text-[#3E3E3E] font-normal w-full sm:px-0 px-5 flex flex-col items-center sm:items-start">
            <div>
              <span className="text-[#3E3E3E] font-bold sm:text-xl text-base pr-1">Circumcision: </span>
              Circumcision is a common procedure involving the removal of the foreskin from the penis. Healing Gloves offers safe and effective circumcision services for both medical and cultural reasons.
            </div>
            <button
              className="sm:px-4 px-2 sm:py-2 py-1 bg-pink-600 text-white rounded sm:text-lg text-xs sm:font-bold font-medium sm:mt-5 mt-2"
              onClick={() => navigate('/speciality/urology/circumcision')}
            >
              Read More
            </button>
          </div>
          <div className="w-full sm:block hidden">
            <img src={circu} alt="circumcision" className="max-w-full h-auto object-cover" />
          </div>
        </div>
      </div>

      <div className="w-screen flex justify-center items-center sm:py-8 py-4">
        <div className="max-w-6xl flex flex-col sm:flex-row justify-center items-center sm:gap-12 gap-4">
          <div className="w-full sm:px-0 px-5">
            <img src={cys} alt="cystoscopy" className="max-w-full h-auto object-cover" />
          </div>
          <div className="w-full flex flex-col items-center">
            <h4 className="xl:text-5xl lg:text-4xl md:text-3xl text-lg font-bold text-[#474747] text-center py-2">
              Cystoscopy
            </h4>
            <p className="sm:text-base text-xs font-regular text-[#474747] text-center sm:px-0 px-5">
              Cystoscopy is a diagnostic procedure that allows doctors to examine the bladder and urethra. At Healing Gloves, we use this minimally invasive technique to diagnose and treat various urinary tract conditions.
            </p>
            <button
              className="sm:px-4 px-2 sm:py-2 py-1 bg-pink-600 text-white rounded sm:text-lg text-xs sm:font-bold font-medium sm:mt-5 mt-2"
              onClick={() => navigate('/speciality/urology/cystoscopy')}
            >
              Read More
            </button>
          </div>
        </div>
      </div>

      <div className="w-screen flex justify-center items-center sm:py-8 py-4 bg-[#E3E8FF]">
        <div className="max-w-6xl flex flex-col sm:flex-row justify-center items-center sm:gap-8 gap-4">
          <div className="w-full sm:hidden block px-5">
            <img src={kidney} alt="kidney stones" className="max-w-full h-auto object-cover" />
          </div>
          <div className="text-xs sm:text-base text-[#3E3E3E] font-normal w-full sm:px-0 px-5 flex flex-col items-center sm:items-start">
            <div>
              <span className="text-[#3E3E3E] font-bold sm:text-xl text-base pr-1">Kidney Stone: </span>
              Kidney stones are hard deposits that form in the kidneys, causing pain and urinary issues. Healing Gloves provides advanced treatments to remove kidney stones and prevent their recurrence.
            </div>
            <button
              className="sm:px-4 px-2 sm:py-2 py-1 bg-pink-600 text-white rounded sm:text-lg text-xs sm:font-bold font-medium sm:mt-5 mt-2"
              onClick={() => navigate('/speciality/urology/kidney-stone')}
            >
              Read More
            </button>
          </div>
          <div className="w-full sm:block hidden">
            <img src={kidney} alt="kidney stones" className="max-w-full h-auto object-cover" />
          </div>
        </div>
      </div>

      <div className="w-screen flex justify-center items-center sm:py-8 py-4">
        <div className="max-w-6xl flex flex-col sm:flex-row justify-center items-center sm:gap-12 gap-4">
          <div className="w-full sm:px-0 px-5">
            <img src={urs} alt="urs" className="max-w-full h-auto object-cover" />
          </div>
          <div className="w-full flex flex-col items-center">
            <h4 className="xl:text-5xl lg:text-4xl md:text-3xl text-lg font-bold text-[#474747] text-center py-2">
              URS
            </h4>
            <p className="sm:text-base text-xs font-regular text-[#474747] text-center sm:px-0 px-5">
              URS (Ureterorenoscopy) is a procedure used to treat stones in the ureter and kidney. Our specialists at Healing Gloves offer this minimally invasive technique to effectively remove stones and alleviate symptoms.
            </p>
            <button
              className="sm:px-4 px-2 sm:py-2 py-1 bg-pink-600 text-white rounded sm:text-lg text-xs sm:font-bold font-medium sm:mt-5 mt-2"
              onClick={() => navigate('/speciality/urology/urs')}
            >
              Read More
            </button>
          </div>
        </div>
      </div>

      <div className="w-screen flex justify-center items-center sm:py-8 py-4 bg-[#E3E8FF]">
        <div className="max-w-6xl flex flex-col sm:flex-row justify-center items-center sm:gap-8 gap-4">
          <div className="w-full sm:hidden block px-5">
            <img src={Prostate} alt="prostate" className="max-w-full h-auto object-cover" />
          </div>
          <div className="text-xs sm:text-base text-[#3E3E3E] font-normal w-full sm:px-0 px-5 flex flex-col items-center sm:items-start">
            <div>
              <span className="text-[#3E3E3E] font-bold sm:text-xl text-base pr-1">Prostate: </span>
              Prostate conditions, including benign enlargement and cancer, require specialized care. At Healing Gloves, we provide comprehensive evaluations and treatment options for prostate health.
            </div>
            <button
              className="sm:px-4 px-2 sm:py-2 py-1 bg-pink-600 text-white rounded sm:text-lg text-xs sm:font-bold font-medium sm:mt-5 mt-2"
              onClick={() => navigate('/speciality/urology/prostate')}
            >
              Read More
            </button>
          </div>
          <div className="w-full sm:block hidden">
            <img src={Prostate} alt="prostate" className="max-w-full h-auto object-cover" />
          </div>
        </div>
      </div>

      <div className="w-screen flex justify-center items-center sm:py-8 py-4">
        <div className="max-w-6xl flex flex-col sm:flex-row justify-center items-center sm:gap-12 gap-4">
          <div className="w-full sm:px-0 px-5">
            <img src={Rirs} alt="rirs" className="max-w-full h-auto object-cover" />
          </div>
          <div className="w-full flex flex-col items-center">
            <h4 className="xl:text-5xl lg:text-4xl md:text-3xl text-lg font-bold text-[#474747] text-center py-2">
              RIRS
            </h4>
            <p className="sm:text-base text-xs font-regular text-[#474747] text-center sm:px-0 px-5">
              RIRS (Retrograde Intrarenal Surgery) is a technique used to remove kidney stones using a flexible endoscope. Healing Gloves offers this advanced procedure for effective stone management with minimal recovery time.
            </p>
            <button
              className="sm:px-4 px-2 sm:py-2 py-1 bg-pink-600 text-white rounded sm:text-lg text-xs sm:font-bold font-medium sm:mt-5 mt-2"
              onClick={() => navigate('/speciality/urology/rirs')}
            >
              Read More
            </button>
          </div>
        </div>
      </div>
      <SpecialistSection />

    </>
  )
}