import banner from "../../../public/ashteticsbanner.png";
import filer from "../../../public/Filler.jpg";
import Botox from "../../../public/Botox-image-replaced.jpeg";
import Facelift from "../../../public/Facelift.jpg";
import Hair from "../../../public/Hair Transplant.jpg";
import prp from "../../../public/PRP Therapy.jpg";
import Rf from "../../../public/RF Rejuvenation.jpg";
import Oro from "../../../public/OROFACIAL.png";
import Form from "../form";
import doctors2 from "../../../public/manihsa.jpg";
import { useNavigate } from "react-router-dom";
export default function Asthetics() {
  const navigate = useNavigate()
  const doctorssar = {
    doctorsimg: doctors2,
    label: "Dr. Manisha Yadav",
    content: "Aesthetics & Maxillofacial",
    Exp: "13 years",
    link: "/doctors2", // Example link for Dr. Manisha Devi
  };
  return (
    <>
      <div className="relative w-screen  flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-black opacity-30"></div>
        <img
          src={banner}
          alt="banner"
          className="w-full h-auto "
        />

        <div className="absolute flex items-center justify-center flex-col">
          <h1 className="xxl:text-7xl xl:text-7xl lg:text-6xl md:text-5xl text-2xl font-[700] text-[#fff]">
            Aesthetics & Maxillofacial
          </h1>
          <p className="sm:text-lg  text-sm font-medium text-white sm:pt-3 sm:px-0 px-10">Advanced Solutions for Facial Aesthetics and Surgery</p>
        </div>

      </div>
      <div className="w-screen flex justify-center items-center sm:py-8 py-4">
        <div className="max-w-6xl flex justify-center items-center flex-col">
          <div>
            <h4 className="sm:text-3xl text-lg font-bold text-[#474747] sm:text-center text-left sm:pb-4 sm:px-0 px-4">
              Aesthetics & Maxillofacial at Healing Gloves
            </h4>
            <p className="sm:text-base text-xs font-regular text-[#474747] sm:text-center text-left sm:px-0 px-4">
              Aesthetics and maxillofacial services focus on enhancing facial
              features and addressing dental and jaw-related issues. At Healing
              Gloves in Gurgaon, our skilled specialists offer a range of
              treatments to help you look and feel your best. Whether you are
              seeking cosmetic enhancements or need surgical interventions for
              facial deformities or injuries, our team provides personalized and
              advanced care. Our state-of-the-art techniques ensure safe,
              effective, and natural-looking results.
            </p>
          </div>
        </div>
      </div>

      <div className="w-screen flex justify-center items-center sm:py-8 py-4 bg-[#E3E8FF]">
        <div className="max-w-6xl flex sm:flex-row flex-col justify-center items-center sm:gap-8 gap-4">
          <div className="sm:text-base text-xs text-[#3E3E3E] font-normal w-full sm:px-0 px-5">
            <div>
              <span className="text-[#3E3E3E] font-bold sm:text-xl  text-base pr-1">
                Botox - Smooth Away Wrinkles :
              </span>
              Botox injections are a popular treatment to reduce the appearance
              of fine lines and wrinkles. At Healing Gloves, our experts use
              precise techniques to relax facial muscles, providing a smoother
              and more youthful appearance. With minimal discomfort and no
              downtime, Botox is an effective way to rejuvenate your look.
            </div>
            <div className="sm:block flex justify-center items-center ">
              <button className="sm:px-4 px-2 sm:py-2 py-1 bg-pink-600 text-white rounded sm:text-lg text-xs sm:font-bold
              font-medium  sm:mt-5  mt-2 w-fit "
                onClick={() => navigate('/speciality/asthetics/botox')}>
                Read More
              </button>
            </div>
          </div>
          <div className="w-full sm:px-0 px-4">
            <img src={Botox} alt="piles" className="max-w-full h-auto  transform  transition-transform  duration-300 hover:translate-y-10" />
          </div>
        </div>
      </div>
      <div className="w-screen flex justify-center items-center  flex-col">
        <div className="max-w-6xl flex  sm:flex-row flex-col justify-center items-center sm:gap-12 gap-4 sm:py-8  py-4">
          <div className="w-full sm:flex hidden">
            <img src={filer} alt="fissures" className="max-w-full h-auto" />
          </div>
          <div className="w-full flex flex-col items-center  sm:px-0 px-4 ">
            <h4 className="sm:text-3xl text-lg font-bold text-[#474747] text-center sm:py-2 ">
              Filler - Enhance Your Features
            </h4>
            <p className="sm:text-base text-xs font-regular text-[#474747] sm:text-center text-left">
              Dermal fillers are used to add volume, smooth out wrinkles, and
              enhance facial contours. Our specialists at Healing Gloves
              carefully administer fillers to achieve natural-looking results
              that complement your features. Whether you want fuller lips,
              defined cheekbones, or reduced facial lines, we tailor the
              treatment to your needs.
            </p>
            <button className="sm:px-4 px-2 sm:py-2 py-1 bg-pink-600 text-white rounded sm:text-lg text-xs sm:font-bold
              font-medium  sm:mt-5  mt-2 w-fit "
              onClick={() => navigate('/speciality/asthetics/filer')}>
              Read More
            </button>
          </div>
        </div>
      </div>
      <div className="w-screen flex justify-center items-center sm:py-8 py-4 bg-[#E3E8FF]">
        <div className="max-w-6xl flex  sm:flex-row flex-col justify-center items-center sm:gap-12 gap-4">
          <div className="w-full flex sm:hidden">
            <img
              src={Rf}
              alt="piles"
              className="sm:max-w-full sm:h-[400px] sm:w-[400px] object-cover h-[200px] w-full sm:px-0 px-5"
            />
          </div>
          <div className="sm:text-base text-xs text-[#3E3E3E] font-normal w-full sm:px-0 px-4">
            <div>
              <span className="text-[#3E3E3E] font-bold sm:text-xl text-base pr-1">
                RF Rejuvenation - Revitalize Your Skin{" "}
              </span>
              Radiofrequency (RF) rejuvenation is a non-invasive treatment that
              uses RF energy to stimulate collagen production and tighten the
              skin. At Healing Gloves, our RF rejuvenation procedures help
              improve skin texture, reduce sagging, and promote a youthful glow.
              This treatment is ideal for those looking to refresh their
              appearance without surgery.
            </div>
            <div className="sm:block flex justify-center items-center">
              <button className="sm:px-4 px-2 sm:py-2 py-1 bg-pink-600 text-white rounded sm:text-lg text-xs sm:font-bold
              font-medium  sm:mt-5  mt-2 w-fit "
                onClick={() => navigate('/speciality/asthetics/rf-rejuvenation')}>
                Read More
              </button>
            </div>
          </div>
          <div className="w-full hidden sm:block">
            <img
              src={Rf}
              alt="piles"
              className="sm:max-w-full sm:h-[400px] sm:w-[400px] object-cover h-[200px] w-full sm:px-0 px-5"
            />
          </div>
        </div>
      </div>
      <div className="w-screen flex justify-center items-center  flex-col">
        <div className="max-w-6xl flex sm:flex-row flex-col justify-center items-center sm:gap-12 sm:py-8 py-4 gap-4 ">
          <div className="w-full flex sm:hidden sm:px-0 px-5">
            <img src={Facelift} alt="fissures" className="max-w-full h-auto" />
          </div>
          <div className="w-full flex flex-col items-center sm:px-0 px-4 ">
            <h4 className="sm:text-3xl text-lg font-bold text-[#474747] sm:text-center  sm:py-2 ">
              DFacelift - Restore Youthful Contours
            </h4>

            <p className="sm:text-base text-xs font-regular text-[#474747] sm:text-center">
              A facelift is a surgical procedure that lifts and tightens the
              facial tissues to reduce sagging and wrinkles. Our skilled
              surgeons at Healing Gloves perform facelifts with precision and
              care, restoring youthful contours and improving overall facial
              harmony. We aim for natural-looking results that enhance your
              beauty.
            </p>

            <button className="sm:px-4 px-2 sm:py-2 py-1 bg-pink-600 text-white rounded sm:text-lg text-xs sm:font-bold
              font-medium  sm:mt-5  mt-2 w-fit "
              onClick={() => navigate('/speciality/asthetics/facelift')}>
              Read More
            </button>
          </div>
        </div>
      </div>
      <div className="w-screen flex justify-center items-center sm:py-8 py-4 bg-[#E3E8FF]">
        <div className="max-w-6xl flex sm:flex-row flex-col justify-center items-center sm:gap-8 gap-4">
          <div className="w-full flex sm:hidden px-4">
            <img src={Hair} alt="piles" className="max-w-full h-auto" />
          </div>
          <div className="sm:text-base text-xs text-[#3E3E3E] font-normal w-full sm:px-0 px-5">
            <div>
              <span className="text-[#3E3E3E] font-bold sm:text-xl  text-base pr-1">
                Hair Transplant - Regain Your Confidence
              </span>
              Hair transplant surgery is a permanent solution for hair loss,
              providing natural-looking results. At Healing Gloves, our
              specialists use advanced techniques to transplant hair follicles,
              ensuring optimal growth and density. Whether you're dealing with
              male pattern baldness or thinning hair, our hair transplant
              services can help you regain confidence.
            </div>
            <button className="sm:px-4 px-2 sm:py-2 py-1 bg-pink-600 text-white rounded sm:text-lg text-xs sm:font-bold
              font-medium  sm:mt-5  mt-2 w-fit "
              onClick={() => navigate('/speciality/asthetics/hairtransplant')}>
              Read More
            </button>
          </div>
          <div className="w-full sm:block hidden">
            <img src={Hair} alt="piles" className="max-w-full h-auto" />
          </div>
        </div>
      </div>
      <div className="w-screen flex justify-center items-center  flex-col">
        <div className="max-w-6xl flex sm:flex-row flex-col justify-center items-center sm:gap-12 gap-4  sm:py-8 py-4 ">
          <div className="w-full sm:px-0 px-5">
            <img src={prp} alt="fissures" className="max-w-full h-auto" />
          </div>
          <div className="w-full flex flex-col items-center sm:px-0 px-5 ">
            <h4 className="sm:text-3xl text-lg font-bold text-[#474747] sm:text-center text-left py-2 ">
              PRP Therapy - Boost Hair and Skin Health
            </h4>

            <p className="sm:text-base text-xs font-regular text-[#474747] sm:text-center text-left">
              Platelet-rich plasma (PRP) therapy uses your body's own platelets
              to promote healing and rejuvenation. At Healing Gloves, PRP
              therapy is used for both hair restoration and skin rejuvenation.
              This treatment boosts hair growth, improves skin texture, and
              enhances overall vitality, offering a natural way to address
              various aesthetic concerns.
            </p>

            <button className="sm:px-4 px-2 sm:py-2 py-1 bg-pink-600 text-white rounded sm:text-lg text-xs sm:font-bold
              font-medium  sm:mt-5  mt-2 w-fit"
              onClick={() => navigate('/speciality/asthetics/prp-therapy')}>
              Read More
            </button>
          </div>
        </div>
      </div>
      <div className="w-screen flex justify-center items-center sm:py-8  py-4  bg-[#E3E8FF]">
        <div className="max-w-6xl flex  sm:flex-row flex-col justify-center items-center sm:gap-8 gap-4">
          <div className="w-full sm:px-0 px-4 sm:hidden block">
            <img src={Oro} alt="piles" className="max-w-full h-auto" />
          </div>
          <div className="sm:text-base text-xs text-[#3E3E3E] font-normal w-full sm:px-0 px-5">
            <div>
              <span className="text-[#3E3E3E] font-bold sm:text-xl text-base pr-1">
                Orofacial - Comprehensive Facial Care
              </span>
              Orofacial treatments address a wide range of issues related to the
              mouth, jaw, and face. At Healing Gloves, our maxillofacial experts
              provide comprehensive care for conditions such as jaw
              misalignment, facial trauma, and congenital deformities. We
              combine surgical precision with aesthetic expertise to improve
              both function and appearance.
            </div>
            <button className="sm:px-4 px-2 sm:py-2 py-1 bg-pink-600 text-white rounded sm:text-lg text-xs sm:font-bold
              font-medium  sm:mt-5  mt-2 w-fit "
              onClick={() => navigate('/speciality/asthetics/orofacial')}>
              Read More
            </button>
          </div>
          <div className="w-full sm:px-0 px-5 sm:flex hidden">
            <img src={Oro} alt="piles" className="max-w-full h-auto" />
          </div>
        </div>
      </div>

      <section className="w-screen md:flex  hidden justify-center items-center sm:py-16 py-4  bg-white sm:bg-gradient-to-br from-blue-100 via-white to-pink-100">
        <div className="max-w-6xl">
          <h1 className="text-lg sm:text-3xl text-[#2A3986] font-extrabold text-center sm:mb-12 mb-5 relative">
            Aesthetics & Maxillofacial

          </h1>

          <div className="flex flex-col md:flex-row items-center md:items-start sm:gap-12">
            <div className="w-full md:w-1/3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A3986] to-transparent opacity-20 rounded-lg"></div>
                <img
                  src={doctorssar.doctorsimg}
                  alt={doctorssar.label}
                  className="max-w-full sm:h-auto sm:w-full w-full h-[250px]  object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div className="w-full md:w-2/3 sm:space-y-6 space-y-3">
              <h2 className="sm:text-3xl text-base font-bold text-[#2A3986]">
                {doctorssar.label}
              </h2>
              <p className="sm:text-xl text-sm text-gray-700 font-medium">
                {doctorssar.content}
              </p>
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-pink-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="sm:text-lg text-sm text-gray-600 font-medium">
                  Experience - {doctorssar.Exp}
                </p>
              </div>
              <button

                className="sm:px-4 px-2 sm:py-2 py-1 bg-pink-600 text-white rounded sm:text-lg text-xs sm:font-bold
              font-medium  sm:mt-5  mt-2 w-fit"
                onClick={() => navigate('/doctors3')} >
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
