import banner from "../../../../public/vascularbanner.png";
import dvt from "../../../../public/DVT.png";
import varicocele from "../../../../public/Varicocele.jpg";
import varilaser from "../../../../public/VARICOSELASER.png";
import varicose from "../../../../public/VARICOSE.png";
import avfisula from "../../../../public/avfisula.png";
import doctors from "../../../../public/doctors3.png";
import Form from "../../form";
import { MdWork, MdSchedule } from "react-icons/md";
import { useNavigate } from "react-router-dom";
export default function Vascular() {
  const navigate = useNavigate();
  const doctorssar = {
    doctorsimg: doctors,
    label: "Dr. Shambhav Chandra",
    content: "General Surgeon",
    Exp: "11.5 years",
    link: "/doctors1", // Example link for Dr. Shambhav Chandra
  };
  return (
    <>
      <div className="relative w-screen  flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-black opacity-50"></div>
        <img src={banner} alt="banner" className="w-full h-auto " />

        <div className="  absolute flex items-center justify-center flex-col">
          <h1 className="xxl:text-7xl  xl:text-7xl lg:text-6xl md:text-5xl text-2xl font-[700] text-[#fff] text-center">Vascular</h1>
          <p className="sm:text-lg text-xs font-[500] text-[#fff] text-center sm:px-0 px-5">
            Advanced treatments for optimal vascular health & Expert care for
            your circulatory system
          </p>
        </div>
      </div>
      <div className="w-screen flex justify-center items-center sm:py-8 py-4">
        <div className="max-w-6xl flex justify-center items-center flex-col">
          <div className="sm:px-0 px-5">
            <h4 className="sm:text-3xl  text-lg font-bold text-[#474747] text-center sm:pb-4 pb-2">
              Your Path to Vascular Vitality at Healing Gloves
            </h4>
            <p className="sm:text-base text-xs font-regular text-[#474747] sm:text-center">
              Vascular health is crucial for maintaining proper blood flow and
              preventing complications related to the veins and arteries. At
              Healing Gloves in Gurgaon, our vascular specialists offer advanced
              treatments for a variety of vascular conditions, utilizing the
              latest technologies and techniques. Whether you are dealing with
              varicose veins, varicocele, or more serious issues like deep vein
              thrombosis (DVT) and arteriovenous fistula (AV Fistula), our team
              is committed to providing effective and compassionate care. With a
              focus on minimally invasive procedures and personalized treatment
              plans, we aim to improve your vascular health and overall
              well-being.
            </p>
          </div>
        </div>
      </div>

      <div className="w-screen flex justify-center items-center sm:py-8 py-4 bg-[#E3E8FF]">
        <div className="max-w-6xl flex sm:flex-row flex-col justify-center items-center sm:gap-8 gap-4">
          <div className="sm:text-base text-xs text-[#3E3E3E] font-normal w-full sm:px-0 px-5">
            <div>
              <span className="text-[#3E3E3E] font-bold sm:text-xl text-base pr-1">
                Varicose Vein Treatment by Laser: Precision and Comfort :{" "}
              </span>
              Laser treatment for varicose veins is a minimally invasive
              procedure that uses laser energy to close off varicose veins,
              redirecting blood flow to healthier veins. At Healing Gloves, our
              specialists perform this procedure with precision, offering a
              quick recovery and significant improvement in symptoms.
            </div>

            <div className="sm:block flex justify-center items-center">
              <button
                className="sm:px-4 px-2 sm:py-2 py-1 bg-pink-600 text-white rounded sm:text-lg text-xs sm:font-bold
              font-medium  sm:mt-5  mt-2 w-fit"
                onClick={() =>
                  navigate("/speciality/vascular/varicose-vein-by-laser")
                }
              >
                Read More
              </button>
            </div>
          </div>

          <div className="w-full sm:px-0 px-5">
            <img src={varicose} alt="piles" className="max-w-full h-auto" />
          </div>
        </div>
      </div>
      <div className="w-screen flex justify-center items-center  flex-col">
        <div className="max-w-6xl flex sm:flex-row flex-col justify-center items-center sm:gap-12 gap-4  sm:py-8  py-4">
          <div className="w-full sm:flex hidden">
            <img
              src={varicocele}
              alt="fissures"
              className="max-w-full h-auto"
            />
          </div>
          <div className="w-full flex flex-col items-center  sm:px-0 px-5">
            <h4 className="sm:text-5xl text-lg font-bold text-[#474747] text-center sm:py-2">
              Varicose Vein{" "}
            </h4>
            <p className="sm:text-base text-xs font-regular text-[#474747] sm:text-center">
              Sclerotherapy involves injecting a solution into the varicose
              veins, causing them to collapse and fade. Embolization, on the
              other hand, blocks abnormal blood flow. At Healing Gloves, our
              experts use these methods to effectively treat varicose veins,
              reducing pain and improving appearance.
            </p>
            <button
              className="sm:px-4 px-2 sm:py-2 py-1 bg-pink-600 text-white rounded sm:text-lg text-xs sm:font-bold
              font-medium  sm:mt-5  mt-2 w-fit "
              onClick={() =>
                navigate("/speciality/vascular/varicose-vein-sclerotherapy")
              }
            >
              Read More
            </button>
          </div>
        </div>
      </div>
      <div className="w-screen flex justify-center items-center py-8 bg-[#E3E8FF]">
        <div className="max-w-6xl flex  sm:flex-row flex-col justify-center items-center sm:gap-8 gap-4">
          <div className="w-full sm:hidden flex px-5">
            <img src={varilaser} alt="piles" className="max-w-full h-auto" />
          </div>
          <div className="sm:text-base text-xs text-[#3E3E3E] font-normal w-full sm:px-0 px-5">
            <div>
              <span className="text-[#3E3E3E] font-bold sm:text-xl text-base  pr-1">
                Varicocele: Expert Care and Treatment:{" "}
              </span>
              Varicocele is an enlargement of the veins within the scrotum,
              which can cause pain and affect fertility. Our vascular
              specialists at Healing Gloves provide effective treatments for
              varicocele, including minimally invasive procedures that ensure
              quick recovery and relief from symptoms.
            </div>
            <div className="sm:block flex justify-center items-center">
              <button
                className="sm:px-4 px-2 sm:py-2 py-1 bg-pink-600 text-white rounded sm:text-lg text-xs sm:font-bold
              font-medium  sm:mt-5  mt-2 w-fit"
                onClick={() => navigate("/speciality/vascular/varicocele")}
              >
                Read More
              </button>
            </div>
          </div>
          <div className="w-full sm:flex hidden">
            <img src={varilaser} alt="piles" className="max-w-full h-auto" />
          </div>
        </div>
      </div>
      <div className="w-screen flex justify-center items-center  flex-col">
        <div className="max-w-6xl flex sm:flex-row flex-col justify-center items-center sm:gap-12 gap-4  sm:py-8  py-4">
          <div className="w-full sm:px-0 px-5">
            <img src={dvt} alt="fissures" className="max-w-full h-auto" />
          </div>
          <div className="w-full flex flex-col items-center sm:px-0 px-5 ">
            <h4 className="sm:text-5xl  text-lg font-bold text-[#474747] text-center sm:py-2 ">
              DVT
            </h4>
            <p className="sm:text-base text-xs font-regular text-[#474747] sm:text-center">
              Deep Vein Thrombosis (DVT) is a serious condition where blood
              clots form in the deep veins, usually in the legs. At Healing
              Gloves, our team offers prompt diagnosis and treatment for DVT,
              utilizing anticoagulant medications and advanced procedures to
              prevent complications and promote recovery.
            </p>

            <button
              className="sm:px-4 px-2 sm:py-2 py-1 bg-pink-600 text-white rounded sm:text-lg text-xs sm:font-bold
              font-medium  sm:mt-5  mt-2 w-fit"
              onClick={() => navigate("/speciality/vascular/dvt")}
            >
              Read More
            </button>
          </div>
        </div>
      </div>
      <div className="w-screen flex justify-center items-center sm:py-8 py-4 bg-[#E3E8FF]">
        <div className="max-w-6xl flex sm:flex-row flex-col justify-center items-center sm:gap-8 gap-4">
          <div className="w-full sm:hidden flex px-5">
            <img src={avfisula} alt="piles" className="max-w-full h-auto" />
          </div>
          <div className="sm:text-base text-xs text-[#3E3E3E] font-normal w-full sm:px-0 px-5">
            <div>
              <span className="text-[#3E3E3E] font-bold sm:text-xl  text-base pr-1">
                AV Fistula: Specialized Treatment:{" "}
              </span>
              An arteriovenous fistula (AV Fistula) is an abnormal connection
              between an artery and a vein. This condition requires specialized
              care to manage. At Healing Gloves, our vascular experts provide
              comprehensive treatment plans, including surgical and non-surgical
              options, to ensure the best outcomes for patients with AV Fistula.
            </div>
            <button
              className="sm:px-4 px-2 sm:py-2 py-1 bg-pink-600 text-white rounded sm:text-lg text-xs sm:font-bold
              font-medium  sm:mt-5  mt-2 w-fit"
              onClick={() => navigate("/speciality/vascular/av-fistula")}
            >
              Read More
            </button>
          </div>
          <div className="w-full sm:block hidden">
            <img src={avfisula} alt="piles" className="max-w-full h-auto" />
          </div>
        </div>
      </div>

      <section className="w-screen flex justify-center items-center py-4 bg-white sm:py-16 sm:bg-gradient-to-br from-blue-100 via-white to-pink-100">
        <div className="max-w-6xl px-4">
          <h1 className="text-xl sm:text-4xl md:text-5xl text-[#2A3986] font-extrabold text-center mb-4 sm:mb-12 relative">
            Our Proctology Specialist
          </h1>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-12">
            <div className="w-full md:w-1/3">
              <div className="relative">
                <div className="absolute inset-0 sm:bg-gradient-to-t from-[#2A3986] to-transparent opacity-20 rounded-lg flex justify-center items-center"></div>
                <img
                  src={doctorssar.doctorsimg}
                  alt={doctorssar.label}
                  className="w-full h-auto object-cover rounded-lg sm:shadow-lg"
                />
              </div>
            </div>

            <div className="w-full space-y-2">
              <h2 className="text-lg sm:text-3xl font-bold text-[#2A3986]">
                {doctorssar.label}
              </h2>
              <p className="text-base sm:text-xl text-gray-700 font-medium">
                {doctorssar.content}
              </p>
              <div className="flex items-center space-x-2">
                <MdWork className="w-3 h-3 sm:w-6 sm:h-6 text-pink-500" />
                <p className="text-sm sm:text-lg text-gray-600 font-medium">
                  Experience: {doctorssar.Exp}
                </p>
              </div>
              <div>
                <h3 className="text-xs sm:text-lg font-semibold text-[#2A3986] pb-2">
                  <MdSchedule className="inline-block w-3 h-3 sm:w-6 sm:h-6 text-pink-500 mr-2" />
                  Timings & Locations
                </h3>
                <ul className="space-y-2 ml-6 text-gray-600 text-xs sm:text-sm">
                  <li>
                    <strong>Daily-</strong> Sayaa Med, Gurgaon (10am-12.30pm)
                  </li>
                  <li>
                    <strong>Monday, Saturday & Sunday-</strong> Healing Gloves, Sohna (5pm-8.30pm)
                  </li>
                  <li>
                    <strong>Tuesday, Wednesday & Friday-</strong> Medharbour Hospital, Gurgaon (5pm-8pm)
                  </li>
                </ul>
              </div>
              <button
                className="mt-2 sm:mt-4 px-3 sm:px-8 py-1 sm:py-2 hover:bg-[#2A3986] text-white font-semibold rounded-full bg-pink-500 transition duration-300 ease-in-out text-sm sm:text-xl"
                onClick={() => navigate("/doctors1")}
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
