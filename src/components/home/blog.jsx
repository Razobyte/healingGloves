import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import doctors2 from '../../../public/Stress Blog.jpg';
import img3 from '../../../public/ayurveda2.jpeg';
import img4 from '../../../public/handmade-cream-with-organic-natural-ingredients (1).jpg';
import img5 from '../../../public/close-up-hand-holding-tea-cup.jpg';
import img6 from '../../../public/blog4.jpg';
import { Link } from 'react-router-dom';
import './home.css'

const blogPosts = [
    {
        link: "/blogdetails1",
        img: doctors2,
        title: 'Stress Management',
        date: '22/04/2024',
        comments: 'No Comments',
        excerpt: 'वर्तमान जीवन की भागदौड़ और चकाचौंध हमे तनाव की और ले जा रहा है। सभी किसी न किसी रूप में तनाव का सामना करते ही है। तनाव एक संवेगात्मक अवस्था है। थोड़ा बहुत तनाव तो अच्छा हो सकता है| '
    },
    {
        link: "/blogdetails2",
        img: img3,
        title: 'AYURVEDA FOR WELLNESS',
        date: '22/04/2024',
        comments: 'No Comments',
        excerpt: 'Ayurveda offers a comprehensive approach to wellness by focusing on maintaining balance in the body, mind, and spirit. Here’s how Ayurveda helps in promoting overall wellness. '
    },
    {
        link: "/blogdetails3",
        img: img4,
        title: 'THE ART OF HEALTHY LIVING',
        date: '22/04/2024',
        comments: 'No Comments',
        excerpt: 'Ayurveda is an ancient science of life that imparts knowledge about living a healthy life and a long lifespan and treatment of diseased individuals as said by Acharya charak '
    },
    {
        link: "/blogdetails4",
        img: img5,
        title: 'THE SECRETS OF AYURVEDA',
        date: '22/04/2024',
        comments: 'No Comments',
        excerpt: 'AYURVEDA BASICALLY EMPHASISES ON TAKING GOOD CARE OF  YOUR HEALTH BY INTAKING A BALANCED DIET AND A PROPER LIFESTYLE AND IF ANYHOW YOU BECOME  ILL THEN GETTING YOU RID OF THAT ILLNESS '
    },
    {
        link: "/blogdetails5",
        img: img6,
        title: "Aaturasya vikar prashamanam ",
        date: "22/04/2024",
        comments: "No Comments",
        excerpt: "Ayurveda aims at keeping a person healthy and managing or curing disease (mind, body or both) that manifests in a man.",
    },
];

export default function BlogSection({ heading }) {
    return (
        <div className="w-screen bg-gray-50 py-6 flex flex-col justify-center items-center">
            <h2 className="text-[#474747] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-center mb-4">
                {heading}
            </h2>
            <div className="relative w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
                    {blogPosts.map((post, index) => (
                        <SwiperSlide key={index}>
                            <Link to={post.link} className="bg-white rounded-lg w-full flex flex-col">
                                <img src={post.img} alt={post.title} className=" w-full h-40 sm:max-w-full sm:w-auto sm:h-48 object-cover rounded-t-lg" />
                                <div className="p-4 flex flex-col flex-grow">
                                    <h3 className="sm:text-lg text-base font-semibold mb-2 text-[#2A3986] text-center uppercase">{post.title}</h3>
                                    <p className="text-[#000000] font-medium sm:text-sm text-xs mb-4 flex-grow">{post.excerpt}</p>
                                    <div className='flex justify-center'>
                                        <button className="bg-pink-500 text-white sm:text-lg sm:font-bold text-sm font-medium
                                         sm:px-4 px-2  sm:py-2 py-1 rounded-lg hover:bg-pink-600 transition duration-300">
                                            Read more →
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
               
            </div>
        </div>
    );
}
