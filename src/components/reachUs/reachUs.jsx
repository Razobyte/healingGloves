import banner from '../../../public/reachusbanner.jpeg';
import loc from '../../../public/socialmediaiocn (3).png';
import phone from '../../../public/socialmediaiocn (2).png';
import mail from '../../../public/socialmediaiocn (1).png';
import Form from '../form';

export default function ContactUs() {
    return (
        <>
            {/* Banner Section */}
            <div className="relative w-screen flex justify-center items-center">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black to-black sm:opacity-70 opacity-50"></div>
                {/* Image */}
                <img src={banner} alt="banner" className=" max-w-full h-auto sm:w-full sm:h-[450px] object-cover" />
                {/* Text overlay */}
                <div className="absolute flex justify-center items-center flex-col">
                    <h1 className="  text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold
                     text-[#fff]">Reach Us</h1>
                    <p className="text-lg font-medium text-white sm:pt-3">For Your Appointment</p>
                </div>
            </div>
            {/* Main Content Section */}
            <div className="w-screen flex flex-col lg:flex-row justify-center items-start py-16 px-6 lg:px-20 sm:space-y-12  space-y-5 lg:space-y-0 lg:space-x-20">
                {/* Contact Form */}
                <div className="w-full lg:w-1/2">
                    <Form />
                </div>

                {/* Contact Information */}
                <div className="w-full lg:w-1/2 sm:space-y-8">
                    <div className="sm:space-y-6 space-y-3">
                        <h2 className="text-2xl md:text-3xl sm:text-left text-center lg:text-4xl xl:text-5xl font-bold text-blue-900 sm:mb-6 mb-3">Call Us</h2>

                        <div className="flex items-start gap-4">
                            <img src={loc} alt="location" className="w-5 h-5 sm:w-10 sm:h-10 object-cover" />
                            <p className="sm:text-lg text-xs text-[#474747] font-medium">
                                B-2-204, Palm Grove Heights Apartment, Sector-52, Ardee City, Wazirabad, Gurgaon, Haryana - 122003
                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <img src={phone} alt="phone" className="w-5 h-5 sm:w-10 sm:h-10 object-cover" />
                            <p className="sm:text-lg text-xs text-[#474747] font-medium">IN +91 70158 81552</p>
                        </div>

                        <div className="flex items-center gap-4">
                            <img src={mail} alt="email" className="w-5 h-4 sm:w-10 sm:h-10 object-cover" />
                            <p className="sm:text-lg  text-xs text-[#474747] font-medium">hgpolyclinic@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Map Section */}
            <div className="w-full py-16 px-6 lg:px-20 md:block hidden">
                <h1 className="text-4xl font-bold text-center text-[#3E3E3E] pb-8">Get Directions</h1>
                <div className="w-full h-[550px] overflow-hidden rounded-lg shadow-lg">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1754.1009690480653!2d77.07747973865698!3d28.44332839394217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18961ef4c91f%3A0xe3168c2f91d847cd!2sPalm%20Grove%20Heights!5e0!3m2!1sen!2sin!4v1720356673730!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        loading="lazy"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                    ></iframe>
                </div>
            </div>
        </>
    );
}
