import React from 'react';
import banner from '../../../public/Herbs for Health.jpg';
import img3 from '../../../public/handmade-cream-with-organic-natural-ingredients (1).jpg';
import BlogSection from '../home/blog';

const BlogDetails3 = () => {
    return (
        <>
            {/* Banner Section */}
            <div className="w-screen">
                <img src={banner} alt="Ayurveda Banner" className="w-full  object-cover shadow-sm" />
            </div>

            {/* Content Section */}
            <div className="w-screen flex flex-col items-center py-12 bg-gray-50">
                <div className="max-w-6xl w-full px-4">
                    {/* Title and Introductory Image */}
                    <div className="text-left mb-12">
                        <h1 className="text-4xl font-bold text-gray-800 mb-5">Ayurveda - The Art of Healthy Living</h1>
                        <img src={img3} alt="Ayurveda" className="mx-auto max-w-full h-auto rounded-lg shadow-lg" />
                    </div>

                    {/* Content */}
                    <div>
                        <p className="text-lg text-gray-700 mb-6">
                            Ayurveda is an ancient science of life that imparts knowledge about living a healthy life and a long lifespan. It also includes treatment methods as described by Acharya Charak.
                        </p>

                        <blockquote className="bg-gray-200 p-4 rounded-lg mb-8 italic text-gray-700">
                            "प्रयोजनम चास्य स्वस्थ्स्य स्वास्थ्यरक्षणम् आतुरस्य विकार प्रशमनम् च"
                        </blockquote>

                        <p className="text-lg text-gray-700 mb-6">
                            According to Acharya Sushruta, health is defined as:
                            <br />
                            "समदोष‍‌: समअग्निश्च समधातु मल:क्रिया:। प्रसन्नात्मेइंद्रिय‍‍‍‍मन‍‌: स्वस्थइतिअभिधीयते।"
                            <br />
                            This means health is when the balance of Tridosha (vata, pitta, kapha), Sapta Dhatu (ras, rakt, mans, meda, asthi, majja, shukra), and Trimala (mutra, purisha, sweda) are maintained, and when the Jatharagni (digestive fire) functions properly. Furthermore, when the mind, spirit, and all the sense organs are in their happiest state, this is how health is defined.
                        </p>

                        <ul className=" list-inside text-gray-700 mb-6 space-y-4">
                            <li>
                                <h3 className="text-xl font-semibold text-gray-800">Diet and Eating Habits</h3>
                                <p className="text-base">
                                    Our diet should be balanced and we should only eat when hungry. Eating without hunger disrupts the body's balance and can lead to illness. Acharya Charak emphasized that our diet should align with our Jatharagni.
                                </p>
                            </li>
                            <li>
                                <h3 className="text-xl font-semibold text-gray-800">Personal Hygiene</h3>
                                <p className="text-base">
                                    Personal hygiene practices, such as rising early, applying Anjan (kohl) to the eyes, performing medicated Dhoompaan (fumigation), and Nasya (nasal administration of medicated oils), are crucial for maintaining health and preventing illness. Regular dental care, oil application to the head, and wearing slippers are also recommended.
                                </p>
                            </li>
                            <li>
                                <h3 className="text-xl font-semibold text-gray-800">Seasonal Regime</h3>
                                <p className="text-base">
                                    Following seasonal adjustments helps in choosing appropriate foods and clothing for each season. This practice, as described in Dinacharya and Ritu Charya by our intellectual gurus, helps maintain health and prevent illness.
                                </p>
                            </li>
                        </ul>

                        <p className="text-lg text-gray-700">
                            Adhering to these principles of Ayurveda, including proper diet, personal hygiene, and seasonal practices, helps in maintaining long-term health and vitality. Even if one's immune system is compromised, Ayurveda offers extensive knowledge for treating diseases, ensuring a long and healthy life.
                        </p>
                    </div>
                </div>
            </div>
            <BlogSection  heading="Related Blogs"/>
        </>
    );
};

export default BlogDetails3;
