import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import homeicon2 from './../../../public/mainproctology.png';
import homeicon3 from './../../../public/homeicon2 (3).png';
import homeicon4 from './../../../public/wl (2).png';
import homeicon5 from './../../../public/homeicon2 (2).png';
import homeicon6 from './../../../public/homeicon2 (1).png';
import homeicon7 from './../../../public/homeicon2 (6).png';
import homeicon8 from './../../../public/homeicon2 (7).png';
import homeicon9 from './../../../public/homeicon2 (8).png';
import homeicon10 from './../../../public/wl (1).png';
import homeicon11 from './../../../public/mainproctologywhoite.png';
import homeicon12 from './../../../public/homeicon2 (11).png';
import homeicon13 from './../../../public/homeicon2.png';

export default function Specialist() {
  const [hoverIndexRow1, setHoverIndexRow1] = useState(null);
  const [hoverIndexRow2, setHoverIndexRow2] = useState(null);
  const navigate = useNavigate();

  const items = [
    { defaultIcon: homeicon2, hoverIcon: homeicon11, title: 'PROCTOLOGY', url: "/speciality/proctology" },
    { defaultIcon: homeicon13, hoverIcon: homeicon12, title: 'IVF & FERTILITY', url: "/speciality/ivf-fertility" },
    { defaultIcon: homeicon4, hoverIcon: homeicon10, title: 'WEIGHT LOSS', url: "/speciality/weight-loss" },
    { defaultIcon: homeicon6, hoverIcon: homeicon9, title: 'ANDROLOGY & UROLOGY', url: "/speciality/urology" },
    { defaultIcon: homeicon5, hoverIcon: homeicon8, title: 'Gynecologist & Obstetrics', url: "/speciality/obestric-gyno" },
    { defaultIcon: homeicon3, hoverIcon: homeicon7, title: 'ASTHETICS & MAXILLOFACIAL', url: "/speciality/asthetics" }
  ];

  const renderItems = (items, hoverIndex, setHoverIndex) => {
    return items.map((item, index) => (
      <div
        key={index}
        className={`shadow py-4 flex justify-center items-center flex-col rounded-md transition-colors duration-300 sm:w-1/3
           w-1/3 
          sm:h-[250px] h-auto ${hoverIndex === index ? 'bg-[#2A3986] text-white' : 'bg-white text-[#2A3986]'
          }`}
        onMouseEnter={() => setHoverIndex(index)}
        onMouseLeave={() => setHoverIndex(null)}
        onClick={() => navigate(item.url)}
      >
        <img
          src={hoverIndex === index ? item.hoverIcon : item.defaultIcon}
          alt="icon"
          className='h-10 w-10 lg:h-auto lg:w-auto md:w-16 md:h-16 sm:max-w-full object-cover'
        />
        <p className={`lg:text-xl xl:text-xl text-[12px] font-[450] pt-2 text-center transition-colors duration-300 capitalize`}>
          {item.title}
        </p>
      </div>
    ));
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className='sm:pb-6 pb-4'>
        <h2 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-[800] text-[#3E3E3E] text-center sm:pt-0 pt-5">
          <span className="text-[#2490EB]">O</span>ur  <span className="text-[#2490EB]">S</span>pecialities
        </h2>
        <p className="xl:text-lg lg:text-lg md:text-base text-center text-xs text-[#3E3E3E] font-medium">Diverse Medical Expertise at Healing Gloves</p>
      </div>
      <div className="max-w-6xl  xl:px-0 lg:px-2 md:px-3 sm:px-4 px-4">
        <div className='flex justify-center items-center xl:gap-20 lg:gap-14 md:gap-12 gap-2 sm:pb-12 pb-3'>
          {renderItems(items.slice(0, 3), hoverIndexRow1, setHoverIndexRow1)}
        </div>
        <div className='flex justify-center items-center  xl:gap-20 lg:gap-14 md:gap-12 gap-2 sm:pb-12 pb-3'>
          {renderItems(items.slice(3), hoverIndexRow2, setHoverIndexRow2)}
        </div>
      </div>
    </div>
  );
}
