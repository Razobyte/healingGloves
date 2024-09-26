import React from 'react';
import bg from '../../../public/bg2.png';
import brandlogo1 from '../../../public/patrnerrs1 (1).jpeg';
import brandlogo2 from '../../../public/patrnerrs1 (2).jpeg';
import brandlogo3 from '../../../public/patrnerrs1 (3).jpeg';
import brandlogo4 from '../../../public/patrnerrs1 (4).jpeg';
import brandlogo5 from '../../../public/patrnerrs1 (5).jpeg';
import brandlogo6 from '../../../public/patrnerrs1 (6).jpeg';
import brandlogo7 from '../../../public/patrnerrs1 (7).jpeg';
import brandlogo8 from '../../../public/patrnerrs1 (8).jpeg';
import Marquee from 'react-fast-marquee';

export default function Partner() {
  return (
    <div className='w-full flex flex-col justify-center items-center py-8 px-4'>
      <div
        className='w-full max-w-6xl py-8 flex flex-col items-center rounded-lg'
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <h1 className='text-[#474747] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-6'>
          <span className='text-[#2490EB]'>O</span>ur
          <span className='text-[#2490EB] ps-2'>H</span>ealthcare
          <span className='text-[#2490EB] ps-2'>P</span>artners
        </h1>
        <div className='w-full max-w-3xl'>
          <Marquee className='flex' gradientWidth={50} speed={30}>
            {[brandlogo1, brandlogo2, brandlogo3, brandlogo4, brandlogo5, brandlogo6, brandlogo7, brandlogo8].map((logo, index) => (
              <div key={index} className='flex shadow-lg bg-white p-3 mx-2 rounded'>
                <img src={logo} className='xl:w-32 xl:h-32 xxl:w-32 xxl:h-32 h-16 w-16 sm:w-24 sm:h-24 md:w-32 md:h-32 object-contain' alt={`Brand Logo ${index + 1}`} />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}