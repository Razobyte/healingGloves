import banner from '../../../public/ABOUT US BANNER.jpg';
import { useState } from 'react';
import Count from './count';
import { useInView } from 'react-intersection-observer';
import Facilities from './facilities';

import whychhose from '../../../public/whychoose.png'
import location from '../../../public/location.png';
import { useNavigate } from 'react-router-dom';
import OurDoctorsMainPage from '../home/OurDoctors';

export default function AboutUs() {
    const navigate = useNavigate()
    const [clients, setClients] = useState(false);
    const { ref, inView } = useInView({
        triggerOnce: false,
        onChange: (inView) => setClients(inView)
    });

    return (
        <>
            <div ref={ref} className="w-screen flex justify-center items-center" onClick={() => navigate('/contact-us')}>

                <img src={banner} alt="footer" className="w-full h-auto object-cover" />

            </div>
            <Count clients={clients} />
            <Facilities />
            <OurDoctorsMainPage />

            <div className='w-full flex flex-col justify-center items-center pb-12'>
                <h1 className='text-xl sm:text-5xl font-extrabold text-[#3E3E3E] sm:pt-8 sm:pb-5 pt-4 pb-4 text-center'>
                    <span className="text-blue-500">W</span>hy
                    <span className="text-blue-500"> C</span>hoose the
                    <span className="text-blue-500 ps-2"> H</span>ealing
                    <span className="text-blue-500"> G</span>loves
                </h1>

                <div className='max-w-6xl grid grid-cols-1 sm:grid-cols-2 gap-8 px-4'>
                    <div>
                        <p className='text-base sm:text-lg font-medium text-[#3E3E3E] sm:py-4 sm:pb-0 pb-4'>
                            At The Healing Gloves, we’re devoted to making a tremendous
                            difference within the lives of our patients. Whether you require
                            habitual hospital treatment, specialized remedy, or emergency
                            services, you could accept as true with us to offer you with the care
                            and help you need. Welcome to The Healing Gloves Hospital, wherein
                            healing starts with compassion.
                        </p>
                        <img src={whychhose} alt="whychoose" className='w-full h-auto object-cover' />
                    </div>

                    <div className='space-y-6 sm:space-y-8 pt-0 sm:pt-12'>
                        <div className='bg-[#2AA4A5] px-4 py-6 sm:py-8 shadow-lg'>
                            <h4 className='text-white text-lg sm:text-xl font-bold'>Expertise</h4>
                            <div className='text-sm sm:text-base font-regular text-white'>
                                Among our crew of healthcare experts are a number of the pinnacle surgeons, doctors, nurses, and beneficial aid personnel of their precise specialties.
                            </div>
                        </div>

                        <div className='bg-[#2490EB] px-4 py-6 sm:py-8 shadow-lg'>
                            <h4 className='text-white text-lg sm:text-xl font-bold'>Dedication to Quality</h4>
                            <div className='text-sm sm:text-base font-regular text-white'>
                                Our top concerns are protection and quality. To make sure that
                                our patients receive the highest high-quality care feasible, we
                                abide by strict quality policies and protocols.
                            </div>
                        </div>

                        <div className='bg-[#2A3986] px-4 py-6 sm:py-8 shadow-lg'>
                            <h4 className='text-white text-lg sm:text-xl font-bold'>Community Engagement</h4>
                            <div className='text-sm sm:text-base font-regular text-white'>
                                We are deeply involved in community outreach programs and
                                projects aimed toward promoting health education,
                                preventive care, and disease management within the
                                local community.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className=' hidden w-screen flex-col justify-center items-center pb-12'>
                <h1 className='text-5xl font-[800] text-[#3E3E3E] text-opacity-90 pb-8'> Get  Direction </h1>
                <div className='max-w-6xl grid grdi-cols grid-cols-2 space-x-20'>

                    <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1754.1009690480653!2d77.07747973865698!3d28.44332839394217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18961ef4c91f%3A0xe3168c2f91d847cd!2sPalm%20Grove%20Heights!5e0!3m2!1sen!2sin!4v1720356673730!5m2!1sen!2sin" width="600" height="450" loading="lazy" ></iframe>
                    </div>
                    <div>
                        <p className='text-xl font-[550] text-[#3E3E3E] '>B-2-204, Palm Grove Heights, Sector-52,
                            <br />  Ardee City, Wazirabad, Gurugram, <br />
                            Haryana 122003</p>
                        <div className='flex justify-center items-center pt-5'>
                            <img src={location} alt="location" className='max-w-full h-[350px] ' />

                        </div>

                    </div>


                </div>

            </div>
        </>
    );
}
