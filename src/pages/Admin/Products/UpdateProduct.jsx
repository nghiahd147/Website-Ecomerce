import React, { useEffect, useState } from "react"
import swal from 'sweetalert';
import { useNavigate, useParams } from "react-router-dom"
import { editProduct, ProductIdUpdate } from "../../../Services/ProductServices"
import { CategoryServices } from "../../../Services/CategoryServices"

const UpdateProduct = () => {

  const [dataUpdateProduct, setDataUpdateProduct] = useState({})
  const [dataUpdateCategory, setDataUpdateCategory] = useState([])

  const isData = useParams()
  const id = isData.id

  const navigate = useNavigate()

  useEffect(() => {
    const fetchApi = async () => {
      const responseProduct = await ProductIdUpdate(id)
      const responseCategory = await CategoryServices()
      setDataUpdateProduct(responseProduct)
      setDataUpdateCategory(responseCategory)
    }
    fetchApi()
  }, [id])

  console.log(dataUpdateCategory)

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setDataUpdateProduct(
      {
        ...dataUpdateProduct,
        // dùng để giữ lại giá trị cũ ví dụ như mà chỉ cập nhật title không thôi mà ko có dòng này thì có thể các trường khác sẽ mất giá trị
        [name]: value
      }
    )
  }

  console.log(dataUpdateProduct.id)


  const handleUpdate = (e) => {
    e.preventDefault()
    console.log("handleUpdate called");
    const fetchApi = async () => {
      const responseUpdate = await editProduct(dataUpdateProduct, id)
      if (responseUpdate) {
        swal("Good job!", "You clicked the button!", "success")
        navigate('/admin/info-product')
      }
    }
    fetchApi()
  }

  return (
    <div className='mx-10 my-8 w-full flex-1'>
      <h1 className='text-xl font-bold'>Sửa sản phẩm</h1>
      {
        dataUpdateProduct &&
        <form className='mt-4' onSubmit={handleUpdate}>
          <div className='flex flex-col my-2'>
            <label className='block text-base text-black' htmlFor="category">Tên danh mục</label>
            <select className="flex-1 px-3 py-1 rounded-xl border-none outline-none" name="category" id="" onChange={handleChange}>
              <option className="flex-1 px-3 py-1 border-none outline-none" value={dataUpdateProduct.category}>{dataUpdateProduct.category}</option>
              {dataUpdateCategory.map((result, index) => (
                <option key={index} className="flex-1 px-3 py-1 border-none outline-none" value={result.title}>{result.title}</option>
              ))}
            </select>
          </div>
          <div className='flex flex-col my-2'>
            <label className='block text-base text-black' htmlFor="title">Tên sản phẩm</label>
            <input className='flex-1 px-3 py-1 rounded-xl border-none outline-none' value={dataUpdateProduct.title} type="text" name='title' onChange={handleChange} required />
          </div>
          <div className='flex flex-col my-2'>
            <label className='block text-base text-black' htmlFor="description">Mô tả</label>
            <input className='flex-1 px-3 py-1 rounded-xl border-none outline-none' value={dataUpdateProduct.description} type="text" name='description' onChange={handleChange} required />
          </div>
          <div className='flex flex-col my-2'>
            <label className='block text-base text-black' htmlFor="price">Giá sản phẩm</label>
            <input className='flex-1 px-3 py-1 rounded-xl border-none outline-none' value={dataUpdateProduct.price} type="text" name='price' onChange={handleChange} required />
          </div>
          <div className='flex flex-col my-2'>
            <label className='block text-base text-black' htmlFor="images">Hình ảnh</label>
            <input className='flex-1 px-3 py-1 rounded-xl border-none outline-none' value={dataUpdateProduct.images} type="text" name='images' onChange={handleChange} required />
          </div>
          <div className='flex flex-col my-2'>
            <label className='block text-base text-black' htmlFor="minimumOrderQuantity">Số lượng</label>
            <input className='flex-1 px-3 py-1 rounded-xl border-none outline-none' value={dataUpdateProduct.minimumOrderQuantity} type="text" name='minimumOrderQuantity' onChange={handleChange} required />
          </div>
          <button className='mt-5 bg-green-500 px-2 py-2 rounded-xl cursor-pointer hover:text-white duration-300'>Cập nhật</button>
        </form>
      }

    </div>
  )
}

export default UpdateProduct