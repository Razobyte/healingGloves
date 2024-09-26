import React from "react";
import banner from "../../../public/specialitybanner.png";
import img1 from "../../../public/prcatology.png";
import img2 from "../../../public/Advanced LaparoscopyRobotics.png";
import img3 from "../../../public/weightloss.png";
import img4 from "../../../public/urology.png";
import img5 from "../../../public/obestric.png";
import img6 from "../../../public/Ivf.png";
import img7 from "../../../public/circulatory.png";
// import img8 from "../../../public/aesthetics.png";

const specialtyData = [
  {
    title: "Proctology",
    image: img1,
    url: "/#speciality/proctology",
    items: [
      { label: "Piles", url: "/#speciality/proctolgy/piles" },
      { label: "Fissures", url: "/#speciality/proctolgy/fissures" },
      { label: "Fistula", url: "/#speciality/proctolgy/fistula" },
      { label: "Pilonidal Sinus", url: "/#speciality/proctolgy/pilonidal" },
      { label: "Abscess", url: "/#speciality/proctolgy/abscess" },
      { label: "Warts", url: "/#speciality/proctolgy/warts" },
    ],
  },
  {
    title: "Urology",
    image: img4,
    url: "/#speciality/urology",
    items: [
      { label: "Circumcision", url: "/#speciality/urology/circumcision" },
      { label: "Cystoscopy", url: "/#speciality/urology/cystoscopy" },
      { label: "Kidney stone", url: "/#speciality/urology/kidney-stone" },
      { label: "Urs", url: "/#speciality/urology/urs" },
      { label: "Rirs", url: "/#speciality/urology/rirs" },
      { label: "Prostate", url: "/#speciality/urology/prostate" },
    ],
  },
  {
    title: "Advanced Laparoscopy/Robotics",
    image: img2,
    url: "/#speciality/advanced-laparoscopy-robotics",
    items: [
      {
        label: "Gallstones",
        url: "/#speciality/advanced-laparoscopy-robotics/gallstones",
      },
      {
        label: "Inguinal hernia",
        url: "/#speciality/advanced-laparoscopy-robotics/inguinal-hernia",
      },
      {
        label: "Umbilical hernia",
        url: "/#speciality/advanced-laparoscopy-robotics/umbilical-hernia",
      },
      {
        label: "Incisional hernia",
        url: "/#speciality/advanced-laparoscopy-robotics/incisional-hernia",
      },
      {
        label: "Hiatus hernia",
        url: "/#speciality/advanced-laparoscopy-robotics/hiatus-hernia",
      },
      {
        label: "Appendix",
        url: "/#speciality/advanced-laparoscopy-robotics/appendix",
      },
    ],
  },
  {
    title: "Weight Loss/ Bariatric",
    image: img3,
    url: "/#speciality/weight-loss",
    items: [
      { label: "Non surgical", url: "/#speciality/weight-loss/non-surgical" },
      {
        label: "Endoscopic balloon",
        url: "/#speciality/weight-loss/endoscopicballon",
      },
      { label: "Allurion", url: "/#speciality/weight-loss/allurion" },
      {
        label: "Bariatric surgery",
        url: "/#speciality/weight-loss-bariatric/bariatric-surgery",
      },
    ],
  },
  {
    title: "Aesthetics & Maxillofacial",
    image: img7,
    url: "/#speciality/asthetics",
    items: [
      { label: "Botox", url: "/#speciality/asthetics/botox" },
      { label: "Filler", url: "/#speciality/asthetics/filer" },
      {
        label: "RF Rejuvenation",
        url: "/#speciality/asthetics/rf-rejuvenation",
      },
      { label: "Facelift", url: "/#speciality/asthetics/facelift" },
      {
        label: "Hair Transplant",
        url: "/#speciality/asthetics/hairtransplant",
      },
      { label: "PRP Therapy", url: "/#speciality/asthetics/prp-therapy" },
      { label: "Orofacial", url: "/#speciality/asthetics/orofacial" },
    ],
  },
  {
    title: "IVF/Fertility",
    image: img6,
    url: "/#speciality/ivf-fertility",
    items: [
      {
        label: "Best infertility treatment",
        url: "/#speciality/ivf-fertility/best-infertility-treatment",
      },
      { label: "IVF & IUI", url: "/#speciality/ivf-fertility/ivf-iui" },
      {
        label: "Hysteroscopy & laparoscopic treatment",
        url: "/#speciality/ivf-fertility/hysteroscopy-laparoscopic-treatment",
      },
      {
        label: "Genetic screening",
        url: "/#speciality/ivf-fertility/genetic-screening",
      },
      { label: "ICSI", url: "/#speciality/ivf-fertility/icsi" },
    ],
  },
  {
    title: "Vascular",
    image: img7,
    url: "/#speciality/vascular",
    items: [
      {
        label: "Varicose vein by laser",
        url: "/#speciality/vascular/varicose-vein-by-laser",
      },
      {
        label: "Varicose vein by sclerotherapy & embolizaton",
        url: "/#speciality/vascular/varicose-vein-sclerotherapy",
      },
      { label: "Varicocele", url: "/#speciality/vascular/varicocele" },
      { label: "DVT", url: "/#speciality/vascular/dvt" },
      { label: "AV Fistula", url: "/#speciality/vascular/av-fistula" },
    ],
  },
  {
    title: "Gynecologist & Obstetrics",
    image: img5,
    url: "/#speciality/obestric-gyno",
    items: [
      {
        label: "Prenatal care",
        url: "/#speciality/obstetrics-gyno/prenatal-care",
      },
      {
        label: "Normal & high risk delivery",
        url: "/#speciality/obstetrics-gyno/normal-high-risk-delivery",
      },
      {
        label: "c-section/Lscs",
        url: "/#speciality/obstetrics-gyno/c-scetion-lscs",
      },
      {
        label: "Post delivery care",
        url: "/#speciality/obstetrics-gyno/post-delivery-care",
      },
      {
        label: "Complicated pregnancies",
        url: "/#speciality/obstetrics-gyno/complicated-pregnancies",
      },
      {
        label: "Laparoscopic hysterectomy",
        url: "/#speciality/obstetrics-gyno/laparoscopic-hysterectomy",
      },
      {
        label: "Ovarian cyst surgery",
        url: "/#speciality/obstetrics-gyno/ovarian-cyst-surgery",
      },
      {
        label: "Open hysterectomy",
        url: "/#speciality/obstetrics-gyno/open-hysterectomy",
      },
      {
        label: "Myoma surgery",
        url: "/#speciality/obstetrics-gyno/myoma-surgery",
      },
      {
        label: "PCOD treatment",
        url: "/#speciality/obstetrics-gyno/pcod-treatment",
      },
      {
        label: "Women hygiene & care",
        url: "/#speciality/obstetrics-gyno/women-hygiene-care",
      },
    ],
  },
];

