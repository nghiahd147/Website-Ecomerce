import React from 'react'
import ListProductRand from '../ListProducts/ListProductRand';

const ProductArea = () => {
    return (
        <>
            <div className='w-full'>
                <div className='w-1200 mx-auto tablet:w-690 '>
                    <div className='h-52 flex flex-col justify-center items-center'>
                        <span className='text-2xl'>Featured Products</span>
                        <span className='text-gray-400 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                    </div>
                    <div className='grid grid-rows-1 grid-cols-4 gap-8 gap-y-30 tablet:grid-rows-1 tablet:grid-cols-3'>
                        <ListProductRand />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductArea
