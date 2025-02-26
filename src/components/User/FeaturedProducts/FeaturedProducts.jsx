import React, { useEffect, useState } from 'react'
import { ProductServices } from '../../../Services/ProductServices'

const FeaturedProducts = () => {

    const [ featured, setFeautured ] = useState([])

    useEffect(() => {
        const fetchAPi = async () => {
            const response = await ProductServices()
            let max = 0;
            for (let i = 0; i < response.length; i++) {
                if(response[i].rating > max) {
                    max = response[i].rating
                }
            }
            const ratingKing = response.find((items) => items.rating = max)
            setFeautured(ratingKing)
        } 
        fetchAPi()
    }, [])

    const priceSale = featured.price - (featured.price * featured.discountPercentage / 100)

    return (
        <div className='w-full flex pt-[100px]'>
            <div className="w-[1200px] m-auto flex items-center">
                <div className='w-1/2 flex relative lg:justify-center'>
                    <img className='w-3/4' src={featured.images} alt="" />
                </div>
                <div className='w-1/2'>
                    <h2 className='text-3xl text-black my-5 font-bold'>Top Selling!</h2>
                    <div className='flex items-center my-5'>
                        <span className='mx-1 mt-1 text-lg line-through'>{featured.price}$</span>
                        <span className='mx-1 text-xl'>-</span>
                        <span className='mx-1 text-2xl text-orange-400'>{priceSale.toFixed(2)}$</span>
                    </div>
                    <div className=' my-5'>
                        <p>{featured.description}</p>
                    </div>
                    <button className='button-base w-40 py-3 text-base my-5'>SHOP NOW</button>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProducts
