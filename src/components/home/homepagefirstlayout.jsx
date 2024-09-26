
import arrow from '../../../public/arrow.png';
import img1 from '../../../public/standingservicesimg (4).png';
import img2 from '../../../public/standingservicesimg (3).png';
import img3 from '../../../public/standingservicesimg (2).png';
import img4 from '../../../public/standingservicesimg (1).png';
import { Link } from 'react-router-dom';

const ServiceCard = ({ icon, title, description, url }) => (
  <div className="bg-white p-3 rounded-lg shadow-md flex flex-col justify-center items-center">
    <img 
      src={icon} 
      alt="icon" 
      className="h-9 w-9 sm:w-auto sm:h-32" 
    />
    <h3 className="text-[10px] sm:text-lg font-semibold sm:mt-4 mt-2 mb-2 text-center text-[#2A3986]">
      {title}
    </h3>
    <p className="text-[#767676] sm:flex hidden font-medium mb-4 text-center sm:text-[15px] text-[8px]">
      {description}
    </p>
    <Link to={url} className="text-[#2A3986] sm:text-[15px] text-[7px] font-semibold">
      <span className="flex sm:gap-2 gap-1 items-center text-center">
        Read more
        <img src={arrow} alt="arrow" className="w-3 h-3 sm:max-w-full sm:h-3 object-cover" />
      </span>
    </Link>
  </div>
);

const StandingService = () => {
  const services = [
    {
      icon: img1,
      title: "Proctology",
      description: "Dr. Shambhav Chandra is a professional and dedicated general surgeon...",
      url: "speciality/proctology"
    },
    {
      icon: img2,
      title: "Gynecologist & Obstetrics",
      description: "Dr. Abhilasha offers expert and caring gynecology services with an emphasis on women's reproductive health...",
      url: "speciality/obestric-gyno"
    },
    {
      icon: img3,
      title: "Asthetics & Maxillofacial",
      description: "Dr. Manisha is a professional aestheticsand maxillofacial expert known for her exceptional skills...",
      url: "speciality/asthetics"
    }
  ];

  return (
    <div className="w-full sm:py-8 py-2 flex flex-col justify-center items-center"
      style={{ background: "linear-gradient(to bottom, #2A3986 50%,  #fff 50%)" }}>
      <div className="max-w-3xl  md:max-w-5xl xl:max-w-6xl w-full   xl:px-0 lg:px-5  px-4"> {/* Centering the content and adding padding */}
        <h2 className="text-lg md:text-3xl lg:text-4xl xl:text-5xl font-[800] text-white text-center sm:mb-12 mb-3">
          Our Standing Services
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 lg:gap-5 md:gap-2 sm:gap-1 gap-4 "> {/* Adjust grid for better responsiveness */}
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StandingService;