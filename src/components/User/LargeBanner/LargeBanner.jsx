import React from 'react'
import "./LargeBanner.css"

const LargeBanner = () => {
    return (
        <div className='large-banner flex justify-center items-center'>
            <div className='larger-group'>
                <div className="w-1/2 h-full flex flex-col justify-around">
                    <h2 className='text-4xl text-black'>Contrary to popular belief is not simply rand.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit
                        sed do eiusmod tempor incid</p>
                    <button className='button-base w-52 px-10 py-3 text-base'>MORE PRODUCTS</button>
                </div>
            </div>
        </div>
  )
}

export default LargeBanner
