
import banner from '../../../../../public/proctologybanner.png'
import Form from '../../../form';
import {FaArrowRight } from 'react-icons/fa6';
import consult from '../../../../../public/consultdoctor.jpg';
import SinusTreatment from './do';


export default function Sinus() {
  const symptoms = [
    "Persistent nasal congestion",
    "Thick, discolored nasal discharge",
    "Facial pain or pressure",
    "Reduced sense of smell and taste",
    "Headache or ear pain",
    "Postnasal drip or sore throat"
  ];
  
  const reasons = [
    "Accurate diagnosis to identify the underlying cause of sinus problems",
    "Professional treatment to alleviate symptoms and promote healing",
    "Prevention of complications such as chronic sinusitis or infections",
    "Expert advice on managing symptoms and improving sinus health",
    "Tailored treatment plans to address specific sinus conditions",
    "Monitoring and follow-up care to ensure complete recovery"
  ];
  
    return (
        <>
            <div className="relative w-screen ">
                <img src={banner} alt="banner" className="w-full h-auto shaodw-md z-10" />
                <div className="absolute inset-0 gradient-overlay"></div>
                <h1 className='text-7xl font-[700] text-[#fff] absolute top-40 left-10'>SINUS</h1>
                <div className='text-md font-[500] text-[#fff] absolute top-60 left-10'>Sinus Health-Advanced Care at Healing Gloves with Dr. Shambhav Chandra</div>

                <div className="absolute lg:top-10 xxl:top-5 right-40 p-0 w-1/4">
                    <Form />
                </div>
            </div>
            <div className='w-screen flex justify-center items-center py-8'>
                <div className='max-w-6xl flex justify-center items-center flex-col'>
                    <div>
                        <h4 className='text-3xl font-bold text-[#474747] text-center pb-4'>Sinus Health-Advanced Care at Healing Gloves with Dr. Shambhav Chandra
                        </h4>
                        <p className='text-md font-regular text-[#474747] text-center'>Sinus health is crucial for overall well-being, as sinus problems can cause significant discomfort and impact daily life. At Healing Gloves, Dr. Shambhav Chandra provides expert care for various sinus conditions, using advanced diagnostic tools and treatment methods. With a focus on patient comfort and effective results, Dr. Chandra ensures personalized and comprehensive care for all sinus-related issues.
                        </p>
                    </div>

                </div>

            </div>
            <div className='w-screen flex flex-col justify-center items-center py-8 bg-[#E3E8FF]'>
      <div className='max-w-6xl flex flex-col justify-center items-center'>
        <h1 className='text-3xl text-[#474747] font-bold mb-6'>Symptoms of Sinus</h1>
        <div className='flex flex-row justify-between w-full'>
          <div className='flex flex-wrap gap-5 justify-center' >
            {symptoms.map((symptom, index) => (
              <div key={index} className='flex items-center mb-0 list-none  cursor-pointer'>
                <li  className='bg-pink-600 text-white p-2 rounded-lg text-[15px] font-medium'>{symptom}</li>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
      <div className='w-screen flex flex-col justify-center items-center py-5'>
      <div className='max-w-6xl flex justify-center items-center'>
          <div>
          <h1 className='text-3xl text-[#474747] font-bold py-5'>Why Consult a Doctor?</h1>
          {reasons.map((symptom, index) => (
              <div key={index} className='flex  mb-4'>
                <FaArrowRight className='text-[#474747] mr-2' />
                <span className='text-[#474747]'>{symptom}</span>
              </div>
            ))}
          </div>
          <div>
            <img src={consult} alt="consult" className='max-w-full h-[350px]' />
          </div>
            
          </div>
        
       
    </div>
    <SinusTreatment/>

               
           
            
        </>
    )
}