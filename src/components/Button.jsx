import { useState, useRef, useEffect } from "react";
import Form from "./form";
export function ModalButton({ btnname, className }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const modalRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        closeModal();
      }
    };

    const handleScroll = () => {
      closeModal();
    };

    if (isModalOpen) {
      window.addEventListener("mousedown", handleClickOutside);
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isModalOpen]);

  return (
    <>
      <button
        className={`mt-4 sm:px-4 px-2 py-1 sm:py-2 bg-[#FB3D9D] text-[#FFFFFF] rounded sm:text-lg text-sm  font-medium sm:font-bold
           ${className}`}
        onClick={openModal}
      >
        {btnname}
      </button>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full" ref={modalRef}>
            <button
              className="float-right  text-blue-900 text-3xl font-bold "
              onClick={closeModal}
            >
              &times;
            </button>
            <Form closeModal={closeModal} />
          </div>
        </div>
      )}
    </>
  );
}