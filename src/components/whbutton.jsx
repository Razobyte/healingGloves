import React from "react";
import { BsWhatsapp } from "react-icons/bs";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/7015881552"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 shadow-lg transition-colors duration-300 ease-in-out"
    >
      {/* Mobile version - only icon */}
      <div className="md:hidden fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full hover:bg-green-600">
        <BsWhatsapp className="text-3xl" />
      </div>

      {/* Desktop version - full button with text */}
      <div 
        className="hidden md:flex fixed right-0 top-1/2 transform -translate-y-1/2 bg-green-500 text-white py-2 px-1 rounded-l-lg hover:bg-green-600  items-center gap-2"
        style={{ writingMode: 'vertical-lr', textOrientation: 'mixed' }}
      >
        <span className="text-base font-normal transform -rotate-180 whitespace-nowrap">Need Help? Chat Now</span>
        <BsWhatsapp className="text-xl transform -rotate-90" />
      </div>
    </a>
  );
};

export default WhatsAppButton;