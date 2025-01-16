import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CategoryServices } from '../../../Services/CategoryServices'

const InfoCategory = () => {
  const [category, setCategory] = useState([])

  useEffect(() => {
    const fetchApi = async () => {
      const response = await CategoryServices()
      setCategory(response)
    }
    fetchApi()
  }, [])

  return (
    <>
      <div className='mx-10 flex-1 '>
        <div className='flex items-center'>
          <h3 className='font-bold my-5'>Trang Quản Trị Danh Mục</h3>
          <Link to={'/admin/create-category'} className='mx-2 bg-green-400 rounded-md px-2 text-black text-sm font-bold'>Thêm</Link>
        </div>
        <table class="table-fixed w-full rounded-xl overflow-hidden shadow-md">
          <thead className='bg-white'>
            <tr>
              <th>Id</th>
              <th>Tên danh mục</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody className=' bg-white'>
            {category.map((items, index) => (
              <tr key={index}>
                <td>{index}</td>
                <td>{items.title}</td>
                <td>
                  <Link to={'/admin/update-category/' + items.id} className='mx-2 bg-yellow-200 rounded-md px-4 py-2 text-black text-sm font-bold'>Sửa</Link>
                  <Link to={'/admin/delete-category/' + items.id} className='mx-2 bg-red-200 rounded-md px-4 py-2 text-black text-sm font-bold'>Xóa</Link>
                </td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </>
  )
}

export default InfoCategory