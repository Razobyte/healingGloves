import React from 'react';
import banner from '../../../public/blog5banner.jpg';
import img3 from '../../../public/blog4.jpg';
import BlogSection from '../home/blog';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

const BlogDetails5 = () => {
    return (
        <>
            {/* Banner Section */}
            <div className="w-screen">
                <img src={banner} alt="Ayurveda Banner" className="w-full object-cover h-64 md:h-80 lg:h-[500px]" />
            </div>
            <div className='w-screen flex justify-center items-center pt-3'>
                <div className="max-w-6xl flex justify-start items-start">
                    <div className="flex flex-col">
                        <h2 className="text-xl font-bold text-gray-700 mb-2">
                            Swastasya Swastha Rakshanam - 
                            <span className='text-base font-normal pl-2'>
                                 Ayurveda aims at keeping a person healthy and managing or curing disease (mind, body, or both) that manifests in a man.
                            </span>
                        </h2>
                    </div>
                </div>
            </div>
            <div className='w-screen flex justify-center items-center pt-2'>
                <div className="max-w-6xl flex justify-start items-start">
                    <div className="flex flex-col">
                        <h2 className="text-xl font-bold text-gray-700 mb-2">
                        Aaturasya vikar prashamanam - 
                            <span className='text-base font-normal pl-2'>
                            Ayurveda has described each and everything to keep you fit and healthy according to different weather and time, we have just to follow the instructions to keep ourself fit.
                            </span>
                        </h2>
                    </div>
                </div>
            </div>


            {/* Content Section */}
            <div className="w-screen flex flex-col items-center py-12 bg-gray-50">
                <div className="max-w-6xl w-full">
                  
                    <div>
                        
                        <p className="text-lg font-bold text-gray-700 mb-2">To keep oneself fit, we must follow these fitness mantras - </p>

                        <ul className="space-y-6 text-gray-700 ">
                            {[
                                {
                                    description: 'Wake up early before sunrise and go to bed by 10 pm, as 7 hours of sleep is essential for our body and mind.',
                                },
                                {
                                    description: 'Morning exercise or yoga is necessary to keep our body, heart, and mind fit. Physical exercises keep our body activated, our heart healthy, and our mind stress-free.',
                                },
                                {
                                    description: 'Breakfast should be within two hours of waking up. It should be nutritious, full of grains, fruits, and greens.',
                                },
                                {
                                    description: 'Lunch should be between 12:30-1:30 pm and should be the main meal of the day. Dinner must be before sunset or at least 2 hours before sleep. Dinner should be light enough to be easily digested.',
                                },
                                {
                                    description: 'Consume at least 3-4 liters of water per day. Avoid drinking water between or during meals. It should be consumed either half an hour prior or at least one hour after meals to avoid weakening digestion.',
                                },
                                {
                                    description: 'Consume fruits and vegetables available according to the weather and season – opt for seasonal foods that are fresh and locally available.',
                                },
                            ].map((item, index) => (
                                <li key={index} className="mb-4 stroke-gray-200">
                                    <p className="text-base">{item.description}</p>
                                </li>
                            ))}
                        </ul>

                        <p className="mt-6 text-lg font-medium  text-gray-700 flex items-center gap-2">
                            <BsArrowRight className='text-blue-900 font-bold' />  By following these guidelines, you can significantly improve your health and well-being.
                        </p>
                    </div>
                </div>
            </div>
            <BlogSection heading="Related Blogs" />
        </>
    );
};

export default BlogDetails5;
