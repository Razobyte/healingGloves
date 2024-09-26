import React from 'react';
import { MdPlayArrow } from "react-icons/md";
import redicon from '../../../../../public/redicon.png';
import green from '../../../../../public/checked_190411.png';

const PilesTreatment = () => {
    const treatmentApproach = [
        {
            grade: "GRADE I",
            description: "Small swelling inside the rectum. May cause slight bleeding or discomfort during bowel movements but typically do not protrude outside the anus.",
            treatment:  "Lifestyle changes, increased fiber intake, and over-the-counter medications."
            
        },
        {
            grade: "GRADE II",
            description: "Larger swelling that may protrude outside the anus during bowel movements but retracts back on its own. Discomfort, itching, and bleeding are more common.",
            treatment: 
                "Dietary modifications to include high-fiber foods. Prescription of stool softeners and topical treatments. Recommendations for increased water intake and exercise."
            
        },
        {
            grade: "GRADE III",
            description: "Hemorrhoids that protrude outside the anus during bowel movements and do not retract on their own. Significant discomfort, pain, itching, and bleeding.",
            treatment: 
                "Rubber band ligation to cut off blood supply to the piles Sclerotherapy injections to shrink hemorrhoids. Infrared coagulation to remove small hemorrhoids",
            
        },
        {
            grade: "GRADE IV",
            description: "Hemorrhoids that are permanently prolapsed and cannot be pushed back inside the anus. Severe pain, discomfort, bleeding, and possible complications.",
            treatment: "Hemorrhoidectomy for large or severe piles Stapled hemorrhoidopexy to reposition and secure hemorrhoids.Post-operative care and follow-up consultations.",
            
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
            <div className="w-screen sm:flex hidden justify-center items-center flex-col bg-blue-50">
            <h2 className="xxl:text-3xl xl:text-3xl lg:text-2xl md:text-xl text-lg font-bold text-[#474747] text-left sm:pt-8 pb-2">GRADE WISE TREATMENT APPROACH AT HEALING GLOVES</h2>
            <p className='text-md font-normal pb-5'>Piles, or hemorrhoids, are categorized into four grades based on their severity and the extent of prolapse. Here is an explanation of each grade</p>
                <section className="flex gap-6 flex-col sm:pb-8">
                  
                    <div className="max-w-6xl flex sm:flex-row flex-col gap-6">
                        {treatmentApproach.map((data, index) => (
                            <div key={index} className='shadow p-4 rounded bg-white'>
                                <h3 className="text-xl font-bold mb-2 text-[#fff]  bg-pink-600 rounded text-center">{ data.grade}</h3>
                                <div>
                                <h4 className="text-sm font-normal mb-2 text-[#474747] "><span className='font-bold text-md'> Description</span>-{ data.description} </h4>
                                <h4 className="text-sm font-normal mb-2 text-[#474747] "> <span className='font-bold text-md'>Treatment</span>-{data.treatment}</h4>
                                </div>

                               
                            </div>
                        ))}
                    </div>
                </section>
            </div>
            {/* <div className="w-screen flex justify-center items-center flex-col pb-10">
                <h2 className="text-4xl font-bold mb-2 text-[#2a3986] text-center pt-8 pb-8">Do's and Don'ts for Managing Piles</h2>
                <section className="flex max-w-6xl gap-8">
                    <div>
                        <h3 className="text-2xl font-bold mb-2 text-[#474747] text-opacity-90 text-center">Do's</h3>
                        <ul className="text-md font-[400] text-[#474747] space-y-4">
                            {dos.map((item, index) => (
                                <li key={index} className="flex gap-2">
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
            </div> */}
        </>
    );
};

export default PilesTreatment;
