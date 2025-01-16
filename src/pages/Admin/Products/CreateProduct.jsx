import React, { useEffect, useState } from 'react'
import { createProduct } from '../../../Services/ProductServices'
import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom'
import { CategoryServices } from '../../../Services/CategoryServices'

const CreateProduct = () => {

  const [data, setData] = useState({})
  const [dataCategory, setDataCategory] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchApi = async () => {
      const response = await CategoryServices()
      setDataCategory(response)
    }
    fetchApi()
  }, [])

  // console.log(dataCategory)

  const handleCreate = async (e) => {

      e.preventDefault()

      const response = await createProduct(data)
      if(response) {
        navigate('/admin/info-product')
        swal("Good job!", "You clicked the button!", "success")
        setData('')
      } else {
        swal("Error!", "You clicked the button!", "error")
      }
  }

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setData({
      ...data,
      [name]: value
    })
  }

  console.log(data)

  return (
    <>
    <div className='mx-10 my-8 w-full flex-1'>
      <h1 className='text-xl font-bold'>Thêm sản phẩm</h1>
      <form className='w-full mt-2' onSubmit={handleCreate}>
        <div className='flex flex-col my-2'>
          <label className='block text-base text-black' htmlFor="category">Danh mục</label>
          <select className='flex-1 px-3 py-1 rounded-xl border-none outline-none' name="category" id="" onChange={handleChange}>
            {dataCategory.map((items, index) => (
              <option key={index} value={items.title} >{items.title}</option>
            ))}
          </select>
        </div>
        <div className='flex flex-col my-2'>
          <label className='block text-base text-black' htmlFor="title">Tên sản phẩm</label>
          <input className='flex-1 px-3 py-1 rounded-xl border-none outline-none' type="text" name="title" placeholder='Nhập tên sản phẩm...' onChange={handleChange} required/>
        </div>
        <div className='flex flex-col my-2'>
          <label className='block text-base text-black' htmlFor="description">Mô tả</label>
          <input className='flex-1 px-3 py-1 rounded-xl border-none outline-none' type="text" name="description" placeholder='Nhập mô tả...' onChange={handleChange} required/>
        </div>
        <div className='flex flex-col my-2'>
          <label className='block text-base text-black' htmlFor="price">Giá sản phẩm</label>
          <input className='flex-1 px-3 py-1 rounded-xl border-none outline-none' type="text" name="price" placeholder='Nhập giá sản phẩm...' onChange={handleChange} required/>
        </div>
        <div className='flex flex-col my-2'>
          <label className='block text-base text-black' htmlFor="images">Hình ảnh</label>
          <input className='flex-1 px-3 py-1 rounded-xl border-none outline-none' type="text" name="images" placeholder='Nhập link hình ảnh...' onChange={handleChange} required/>
        </div>
        <div className='flex flex-col my-2'>
          <label className='block text-base text-black' htmlFor="minimumOrderQuantity">Số lượng</label>
          <input className='flex-1 px-3 py-1 rounded-xl border-none outline-none' type="text" name="minimumOrderQuantity" placeholder='Nhập số lượng...' onChange={handleChange} required/>
        </div>
        <button className='mt-5 bg-green-500 px-2 py-2 rounded-xl cursor-pointer hover:text-white duration-300'>Thêm sản phẩm</button>
      </form>
    </div>
    </>
  )
}

export default CreateProduct