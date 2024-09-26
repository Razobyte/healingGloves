import React, { useState } from 'react';
import { FaMinus, FaPlus } from "react-icons/fa";

const faqs = [
  {
    question: "What services does Healing Gloves provide?",
    answer: "Healing Gloves offers comprehensive polyclinic services, including obstetrics, gynecology, laparoscopy, and IVF treatments, ensuring high-quality care for all patients."
  },
  {
    question: "How can I book an appointment with Healing Gloves?",
    answer: "You can book an appointment online through our website, by calling our clinic, or by visiting us. Our team will assist you with the scheduling process."
  },
  {
    question: "Can I see a specialist at Healing Gloves?",
    answer: "Yes, Healing Gloves has a team of specialists in various fields, including obstetrics, aesthetics, maxillofacial surgery, general surgery, gynecology, laparoscopy, and IVF, providing expert care for your specific needs."
  },
  {
    question: "What are your operating hours?",
    answer: "Our clinic operates 7 days a week from 10 am to 9 pm."
  },
  {
    question: "Are there any special services for elderly patients or those with disabilities?",
    answer: "Yes, Healing Gloves offers special services for elderly patients and those with disabilities, including accessible facilities, personalized care plans, and dedicated support to ensure comfort and convenience."
  }
];

export default function FaqSection() {
  const [expandedIndex, setExpandedIndex] = useState(null); // Initialize with null for no open item by default

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className='w-full flex justify-center items-center py-8'>
      <div className='max-w-6xl w-full px-4'>
        <h2 className=" mb-6 text-[#474747] text-xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold  text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              className="bg-white rounded-lg shadow w-full" 
              key={index}
            >
              <div
                className="flex items-center justify-between p-4 cursor-pointer border-l-8 border-blue-500 rounded"
                onClick={() => handleToggle(index)}
              >
                <span className="font-[550] text-base md:text-lg text-[#3D3D3D]">{faq.question}</span>
                {expandedIndex === index ? (
                  <FaMinus size={20} className="text-blue-500 border border-blue-500 rounded-full p-1" />
                ) : (
                  <FaPlus size={20} className="text-blue-500 border border-blue-500 rounded-full p-1" />
                )}
              </div>
              {expandedIndex === index && (
                <p className="px-4 py-3 text-gray-600 bg-blue-200 border-l-0 mt-2">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
