import React from 'react'
import ListProductRand from '../../../components/User/ListProducts/ListProductRand';

const Main = () => {
    return (
        <div className='w-full'>
            <div className='w-1200 w-full mx-auto'>
                <div className='h-52 flex flex-col justify-center items-center tablet:mx-a'>
                    <span className='text-2xl'>New Arrivals</span>
                    <span className='text-gray-400 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                </div>
                <div className='grid grid-rows-1 grid-cols-4 gap-8 gap-y-30 tablet:grid-rows-1 tablet:grid-cols-3'>
                    <ListProductRand />
                </div>
            </div>
        </div>
    )
}

export default Main