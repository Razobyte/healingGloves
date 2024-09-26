import CountUp from 'react-countup';
import count1 from '../../../public/count (3).png';
import count2 from '../../../public/WERTYDFGH.png';
import count3 from '../../../public/count (1).png';
import count4 from '../../../public/count.png';

export default function Count({ clients }) {
    return (
        <div className="bg-[#EBEEFF] w-screen flex flex-col justify-center items-center py-3">
            <div className="flex justify-center items-center gap-0 sm:gap-[120px] w-full">
                {/* Item 1 */}
                <div className="flex flex-col items-center text-center cursor-pointer max-w-[150px]">
                    <img src={count3} alt="Qualified Doctors" className="w-7 h-7 sm:w-16 sm:h-16 transition-transform duration-300 ease-in-out hover:rotate-y-360" />
                    <p className="sm:text-lg text-xs sm:font-semibold font-medium mt-2">Qualified Doctors</p>
                </div>

                {/* Item 2 */}
                <div className="flex flex-col items-center text-center cursor-pointer max-w-[150px]">
                    <img src={count1} alt="Emergency Services" className="w-7 h-7 sm:w-16 sm:h-16 transition-transform duration-300 ease-in-out hover:rotate-y-360" />
                    <p className="sm:text-lg text-xs sm:font-semibold font-medium mt-2">Emergency Services</p>
                </div>

                {/* Item 3 */}
                <div className="flex flex-col items-center text-center cursor-pointer max-w-[150px]">
                    <img src={count2} alt="Latest Tech & Equipments" className="w-7 h-7 sm:w-16 sm:h-16 transition-transform duration-300 ease-in-out hover:rotate-y-360" />
                    <p className="sm:text-lg text-xs sm:font-semibold font-medium mt-2">Latest Tech & Equipments</p>
                </div>

                {/* Item 4 */}
                <div className="flex flex-col items-center text-center cursor-pointer max-w-[150px]">
                    <img src={count4} alt="24/7 Services" className="w-7 h-7 sm:w-16 sm:h-16 transition-transform duration-300 ease-in-out hover:rotate-y-360" />
                    <p className="sm:text-lg text-xs sm:font-semibold font-medium mt-2">24/7 Services</p>
                </div>
            </div>
        </div>
    );
}
