import banner from "../../../../public/proctologybanner.png";
import piles from "../../../../public/piles.png";
import fistula from "../../../../public/fistula.jpg";
import fissure from "../../../../public/fissures.jpg";
import pilsilodiau from "../../../../public/pilsilodiau.png";
import Absecess from "../../../../public/Absescess.jpg";
import warts from "../../../../public/wart-updated.jpg";


import { useNavigate } from "react-router-dom";
import { MdWork,MdSchedule } from "react-icons/md";
import SpecialistSection from "../doctors";
export default function Pactrology() {
  const navigate = useNavigate();
  
  return (
    <>
      <div className="relative w-screen  flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-black opacity-40"></div>
        <img src={banner} alt="banner" className="w-full sm:h-[450px] object-cover h-auto" />
        
        <div
          className="absolute items-center justify-center flex flex-col
     "
        >
          <h1 className="xxl:text-6xl xl:text-6xl lg:text-5xl  md:text-4xl text-2xl font-[700] text-[#fff] ">PROCTOLOGY</h1>
          <div className="sm:text-3xl text-xs sm:font-[500] font-normal text-[#fff]  sm:pt-3 pt-1 sm:px-0 px-5">
            Precision care for a comfortable tomorrow & Expert solutions for
            every proctological need.
          </div>
        </div>
      </div>
      <div className="w-screen flex justify-center items-center sm:py-8 py-4">
        <div className="max-w-6xl flex justify-center items-center flex-col">
          <div>
            <h4 className="xl:text-3xl lg:text-2xl  md:text-xl text-lg font-bold text-[#474747] text-center sm:pb-4 pb-1">
              Gurgaon's Leading Proctology Care-Healing Gloves
            </h4>
            <p className="sm:text-base text-xs font-regular text-[#474747] sm:text-center text-left sm:px-0 px-5">
              Proctology, also known as colorectal surgery, is a medical
              specialty focusing on disorders of the rectum, anus, and colon.
              This branch of medicine is essential for diagnosing and treating
              conditions that can cause significant discomfort, pain, and even
              more severe health issues if left untreated. At Healing Gloves, we
              understand the sensitivity and discomfort associated with these
              conditions and are dedicated to providing expert care with a
              compassionate touch. Our team of experienced proctologists
              utilizes advanced diagnostic tools and treatment methods to ensure
              you receive the best possible care. Whether you are dealing with
              common issues like hemorrhoids or more complex conditions such as
              fistulas, our goal is to improve your quality of life through
              effective and personalized treatment plans.
            </p>
          </div>
        </div>
      </div>

      <div className="w-screen flex justify-center items-center sm:py-8 bg-[#E3E8FF] py-4">
        <div className="max-w-6xl flex sm:flex-row flex-col justify-center items-center sm:gap-8 gap-4">
        <div className="w-full sm:hidden block px-5">
            <img src={piles} alt="piles" className="max-w-full h-auto object-cover" />
          </div>
          <div className="sm:text-base text-xs text-[#3E3E3E] font-normal w-full sm:px-0 px-5 flex flex-col sm:justify-start justify-center sm:items-start items-center">
            <div>
              <span className="text-[#3E3E3E] font-bold sm:text-xl text-base pr-1">
                Piles -{" "}
              </span>
              also known as hemorrhoids, are swollen veins in the lower rectum
              and anus. They can cause pain, itching, and bleeding during bowel
              movements. At Healing Gloves, we offer effective treatments to
              alleviate symptoms and address the root cause of piles, ensuring
              relief and improved well-being.
            </div>
            <button
              className="sm:px-4 px-2 sm:py-2 py-1 bg-pink-600 text-white rounded sm:text-lg text-xs sm:font-bold
              font-medium  sm:mt-5  mt-2 w-fit"
              onClick={() => navigate("/speciality/proctolgy/piles")}
            >
              Read More
            </button>
          </div>

          <div className="w-full sm:block hidden">
            <img src={piles} alt="piles" className="max-w-full h-auto object-cover" />
          </div>
        </div>
      </div>
      <div className="w-screen flex justify-center items-center  flex-col">
        <div className="max-w-6xl flex sm:flex-row flex-col justify-center items-center sm:gap-12 sm:py-8 py-4 ">
          <div className="w-full sm:px-0 px-5">
            <img src={fistula} alt="fissures" className="max-w-full h-auto" />
          </div>
          <div className="w-full flex flex-col items-center ">
            <h4 className="xl:text-5xl xxl:text-5xl lg:text-4xl md:text-3xl text-lg font-bold text-[#474747] text-center py-2 ">
              Fissures
            </h4>
            <p className="sm:text-base text-xs font-regular text-[#474747] sm:text-center text-left sm:px-0 px-5">
              Anal fissures are small tears in the lining of the anus, often
              causing severe pain and bleeding during bowel movements. Healing
              Gloves provides specialized care to promote healing and reduce
              discomfort, utilizing the latest techniques to treat fissures and
              prevent recurrence.
            </p>
            <button
              className="sm:px-4 px-2 sm:py-2 py-1 bg-pink-600 text-white rounded sm:text-lg text-xs sm:font-bold
              font-medium  sm:mt-5  mt-0  "
              onClick={() => navigate("/speciality/proctolgy/fissures")}
            >
              Read More
            </button>
          </div>
        </div>
      </div>
      <div className="w-screen flex justify-center items-center sm:py-8 py-4 bg-[#E3E8FF]">
        <div className="max-w-6xl flex sm:flex-row flex-col justify-center items-center sm:gap-8 gap-3">
        <div className="w-full sm:hidden block px-5">
            <img src={fissure} alt="piles" className="max-w-full h-auto" />
          </div>
          <div className="sm:text-base text-xs text-[#3E3E3E] font-normal w-full sm:px-0 px-5 flex flex-col     sm:justify-start justify-center sm:items-start items-center">
            <div>
              <span className="text-[#3E3E3E] font-bold sm:text-xl text-base pr-1">
                Fistula -
              </span>
              An anal fistula is an abnormal connection between the rectum and
              the skin around the anus, often resulting from infection. Our
              proctologists at Healing Gloves are skilled in diagnosing and
              treating fistulas, offering surgical and non-surgical solutions to
              restore health and comfort.
            </div>
            <button
              className="sm:px-4 px-2 sm:py-2 py-1 bg-pink-600 text-white rounded sm:text-lg text-xs sm:font-bold
              font-medium  sm:mt-5  mt-2 w-fit "
              onClick={() => navigate("/speciality/proctolgy/fistula")}
            >
              Read More
            </button>
          </div>
          <div className="w-full sm:block hidden">
            <img src={fissure} alt="piles" className="max-w-full h-auto" />
          </div>
        </div>
      </div>
      <div className="w-screen flex justify-center items-center  flex-col">
        <div className="max-w-6xl flex sm:flex-row flex-col justify-center items-center sm:gap-12 sm:py-8 py-4 ">
          <div className="w-full sm:px-0 px-5">
            <img
              src={pilsilodiau}
              alt="fissures"
              className="max-w-full h-auto"
            />
          </div>
          <div className="w-full flex flex-col items-center ">
            <h4 className="xl:text-5xl xxl:text-5xl lg:text-4xl md:text-3xl text-lg font-bold text-[#474747] text-center py-2 ">
              Pilonidal Sinus
            </h4>

            <p className="sm:text-base text-xs text-[#3E3E3E] font-normal w-full sm:px-0 px-5">
              A pilonidal sinus is a small hole or tunnel in the skin, often
              filled with fluid or pus, and typically located near the tailbone.
              This condition can be painful and may lead to infection. Healing
              Gloves provides effective treatments, including minimally invasive
              procedures, to resolve pilonidal sinuses and prevent future
              issues.
            </p>

            <button
              className="sm:px-4 px-2 sm:py-2 py-1 bg-pink-600 text-white rounded sm:text-lg text-xs sm:mt-5 mt-2"
              onClick={() => navigate("/speciality/proctolgy/pilonidal")}
            >
              Read More
            </button>
          </div>
        </div>
      </div>
      <div className="w-screen flex justify-center items-center py-8 bg-[#E3E8FF]">
        <div className="max-w-6xl flex sm:flex-row flex-col justify-center items-center sm:gap-8 gap-3">
        <div className="w-full sm:hidden block px-5">
            <img src={Absecess} alt="piles" className="max-w-full h-auto" />
          </div>
          <div className="sm:text-base text-xs text-[#3E3E3E] font-normal w-full flex flex-col sm:justify-start sm:items-start items-center">
            <div className="w-full sm:px-0 px-5 ">
              <span className="text-[#3E3E3E] font-bold sm:text-xl  text-lg pr-1">
                Abscess -
              </span>
              An abscess is a painful collection of pus caused by an infection
              in the anal or rectal area. At Healing Gloves, we offer prompt and
              effective treatment to drain the abscess, eliminate the infection,
              and promote healing, ensuring you receive the best possible care.
            </div>
            <button
              className="sm:px-4 px-2 sm:py-2 py-1 bg-pink-600 text-white rounded sm:text-lg text-xs sm:font-bold
              font-medium  sm:mt-5  mt-2 w-fit  "
              onClick={() => navigate("/speciality/proctolgy/abscess")}
            >
              Read More
            </button>
          </div>
          <div className="w-full sm:flex hidden">
            <img src={Absecess} alt="piles" className="max-w-full h-auto" />
          </div>
        </div>
      </div>
      <div className="w-screen flex justify-center items-center  flex-col">
        <div className="max-w-6xl flex sm:flex-row flex-col justify-center items-center sm:gap-12 gap-0  sm:py-8 py-4">
          <div className="w-full sm:px-0 px-5">
            <img src={warts} alt="fissures" className="max-w-full h-auto" />
          </div>
          <div className="w-full flex flex-col items-center ">
            <h4 className="xl:text-5xl xxl:text-5xl lg:text-4xl md:text-3xl text-lg font-bold text-[#474747] text-center py-2 ">
              Warts
            </h4> 
            <p className="s:text-base text-xs font-regular text-[#474747] sm:text-center sm:px-0 px-5 text-left ">
              Anal warts are growths caused by the human papillomavirus (HPV)
              and can be uncomfortable and embarrassing. Healing Gloves offers
              comprehensive care to remove warts and prevent their recurrence,
              using the latest medical treatments to ensure your comfort and
              health.
            </p>

            <button
              className="sm:px-4 px-2 sm:py-2 py-1 bg-pink-600 text-white rounded sm:text-lg text-xs sm:mt-5 mt-2 "
              onClick={() => navigate("/speciality/proctolgy/warts")}
            >
              Read More
            </button>
          </div>
        </div>
      </div>
      <SpecialistSection/>
    
    </>
  );
}
