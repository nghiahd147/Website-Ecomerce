import React, { useState } from 'react'
import "./SliderUser.css"
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';

const SliderUser = () => {

    const [slide, setSlider] = useState(1)

    const handleSlide = (result) => {
        setSlider((numberSlide) => {
            if(result === 'next') {
                return numberSlide === 2 ? 1 : numberSlide + 1
            } else {
                return numberSlide === 1 ? 2 : numberSlide - 1
            }
        })
    }

    // Khi render ra giao diện sẽ chạy hiệu ứng
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <>
            <div className='slide flex w-full items-center justify-around bg-slate-100 bg-slider overflow-hidden px-4'>
                <button onClick={() => handleSlide('prev')} className='btn-pn flex justify-center items-center hover:bg-orange-400 duration-300'><IoIosArrowBack size={23} color="#fff" /></button>
                {slide === 1 ?
                    <>
                        {/* Thêm key cho mỗi slide để sau aos có thể nhận diện được và chạy từng phần */}
                        {/* Slide 1 */}
                        <div key="slide1" data-aos="fade-up" className='w-full lg:w-1/2 h-1/2 flex flex-col ml-auto items-end lg:items-start lg:ml-4'>
                            <div className='flex flex-col w-full lg:w-3/4 h-full justify-around mx-auto'>
                                <span className='text-orange-500 text-3xl'>🔥 Best Seller!</span>
                                <span className='text-5xl font-bold'>EXCLUSIVE COLLECTION</span>
                                <p className='text-sm'>Khám phá bộ sưu tập nội thất sang trọng với thiết kế tinh tế và chất liệu cao cấp. Mang đến sự thoải mái tối đa và phong cách hiện đại cho không gian sống của bạn.</p>
                                <button className='button-base text-lg w-48 py-3'>
                                    <Link to="/shop">SHOP NOW</Link>
                                </button>
                            </div>
                        </div>
                        <div key="slide1-img" data-aos="fade-left" className='w-1/2 justify-start lg:flex hidden '>
                            <img src="https://fusta-demo.myshopify.com/cdn/shop/files/slier-inner-1.png?v=1613745447" alt="" />
                        </div>
                    </>
                    :
                    <>
                        {/* Slide 2 */}
                        <div key="slide2-img" data-aos="fade-left" className='w-1/2 justify-center lg:flex hidden'>
                            <img src="https://fusta-demo.myshopify.com/cdn/shop/files/slier-inner-2.png?v=1613745447" alt="" />
                        </div>
                        <div key={"slide-2"} data-aos="fade-up" className='w-full lg:w-1/2 h-1/2 flex flex-col ml-auto items-start lg:items-end lg:mr-4'>
                            <div className='flex flex-col w-full lg:w-3/4 h-full justify-around mx-auto'>
                                <span className='text-orange-500 text-3xl'>✨ Trending Now!</span>
                                <span className='text-5xl font-bold'>LUXURY COMFORT COLLECTION</span>
                                <p className='text-sm'>Mang đến sự kết hợp hoàn hảo giữa phong cách hiện đại và sự thoải mái tối đa. Thiết kế độc đáo, chất liệu cao cấp – nâng tầm không gian sống của bạn ngay hôm nay!</p>
                                <button className='button-base text-lg w-48 py-3'>
                                    <Link to="/shop">SHOP NOW</Link>
                                </button>
                            </div>
                        </div>
                    </>
                }
                <button onClick={() => handleSlide('next')} className='btn-pn flex justify-center items-center hover:bg-orange-400 duration-300'><IoIosArrowForward size={23} color="#fff" /></button>
            </div>
        </>
    )
}

export default SliderUser