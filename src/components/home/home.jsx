import React, { useState } from "react";
import banner from "../../../public/banner (9).png";
import banner1 from "../../../public/BANNER-ASETHETICS.jpg";
import banner2 from "../../../public/healing hands healing gloves.jpg";
import banner3 from "../../../public/banner (12).png";
import homepage1 from "../../../public/homepage1.png";
import StandingService from "./homepagefirstlayout";
import ivf from '../../../public/IVF & Fertility banner.jpg'
import OurDoctors from "./OurDoctors";
import PatientTestimonials from "./Patient";
import Specialist from "./Specialist";
import WhoItWorks from "./whoItWorks";
import Partner from "./partner";
import FaqSection from "./Faq";
import BlogSection from "./blog";
import Form from "../form";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { ModalButton } from "../Button";

export default function Home() {
  return (
    <>
      <Swiper

        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="w-full" 
      >
        <SwiperSlide className="w-full">
          <img src={banner} alt="BANNER" className="w-full h-auto  object-cover" />
        </SwiperSlide>
        <SwiperSlide  className="w-screen">
          <img src={banner1} alt="BANNER" className="w-full object-cover" />
        </SwiperSlide>
        <SwiperSlide  className="w-screen">
          <img src={ivf} alt="BANNER" className="w-full  object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner2} alt="BANNER" className="w-full object-cover" />
        </SwiperSlide>
        <SwiperSlide  className="w-screen">
          <img src={banner3} alt="BANNER" className="w-full object-cover" />
        </SwiperSlide>

        <div className="absolute bottom-10 left-14 z-10  sm:flex hidden">
          <ModalButton btnname="Book Appointment" />
        </div>
      </Swiper>

      <StandingService />
      <div className="w-full flex flex-col justify-center items-center">
        <div className="max-w-6xl w-full px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-center items-center">

          <div className="w-full sm:w-1/2 mb-4 sm:mb-0 sm:flex hidden justify-center items-center ">
            <img
              src={homepage1}
              alt="homepage1"
              className="w-auto max-w-full h-auto object-cover "
            />
          </div>

          <div className="w-full sm:w-1/2    sm:px-6">
            <h1 className="text-base md:text-xl lg:text-2xl xl:text-5xl text-[#474747] font-extrabold sm:text-left text-center sm:pb-0 pb-2">
              Compassionate Healing, Expert Care
            </h1>
            <p className="text-sm md:text-base font-medium text-[#3E3E3E] sm:py-5">
              At Healing Gloves Polyclinic, we are dedicated to providing exceptional medical services with a heartfelt commitment to our patients' well-being. Our team of specialized doctors offers expert care in laparoscopy, vascular surgery, and various other fields, ensuring that every patient receives comprehensive and compassionate treatment tailored to their unique needs.
            </p>
            <div className="flex sm:justify-start justify-center">
              <ModalButton btnname="Schedule a Consultation" />
            </div>
          </div>
        </div>
      </div>
      <OurDoctors />
      <PatientTestimonials />
      <Specialist />
      <WhoItWorks />
      <Partner />
      <FaqSection />
      <BlogSection heading="Latest Blogs & Articles" />
    </>
  );
}
