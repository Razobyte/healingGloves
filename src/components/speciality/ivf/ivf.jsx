import banner from "../../../../public/ivfbanner.png";
import icsi from "../../../../public/icsi.jpg";
import Best from "../../../../public/Bestnfertilitytreatment.jpg";
import hys from "../../../../public/hys.png";
import screening from "../../../../public/GeneticScreening.jpg";
import ivfui from "../../../../public/IVF & IUI.jpg";
import doctors1 from "../../../../public/abhilasha2.png";
import Form from "../../form";
import { useNavigate } from "react-router-dom";
export default function IVF() {
  const navigate = useNavigate();
  const doctorssar = {
    doctorsimg: doctors1,
    label: "Dr. Abhilasha Mehta",
    content: "Gynecologist & Obstetrics",
    Exp: "11 years",
    link: "/doctors2", // Example link for Dr. Abhilasha Mehta
  };

  return (
    <>
      <div className="relative w-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-black opacity-50"></div>
        <img
          src={banner}
          alt="banner"
          className="w-full h-auto"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20">
          <h1 className="xxl:text-7xl  xl:text-7xl lg:text-6xl md:text-5xl text-2xl font-bold text-white">IVF Fertility</h1>
          <p className="sm:text-base text-xs font-medium text-white sm:mt-4 sm:px-0 px-5">
            Your journey to parenthood starts here & Compassionate care for your
            fertility needs
          </p>
        </div>
      </div>

      <div className="w-screen flex justify-center items-center sm:py-8 py-4">
        <div className="max-w-6xl flex justify-center items-center flex-col">
          <div className="sm:px-0 px-5">
            <h4 className="sm:text-3xl  text-lg font-bold text-[#474747] text-center sm:pb-4 pb-2">
              Achieving Parenthood: IVF/Fertility at Healing Gloves in Gurgaon
            </h4>
            <p className="sm:text-base text-xs font-regular text-[#474747] sm:text-center text-left  ">
              Infertility can be a challenging and emotional journey for many
              couples. At Healing Gloves in Gurgaon, we are dedicated to
              providing compassionate and comprehensive fertility care. Our team
              of fertility experts utilizes the latest technologies and
              treatment methods to help you achieve your dream of parenthood.
              From initial consultations and diagnostics to advanced treatments
              such as IVF and genetic screening, we offer a wide range of
              services tailored to meet your individual needs. With a
              patient-centered approach, we strive to support you every step of
              the way, ensuring you receive the best possible care and outcomes.
            </p>
          </div>
        </div>
      </div>

      <div className="w-screen flex justify-center items-center sm:py-8 py-4 bg-[#E3E8FF]">
        <div className="max-w-6xl flex sm:flex-row flex-col justify-center items-center sm:gap-8 gap-4">

          <div className="w-full sm:hidden flex sm:px-0 px-5 ">
            <img src={Best} alt="piles" className="max-w-full h-auto" />
          </div>
          <div className="sm:text-base text-xs text-[#3E3E3E] font-normal w-full">
            <div className="sm:px-0 px-5">
              <span className="text-[#3E3E3E] font-bold sm:text-xl text-base pr-1">
                Best Infertility Treatment: Personalized Care:{" "}
              </span>
              Infertility treatment involves a variety of approaches to address
              the underlying causes of infertility in both men and women. At
              Healing Gloves, we offer personalized infertility treatment plans
              designed to meet your specific needs. Our experienced specialists
              use advanced diagnostic tools and treatments, including
              medication, lifestyle changes, and assisted reproductive
              technologies, to enhance your fertility and increase your chances
              of conception. By providing a comprehensive approach to
              infertility, Healing Gloves ensures that you receive the best
              possible care and support on your journey to parenthood.
            </div>
            <div className="sm:block flex justify-center items-center">
              <button
                className="sm:px-4 px-2 sm:py-2 py-1 bg-pink-600 text-white rounded sm:text-lg text-xs sm:font-bold
              font-medium  sm:mt-5  mt-2 w-fit "
                onClick={() =>
                  navigate("/speciality/ivf-fertility/best-infertility-treatment")
                }
              >
                Read More
              </button>
            </div>
          </div>

          <div className="w-full sm:flex hidden ">
            <img src={Best} alt="piles" className="max-w-full h-auto" />
          </div>
        </div>
      </div>
      <div className="w-screen flex justify-center items-center  flex-col">
        <div className="max-w-6xl flex sm:flex-row flex-col justify-center items-center sm:gap-12 gap-4  sm:py-8 py-4 ">
          <div className="w-full sm:px-0 px-5">
            <img src={ivfui} alt="fissures" className="max-w-full h-auto" />
          </div>
          <div className="w-full flex flex-col items-center ">
            <h4 className="sm:text-5xl  text-lg font-bold text-[#474747] text-center sm:py-2 ">
              IVF & IUI
            </h4>
            <p className="sm:text-base text-xs font-regular text-[#474747] sm:ext-center text-left sm:px-0 px-5">
              In Vitro Fertilization (IVF) and Intrauterine Insemination (IUI)
              are two of the most common assisted reproductive technologies used
              to treat infertility. IVF involves fertilizing an egg outside the
              body and then implanting it into the uterus, while IUI involves
              placing sperm directly into the uterus to facilitate
              fertilization. At Healing Gloves, our fertility experts specialize
              in both IVF and IUI, offering advanced techniques and personalized
              treatment plans to help you achieve a successful pregnancy. With
              state-of-the-art facilities and a compassionate approach, we are
              committed to providing the highest level of care for our patients.
            </p>
            <button
              className="sm:px-4 px-2 sm:py-2 py-1 bg-pink-600 text-white rounded sm:text-lg text-xs sm:font-bold
              font-medium  sm:mt-5  mt-2 w-fit  "
              onClick={() => navigate("/speciality/ivf-fertility/ivf-iui")}
            >
              Read More
            </button>
          </div>
        </div>
      </div>
      <div className="w-screen flex justify-center items-center sm:py-8 py-4 bg-[#E3E8FF]">
        <div className="max-w-6xl flex sm:flex-row flex-col justify-center items-center sm:gap-8 gap-4">
          <div className="w-full sm:hidden block px-5">
            <img src={hys} alt="piles" className="max-w-full h-auto" />
          </div>
          <div className="sm:text-base text-xs text-[#3E3E3E] font-normal w-full sm:px-0 px-5">
            <div>
              <span className="text-[#3E3E3E] font-bold sm:text-xl text-sm pr-1">
                Hysteroscopy and Laparoscopic Treatment: Minimally Invasive
                Solutions :{" "}
              </span>
              Hysteroscopy and laparoscopic treatments are minimally invasive
              surgical procedures used to diagnose and treat various conditions
              that can affect fertility. Hysteroscopy allows for the examination
              and treatment of the inside of the uterus, while laparoscopy
              provides a view of the pelvic organs. At Healing Gloves, our
              skilled surgeons use these techniques to address issues such as
              fibroids, polyps, and endometriosis, which can impact fertility.
              By offering minimally invasive solutions, we aim to reduce
              recovery time and improve outcomes for our patients, enhancing
              their chances of achieving a successful pregnancy.
            </div>
            <button
              className="psm:px-4 px-2 sm:py-2 py-1 bg-pink-600 text-white rounded sm:text-lg text-xs sm:font-bold
              font-medium  sm:mt-5  mt-2 w-fit "
              onClick={() =>
                navigate(
                  "/speciality/ivf-fertility/hysteroscopy-laparoscopic-treatment"
                )
              }
            >
              Read More
            </button>
          </div>
          <div className="w-full sm:block hidden">
            <img src={hys} alt="piles" className="max-w-full h-auto" />
          </div>
        </div>
      </div>
      <div className="w-screen flex justify-center items-center  flex-col">
        <div className="max-w-6xl flex sm:flex-row flex-col justify-center items-center sm:gap-12 gap-4  sm:py-8 py-4 ">
          <div className="w-full sm:px-0 px-5">
            <img src={screening} alt="fissures" className="max-w-full h-auto" />
          </div>
          <div className="w-full flex flex-col items-center sm:px-0 px-5 ">
            <h4 className="sm:text-5xl text-2xl font-bold text-[#474747] text-center sm:py-2 ">
              Genetic Screening{" "}
            </h4>

            <p className="sm:text-base text-xs font-regular text-[#474747] sm:text-center text-left ">
              Genetic screening involves testing embryos or prospective parents
              for genetic disorders that could affect the health of the baby.
              This screening can help identify potential genetic issues and
              guide treatment decisions. At Healing Gloves, we offer
              comprehensive genetic screening services to ensure the best
              possible outcomes for our patients. Our fertility specialists use
              advanced screening techniques to identify any genetic risks and
              provide personalized counseling and treatment options. By
              incorporating genetic screening into our fertility treatments, we
              aim to improve the chances of a healthy pregnancy and baby.
            </p>

            <button
              className="sm:px-4 px-2 sm:py-2 py-1 bg-pink-600 text-white rounded sm:text-lg text-xs sm:font-bold
              font-medium  sm:mt-5  mt-2 w-fit  "
              onClick={() =>
                navigate("/speciality/ivf-fertility/genetic-screening")
              }
            >
              Read More
            </button>
          </div>
        </div>
      </div>
      <div className="w-screen flex justify-center items-center sm:py-8 py-4">
        <div className="max-w-6xl flex sm:flex-row flex-col justify-center items-center sm:gap-12 gap-4">
          <div className="w-full sm:hidden flex  px-5">
            <img src={icsi} alt="piles" className="max-w-full h-auto" />
          </div>
          <div className="sm:text-base text-xs text-[#3E3E3E] font-normal w-full sm:px-0 px-5">
            <div>
              <span className="text-[#3E3E3E] font-bold sm:text-xl  text-base pr-1">
                ICSI: Precision Fertilization:{" "}
              </span>
              Intracytoplasmic Sperm Injection (ICSI) is a specialized form of
              IVF that involves injecting a single sperm directly into an egg to
              facilitate fertilization. This technique is particularly useful
              for couples with male infertility issues. At Healing Gloves, our
              fertility experts are highly skilled in performing ICSI, providing
              a precise and effective solution for fertilization. By offering
              ICSI as part of our fertility treatments, we enhance the chances
              of successful fertilization and pregnancy, supporting our patients
              in their journey to parenthood with the latest and most effective
              technique
            </div>
            <button
              className="sm:px-4 px-2 sm:py-2 py-1 bg-pink-600 text-white rounded sm:text-lg text-xs sm:font-bold
              font-medium  sm:mt-5  mt-2 w-fit "
              onClick={() => navigate("/speciality/ivf-fertility/icsi")}
            >
              Read More
            </button>
          </div>
          <div className="w-full sm:flex hidden ">
            <img src={icsi} alt="piles" className="max-w-full h-auto" />
          </div>
        </div>
      </div>

      <section className="w-screen md:flex  hidden justify-center items-center py-16 bg-gradient-to-br from-blue-100 via-white to-pink-100">
        <div className="max-w-6xl">
          <h1 className="text-4xl md:text-5xl text-[#2A3986] font-extrabold text-center mb-12 relative">
            Our Gynecologist Specialist
            <span className="block w-24 h-1 bg-pink-500 mt-4"></span>
          </h1>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
            <div className="w-full md:w-1/3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A3986] to-transparent opacity-20 rounded-lg"></div>
                <img
                  src={doctorssar.doctorsimg}
                  alt={doctorssar.label}
                  className="max-w-full h-auto object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div className="w-full md:w-2/3 space-y-6">
              <h2 className="text-3xl font-bold text-[#2A3986]">
                {doctorssar.label}
              </h2>
              <p className="text-xl text-gray-700 font-medium">
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
                <p className="text-lg text-gray-600 font-medium">
                  Experience: {doctorssar.Exp}
                </p>
              </div>
              <button
                className="inline-block mt-4 px-8 py-2 hover:bg-[#2A3986] text-white font-semibold rounded-full bg-pink-500 transition duration-300 ease-in-out"
                onClick={() => navigate("/doctors2")}
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
