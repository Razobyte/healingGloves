import React, { useState } from "react";
import banner from "../../../../public/gallerybnner.jpeg";
import Form from "../../form";
import img13 from "../../../../public/galleryinsidepage (13).jpeg";
import img14 from "../../../../public/galleryinsidepage (14).jpeg";
import img15 from "../../../../public/galleryinsidepage (15).jpeg";
import img1 from "../../../../public/galleryinsidepage (12).jpeg";
import img2 from "../../../../public/galleryinsidepage (11).jpeg";
import img3 from "../../../../public/galleryinsidepage (10).jpeg";
import img4 from "../../../../public/galleryinsidepage (9).jpeg";
import img5 from "../../../../public/galleryinsidepage (8).jpeg";
import img6 from "../../../../public/galleryinsidepage (7).jpeg";
import img7 from "../../../../public/galleryinsidepage (6).jpeg";
import img8 from "../../../../public/galleryinsidepage (5).jpeg";
import img9 from "../../../../public/galleryinsidepage (4).jpeg";
import img10 from "../../../../public/galleryinsidepage (3).jpeg";
import img11 from "../../../../public/galleryinsidepage (2).jpeg";
import img12 from "../../../../public/galleryinsidepage (1).jpeg";
import ImageModal from "./ImageModal";
import img from '../../../../public/gallery1.jpeg'
export default function Gallery() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const imgArray = [
    { img: img },
    { img: img7 },
    { img: img8 },
    { img: img10 },
    { img: img12 },
    { img: img15 },
  ];

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="relative w-screen flex justify-center items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-black opacity-40"></div>
        <img src={banner} alt="banner" className="w-full md:h-[450px] h-auto object-cover" />
        <div className="absolute inset-0 gradient-overlay"></div>
        <div className="absolute flex justify-center items-center flex-col">
          <h1 className="lg:text-7xl md:text-5xl sm:text-4xl text-2xl font-[700] text-[#fff]">Gallery</h1>
          <p className="md:text-2xl sm:text-xl text-lg font-[500] text-center text-white text-opacity-90">
            Healing Gloves through Images
          </p>
        </div>
      </div>
      <div className="w-screen bg-gray-50 md:py-12 py-5 flex flex-col justify-center items-center">
        <h2 className="lg:text-4xl md:text-3xl sm:text-2xl text-xl font-[800] text-center text-gray-800 text-opacity-90 sm:mb-10 mb-3">
          Gallery
        </h2>
        <div className="lg:max-w-6xl md:max-w-5xl max-w-4xl lg:px-0 sm:px-2 px-5">
          <div className="grid grid-cols-3 lg:gap-12 sm:gap-5 gap-3 pb-4">
            {imgArray.map((item, ind) => (
              <div
                key={ind}
                className="bg-white rounded-lg shadow-md w-full relative cursor-pointer"
                onClick={() => openModal(ind)}
              >
                <img
                  src={item.img}
                  alt={`Image ${ind + 1}`}
                  className="lg:w-full lg:h-96 h-32 w-32 object-cover rounded-t-lg transform transition-transform duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <ImageModal
        isOpen={modalOpen}
        onClose={closeModal}
        images={imgArray}
        initialIndex={currentImageIndex}
      />
    </>
  );
}
