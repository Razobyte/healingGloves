import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Facilitiesdata = [
    {
        title: 'Advanced Medical Technology',
        excerpt: 'Our hospital is geared up with contemporary-day clinical device and facilities, making sure accurate diagnoses and powerful remedies for our sufferers.'
    },
    {
        title: 'Surgical Excellence',
        excerpt: 'Our crew of surgeons makes a specialty of numerous surgical methods, from recurring surgical tactics to complex interventions, making sure most fulfilling effects and affected man or woman safety.'
    }
];

export default function Facilities() {
    return (
        <div className="w-full bg-white sm:py-12 py-6 flex flex-col justify-center items-center">
            <h2 className="x:text-4xl lg:text-3xl md:text-2xl text-xl font-bold text-center sm:mb-8 mb-4 text-gray-800">
                <span className="text-blue-500">F</span>acilities and <span className="text-blue-500">S</span>ervices
            </h2>
            <div className="sm:max-w-6xl max-w-full w-full px-4 sm:px-0 relative">
                <div className="flex justify-center sm:space-x-6 space-x-4 overflow-x-auto pb-4 scrollbar-hide">
                    {Facilitiesdata.map((post, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md flex-shrink-0 w-72 sm:w-80 ">
                            <div className="p-4">
                                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#2A3986]">
                                    {post.title}
                                </h3>
                                <p className="text-[#000000] text-sm sm:text-base font-regular mb-4">
                                    {post.excerpt}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                {/* <button className="absolute sm:block hidden  left-2 sm:left-5 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md border border-[#2A3986]">
                    <IoIosArrowBack size={24} color="#2A3986" />
                </button>
                <button className="absolute sm:blovk hidden  right-2 sm:right-5 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md border border-[#2A3986]">
                    <IoIosArrowForward size={24} color="#2A3986" />
                </button> */}
            </div>
        </div>
    );
}
