import React, { useEffect, useState } from 'react'
import { FaHeart } from "react-icons/fa";
import { IoBagHandle } from "react-icons/io5";
import { FaSearchPlus } from "react-icons/fa";
import { ProductServices } from '../../../Services/ProductServices';
import { Link } from 'react-router-dom';

const ListProductRand = () => {

    const [getProducts, setProduct] = useState([])

    useEffect(() => {
        const fetchApi = async () => {
            const responseProduct = await ProductServices()
            const sapXep = responseProduct.sort(() => 0.5 - Math.random())
            const randomProduct = sapXep.slice(0, 8) 
            setProduct(randomProduct)
        }
        fetchApi()
    }, [])
    
    return (
        <>
            {getProducts.map((items, index) => {
                const totalSale = items.price - (items.discountPercentage / 100)
                    return (
                        <div key={index} className='w-full bg-gray-300 flex flex-col flex-wrap'>
                            <div className='items-product__img relative'>
                                <img className="w-full h-[270px]" src={items.images} alt="" />
                                {/* Sale */}
                                <div className='items-product__sale absolute top-0 z-10'>
                                    <span className='block w-16 bg-white text-center mx-3 my-2'>Sale</span>
                                    <span className='block w-16 bg-white text-center mx-3 my-2'>{items.discountPercentage}%</span>
                                </div>
                                {/* Order */}
                                <div className='items-product__order flex justify-center items-center absolute bottom-36 z-10 left-12'>
                                    <FaHeart className='w-12 h-12 bg-white p-4 mx-1 cursor-not-allowed hover:bg-orange-400 duration-300' />
                                    <IoBagHandle className='w-12 h-12 bg-white p-4 mx-1 cursor-not-allowed hover:bg-orange-400 duration-300' />
                                    <Link to={`/detail/${items.id}`} ><FaSearchPlus className='w-12 h-12 bg-white p-4 mx-1 cursor-pointer hover:bg-orange-400 duration-300' /></Link>
                                </div>
                            </div>
                            <div className='px-4 py-4 text-center bg-gray-50 mt-auto'>
                                <span>{items.title}</span>
                                <div className='items-product__info-price'>
                                    <span className='mx-1 line-through'>{items.price}$</span>
                                    <span className='mx-1'>{totalSale.toFixed(2)}$</span>
                                </div>
                            </div>
                        </div>
                    )
            })}
        </>
    )
}
export default ListProductRand