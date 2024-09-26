import React from "react";
import { MdWork, MdSchedule } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import doctors from "../../../public/doctors3.png";
 // Replace this with the correct path to your image

const SpecialistSection = () => {
  const navigate = useNavigate();

  return (
    <section className="w-screen flex justify-center items-center sm:py-8 py-4 bg-gradient-to-br from-blue-100 via-white to-pink-100">
    <div className="max-w-6xl px-4 md:px-8">
      <h1 className="text-lg md:text-4xl lg:text-5xl xl:text-5xl text-[#2A3986] font-extrabold text-center mb-8 md:mb-12 relative">
        Our Proctology Specialist
      </h1>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
        {/* Image Section */}
        <div className="w-full md:w-1/3">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-t from-[#2A3986] to-transparent opacity-20 rounded-lg"></div>
            <img
              src={doctors} // Replace with your static image path
              alt="Dr. Shambhav Chandra"
              className="max-w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Doctor Details Section */}
        <div className="w-full md:w-2/3 space-y-2 sm:space-y-3 sm:px-0 px-5">
          <h2 className="text-lg sm:text-3xl font-bold text-[#2A3986]">Dr. Shambhav Chandra</h2>
          <p className="text-lg md:text-xl text-gray-700 font-medium">General Surgeon</p>

          <div className="flex items-center space-x-2">
            <MdWork className="h-5 w-5 md:h-6 md:w-6 text-pink-500" />
            <p className="text-base md:text-lg text-gray-600 font-medium">
              Experience: 11.5 years
            </p>
          </div>

          {/* Timings and Locations */}
          <div>
            <h3 className="text-base md:text-lg font-semibold text-[#2A3986] pb-2">
              <MdSchedule className="inline-block h-5 w-5 md:h-6 md:w-6 text-pink-500 mr-2" />
              Timings & Locations
            </h3>
            <ul className="space-y-3 ml-4 md:ml-6 text-gray-600 text-sm md:text-base">
              <li>
                <strong>Daily -</strong> Sayaa Med, Gurgaon (10am-12.30pm)
              </li>
              <li>
                <strong>Monday, Saturday & Sunday -</strong> Healing Gloves, Sohna (5pm-8.30pm)
              </li>
              <li>
                <strong>Tuesday, Wednesday & Friday -</strong> Medharbour Hospital, Gurgaon (5pm-8pm)
              </li>
            </ul>
          </div>

         <div className="flex sm:items-start items-center sm:justify-start justify-center">
         <button
            className="sm:px-4 px-2 sm:py-2 py-1 bg-pink-600 text-white rounded sm:text-lg text-xs sm:font-bold
              font-medium   w-fit transition duration-300 ease-in-out"
            onClick={() => navigate("/doctors1")}
          >
            Read More
          </button>
         </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default SpecialistSection;
