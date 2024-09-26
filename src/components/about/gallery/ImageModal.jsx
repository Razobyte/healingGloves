import React, { useState, useEffect, useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const ImageModal = ({ isOpen, onClose, images, initialIndex }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const modalRef = useRef(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    const handleScroll = () => {
      onClose();
    };

    if (isOpen) {
      window.addEventListener("mousedown", handleClickOutside);
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center mt-48">
      <div
        className="relative w-full max-w-3xl h-96 b rounded-lg flex justify-center items-center"
        ref={modalRef}
      >
        <button
          className="absolute top-2 right-2 text-black text-3xl"
          onClick={onClose}
        >
          &times;
        </button>
        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 text-black text-3xl"
          onClick={handlePrev}
        >
          <IoIosArrowBack />
        </button>
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black text-3xl"
          onClick={handleNext}
        >
          <IoIosArrowForward />
        </button>
        <div className="w-full h-full flex justify-center items-center overflow-hidden bg-white">
          <img
            src={images[currentIndex].img}
            alt={`Image ${currentIndex + 1}`}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
