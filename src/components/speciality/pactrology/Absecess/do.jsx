import React from 'react';
import { MdPlayArrow } from "react-icons/md";
import green from '../../../../../public/checked_190411.png';
import redicon from '../../../../../public/redicon.png';

const AbcessTreatment = () => {
    const proceduralSteps = [
        {
            title: "STEP 1",
            subTitle: "Diagnosis and Initial Consultation",
            items: [
                "Detailed medical history and physical examination.",
                "Imaging tests if necessary to assess the extent of the abscess.",
                "Discussion of symptoms and potential treatment options."
            ]
        },
        {
            title: "STEP 2",
            subTitle: "Initial Treatment",
            items: [
                "Prescription of antibiotics to manage infection.",
                "Recommendations for warm compresses to reduce pain and swelling."
            ]
        },
        {
            title: "STEP 3",
            subTitle: "Drainage Procedure",
            items: [
                "Local anesthesia to numb the area.",
                "Incision and drainage to remove pus and clean the abscess.",
                "Placement of a drainage tube if necessary to prevent recurrence."
            ]
        },
        {
            title: "STEP 4",
            subTitle: "Post-Procedure Care and Follow-Up",
            items: [
                "Detailed post-procedure care instructions.",
                "Regular follow-up appointments to monitor healing progress.",
                "Pain management strategies and wound care advice."
            ]
        }
    ];
    const dos = [
        "Maintain good hygiene to prevent infection.",
        "Follow all prescribed treatments and medications.",
        "Use warm compresses to alleviate pain and swelling.",
        "Keep the affected area clean and dry.",
        "Attend all follow-up appointments for monitoring."
    ];

    const donts = [
        "Avoid squeezing or attempting to drain the abscess yourself.",
        "Do not ignore symptoms of severe pain or fever.",
        "Refrain from using harsh soaps or chemicals on the affected area.",
        "Avoid activities that may cause trauma to the area.",
        "Do not delay seeking medical consultation if symptoms worsen."
    ];

    return (
        <>
            <div className="w-screen flex justify-center items-center flex-col bg-[#E3E8FF]">
                <section className="max-w-6xl flex flex-col gap-8 pb-8">
                    {/* Procedure Followed at Healing Gloves */}
                    <h2 className="text-3xl font-bold text-[#474747] text-center pt-8">Procedure Followed at Healing Gloves</h2>
                    <div className="flex gap-6">
                        {proceduralSteps.map((step, index) => (
                            <div key={index} className="shadow p-4 rounded bg-white">
                                <h3 className="text-xl font-bold mb-2 text-[#fff] text-center bg-pink-600 rounded text-center">{step.title}</h3>
                                <h4 className="text-sm font-bold mb-2 text-[#474747] text-center">{step.subTitle}</h4>
                                <ul className="list-disc list-inside text-md font-[400] text-[#474747] space-y-1">
                                    {step.items.map((item, idx) => (
                                        <li key={idx} className="flex gap-2">
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
            
            {/* Do's and Don'ts for Managing Abscesses */}
            <div className="w-screen flex justify-center items-center flex-col pb-10">
                <h2 className="text-4xl font-bold mb-2 text-[#474747] text-center pt-8 pb-5">Do's and Don'ts for Managing Abscesses</h2>
                <section className="max-w-6xl flex gap-8">
                    {/* Do's */}
                    <div>
                        <h3 className="text-2xl font-bold mb-2 text-[#474747] text-opacity-90">Do's</h3>
                        <ul className="text-md font-[400] text-[#474747] space-y-4">
                            {dos.map((item, index) => (
                                <li key={index} className="flex items-center space-x-2">
                                    <img src={green} alt="" className='max-w-full h-6'/>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Don'ts */}
                    <div>
                        <h3 className="text-2xl font-bold mb-2 text-[#474747] text-opacity-90">Don'ts</h3>
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

export default AbcessTreatment;
