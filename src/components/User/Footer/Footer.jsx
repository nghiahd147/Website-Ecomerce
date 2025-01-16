import React from 'react'
import "./Footer.css"
import { IoLocationOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { FiPhone } from "react-icons/fi";
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer flex w-full h-96 mt-auto'>
      <div className='footer-items m-auto'>
        <div className='footer-group grid grid-cols-5 gap-4 pt-5 pb-20'>
          <div className='col-span-2 tablet:col-span-12 tablet:ml-10'>
            <h2 className='text-xl mb-5'>My Account</h2>
            <span className='mb-3 flex items-center text-lg'>
              <IoLocationOutline className='mr-2' size={18} />
              184 Main Rd E, St Albans VIC 3021, Australia
            </span>
            <span className='mb-3 flex items-center text-lg'>
              <TfiEmail className='mr-2' size={18} />
              Mill Us: <Link className='hover:text-orange-400 duration-300'>yourmail@gmail.com</Link> 
            </span>
            <span className='mb-3 flex items-center text-lg'>
              <FiPhone className='mr-2' size={18} />
              Phone: + 00 123 456 789
            </span>
            <img src="https://fusta-demo.myshopify.com/cdn/shop/files/1.png?v=1613745855" alt="" />
          </div>
          <div className='tablet:col-span-2 tablet:ml-10'>
            <h2 className='text-xl mb-5'>Category</h2>
            <span className='mb-3 flex items-center text-lg cursor-pointer hover:text-orange-400 duration-300'>Ecommerce</span>
            <span className='mb-3 flex items-center text-lg cursor-pointer hover:text-orange-400 duration-300'>Shopify</span>
            <span className='mb-3 flex items-center text-lg cursor-pointer hover:text-orange-400 duration-300'>Prestashop</span>
            <span className='mb-3 flex items-center text-lg cursor-pointer hover:text-orange-400 duration-300'>Opencart</span>
            <span className='mb-3 flex items-center text-lg cursor-pointer hover:text-orange-400 duration-300'>Magento</span>
            <span className='mb-3 flex items-center text-lg cursor-pointer hover:text-orange-400 duration-300'>Jisoshop</span>
          </div>
          <div className='tablet:col-span-2 tablet:ml-10'>
            <h2 className='text-xl mb-5'>Infomation</h2>
            <span className='mb-3 flex items-center text-lg cursor-pointer hover:text-orange-400 duration-300'>Home</span>
            <span className='mb-3 flex items-center text-lg cursor-pointer hover:text-orange-400 duration-300'>About Us</span>
            <span className='mb-3 flex items-center text-lg cursor-pointer hover:text-orange-400 duration-300'>Contact Us</span>
            <span className='mb-3 flex items-center text-lg cursor-pointer hover:text-orange-400 duration-300'>Return & Exchanges</span>
            <span className='mb-3 flex items-center text-lg cursor-pointer hover:text-orange-400 duration-300'>Shipping & Delivery</span>
            <span className='mb-3 flex items-center text-lg cursor-pointer hover:text-orange-400 duration-300'>Privacy Policy</span>
          </div>
          <div className='tablet:col-span-2 tablet:ml-10'>
            <h2 className='text-xl mb-5'>Quick Links</h2>
            <span className='mb-3 flex items-center text-lg cursor-pointer hover:text-orange-400 duration-300'>Store Location</span>
            <span className='mb-3 flex items-center text-lg cursor-pointer hover:text-orange-400 duration-300'>My Account</span>
            <span className='mb-3 flex items-center text-lg cursor-pointer hover:text-orange-400 duration-300'>Orders Tracking</span>
            <span className='mb-3 flex items-center text-lg cursor-pointer hover:text-orange-400 duration-300'>Size Guide</span>
            <span className='mb-3 flex items-center text-lg cursor-pointer hover:text-orange-400 duration-300'>Shopping Rates</span>
            <span className='mb-3 flex items-center text-lg cursor-pointer hover:text-orange-400 duration-300'>Contact Us</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer