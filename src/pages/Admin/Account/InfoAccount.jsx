import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AccountServices } from '../../../Services/AccountServices'

const InfoAccount = () => {

  const [account, setAccount] = useState([])

  useEffect(() => {

    const fetchApi = async () => {
      const response = await AccountServices()
      setAccount(response)
    }

    fetchApi()

  }, [])

  return (
    <div className='mx-10 mt-3 flex-1 '>
      <div className='flex items-center'>
        <h3 className='font-bold my-5'>Trang Quản Trị Tài Khoản</h3>
        <Link to={'/create-account'} className='mx-2 bg-green-400 rounded-md px-2 text-black text-sm font-bold'>Thêm</Link>
      </div>
      <table className="table-fixed w-full rounded-xl overflow-hidden shadow-md">
        <thead className='bg-white'>
          <tr>
            <th>Id</th>
            <th>Tên người dùng</th>
            <th>Email</th>
            <th>Password</th>
            <th>Quyền</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody className=' bg-white'>
          {account.map((items, index) => (
            <tr key={index}>
              <td>{index}</td>
              <td>{items.name}</td>
              <td>{items.email}</td>
              <td>{items.pass}</td>
              <td>{items.rights}</td>
              <td>
                <Link to={'/admin/update-account/' + items.id} className='mx-2 bg-yellow-200 rounded-md px-4 py-2 text-black text-sm font-bold'>Sửa</Link>
                <Link to={'/admin/delete-account/' + items.id} className='mx-2 bg-red-200 rounded-md px-4 py-2 text-black text-sm font-bold'>Xóa</Link>
              </td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  )
}

export default InfoAccount