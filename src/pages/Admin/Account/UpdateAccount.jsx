import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { AccountIdUpdate, editAccount } from '../../../Services/AccountServices'
import swal from 'sweetalert'

const UpdateAccount = () => {

  const params = useParams()
  const id = params.id
  const [dataId, setDataId] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchApi = async () => {
      const responseIdData = await AccountIdUpdate(id)
      setDataId(responseIdData)
    }
    fetchApi()
  }, [id])

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setDataId({
      ...dataId,
      [name]: value
    })
  }

  const submitHandle = async (e) => {

    e.preventDefault()

    const response = await editAccount(dataId, id)

    if(response) {
      swal("Good job!", "You clicked the button!", "success");
      navigate('/admin/info-account');
    }

  }

  return (
    <div className='mx-10 flex-1'>
      <div className='flex'>
        <h3 className='font-bold my-5'>Trang Sửa Tài Khoản</h3>
      </div>
      <form onSubmit={submitHandle}>
        <div className='flex items-center my-3'>
          <label className='py-1 min-w-28' htmlFor="title">Tên người dùng: </label>
          <input className='flex-1 mx-6 px-2 py-1 rounded-lg border-none outline-none text-base' value={dataId.name} name='name' type="text" placeholder='Nhập tên người dùng...' onChange={handleChange} required />
        </div>
        <div className='flex items-center my-3'>
          <label className='py-1 min-w-28' htmlFor="email">Email: </label>
          <input className='flex-1 mx-6 px-2 py-1 rounded-lg border-none outline-none text-base' value={dataId.email} name='email' type="email" placeholder='Nhập email...' onChange={handleChange} required />
        </div>
        <div className='flex items-center my-3'>
          <label className='py-1 min-w-28' htmlFor="password">Mật khẩu: </label>
          <input className='flex-1 mx-6 px-2 py-1 rounded-lg border-none outline-none text-base' value={dataId.pass} name='pass' type="password" placeholder='Nhập mật khẩu...' onChange={handleChange} required />
        </div>
        <div className='flex items-center my-3 '>
          <label className='py-1 min-w-28' htmlFor="rights">Quyền:</label>
          <select className='flex-1 mx-6 px-2 py-1 rounded-lg border-none outline-none text-base' value={dataId.rights} name="rights" id="" onChange={handleChange}>
            <option value='admin'>admin</option>
            <option value='user'>user</option>
          </select>
        </div>
        <button className='mt-5 bg-green-500 px-2 py-1 rounded-md hover:text-white duration-300'>Cập nhật</button>
      </form>
    </div>
  )
}

export default UpdateAccount