
import banner from '../../../../public/whychooseusbanner.png';
import Form from '../../form';


export default function WhyChoose() {
    const imgArray = [
        { img: img1 },
        { img: img2 },
        { img: img3 },
        { img: img4 },
        { img: img5 },
        { img: img6 },
        { img: img7 },
        { img: img8 },
        { img: img9 },
        { img: img10 },
        { img: img11 },
        { img: img12 },
        { img: img10 },
        { img: img11 },
        { img: img12 },
      ];
      
   
    return (
        <>
            <div className="relative w-screen ">
           
           <img src={banner} alt="banner" className="w-full h-auto" />
           <div className="absolute inset-0 gradient-overlay"></div>
           <h1 className='text-7xl font-[700] text-[#fff] absolute top-40 left-60'>Why Choose Us</h1>
           <div className="absolute lg:top-10 xxl:top-5 right-40 p-0 w-1/4">
               <Form />
           </div>

       </div>
   
      
          
        </>
    );
}
