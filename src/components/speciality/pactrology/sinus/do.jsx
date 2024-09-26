import React from 'react';
import { MdPlayArrow } from "react-icons/md";
import green from '../../../../../public/checked_190411.png';
import redicon from '../../../../../public/redicon.png';

const SinusTreatment = () => {
    const steps = [
        {
            title: "Diagnosis and Initial Consultation",
            items: [
                "Detailed medical history and physical examination.",
                "Diagnostic imaging such as CT scans to assess sinus health.",
                "Discussion of symptoms and potential treatment options."
            ]
        },
        {
            title: "Conservative Treatment",
            items: [
                "Prescription of medications such as decongestants and nasal sprays.",
                "Recommendations for steam inhalation and saline nasal rinses.",
                "Advice on lifestyle changes to improve sinus health."
            ]
        },
        {
            title: "Minimally Invasive Procedures",
            items: [
                "Balloon sinuplasty to open blocked sinuses and promote drainage.",
                "Functional endoscopic sinus surgery (FESS) to remove obstructions.",
                "Advanced techniques to ensure minimal discomfort and quick recovery."
            ]
        },
        {
            title: "Post-Treatment Care and Follow-Up",
            items: [
                "Regular follow-up appointments to monitor progress.",
                "Continued use of prescribed medications and nasal care routines.",
                "Advice on maintaining sinus health and preventing recurrence."
            ]
        }
    ];

    const dos = [
        "Use saline nasal sprays to keep nasal passages moist.",
        "Stay hydrated to help thin mucus secretions.",
        "Practice good hygiene to prevent infections.",
        "Use a humidifier to add moisture to the air.",
        "Follow all prescribed treatments and attend follow-up appointments."
    ];

    const donts = [
        "Avoid exposure to irritants such as smoke and strong odors.",
        "Do not use over-the-counter nasal decongestant sprays for more than a few days.",
        "Refrain from flying if experiencing severe sinus congestion.",
        "Avoid cold and dry environments that can aggravate symptoms.",
        "Do not ignore persistent or worsening symptoms."
    ];

    return (
        <>
            <div className="w-screen flex justify-center items-center flex-col bg-[#E3E8FF]">
                <section className="flex gap-6 flex-col pb-8">
                    <h2 className="text-3xl font-bold text-[#474747] text-center pt-8">Procedure Followed at Healing Gloves</h2>
                    {/* Steps */}
                    <div className="max-w-6xl flex gap-6">
                        {steps.map((step, index) => (
                            <div key={index} className='shadow p-4 rounded bg-white'>
                                <h3 className="text-xl font-bold mb-2 text-[#fff] text-center bg-pink-600 rounded">STEP {index + 1}</h3>
                                <h4 className="text-sm font-bold mb-2 text-[#474747] text-center">{step.title}</h4>
                                <ul className="list-disc list-inside text-md font-[400] text-[#474747] space-y-2">
                                    {step.items.map((item, i) => (
                                        <li key={i} className="flex gap-2">
                                            <MdPlayArrow size={25} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
            
            {/* Do's and Don'ts for Managing Sinus Conditions */}
            <div className="w-screen flex justify-center items-center flex-col pb-10">
                <h2 className="text-4xl font-bold mb-2 text-[#2a3986]  text-center pt-8 pb-8">Do's and Don'ts for Managing Piles</h2>
                <section className="flex max-w-6xl gap-8">
                    <div>
                        <h3 className="text-2xl font-bold mb-2 text-[#474747] text-opacity-90 text-center">Do's</h3>
                        <ul className="text-md font-[400] text-[#474747] space-y-4">
                            {dos.map((item, index) => (
                                <li key={index} className="flex items-center space-x-2">
                                    <img src={green} alt="" className='max-w-full h-6'/>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-2 text-[#474747] text-opacity-90 text-center">Don'ts</h3>
                        <ul className="text-md font-[400] text-[#474747] space-y-4">
                            {donts.map((item, index) => (
                                <li key={index} className="flex items-center space-x-2">
                                   <img src={redicon} alt="" className='max-w-full h-6' />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </div>
        </>
    );
};

export default SinusTreatment;
