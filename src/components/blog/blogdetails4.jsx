import React from 'react';
import banner from '../../../public/Herbs for Health.jpg';
import img3 from '../../../public/close-up-hand-holding-tea-cup.jpg';
import BlogSection from '../home/blog';

const BlogDetails4 = () => {
    return (
        <>
            {/* Banner Section */}
            <div className="w-screen">
                <img src={banner} alt="Ayurveda Banner" className="w-full object-cover shadow-sm" />
            </div>

            {/* Content Section */}
            <div className="w-screen flex flex-col items-center py-12 bg-gray-50">
                <div className="max-w-6xl w-full px-4">
                    {/* Title and Introductory Image */}
                    <div className="text-left mb-12">
                        <h1 className="text-4xl font-bold text-gray-800 mb-6">The Secrets of Ayurveda</h1>
                        <img src={img3} alt="Ayurveda Tea" className="mx-auto max-w-full h-auto rounded-lg shadow-lg" />
                    </div>

                    {/* Content */}
                    <div >
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Introduction to the Secrets of Ayurveda</h2>

                        <p className="text-lg text-gray-700 mb-6">
                            Ayurveda fundamentally emphasizes maintaining good health through a balanced diet and a proper lifestyle. It also provides guidance on overcoming illnesses. As stated:
                        </p>

                        <blockquote className="bg-gray-200 p-4 rounded-lg mb-8 italic text-gray-700">
                            "PRAYOJANAM CHASYA SWASTHASYA SWAASTHYA RAKSHNAM ATURASYA VIKARAPRASHMANAM CHA"
                        </blockquote>

                        <p className="text-lg text-gray-700 mb-6">
                            This ancient knowledge, passed down over 5000 years by esteemed sages like Acharya Charaka, Acharya Sushruta, and other intellectuals, was intended to uplift humanity. It is a heritage bestowed by our ancestors, and it is our responsibility to share this wisdom with future generations so that it can continue to benefit humanity.
                        </p>

                        <p className="text-lg text-gray-700">
                            Embracing and spreading Ayurveda not only preserves this precious knowledge but also enhances the well-being of countless individuals, ensuring its legacy endures.
                        </p>
                    </div>
                </div>
            </div>
            <BlogSection  heading="Related Blogs"/>
        </>
    );
};

export default BlogDetails4;
