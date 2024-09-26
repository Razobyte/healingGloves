import banner from "../../../../public/advancedbanner.png";
import wl from "../../../../public/nonsurgecial.jpg";
import endo from "../../../../public/endoscopic.png";
import Allurion from "../../../../public/Allurion.png";
import pilsilodiau from "../../../../public/pilsilodiau.png";
import surgery from "../../../../public/biratuicsurgery.png";
import warts from "../../../../public/warts.png";
import doctors from "../../../../public/doctors3.png";
import Form from "../../form";
import { useNavigate } from "react-router-dom";
import { MdWork,MdSchedule } from "react-icons/md";
import SpecialistSection from "../doctors";
export default function Weight() {
  const navigate = useNavigate();
 
  return (
    <>
      <div className="relative w-screen  flex justify-center items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-black opacity-40"></div>
        <img src={banner} alt="banner" className="w-full h-auto " />
  
        <div className="absolute flex items-center justify-center flex-col">
          <h1 className="xxl:text-7xl xl:text-7xl lg:text-6xl md:text-5xl text-2xl font-[700] text-[#fff] ">
            Weight Loss Bariatric
          </h1>
          <p className=" text-white sm:text-base text-xs font-[500] sm:pt-3  sm:px-0 px-5">
            Achieve your healthiest self with our expert guidance & Transform
            your life through sustainable weight loss solutions
          </p>
        </div>
      </div>
      <div className="w-screen flex justify-center items-center sm:py-8 py-4">
        <div className="max-w-6xl flex justify-center items-center flex-col sm:px-0 px-3">
          <div>
            <h4 className="sm:text-3xl text-base font-bold text-[#474747] text-center sm:pb-4 pb-1" >
              Transformative Weight Loss/Bariatric Solutions at Healing Gloves
             
            </h4>
            <p className="sm:text-base text-xs font-regular text-[#474747] sm:text-center sm:px-0 px-5">
              Weight loss and bariatric surgery are specialized fields focused
              on helping individuals achieve and maintain a healthy weight. At
              Healing Gloves, we offer a range of surgical and non-surgical
              weight loss solutions tailored to meet your unique needs. Our
              multidisciplinary team of experts is committed to providing
              comprehensive care, guiding you through every step of your weight
              loss journey. Whether you are looking for non-invasive methods or
              considering bariatric surgery, we are here to support you in
              achieving your weight loss goals and improving your overall
              health.
            </p>
          </div>
        </div>
      </div>

      <div className="w-screen flex justify-center items-center sm:py-8 py-4 bg-[#E3E8FF]">
        <div className="max-w-6xl flex sm:flex-row flex-col justify-center items-center sm:gap-8 gap-4">
          <div className="sm:text-base text-xs text-[#3E3E3E] font-normal w-full ">
            <div className="sm:px-0 px-5">
              <span className="text-[#3E3E3E] font-bold sm:text-xl text-sm pr-1">
                Non-Surgical Weight Loss:{" "}
              </span>
              Non-surgical weight loss programs at Healing Gloves include
              personalized diet plans, exercise routines, and medical
              supervision to help you achieve sustainable weight loss without
              surgery.
            </div>
           <div className="sm:block flex  justify-center items-center">
           <button
              className="sm:px-4 px-2 sm:py-2 py-1 bg-pink-600 text-white rounded sm:text-lg text-xs sm:font-bold
              font-medium  sm:mt-5  mt-2 w-fit  "
              onClick={() => navigate("/speciality/weight-loss/non-surgical")}
            >
              Read More
            </button>
           </div>
          </div>

          <div className="w-full sm:px-0 px-5">
            <img src={wl} alt="piles" className="max-w-full h-auto" />
          </div>
        </div>
      </div>
      <div className="w-screen flex justify-center items-center  flex-col">
        <div className="max-w-6xl flex sm:flex-row flex-col justify-center items-center sm:gap-12  gap-4 sm:py-8  py-2">
          <div className="w-full sm:flex hidden">
            <img src={endo} alt="fissures" className="max-w-full h-auto" />
          </div>
          <div className="w-full flex flex-col items-center sm:px-0 px-5 ">
            <h4 className="xxl:text-5xl  xl:text-4xl md:text-3xl text-lg font-bold text-[#474747] text-center py-2 ">
              Endoscopic Balloon
            </h4>
            <p className="sm:text-base text-xs font-regular text-[#474747] sm:text-center">
              The endoscopic balloon is a non-surgical weight loss option where
              a balloon is placed in the stomach to reduce its capacity. Healing
              Gloves offers this innovative treatment to help you feel fuller
              with less food intake.
            </p>
            <button
              className="sm:px-4 px-2 sm:py-2 py-1 bg-pink-600 text-white rounded sm:text-lg text-xs sm:font-bold
              font-medium  sm:mt-5  mt-2 w-fit  "
              onClick={() =>
                navigate("/speciality/weight-loss/endoscopicballon")
              }
            >
              Read More
            </button>
          </div>
        </div>
      </div>
      <div className="w-screen flex justify-center items-center sm:py-8  py-4 bg-[#E3E8FF]">
        <div className="max-w-6xl flex sm:flex-row flex-col justify-center items-center sm:gap-8 gap-4">
        <div className="w-full sm:hidden block px-5">
            <img src={Allurion} alt="piles" className="max-w-full h-auto" />
          </div>
          <div className="sm:text-base text-xs text-[#3E3E3E] font-normal w-full sm:px-0 px-5">
            <div>
              <span className="text-[#3E3E3E] font-bold sm:text-xl text-sm  pr-1">
                Allurion:{" "}
              </span>{" "}
              is a swallowable, non-surgical gastric balloon designed to aid
              weight loss. At Healing Gloves, we provide this cutting-edge
              solution to help you achieve significant weight loss in a safe and
              controlled manner.
            </div>
           <div className="sm:block flex justify-center items-center">
           <button
              className="sm:px-4 px-2 sm:py-2 py-1 bg-pink-600 text-white rounded sm:text-lg text-xs sm:font-bold
              font-medium  sm:mt-5  mt-2 w-fit  "
              onClick={() => navigate("/speciality/weight-loss/allurion")}
            >
              Read More
            </button>
           </div>
          </div>
          <div className="w-full sm:block hidden">
            <img src={Allurion} alt="piles" className="max-w-full h-auto" />
          </div>
        </div>
      </div>
      <div className="w-screen flex justify-center items-center  flex-col">
        <div className="max-w-6xl flex sm:flex-row flex-col justify-center items-center sm:gap-12 gap-4  sm:py-8  py-4">
          <div className="w-full sm:px-0 px-5">
            <img src={surgery} alt="fissures" className="max-w-full h-auto" />
          </div>
          <div className="w-full flex flex-col items-center  sm:px-0 px-5">
            <h4 className="sm:text-5xl text-lg font-bold text-[#474747] text-center sm:py-2 ">
              Bariatric Surgery
            </h4>

            <p className="sm:text-base text-xs font-regular text-[#474747] sm:text-center">
              Bariatric surgery includes various procedures like gastric bypass
              and sleeve gastrectomy to help with significant weight loss.
              Healing Gloves offers expert bariatric surgery services to support
              your weight loss journey and improve your health.
            </p>

            <button
              className="sm:px-4 px-2 sm:py-2 py-1 bg-pink-600 text-white rounded sm:text-lg text-xs sm:font-bold
              font-medium  sm:mt-5  mt-2 w-fit "
              onClick={() =>
                navigate("/speciality/weight-loss-bariatric/bariatric-surgery")
              }
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