const SpecialtyCard = ({ title, image, items, isEven }) => {
  const isGynecology = title === "Gynecologist & Obstetrics";

  return (
    <div className="w-full max-w-6xl bg-[#2A3986] text-white flex items-center justify-between rounded-lg
     h-[250px] my-12 ">
      {!isEven && (
        <div className="relative w-1/3">
          <div className="w-64 h-64 rounded-full overflow-hidden">
            <img
              src={image}
              alt={title}
              className="absolute -bottom-5 -left-16 max-w-full"
            />
          </div>
        </div>
      )}
      <div className={`space-y-1 py-10 w-2/3 ${isEven ? "pl-20" : "pr-0"}`}>
        <h2 className="text-4xl font-bold">{title}</h2>
        <div
          className={`grid ${isGynecology ? "grid-cols-2" : "grid-cols-2"
            } text-lg gap-1 font-[550]`}
        >
          {items.map((item, index) => (
            <a
              key={index}
              href={item.url}
              className="hover:text-gray-300 transition-colors cursor-pointer"
            >
              ▶ {item.label}
            </a>
          ))}
        </div>
      </div>
      {isEven && (
        <div className="relative w-1/3">
          <div className="w-64 h-64 rounded-full overflow-hidden">
            <img src={image} alt={title} className="absolute max-w-full" />
          </div>
        </div>
      )}
    </div>
  );
};

export default function Speciality() {
  return (
    <>

      <div className="w-screen relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-black opacity-40"></div>
        <img src={banner} alt="banner" className="w-full  h-auto sm:h-[450px] object-cover" />


      </div>
      <div className="container mx-auto py-12 flex flex-col items-center">
        {specialtyData.map((specialty, index) => (
          <SpecialtyCard key={index} {...specialty} isEven={index % 2 === 0} />
        ))}
      </div>
    </>

  );
}
