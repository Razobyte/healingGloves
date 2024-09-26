import fb from '../../../public/facebook.png';
import instra from '../../../public/instagram.png';
import link from '../../../public/linkedin.png';
import bg from '../../../public/bgfooter.png';
import loc from '../../../public/whitesocialmedia (3).png';
import phone from '../../../public/whitesocialmedia (2).png';
import mail from '../../../public/whitesocialmedia (1).png';
import youtube from '../../../public/youtube (3).png'
import { ModalButton } from '../Button';
const FooterPage = () => {
    const megaMenus = [
        {
            name: 'Aesthetics & Maxillofacial',
            url: '/speciality/asthetics'
        },
        {
            name: 'Gynecologist/obstetrics',
            url: '/speciality/gynocology'
        },
        {
            name: 'Laparoscopy/Robotics',
            url: '/speciality/advanced-laparoscopy-robotics'
        },
        {
            name: 'IVF/Fertility',
            url: '/speciality/ivf-fertility'
        },
        {
            name: 'Proctology',
            url: '/speciality/proctology'
        },
        {
            name: 'Urology/Andrology',
            url: '/speciality/urology'
        },
        {
            name: "Vascular",
            url: "/speciality/vascular",
        },
        {
            name: "Weight Loss/ Bariatric",
            url: "/speciality/weight-loss",
        }
    ];


    return (
        <>
            <div className="footer-button-div w-screen flex items-center justify-center bg-gray-300 pb-5">
                <div className="max-w-6xl w-full flex flex-col md:flex-row justify-between items-center px-4">
                    <h3 className="text-gray-700 font-extrabold text-center xl:text-3xl xxl:text-3xl 
                    lg:text-2xl md:text-2xl text-sm m-0 p-0 sm:pt-5 pt-2">
                        Book Your Doctor Consultation at Healing Gloves!
                    </h3>
                    <ModalButton btnname="Book An Appointment" />
                </div>
            </div>

            <div
                className="w-screen flex flex-col md:flex-row justify-center items-center sm:pt-8 pt-4"
                style={{ backgroundImage: `url(${bg})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
            >
                <div className="max-w-7xl w-full px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 sm:gap-12 gap-6">
                        <div className="w-full">
                            <h2 className="xl:text-2xl lg:text-2xl  md:text-xl  font-bold sm:mb-4 mb-2 text-white">About Us</h2>
                            <p className="sm:text-lg text-sm sm:font-medium font-normal text-white">
                                Healing Gloves Polyclinic provides a comprehensive range of medical specialties, ensuring quality care and a patient-centric approach to health and wellness.
                            </p>
                            <h2 className="xl:text-2xl lg:text-2xl  md:text-xl font-bold sm:mb-2 text-white py-2">Follow Us</h2>
                            <div className="flex space-x-4 sm:pb-3">
                                {[
                                    { src: fb, href: 'https://www.facebook.com/profile.php?id=61561849801507' },
                                    { src: instra, href: 'https://www.instagram.com/healinggloves.co/' },
                                    { src: youtube, href: 'https://www.youtube.com/@healinggloves' }
                                ].map((social, index) => (
                                    <a key={index} href={social.href} target="_blank" rel="noopener noreferrer">
                                        <img src={social.src} alt="Social Icon" className="h-6 w-6 md:h-10 md:w-10" />
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="w-full sm:pb-5">
                            <h2 className="xl:text-2xl lg:text-2xl  md:text-xl font-bold sm:mb-4 mb-2 text-white">Speciality</h2>
                            <ul className="space-y-1">
                                {megaMenus.map((item, index) => (
                                    <li key={index}>
                                        <a href={item.url} className="sm:text-lg text-sm  sm:font-medium font-normal  hover:underline text-white">→ {item.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-full sm:mb-0 mb-8">
                            <h1 className="xl:text-2xl lg:text-2xl  md:text-xl font-bold text-lg text-left text-white sm:pb-3 pb-3">Get In Touch</h1>
                            <div className="sm:space-y-4 space-y-2">
                                <div className="flex items-center gap-3">
                                    <img src={loc} alt="Location" className="h-6 w-6 md:h-8 md:w-8" />
                                    <p className="sm:text-base text-xs   sm:font-medium font-normal text-white ">
                                        Shop no F-05, First Floor, <br />
                                        Global City Centre-II, Sector 33, Sohna, Haryana
                                    </p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <img src={phone} alt="Phone" className="h-6 w-6 md:h-8 md:w-8" />
                                    <p className=" sm:text-base text-xs  text-white sm:font-medium font-normal">IN +91 70158 81552</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <img src={phone} alt="Phone" className="h-6 w-6 md:h-8 md:w-8" />
                                    <p className="sm:text-base text-xs   sm:font-medium font-normal text-white ">IN +91 9310827648</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <img src={mail} alt="Mail" className="h-6 w-6 md:h-8 md:w-8" />
                                    <a href="mailto:hgpolyclinic@gmail.com">
                                        <p className="sm:text-base text-xs  text-white sm:font-medium font-normal ">hgpolyclinic@gmail.com</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white w-screen py-2 mt-2 flex justify-center items-center hidden">
                <div className="max-w-6xl w-full px-4">
                    <p className="text-xs sm:text-sm md:text-base text-black font-normal text-center">
                        Copyright © 2024 | The Healing Gloves | Powered by
                        <a
                            href="https://www.razobyte.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline"
                        >
                            Razobyte
                        </a>
                        Pvt. Ltd.
                    </p>
                </div>
            </div>
        </>
    );
};
export default FooterPage;