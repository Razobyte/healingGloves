import doctors1banner from "../../../public/asthetics-banner.jpeg";
import doctors from "../../../public/manihsa.jpg";
import img from "../../../public/doctors1 (5).png";
import img2 from "../../../public/doctors3 (5).png";
import img3 from "../../../public/doctors3 (4).png";
import img4 from "../../../public/doctors3 (3).png";
import call from "../../../public/blue-doctors1 (1).png";
import mail from "../../../public/blue-doctors1 (2).png";
import { useNavigate } from "react-router-dom";
export default function Doctors3() {
  const navigate = useNavigate();
  return (
    <>
   
    <div className="relative w-screen flex justify-start items-center">
        <img src={doctors1banner} alt="banner" className="w-full h-[450px] object-cover shadow-md" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
        <div className="absolute flex justify-center items-center pl-20">
          <h1 className="text-6xl font-bold text-white">Your Trusted Maxillofacial <br/> &   Aesthetic Specialist</h1>
         
        </div>
        {/* <div className="hidden lg:block absolute top-10 right-40 p-6 bg-white shadow-lg rounded-lg">
          <Form />
        </div> */}
      </div>
      <div className="w-screen flex justify-center items-center bg-[#36A1FC] pt-12">
        <div className="max-w-6xl flex justify-center items-center gap-8">
          <div className="w-full pb-12">
            <h1 className="text-5xl font-[800] text-white py-2">
              Dr. Manisha Yadav
            </h1>

            <div className="text-sm font-regular text-white pb-2">
              Dr. Manisha, BDS, MDS, Fellowship in Cleft & Craniofacial Surgery
              Dr. Manisha is a highly skilled maxillofacial surgeon with 6.5
              years of experience. She holds a BDS in Dentistry, an MDS in
              Maxillofacial Surgery, and a Fellowship in Cleft & Craniofacial
              Surgery. Currently, she serves as a Maxillofacial Consultant at
              Apollo Spectra Sheetla Hospital in Gurgaon and also freelances as
              an attending consultant at multiple hospitals.
            </div>
            <div className="text-sm font-regular text-white pb-2">
              Dr. Manisha is an esteemed member of several professional bodies,
              including the Association of Oral and Maxillofacial Surgeons of
              India, the International Association of Oral Implantologists, and
              the Indian Society of Cleft Lip Palate and Craniofacial Anomalies.
            </div>
            <div className="text-sm font-regular text-white pb-2">
              She has independently performed numerous surgeries, such as
              mandible and condylar fracture fixations, orthognathic surgeries
              like Lefort-1 and BSSO, mandibular and Lefort-1 distractions, and
              segmental resections of the mandible. Her expertise also extends
              to cleft palate repair, basic plastic surgery including skin
              grafting and scar revision, and TMJ surgery.
            </div>
            <div className="text-sm font-regular text-white pb-2">
              In addition, Dr. Manisha has assisted in complex procedures like
              unilateral and bilateral cleft lip surgeries, ear reconstructions,
              craniosynostosis corrections, facial bi-partitions, parotidectomy,
              and navigation-guided orbital reconstruction. Her comprehensive
              skill set and dedication to her field make her a trusted and
              respected surgeon in maxillofacial and craniofacial surgery.
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
                onClick={() => navigate("/speciality/asthetics/botox")}
                className="cursor-pointer"
              >
                <img
                  src={img2}
                  alt="General Surgery"
                  className="max-w-full h-auto"
                />
                <h2 className="text-[#3E3E3E] text-xl font-[550] text-center">
                  Skin
                </h2>
              </div>
              <div
                onClick={() => navigate("/speciality/asthetics/hairtransplant")}
                className="cursor-pointer"
              >
                <img
                  src={img3}
                  alt="Laparoscopic Surgery"
                  className="max-w-full h-auto"
                />
                <h2 className="text-[#3E3E3E] text-xl font-[550] text-center">
                  Hair
                </h2>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div
                onClick={() => navigate("/speciality/asthetics/orofacial")}
                className="cursor-pointer"
              >
                <img
                  src={img4}
                  alt="General Surgery"
                  className="max-w-full h-auto"
                />
                <h2 className="text-[#3E3E3E] text-xl font-[550] text-center">
                  Orofacial
                </h2>
              </div>
            </div>
          </div>
          <div className="bg-[#2A3986]  px-12 py-6">
            <img src={img} alt="" className="max-w-full h-auto" />
            <div
              className="justify-center flex items-center bg-white mb-5"
              onClick={() => navigate("/contact-us")}
            >
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
