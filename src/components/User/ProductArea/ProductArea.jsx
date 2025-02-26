import React from 'react'
import ListProductRand from '../ListProducts/ListProductRand';

const ProductArea = () => {
    return (
        <>
            <div className='w-full'>
                <div className='w-full lg:w-full mx-auto '>
                    <div className='h-52 flex flex-col justify-center items-center'>
                        <span className='text-2xl'>Featured Products</span>
                        <span className='text-gray-400 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                    </div>
                    <div className='grid grid-rows-1 grid-cols-2 gap-2 mx-auto w-full lg:w-[1200px] lg:grid-cols-4 lg:gap-8 lg:gap-y-30 '>
                        <ListProductRand />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductArea
