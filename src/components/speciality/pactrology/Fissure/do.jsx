import React from 'react';
import { MdPlayArrow } from "react-icons/md";
import green from '../../../../../public/checked_190411.png';
import redicon from '../../../../../public/redicon.png';

const FisureTreatment = () => {
    const proceduralSteps = [
        {
            title: "STEP 1",
            subTitle: "Diagnosis and Initial Consultation",
            items: [
                "Detailed medical history and physical examination.",
                "Anoscopy or sigmoidoscopy to visualize the fissure.",
                "Discussion of symptoms and potential treatment options."
            ]
        },
        {
            title: "STEP 2",
            subTitle: "Conservative Treatment",
            items: [
                "Prescription of topical anesthetics and nitroglycerin ointment.",
                "Recommendations for high-fiber diet and increased water intake.",
                "Advice on proper hygiene and Sitz baths to promote healing."
            ]
        },
        {
            title: "STEP 3",
            subTitle: "Minimally Invasive Procedures",
            items: [
                "Botulinum toxin (Botox) injections to relax the anal sphincter muscle.",
                "Lateral internal sphincterotomy to reduce muscle spasms and pain."
            ]
        },
        {
            title: "STEP 4",
            subTitle: "Follow-Up and Monitoring",
            items: [
                "Regular follow-up appointments to monitor healing progress.",
                "Adjustments to treatment plan based on patient response.",
                "Continued support and advice on preventing recurrence."
            ]
        }
    ];

    const dos = [
        "Increase Fiber Intake: Consume fruits, vegetables, and whole grains.",
        "Stay Hydrated: Drink plenty of water to soften stools.",
        "Exercise Regularly: Engage in physical activities to promote bowel movements.",
        "Practice Good Hygiene: Keep the anal area clean and dry.",
        "Use Sitz Baths: Soak the anal area in warm water to reduce pain and swelling."
    ];

    const donts = [
        "Avoid Straining: Do not strain during bowel movements.",
        "Limit Sitting Time: Avoid prolonged sitting, especially on the toilet.",
        "Avoid Spicy Foods: Reduce consumption of spicy and irritating foods.",
        "Do Not Delay Bowel Movements: Go to the bathroom as soon as you feel the urge.",
        "Avoid Heavy Lifting: Minimize activities that put pressure on the anal region."
    ];

    return (
        <>
            <div className="w-screen flex justify-center items-center flex-col  bg-gradient-to-t from-[#47474736] to-transparent">
                <section className="max-w-6xl flex flex-col gap-8 pb-8">
                    {/* Procedure Followed at Healing Gloves */}
                    <h2 className="text-3xl font-bold text-[#474747] text-center pt-8">Procedure Followed at Healing Gloves</h2>
                    <div className="flex gap-6">
                        {proceduralSteps.map((step, index) => (
                            <div key={index} className="shadow p-4 rounded bg-white">
                                <h3 className="text-xl font-bold mb-2 text-[#fff] text-center bg-pink-600 rounded">{step.title}</h3>
                                <h4 className="text-sm font-bold mb-2 text-[#474747] text-center">{step.subTitle}</h4>
                                <ul className="list-disc list-inside text-md font-[400] text-[#474747] space-y-3">
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
            
            {/* Do's and Don'ts for Managing Piles */}
            <div className="w-screen flex justify-center items-center flex-col pb-10">
                <h2 className="text-4xl font-bold mb-2 text-[#2a3986] text-center pt-8 pb-5">Do's and Don'ts for Managing Piles</h2>
                <section className="max-w-6xl flex gap-8">
                    {/* Do's */}
                    <div>
                        <h3 className="text-2xl font-bold mb-2 text-[#474747] text-opacity-90">Do's</h3>
                        <ul className="text-md font-[400] text-[#474747] space-y-4">
                            {dos.map((item, index) => (
                                <li key={index} className="flex items-center space-x-2">
                                    <img src={green} alt="Green Checkmark" className="max-w-full h-6" />
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
                                    <img src={redicon} alt="Red Cross Icon" className="max-w-full h-6" />
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

export default FisureTreatment;
