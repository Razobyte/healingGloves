import React from 'react';
import banner from '../../../public/Ayurveda-banner.jpg';
import img3 from '../../../public/ayurveda2.jpeg';
import BlogSection from '../home/blog';

const BlogDetails2 = () => {
    return (
        <>
            {/* Banner Section */}
            <div className="w-screen">
                <img src={banner} alt="Ayurveda Banner" className="w-full  object-cover" />
            </div>

            {/* Content Section */}
            <div className="w-screen flex flex-col items-center py-12 bg-gray-50">
                <div className="max-w-6xl w-full px-4">
                    {/* Title and Introductory Image */}
                    <div className="text-left mb-12">
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">Ayurveda for Wellness</h1>
                        <img src={img3} alt="Ayurveda" className="mx-auto max-w-full h-auto rounded-lg shadow-lg" />
                    </div>

                    {/* Content */}
                    <div className=" p-8 ">
                        <p className="text-lg text-gray-700 mb-6">
                            Ayurveda offers a comprehensive approach to wellness by focusing on maintaining balance in the body, mind, and spirit. Here’s how Ayurveda helps in promoting overall wellness:
                        </p>

                        <ul className="space-y-6 text-gray-700">
                            {[
                                {
                                    title: 'Personalized Approach',
                                    description: 'Ayurveda recognizes that each person is unique, with their own constitution (prakriti) and imbalances (vikriti). It provides personalized recommendations for diet, lifestyle, and therapies based on individual needs to restore and maintain balance.',
                                },
                                {
                                    title: 'Holistic Health',
                                    description: 'Ayurveda considers health as a holistic concept encompassing physical, mental, emotional, and spiritual aspects. It addresses all these dimensions to achieve complete well-being.',
                                },
                                {
                                    title: 'Preventive Healthcare',
                                    description: 'Ayurveda emphasizes preventive measures to maintain health and prevent diseases. By understanding one’s constitution and potential imbalances, individuals can take proactive steps to stay healthy.',
                                },
                                {
                                    title: 'Diet and Nutrition',
                                    description: 'Ayurveda places great importance on food as medicine. It emphasizes eating fresh, seasonal, and locally sourced foods that are appropriate for one’s constitution and balancing the six tastes (sweet, sour, salty, pungent, bitter, and astringent) in each meal.',
                                },
                                {
                                    title: 'Herbal Remedies',
                                    description: 'Ayurveda uses a wide range of herbs and natural substances to support various aspects of health and treat imbalances. These remedies are chosen based on their specific qualities and effects on the body.',
                                },
                                {
                                    title: 'Yoga and Meditation',
                                    description: 'These practices are integral to Ayurveda for promoting physical strength, flexibility, mental clarity, and emotional balance. They also help in managing stress and improving overall well-being.',
                                },
                                {
                                    title: 'Detoxification and Cleansing',
                                    description: 'Ayurveda employs techniques like Panchakarma (a set of purification therapies) to remove toxins (ama) from the body and restore its natural state of balance.',
                                },
                                {
                                    title: 'Daily Routine (Dinacharya)',
                                    description: 'Following a daily routine that aligns with natural rhythms helps in maintaining regularity in bodily functions, enhancing overall health and vitality.',
                                },
                                {
                                    title: 'Mind-Body Connection',
                                    description: 'Ayurveda recognizes the profound connection between the mind and body. Emotional and mental well-being are considered crucial for maintaining physical health.',
                                },
                                {
                                    title: 'Seasonal Adjustments',
                                    description: 'Ayurveda advises adjusting lifestyle practices, diet, and routines according to the changing seasons to maintain harmony with nature and prevent seasonal imbalances.',
                                },
                            ].map((item, index) => (
                                <li key={index} className="mb-6">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                                    <p className="text-base">{item.description}</p>
                                </li>
                            ))}
                        </ul>

                        <p className="mt-6 text-lg text-gray-700">
                            Overall, Ayurveda’s approach to wellness is rooted in ancient wisdom and aims to promote longevity, vitality, and optimal health by harmonizing the body, mind, and spirit through personalized, holistic, and preventive measures.
                        </p>
                    </div>
                </div>
            </div>
            <BlogSection heading="Related Blogs"/>
        </>
    );
};

export default BlogDetails2;
