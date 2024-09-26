import banner from "../../../../public/advancedbanner.png";
import appen from "../../../../public/appendix.jpg";
import incusinalherina from "../../../../public/incusinal hernia.png";
import gall from "../../../../public/gall stones.jpg";
import hitus from "../../../../public/hitushernia.jpg";
import inhernia from "../../../../public/inginual hernia.jpg";
import doctors from "../../../../public/doctors3.png";
import umb from "../../../../public/umbicalhernia.jpg";
import Form from "../../form";
import { useNavigate } from "react-router-dom";
import SpecialistSection from "../doctors";

export default function Advnaced() {
  const navigate = useNavigate();

  return (
    <>
      <div className="relative w-screen flex flex-col items-center justify-center">
        <img src={banner} alt="banner" className="w-full h-auto sm:h-[450px] object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black to-black opacity-40"></div>
        <div className="absolute flex flex-col items-center justify-center text-center px-4 py-6">
          <h1 className="text-lg xxl:text-6xl xl:text-6xl lg:text-5xl md:text-4xl  font-bold text-white">
            Advanced-Laparoscopy Robotics
          </h1>
          <p className="sm:text-2xl  text-xs  text-white sm:mt-4">
            Revolutionizing surgery with precision technology with Minimally invasive & maximally effective.
          </p>
        </div>
      </div>

      <div className="w-screen flex flex-col items-center sm:py-8  py-4">
        <div className="max-w-6xl text-center">
          <h4 className="text-lg sm:text-3xl font-bold text-gray-700 sm:mb-4">
            Innovative Laparoscopy/Robotics at Healing Gloves
          </h4>
          <p className="sm:text-base text-xs font-normal text-gray-700 sm:text-center text-left sm:px-0 px-5">
            Laparoscopy, also known as minimally invasive surgery, is a technique that allows surgeons to operate with minimal incisions, leading to faster recovery and reduced pain for patients. Robotics in surgery takes this a step further by providing greater precision, flexibility, and control. At Healing Gloves, our team of skilled surgeons utilizes the latest laparoscopic and robotic technologies to ensure the best outcomes for our patients. We are dedicated to offering advanced surgical solutions that are less invasive and more effective, helping you recover quickly and return to your daily life with minimal disruption.
          </p>
        </div>
      </div>

      <div className="w-screen bg-[#E3E8FF] sm:py-8 py-4 flex flex-col justify-center items-center ">
        <div className="max-w-6xl flex flex-col md:flex-row items-center justify-center sm:gap-8 gap-4">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <div className="sm:text-base  text-xs text-gray-800 font-normal sm:mb-4 sm:px-0 px-3">
              <span className="text-gray-800 font-bold sm:text-lg text-base">
                Gall Stones -{" "}
              </span>
              Gall stones are hardened deposits in the gallbladder that 
              can cause severe pain and digestive issues. Healing Gloves offers laparoscopic solutions to safely remove gall stones, providing relief and preventing future complications.
            </div>
            <button
              className="sm:px-4 px-2 sm:py-2 py-1 bg-pink-600 text-white rounded sm:text-lg text-xs sm:font-bold
              font-medium  sm:mt-5  mt-2 w-fit"
              onClick={() => navigate("/speciality/advanced-laparoscopy-robotics/gallstones")}
            >
              Read More
            </button>
          </div>
          <div className="w-full md:w-1/2 sm:px-0 px-5">
            <img src={gall} alt="gall stones" className="w-full h-auto" />
          </div>
        </div>
      </div>

      <div className="w-screen sm:py-8 py-4 flex flex-col justify-center items-center">
        <div className="max-w-6xl flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="w-full md:w-1/2 sm:flex hidden">
            <img src={inhernia} alt="inguinal hernia" className="w-full h-auto" />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h4 className="text-3xl md:text-5xl font-bold text-gray-700 mb-4">
              Inguinal Hernia
            </h4>
            <p className="text-base md:text-md font-normal text-gray-700 mb-4">
              An inguinal hernia occurs when tissue protrudes through a weak spot in the abdominal muscles. At Healing Gloves, we use laparoscopic techniques to repair hernias, ensuring a quick recovery and minimal scarring.
            </p>
            <button
              className="sm:px-4 px-2 sm:py-2 py-1 bg-pink-600 text-white rounded sm:text-lg text-xs sm:font-bold
              font-medium  sm:mt-5  mt-2 w-fit"
              onClick={() => navigate("/speciality/advanced-laparoscopy-robotics/inguinal-hernia")}
            >
              Read More
            </button>
          </div>
          <div className="w-full md:w-1/2 sm:hidden  block sm:px-0 px-5">
            <img src={inhernia} alt="inguinal hernia" className="w-full h-auto" />
          </div>
        </div>
      </div>

      <div className="w-screen bg-[#E3E8FF] sm:py-8 py-4 flex flex-col justify-center items-center
      ">
        <div className="max-w-6xl flex flex-col md:flex-row items-center justify-center sm:gap-8 gap-4">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <div className="sm:text-base text-xs text-gray-800 font-normal sm:mb-4 sm:px-0 px-3">
              <span className="text-gray-800 font-bold sm:text-lg text-base">
                Umbilical Hernia -{" "}
              </span>
              Umbilical hernias are common and occur near the belly button. Our experts at Healing Gloves utilize minimally invasive methods to repair these hernias, reducing pain and speeding up the healing process.
            </div>
            <button
              className="sm:px-4 px-2 sm:py-2 py-1 bg-pink-600 text-white rounded sm:text-lg text-xs sm:font-bold
              font-medium  sm:mt-5  mt-2 w-fit"
              onClick={() => navigate("/speciality/advanced-laparoscopy-robotics/umbilical-hernia")}
            >
              Read More
            </button>
          </div>
          <div className="w-full md:w-1/2 sm:px-0 px-5">
            <img src={umb} alt="umbilical hernia" className="w-full h-auto" />
          </div>
        </div>
      </div>

      <div className="w-screen sm:py-8  py-4 flex justify-center items-center">
        <div className="max-w-6xl flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="w-full md:w-1/2 sm:flex hidden">
            <img src={incusinalherina} alt="incisional hernia" className="w-full h-auto" />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h4 className="text-xl md:text-5xl font-bold text-gray-700 sm:mb-4 ">
              Incisional Hernia
            </h4>
            <p className="sm:text-base  text-xs md:text-md font-normal text-gray-700 sm:mb-4 sm:px-0 px-3">
              Incisional hernias can develop at the site of a previous surgical incision. Healing Gloves offers advanced laparoscopic procedures to repair these hernias, providing effective solutions with reduced recovery time.
            </p>
            <button
              className="sm:px-4 px-2 sm:py-2 py-1 bg-pink-600 text-white rounded sm:text-lg text-xs sm:font-bold
              font-medium  sm:mt-5  mt-2 w-fit"
              onClick={() => navigate("/speciality/advanced-laparoscopy-robotics/incisional-hernia")}
            >
              Read More
            </button>
          </div>
        </div>
      </div>

      <div className="w-screen bg-[#E3E8FF] sm:py-8 py-4 flex justify-center items-center">
        <div className="max-w-6xl flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="w-full md:w-1/2 text-center md:text-left sm:px-0 px-3">
            <div className="text-base md:text-md text-gray-800 font-normal sm:mb-4">
              <span className="text-gray-800 font-bold text-lg">
                Hiatus Hernia -{" "}
              </span>
              A hiatus hernia occurs when part of the stomach pushes through the diaphragm. Our team at Healing Gloves provides laparoscopic treatments to correct this condition, alleviating symptoms and improving your quality of life.
            </div>
            <button
              className="sm:px-4 px-2 sm:py-2 py-1 bg-pink-600 text-white rounded sm:text-lg text-xs sm:font-bold
              font-medium  sm:mt-5  mt-2 w-fit"
              onClick={() => navigate("/speciality/advanced-laparoscopy-robotics/hiatus-hernia")}
            >
              Read More
            </button>
          </div>
          <div className="w-full md:w-1/2">
            <img src={hitus} alt="hiatus hernia" className="w-full h-auto" />
          </div>
        </div>
      </div>

      <div className="w-screen sm:py-8 py-4 flex flex-col justify-center items-center">
        <div className="max-w-6xl flex flex-col md:flex-row items-center justify-center sm:gap-12">
          <div className="w-full md:w-1/2 sm:flx hidden ">
            <img src={appen} alt="appendix" className="w-full h-auto" />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left sm:px-0 px-3">
            <h4 className="text-xl md:text-5xl font-bold text-gray-700 sm:mb-4">
              Appendix
            </h4>
            <p className="text-base md:text-md font-normal text-gray-700 mb-4">
              Appendicitis is an inflammation of the appendix that requires prompt surgical intervention. Healing Gloves offers a minimally invasive procedure to remove the appendix and ensure a swift recovery.
            </p>
            <button
              className="sm:px-4 px-2 sm:py-2 py-1 bg-pink-600 text-white rounded sm:text-lg text-xs sm:font-bold
              font-medium  sm:mt-5  mt-2 w-fit"
              onClick={() => navigate("/speciality/advanced-laparoscopy-robotics/appendix")}
            >
              Read More
            </button>
          </div>
        </div>
      </div>

      <SpecialistSection />


    </>
  );
}
