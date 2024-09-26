import BlogSection from "../home/blog";
import FaqSection from "../home/Faq";
import { Link } from "react-router-dom";
import banner from "../../../public/BLOG-MAIN-BANNER.jpeg";


export default function BlogMain({heading}) {
 

  return (
    <>
    <div className="relative w-screen  flex justify-center items-center">
    <div className="absolute inset-0 bg-gradient-to-b from-black to-black opacity-70"></div>
      
    <img src={banner} alt="banner" className="w-full sm:h-[450px]  h-auto object-cover" />
    <div className="absolute inset-0 gradient-overlay"></div>
    <h1 className='xxl:text-7xl xl:text-7xl lg:text-6xl md:text-5xl text-2xl font-[700] text-[#fff] absolute flex justify-center items-center'>Blogs</h1>
 

  </div>
     <BlogSection heading="Latest Blog & Articles"/>     
    </>
  );
}
