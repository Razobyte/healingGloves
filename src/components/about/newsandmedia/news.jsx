import React, { useState } from 'react';
import banner from '../../../../public/newandmediabanner.png';
import Form from '../../form';
import news1 from '../../../../public/newsandmedia (11).png';
import news2 from '../../../../public/newsandmedia (10).png';
import news3 from '../../../../public/newsandmedia (9).png';
import news4 from '../../../../public/newsandmedia (8).png';
import news5 from '../../../../public/newsandmedia (7).png';
import news6 from '../../../../public/newsandmedia (6).png';
import news7 from '../../../../public/newsandmedia (5).png';
import news8 from '../../../../public/newsandmedia (4).png';
import news9 from '../../../../public/newsandmedia (3).png';
import news10 from '../../../../public/newsandmedia (2).png';
import news11 from '../../../../public/newsandmedia (2).png';

export default function News() {
    const [visiblePosts, setVisiblePosts] = useState(9); // Initial number of posts to display

    const NewsPosts = [
        { img: news1, title: 'Recognizing Fistula: Causes, Signs, and Treatments', date: '22/04/2024', comments: 'No Comments', excerpt: 'Fistula is a condition...' },
        { img: news2, title: 'Hernia Unveiled: Types, Causes, and Surgical Interventions', date: '22/04/2024', comments: 'No Comments', excerpt: 'Hernias manifest...' },
        { img: news3, title: 'Surprising body cues that could be heart for', date: '22/04/2024', comments: 'No Comments', excerpt: 'Lorem Ipsum is simply dummy text...' },
        { img: news4, title: 'Recognizing Fistula: Causes, Signs, and Treatments', date: '22/04/2024', comments: 'No Comments', excerpt: 'Fistula is a condition...' },
        { img: news5, title: 'Hernia Unveiled: Types, Causes, and Surgical Interventions', date: '22/04/2024', comments: 'No Comments', excerpt: 'Hernias manifest...' },
        { img: news6, title: 'Hernia Unveiled: Types, Causes, and Surgical Interventions', date: '22/04/2024', comments: 'No Comments', excerpt: 'Hernias manifest...' },
        { img: news7, title: 'Hernia Unveiled: Types, Causes, and Surgical Interventions', date: '22/04/2024', comments: 'No Comments', excerpt: 'Hernias manifest...' },
        { img: news8, title: 'Hernia Unveiled: Types, Causes, and Surgical Interventions', date: '22/04/2024', comments: 'No Comments', excerpt: 'Hernias manifest...' },
        { img: news9, title: 'Hernia Unveiled: Types, Causes, and Surgical Interventions', date: '22/04/2024', comments: 'No Comments', excerpt: 'Hernias manifest...' },
        { img: news10, title: 'Surprising body cues that could be heart for', date: '22/04/2024', comments: 'No Comments', excerpt: 'Lorem Ipsum is simply dummy text...' },
        { img: news11, title: 'Surprising body cues that could be heart for', date: '22/04/2024', comments: 'No Comments', excerpt: 'Lorem Ipsum is simply dummy text...' },
    ];

    const loadMorePosts = () => {
        setVisiblePosts(prev => prev + 1); // Increment by 1 post each time
    };

    return (
        <>
           <div className="relative w-screen ">
           
           <img src={banner} alt="banner" className="w-full h-auto" />
           <div className="absolute inset-0 gradient-overlay"></div>
           <h1 className='text-7xl font-[700] text-[#fff] absolute top-40 left-60'>News And Media
          </h1>
           <div className="absolute lg:top-10 xxl:top-5 right-40 p-0 w-1/4">
               <Form />
           </div>

       </div>
            <div className="w-screen bg-gray-50 py-12 flex flex-col justify-center items-center">
                <h2 className="text-5xl font-[800] text-center mb-12 text-gray-800 text-opacity-90">News And Media</h2>
                <div className="max-w-6xl relative">
                    <div className="grid grid-cols-3 gap-6 pb-4">
                        {NewsPosts.slice(0, visiblePosts).map((post, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md w-full" onClick={() => Navigate('/blogdetails1')}>
                                <img src={post.img} alt={post.title} className="w-full h-48 object-cover rounded-t-lg" />
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold mb-2 text-[#2A3986] text-center">{post.title}</h3>
                                    <div className="text-sm text-[#000000] mb-2 font-medium text-center">
                                        <span>{post.date}</span>
                                        {post.comments && <span className="ml-4">{post.comments}</span>}
                                    </div>
                                    <p className="text-[#000000] font-regular text-sm mb-4">{post.excerpt}</p>
                                    <div className='flex justify-center items-center'>
                                        <button className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition duration-300">
                                            Read more →
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {visiblePosts < NewsPosts.length && (
                        <div className='flex justify-center mt-4'>
                            <button onClick={loadMorePosts} className='bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition duration-300'>
                                Load More
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
