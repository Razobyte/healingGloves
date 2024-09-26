import banner from "../../../../public/obestricbagynologybanner (1).png";
import parentalcare from "../../../../public/Prenatal Care.jpg";
import normalandhigh from "../../../../public/normalandhigh.png";
import csection from "../../../../public/csectionlss.png";
import postdl from "../../../../public/postdl.png";
import comp from "../../../../public/Complicated Pregnancies.jpg";
import lap from "../../../../public/lproscopic.png";
import ove from "../../../../public/ovraian.jpg";
import open from "../../../../public/Open Hysterectomy.jpg";
import myoma from "../../../../public/myoma.jpg";
import pcod from "../../../../public/PCOD Treatment.jpg";
import doctors1 from "../../../../public/abhilasha2.png";
import Form from "../../form";
import { useNavigate } from "react-router-dom";
export default function Pactrology() {
  const navigate = useNavigate();
  const doctorssar = {
    doctorsimg: doctors1,
    label: "Dr. Abhilasha Mehta",
    content: "Gynecologist & Obstetrics",
    Exp: "11 years",
    link: "/doctors2", // Example link for Dr. Abhilasha Mehta
  };
  const navigationUrls = {
    prenatalCare: "/speciality/obstetrics-gyno/prenatal-care",
    normalAndHighRiskDelivery:
      "/speciality/obstetrics-gyno/normal-high-risk-delivery",
    cSection: "/speciality/obstetrics-gyno/c-scetion-lscs",
    // Corrected link
    postDeliveryCare: "/speciality/obstetrics-gyno/post-delivery-care",
    complicatedPregnancies:
      "/speciality/obstetrics-gyno/complicated-pregnancies",
    laparoscopicHysterectomy:
      "/speciality/obstetrics-gyno/laparoscopic-hysterectomy",
    ovarianCystSurgery: "/speciality/obstetrics-gyno/ovarian-cyst-surgery",
    openHysterectomy: "/speciality/obstetrics-gyno/open-hysterectomy",
    myomaSurgery: "/speciality/obstetrics-gyno/myoma-surgery",
    pcodTreatment: "/speciality/obstetrics-gyno/pcod-treatment",
    womenHygieneCare: "/speciality/obstetrics-gyno/women-hygiene-care",
  };
  return (
    <>
      <div className="relative w-screen flex items-center justify-center ">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-black opacity-40"></div>
        <img
          src={banner}
          alt="banner"
          className="w-full h-auto"
        />
        <div className="absolute  justify-center items-center flex flex-col">
          <h1 className="sm:text-7xl text-lg font-[700] text-[#fff] ">
            Gynecologist & Obstetrics
          </h1>
          <p className="sm:text-base text-xs font-[500] text-[#fff] sm:pt-5 sm:px-0 px-5">
            Comprehensive care for every stage of womanhood & Dedicated to
            women's health and well-being
          </p>
        </div>
      </div>
      <div className="w-screen flex justify-center items-center sm:py-8 py-4">
        <div className="max-w-6xl flex justify-center items-center flex-col">
          <div className="sm:px-0 px-5">
            <h4 className="sm:text-3xl text-lg font-bold text-[#474747] text-center sm:pb-4">
              Gynecologist & Obstetrics Care at Healing Gloves
            </h4>
            <p className="sm:text-base text-xs font-regular text-[#474747] sm:text-center">
              At Healing Gloves in Gurgaon, we offer exceptional gynecological
              and obstetric care to women at all stages of life. Our team of
              experienced gynecologists and obstetricians is dedicated to
              providing personalized and compassionate care, from routine
              check-ups and prenatal care to complex surgeries and post-delivery
              support. We utilize the latest medical technologies and techniques
              to ensure the best outcomes for our patients. Whether you are
              planning a pregnancy, dealing with a gynecological condition, or
              seeking advice on women's health, Healing Gloves is here to
              support you with expert care and guidance.
            </p>
          </div>
        </div>
      </div>
      <div className="w-screen flex justify-center items-center sm:py-8 py-4 bg-[#E3E8FF]">
        <div className="max-w-6xl flex sm:flex-row flex-col justify-center items-center sm:gap-8 gap-4">
          <div className="sm:text-base text-xs  text-[#3E3E3E] font-normal w-full sm:px-0 px-5">
            <div>
              <span className="text-[#3E3E3E] font-bold sm:text-xl text-base pr-1">
                Prenatal Care - Nurturing Your Pregnancy - Smooth Away Wrinkles
                -
              </span>
              Prenatal care is essential for ensuring the health and well-being
              of both the mother and the baby during pregnancy. At Healing
              Gloves, we offer comprehensive prenatal care services, including
              regular check-ups, ultrasounds, nutritional advice, and prenatal
              screenings. Our team of experts is committed to providing the best
              care throughout your pregnancy, addressing any concerns and
              supporting you at every stage. With our personalized prenatal care
              plans, you can be assured of a healthy and happy pregnancy
              journey.
            </div>
            <button
              className="sm:px-4 px-2 sm:py-2 py-1 bg-pink-600 text-white rounded sm:text-lg text-xs sm:font-bold
              font-medium  sm:mt-5  mt-2 w-fit"
              onClick={() => navigate(navigationUrls.prenatalCare)}
            >
              Read More
            </button>
          </div>

          <div className="w-full sm:px-0 px-5">
            <img src={parentalcare} alt="piles" className="max-w-full h-auto" />
          </div>
        </div>
      </div>
      <div className="w-screen flex justify-center items-center  flex-col">
        <div className="max-w-6xl flex  sm:flex-row flex-col justify-center items-center sm:gap-12 gap-4  sm:py-8 py-4  ">
          <div className="w-full sm:flex hidden">
            <img
              src={normalandhigh}
              alt="fissures"
              className="max-w-full h-auto"
            />
          </div>
          <div className="w-full flex flex-col items-center sm:px-0 px-5 ">
            <h4 className="sm:text-3xl text-lg font-bold text-[#474747] text-center py-2 ">
              Normal and High-Risk Delivery
            </h4>
            <p className="sm:text-base text-xs font-regular text-[#474747] sm:text-center">
              Delivering a baby is a momentous occasion, and at Healing Gloves,
              we are equipped to handle both normal and high-risk deliveries
              with expertise and care. Our skilled obstetricians provide
              continuous monitoring and support during labor and delivery,
              ensuring the safety and well-being of both mother and baby. For
              high-risk pregnancies, we offer specialized care and advanced
              medical interventions to manage complications and ensure the best
              possible outcomes. Trust Healing Gloves for a safe and memorable
              delivery experience.
            </p>
            <button
              className="sm:px-4 px-2 sm:py-2 py-1 bg-pink-600 text-white rounded sm:text-lg text-xs sm:font-bold
              font-medium  sm:mt-5  mt-2 w-fit "
              onClick={() => navigate(navigationUrls.normalAndHighRiskDelivery)}
            >
              Read More
            </button>
          </div>
        </div>
      </div>
      <div className="w-screen flex justify-center items-center sm:py-8 py-4 bg-[#E3E8FF]">
        <div className="max-w-6xl flex sm:flex-row flex-col justify-center items-center sm:gap-12 gap-4">
          <div className="w-full sm:px-0 px-5 sm:hidden flex" >
            <img
              src={csection}
              alt="piles"
              className="max-w-full sm:h-[400px] sm:w-[400px] object-cover w-full h-[200px]"
            />
          </div>
          <div className="sm:text-base text-xs text-[#3E3E3E] font-normal w-full sm:px-0 px-5">
            <div>
              <span className="text-[#3E3E3E] font-bold sm:text-xl text-base pr-1">
                C-Section/LSCS - Expert Surgical Care -
              </span>
              A cesarean section (C-section) or lower segment cesarean section
              (LSCS) is a surgical procedure used to deliver a baby when vaginal
              delivery is not possible or safe. At Healing Gloves, our
              experienced surgeons perform C-sections with precision and care,
              ensuring the safety of both mother and baby. We provide
              comprehensive pre-operative and post-operative care to support
              your recovery and ensure the best possible outcomes. With our
              expert surgical care, you can have peace of mind during your
              delivery.
            </div>
            <button
              className="sm:px-4 px-2 sm:py-2 py-1 bg-pink-600 text-white rounded sm:text-lg text-xs sm:font-bold
              font-medium  sm:mt-5  mt-2 w-fit"
              onClick={() => navigate(navigationUrls.cSection)}
            >
              Read More
            </button>
          </div>
          <div className="w-full sm:px-0 px-5 sm:block hidden" >
            <img
              src={csection}
              alt="piles"
              className="max-w-full h-[400px] w-[400px]"
            />
          </div>
        </div>
      </div>
      <div className="w-screen flex justify-center items-center  flex-col">
        <div className="max-w-6xl flex sm:flex-row flex-col justify-center items-center sm:gap-12 sm:py-8 py-4 gap-4 ">
          <div className="w-full sm:px-0 px-5">
            <img src={postdl} alt="fissures" className="max-w-full h-auto" />
          </div>
          <div className="w-full flex flex-col items-center sm:px-0 px-5 ">
            <h4 className="sm:text-3xl  text-xl font-bold text-[#474747] text-center sm:py-2  py-1">
              Post-Delivery Care
            </h4>

            <p className="sm:text-base text-xs font-regular text-[#474747] sm:text-center">
              Post-delivery care is crucial for the recovery and well-being of
              new mothers. At Healing Gloves, we offer comprehensive postnatal
              care services, including physical recovery support, breastfeeding
              guidance, and emotional support. Our team is dedicated to helping
              you navigate the postpartum period with confidence and ease,
              ensuring that both you and your baby are healthy and thriving.
              Trust Healing Gloves for compassionate and expert post-delivery
              care.
            </p>

            <button
              className="sm:px-4 px-2 sm:py-2 py-1 bg-pink-600 text-white rounded sm:text-lg text-xs sm:font-bold
              font-medium  sm:mt-5  mt-2 w-fit "
              onClick={() => navigate(navigationUrls.postDeliveryCare)}
            >
              Read More
            </button>
          </div>
        </div>
      </div>
      <div className="w-screen flex justify-center items-center sm:py-8 py-4 bg-[#E3E8FF]">
        <div className="max-w-6xl flex sm:flex-row flex-col justify-center items-center sm:gap-8 gap-4">
          <div className="sm:text-base text-xs text-[#3E3E3E] font-normal w-full sm:px-0 px-5">
            <div>
              <span className="text-[#3E3E3E] font-bold sm:text-xl text-base pr-1">
                Complicated Pregnancies - Specialized Care 
              </span>
              Complicated pregnancies require specialized care and close
              monitoring to ensure the health and safety of both mother and
              baby. At Healing Gloves, our team of experts is experienced in
              managing high-risk pregnancies and providing advanced medical
              interventions when necessary. We offer personalized care plans
              tailored to address the unique challenges of complicated
              pregnancies, ensuring the best possible outcomes. With our
              specialized care, you can have confidence and support throughout
              your pregnancy journey.
            </div>
            <button
              className="sm:px-4 px-2 sm:py-2 py-1 bg-pink-600 text-white rounded sm:text-lg text-xs sm:font-bold
              font-medium  sm:mt-5  mt-2 w-fit"
              onClick={() => navigate(navigationUrls.complicatedPregnancies)}
            >
              Read More
            </button>
          </div>
          <div className="w-full sm:px-0 px-5">
            <img
              src={comp}
              alt="piles"
              className="max-w-full  sm:w-[400px]  sm:h-[400px] h-[200px] w-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="w-screen flex justify-center items-center  flex-col">
        <div className="max-w-6xl flex sm:flex-row flex-col justify-center items-center sm:gap-12 gap-4  sm:py-8 py-4 ">
          <div className="w-full sm:block hidden">
            <img src={lap} alt="fissures" className="max-w-full h-auto" />
          </div>
          <div className="w-full flex flex-col items-center sm:px-0 px-5 ">
            <h4 className="sm:text-3xl text-xl  font-bold text-[#474747] text-center py-2 ">
              Laparoscopic Hysterectomy
            </h4>

            <p className="sm:text-base text-xs font-regular text-[#474747] sm:text-center">
              Laparoscopic hysterectomy is a minimally invasive surgical
              procedure to remove the uterus. This technique offers faster
              recovery, less pain, and minimal scarring compared to traditional
              surgery. At Healing Gloves, our skilled surgeons perform
              laparoscopic hysterectomies with precision and care, ensuring the
              best outcomes for our patients. Whether for fibroids,
              endometriosis, or other conditions, trust Healing Gloves for
              expert surgical care.
            </p>

            <button
              className="sm:px-4 px-2 sm:py-2 py-1 bg-pink-600 text-white rounded sm:text-lg text-xs sm:font-bold
              font-medium  sm:mt-5  mt-2 w-fit"
              onClick={() => navigate(navigationUrls.laparoscopicHysterectomy)}
            >
              Read More
            </button>
          </div>
        </div>
      </div>
      <div className="w-screen flex justify-center items-center sm:py-8 py-4 bg-[#E3E8FF]">
        <div className="max-w-6xl flex sm:flex-row flex-col justify-center items-center sm:gap-8 gap-4">
          <div className="w-full sm:hidden flex px-5">
            <img src={ove} alt="piles" className="max-w-full h-auto" />
          </div>
          <div className="sm:text-base text-xs text-[#3E3E3E] font-normal w-full sm:px-0 px-5">
            <div>
              <span className="text-[#3E3E3E] font-bold sm:text-xl  text-base pr-1">
                Ovarian Cyst Surgery -
              </span>
              Ovarian cysts can cause pain and complications if not treated
              properly. At Healing Gloves, we offer effective surgical solutions
              for ovarian cysts, including minimally invasive procedures. Our
              team of experts ensures a thorough diagnosis and personalized
              treatment plan to address your specific needs. With our advanced
              techniques and compassionate care, you can be assured of the best
              outcomes.
            </div>
            <button
              className="sm:px-4 px-2 sm:py-2 py-1 bg-pink-600 text-white rounded sm:text-lg text-xs sm:font-bold
              font-medium  sm:mt-5  mt-2 w-fit "
              onClick={() => navigate(navigationUrls.ovarianCystSurgery)}
            >
              Read More
            </button>
          </div>
          <div className="w-full sm:block hidden ">
            <img src={ove} alt="piles" className="max-w-full h-auto" />
          </div>
        </div>
      </div>
      <div className="w-screen flex justify-center items-center  flex-col">
        <div className="max-w-6xl flex  sm:flex-row flex-col justify-center items-center sm:gap-12 gap-4  sm:py-8 py-4 ">
          <div className="w-full sm:px-0 px-5">
            <img
              src={myoma}
              alt="fissures"
              className="max-w-full sm:h-[400px] sm:w-[400px] w-full h-[200px] object-cover"
            />
          </div>
          <div className="w-full flex flex-col items-center  sm:px-0 px-5">
            <h4 className="sm:text-3xl text-xl font-bold text-[#474747] text-center sm:py-2 ">
              Myoma Surgery
            </h4>

            <p className="sm:text-base text-xs font-regular text-[#474747] sm:text-center">
              Myomas, or fibroids, are non-cancerous growths in the uterus that
              can cause symptoms like heavy bleeding and pain. At Healing
              Gloves, we offer specialized myoma surgery to remove fibroids and
              restore your health. Our team of experts utilizes advanced
              surgical techniques to ensure effective treatment and a quick
              recovery. With our personalized care, you can achieve relief from
              fibroid-related symptoms.
            </p>

            <button
              className="sm:px-4 px-2 sm:py-2 py-1 bg-pink-600 text-white rounded sm:text-lg text-xs sm:font-bold
              font-medium  sm:mt-5  mt-2 w-fit "
              onClick={() => navigate(navigationUrls.myomaSurgery)}
            >
              Read More
            </button>
          </div>
        </div>
      </div>
      <div className="w-screen flex justify-center items-center sm:py-8 py-4  bg-[#E3E8FF]">
        <div className="max-w-6xl flex sm:flex-row flex-col justify-center items-center sm:gap-8 gap-4">
          <div className="sm:text-base  text-xs text-[#3E3E3E] font-normal w-full sm:px-0 px-5">
            <div>
              <span className="text-[#3E3E3E] font-bold sm:text-xl text-base pr-1">
                PCOD Treatment - Comprehensive Management
              </span>
              Polycystic Ovary Disease (PCOD) is a common hormonal disorder that
              affects women's reproductive health. At Healing Gloves, we provide
              comprehensive management and treatment for PCOD, including
              lifestyle changes, medication, and hormonal therapy. Our team of
              experts is dedicated to helping you manage your symptoms and
              improve your overall health and fertility. Trust Healing Gloves
              for effective and compassionate PCOD treatment.
            </div>
            <button
              className="sm:px-4 px-2 sm:py-2 py-1 bg-pink-600 text-white rounded sm:text-lg text-xs sm:font-bold
              font-medium  sm:mt-5  mt-2 w-fit"
              onClick={() => navigate(navigationUrls.pcodTreatment)}
            >
              Read More
            </button>
          </div>
          <div className="w-full sm:px-0 px-5">
            <img src={pcod} alt="piles" className="max-w-full h-auto"/>
          </div>
        </div>
      </div>
      <div className="w-screen flex justify-center items-center  flex-col">
        <div className="max-w-6xl flex  sm:flex-row flex-col justify-center items-center sm:py-8 py-4">
          <div className="w-full sm:px-0 px-5 sm:flex hidden">
            <img
              src={open}
              alt="fissures"
              className="max-w-full sm:w-[350px]  sm:h-[350px] h-[200px] w-full object-cover "
            />
          </div>
          <div className="w-full flex flex-col items-center sm:px-0 px-5">
            <h4 className="sm:text-3xl text-lg font-bold text-[#474747] text-center sm:py-2 ">
              Women Hygiene and Care
            </h4>

            <p className="sm:text-base text-xs font-regular text-[#474747] sm:text-center">
              Maintaining good hygiene and care is essential for women's health.
              At Healing Gloves, we offer expert guidance on women’s hygiene
              practices, including menstrual health, intimate hygiene, and
              overall well-being. Our team provides personalized advice and
              support to help you maintain optimal health and prevent
              infections. With our comprehensive care, you can achieve better
              health and confidence.
            </p>

            <button
              className="sm:px-4 px-2 sm:py-2 py-1 bg-pink-600 text-white rounded sm:text-lg text-xs sm:font-bold
              font-medium  sm:mt-5  mt-2 w-fit "
              onClick={() => navigate(navigationUrls.womenHygieneCare)}
            >
              Read More
            </button>
          </div>
        </div>
      </div>

      <section className="w-screen flex justify-center items-center sm:py-16 py-4 bg-gradient-to-br from-blue-100 via-white to-pink-100">
        <div className="max-w-6xl">
          <h1 className="text-xl sm:text-5xl text-[#2A3986] font-extrabold text-center sm:mb-12 mb-4 relative">
            Our Gynecologist Specialist

          </h1>

          <div className="flex flex-col md:flex-row items-center md:items-start sm:gap-12 gap-4">
            <div className="w-full md:w-1/3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A3986] to-transparent opacity-20 rounded-lg"></div>
                <img
                  src={doctorssar.doctorsimg}
                  alt={doctorssar.label}
                  className="max-w-full h-auto object-cover rounded-lg shadow-lg flex justify-center items-center "
                />
              </div>
            </div>

            <div className="w-full md:w-2/3 sm:space-y-6 space-y-3">
              <h2 className="sm:text-3xl  text-lg font-bold text-[#2A3986]">
                {doctorssar.label}
              </h2>
              <p className="sm:text-xl text-sm text-gray-700 font-medium">
                {doctorssar.content}
              </p>
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="sm:h-6 sm:w-6 h-3 w-3 text-pink-500"
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
                  Experience: {doctorssar.Exp}
                </p>
              </div>
              <button
                href={doctorssar.link}
                className="inline-block sm:mt-4 mt-2 sm:px-8 px-3  sm:py-2 py-1 hover:bg-[#2A3986] text-white font-semibold rounded-full bg-pink-500 transition duration-300 ease-in-out sm:text-xl text-sm"
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
