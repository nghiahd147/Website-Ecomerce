import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CategoryIdUpdate, editCategory } from '../../../Services/CategoryServices'
import swal from 'sweetalert'

const UpdateCategory = () => {

  const isData = useParams()
  const id = isData.id

  const [isDataUpdate, setIsDataUpdate] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    const fetchApi = async () => {
      const response = await CategoryIdUpdate(id)
      setIsDataUpdate(response)
    }
    fetchApi()
  }, [id])

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    setIsDataUpdate(
      {
        ...isDataUpdate,
        [name]: value
      }
    )

  }

  const handleUpdate = (e) => {
    e.preventDefault()

    const fetchApi = async () => {
      const response = await editCategory(isDataUpdate, id)
      if(response) {
        swal("Good job!", "You clicked the button!", "success");
        navigate('/admin/info-category')
      }
    }

    fetchApi()
  }

  
  return (
    <div className='mx-10 my-8 w-full flex-1'>
      <h1 className='text-xl font-bold'>Sửa danh mục</h1>
      <form className='mt-4' onSubmit={handleUpdate}>
          {isDataUpdate ? 
            <div className='flex flex-col my-2'>
              <label className='block text-base text-black' htmlFor="title">Tên danh mục</label>
              <input className='flex-1 px-3 py-1 rounded-xl border-none outline-none' type="text" placeholder='Nhập tên sản phẩm...' value={isDataUpdate.title} name='title' onChange={handleChange} required/>
            </div>

            :
            <p>Đang load dữ liệu...</p>  
          }
        <button className='mt-5 bg-green-500 px-2 py-2 rounded-xl cursor-pointer hover:text-white duration-300'>Cập nhật</button>
      </form>
    </div>
  )
}

export default UpdateCategory