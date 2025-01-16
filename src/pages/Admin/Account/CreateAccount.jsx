import React, { useState } from 'react'
import { createAccount } from '../../../Services/AccountServices'
import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom'
import generateRandomToken from '../../../helpers/token'

const CreateAccount = () => {

  const [account, setAccount] = useState({rights: 'admin'})
  const navigate = useNavigate()

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    console.log(name, value)
    setAccount({
      ...account,
      [name]: value,
      token: generateRandomToken()
    })
  }

  console.log(account)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const response = await createAccount(account)

    if (response) {
      swal("Good job!", "You clicked the button!", "success");
      navigate('/admin/info-account');
    }

  }

  return (
    <div className='mx-10 flex-1'>
      <div className='flex'>
        <h3 className='font-bold my-5'>Trang Thêm Tài Khoản</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='flex items-center my-3'>
          <label className='py-1 min-w-28' htmlFor="title">Tên người dùng: </label>
          <input className='flex-1 mx-6 px-2 py-1 rounded-lg border-none outline-none text-base' name='name' type="text" placeholder='Nhập tên người dùng...' onChange={handleChange} required />
        </div>
        <div className='flex items-center my-3'>
          <label className='py-1 min-w-28' htmlFor="email">Email: </label>
          <input className='flex-1 mx-6 px-2 py-1 rounded-lg border-none outline-none text-base' name='email' type="email" placeholder='Nhập email...' onChange={handleChange} required />
        </div>
        <div className='flex items-center my-3'>
          <label className='py-1 min-w-28' htmlFor="password">Mật khẩu: </label>
          <input className='flex-1 mx-6 px-2 py-1 rounded-lg border-none outline-none text-base' name='pass' type="password" placeholder='Nhập mật khẩu...' onChange={handleChange} required />
        </div>
        <div className='flex items-center my-3 '>
          <label className='py-1 min-w-28' htmlFor="rights">Quyền:</label>
          <select className='flex-1 mx-6 px-2 py-1 rounded-lg border-none outline-none text-base' name="rights" id="" value={account.rights} onChange={handleChange}>
            <option value='admin'>admin</option> 
            <option value='user'>user</option>
          </select>
        </div>
        <button className='mt-5 bg-green-500 px-2 py-1 rounded-md hover:text-white duration-300'>Thêm tài khoản</button>
      </form>
    </div>
  )
}

export default CreateAccount