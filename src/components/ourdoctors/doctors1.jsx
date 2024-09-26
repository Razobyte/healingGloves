import doctors1banner from '../../../public/sambhav-banner.jpeg'
import doctors from '../../../public/drksdfkkdklvm 1.png';
import img from '../../../public/doctors1 (5).png';
import img1 from '../../../public/doctors1 (4).png';
import img2 from '../../../public/doctors1 (3).png';
import img3 from '../../../public/doctors1 (2).png';
import img4 from '../../../public/doctors1 (1).png';
import img5 from '../../../public/lap.png'
import call from '../../../public/blue-doctors1 (1).png';
import mail from '../../../public/blue-doctors1 (2).png';
import { useNavigate } from 'react-router-dom';
export default function Doctors1() {
  const navigate=useNavigate()
    return (
        <>
        <div className="relative w-screen flex justify-center items-center">
        <img src={doctors1banner} alt="banner" className="w-full h-[450px] object-cover shadow-md" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
        <div className="absolute flex justify-center items-center flex-col ">
          <h1 className="text-6xl font-bold text-white text-center">Meet Our Expert General Surgeon </h1>
          <p className='pt-2 text-3xl font-medium text-white'>Specialties in Proctology,  Vascular Surgery, Laparoscopy, Urology & Weight Loss</p>
         
        </div>
        {/* <div className="hidden lg:block absolute top-10 right-40 p-6 bg-white shadow-lg rounded-lg">
          <Form />
        </div> */}
      </div>
            <div className='w-screen flex justify-center items-center bg-[#36A1FC] pt-12'>
                <div className='max-w-7xl flex justify-center items-center'>
                    <div className='w-full pb-12'>
                        <h1 className='text-5xl font-[800] text-white py-2'>Dr Shambhav Chandra</h1>
                        <p className='text-[18px] font-[400] text-white pb-3'>Dr. Shambhav  Chandra is a distinguished general surgeon with 6.5 years of extensive experience. He holds an M.B.B.S degree and an M.S in General Surgery. Dr. Chandra is registered with the Delhi Medical Council (Permanent Reg No: DMC/R/9704), Haryana Medical Council, and is a life member of both the Deccan Surgical Society and Kolhapur Surgical Society.
                        </p>
                        <div className='text-sm font-regular text-white pb-2'>
                        Dr. Chandra specializes in a broad range of general surgeries including hydrocele repair, hernioplasty, herniotomy, stapler haemorrhoidectomy, fissurectomy, fistulectomy, appendicectomy, exploratory laparotomy, bowel resection anastomosis, pyloric and duodenal perforation repair, hemicolectomy (right and left), pancreatogastrostomy, pancreatojejunostomy, incisional and umbilical hernia repair, thyroidectomy, varicose veins stripping and ligation, below and above knee amputations, and modified radical mastectomy.
                        </div>
                        <div className='text-sm font-regular text-white pb-2'>
                        In the realm of laparoscopic surgery, Dr. Chandra is proficient in diagnostic laparoscopy, laparoscopic appendicectomy, and laparoscopic cholecystectomy. He is also skilled in performing OGDScopy, including variceal banding and endoscopic biopsy.

                        </div>
                        <div className='text-sm font-regular text-white'>
                        Dr. Chandra's dedication to surgical excellence and his commitment to patient care make him a highly trusted and reliable surgeon. His membership in esteemed professional bodies and his comprehensive surgical skills ensure that patients receive top-notch medical care and surgical outcomes.
                        </div>
                    </div>
               
                <div className='w-full'>
                    <img src={doctors} alt="banner" className="max-w-full " />
                </div>
                </div>
            </div>
            <div className='w-screen flex justify-center items-center py-10'>
      <div className='max-w-6xl flex justify-center gap-40'>
        <div>
          <h1 className='text-[#3E3E3E] text-5xl font-[800] text-center py-12'>Specialized Medical Expertise</h1>
          <div className='flex justify-center items-center gap-20 pb-20'>
            <div  onClick={()=>navigate('/speciality/proctology')} className='cursor-pointer'>
              <img src={img1} alt="General Surgery" className="max-w-full h-auto" />
              <h2 className='text-[#3E3E3E] text-xl font-[550] text-center'>Proctology</h2>
            </div>
            <div  onClick={()=>navigate('/speciality/advanced-laparoscopy-robotics')} className='cursor-pointer'>
              <img src={img5} alt="Laparoscopic Surgery" className="max-w-full h-auto" />
              <h2 className='text-[#3E3E3E] text-xl font-[550] text-center'>Laparoscopy</h2>
            </div>
          </div>
          <div className='flex justify-center items-center gap-20  pb-10'>
            <div  onClick={()=>navigate('/speciality/urology')} className='cursor-pointer'>
              <img src={img2} alt="General Surgery" className="max-w-full h-auto" />
              <h2 className='text-[#3E3E3E] text-xl font-[550] text-center'>Urology</h2>
            </div>
            <div onClick={()=>navigate('/speciality/vascular')} className='cursor-pointer'>
              <img src={img3} alt="Laparoscopic Surgery" className="max-w-full h-auto" />
              <h2 className='text-[#3E3E3E] text-xl font-[550] text-center'>Vascular</h2>
            </div>
          </div>
          <div className='flex justify-center items-center hidden'>
            <div onClick={()=>navigate('/speciality/weight-loss')} className='cursor-pointer'>
              <img src={img4} alt="General Surgery" className="max-w-full h-auto" />
              <h2 className='text-[#3E3E3E] text-xl font-[550] text-center'>Weight Loss</h2>
            </div>
          </div>
        </div>
        <div className='bg-[#2A3986]  px-8 py-4'>
          <img src={img} alt="" className='max-w-full h-auto' />
          <div className='justify-center flex items-center bg-white mb-5'
          >
            <button className='text-[#2A3986] text-2xl font-[800] text-opacity-90 py-2'
            onClick={()=>navigate('/contact-us')}>Book Appointment</button>
          </div>
          <h2 className='text-3xl font-[800] text-white text-opacity-90 pb-4'>CONTACT INFO</h2>
          <div className='flex items-center gap-4 pb-3'>
            <img src={mail} alt="" className='max-w-full h-auto' />
            <p className='text-white text-lg font-medium'>+91 70158 81552</p>
          </div>
          <div className='flex items-center gap-4'>
            <img src={call} alt="" className='max-w-full h-auto' />
            <p className='text-white text-lg font-medium'>
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
    )
}