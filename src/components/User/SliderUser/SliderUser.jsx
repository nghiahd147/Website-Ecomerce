import React, { useState } from 'react'
import "./SliderUser.css"
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

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
            <div className='slide flex items-center justify-around bg-slate-100 bg-slider overflow-hidden px-4'>
                <button onClick={() => handleSlide('prev')} className='btn-pn flex justify-center items-center hover:bg-orange-400 duration-300'><IoIosArrowBack size={23} color="#fff" /></button>
                {slide === 1 ?
                    <>
                        {/* Thêm key cho mỗi slide để sau aos có thể nhận diện được và chạy từng phần */}
                        {/* Slide 1 */}
                        <div key="slide1" data-aos="fade-up" className='w-1/2 h-1/2 flex flex-col ml-auto items-end tablet:w-full tablet:items-start tablet:ml-4'>
                            <div className='flex flex-col w-3/4 h-full justify-around'>
                                <span className='text-orange-500 text-3xl'>Top Selling!</span>
                                <span className='text-5xl font-bold'>NEW COLLECTION</span>
                                <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta veniam voluptates at corporis autem iusto. Voluptate ipsam officia odio tenetur voluptatum eos cum eligendi, molestiae quae eveniet facilis dolore cumque.</p>
                                <button className='button-base text-lg w-48 py-3'>SHOP NOW</button>
                            </div>
                        </div>
                        <div key="slide1-img" data-aos="fade-left" className='w-1/2 flex justify-start tablet:hidden '>
                            <img src="https://fusta-demo.myshopify.com/cdn/shop/files/slier-inner-1.png?v=1613745447" alt="" />
                        </div>
                    </>
                    :
                    <>
                        {/* Slide 2 */}
                        <div key="slide2-img" data-aos="fade-left" className='w-1/2 flex justify-center tablet:hidden'>
                            <img src="https://fusta-demo.myshopify.com/cdn/shop/files/slier-inner-2.png?v=1613745447" alt="" />
                        </div>
                        <div key={"slide-2"} data-aos="fade-up" className='w-1/2 h-1/2 flex flex-col ml-auto items-start tablet:w-full tablet:items-end tablet:mr-4'>
                            <div className='flex flex-col w-3/4 h-full justify-around'>
                                <span className='text-orange-500 text-3xl'>Top Selling!</span>
                                <span className='text-5xl font-bold'>NEW COLLECTION</span>
                                <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta veniam voluptates at corporis autem iusto. Voluptate ipsam officia odio tenetur voluptatum eos cum eligendi, molestiae quae eveniet facilis dolore cumque.</p>
                                <button className='button-base text-lg w-48 py-3'>SHOP NOW</button>
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