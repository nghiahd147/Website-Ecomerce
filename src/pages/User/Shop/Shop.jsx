import React, { useState } from 'react'
import "./Shop.css"
import { IoIosKeypad } from "react-icons/io";
import { CiViewList } from "react-icons/ci";
import ListProduct from '../../../components/User/ListProducts/ListProduct';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { nameCategory } from '../../../actions/category';

const Shop = () => {

  const [nameOption, setNameOption] = useState([])
  const nameParams = useParams()
  const nameCate = nameParams.name

  const dispatch = useDispatch()
  dispatch(nameCategory(nameCate))

  const handleOption = (e) => {
    const optionChange = e.target.value
    setNameOption(optionChange)
  }

  return (
    <div className='w-full flex'>
      <div className='w-1200 mx-auto mt-12 grid grid-rows-1 grid-cols-1 gap-6'>
        <div className=''>
          <div className='flex justify-between items-center border-gray-300 border-2 p-3 mb-8'>
            <div className='flex items-center'>
              <IoIosKeypad size={26} color='#f0b38c' className='cursor-pointer' />
              <CiViewList size={26} className='hover:cursor-pointer shop__icon' />
            </div>
            <div className='flex items-center'>
              <span className='text-base mr-2'>Sort by</span>
              <select className='text-base border-2 rounded-sm cursor-pointer outline-none' name="" id="" onChange={handleOption}>
                <option value="">--------------Choose--------------</option>
                <option value="Featured">Featured</option>
                <option value="Best Seling">Best Seling</option>
                <option value="Alphabetically, A-Z">Alphabetically, A-Z</option>
                <option value="Alphabetically, Z-A">Alphabetically, Z-A</option>
              </select>
            </div>
          </div>
          <div className='grid grid-rows-1 grid-cols-4 gap-10'>
            <ListProduct nameCate={nameCate} nameOption={nameOption}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop
