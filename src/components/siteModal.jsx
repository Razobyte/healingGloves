import React, { useState, useEffect,useRef} from 'react';
import Form from './form'

export function SiteWideModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
      setIsModalOpen(true);
      if (isModalOpen) {
        window.addEventListener('mousedown', handleClickOutside);
        window.addEventListener('scroll', handleScroll);
      }
  
      // Cleanup event listeners on unmount or when modal is closed
      return () => {
        window.removeEventListener('mousedown', handleClickOutside);
        window.removeEventListener('scroll', handleScroll);
      };
  

  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (!isModalOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-md w-full" ref={modalRef}>
        <button
          onClick={closeModal}
          className="float-right text-blue-900 text-3xl font-bold"
        >
          ×
        </button>
        <Form />
      </div>
    </div>
  );
}