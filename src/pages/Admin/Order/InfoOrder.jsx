import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { PayServices, updatePayStatus } from '../../../Services/PayServices'
import swal from "sweetalert"

const InfoOrder = () => {

  const [order, setOrder] = useState([])
  
    useEffect(() => {
  
      const fetchApi = async () => {
        const response = await PayServices()
        setOrder(response)
      }
  
      fetchApi()
  
    }, [])

    const handleStatus = async (e, id) => {
      const newStatus = e.target.value
      const response = await updatePayStatus(id, newStatus)
      if(response) {
        swal(
          "Hoàn Thành!",
          "Cập nhật trạng thái đơn hàng thành công",
          "success"
        );
      }
      // setOrder((prevItems) => prevItems.map(items => items.id === id ? { ...items, status: newStatus } : items ))
    }
  
    return (
      <div className='mx-10 mt-3 flex-1 '>
        <div className='flex items-center'>
          <h3 className='font-bold my-5'>Quản Trị Đơn Hàng</h3>
        </div>
        <table className="table-fixed w-full rounded-xl overflow-hidden shadow-md">
          <thead className='bg-white'>
            <tr>
              <th>STT</th>
              <th>Tên người dùng</th>
              <th>Điện thoại</th>
              <th>Địa chỉ</th>
              <th>Địa chỉ cụ thể</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody className=' bg-white'>
            {order.map((items, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{items.name}</td>
                <td>{items.phone}</td>
                <td>{items.address}</td>
                <td>{items.specificAddress}</td>
                <td className='py-2'>
                  <Link to={'/admin/delete-order/' + items.id} className='ml-8 my-1 block w-2/3 bg-red-200 rounded-md px-4 py-2 text-black text-sm font-bold'>Xóa</Link>
                </td>
              </tr>
            ))}
  
          </tbody>
        </table>
          <h3 className='font-bold my-5'>Chi tiết dơn hàng</h3>
        <table className="table-fixed w-full rounded-xl overflow-hidden shadow-md mt-2">
          <thead className='bg-white'>
            <tr>
              <th>Mã đơn hàng</th>
              <th>Tên người dùng</th>
              <th>Tên sản phẩm</th>
              <th>Ảnh</th>
              <th>Đơn giá</th>
              <th>Số lượng</th>
              <th>Tổng tiền</th>
              <th>Trạng thái</th>
            </tr>
          </thead>
          <tbody className=' bg-white'>
            {order.map((items, index) => (
              <tr key={index}>
                <td>{items.id}</td>
                <td>{items.name}</td>
                <td>{items.title}</td>
                <td><img src={items.images} alt="" /></td>
                <td>{items.price}</td>
                <td>{items.quantity}</td>
                <td>{items.total}</td>
                <td>
                  <select name="" id="" onChange={(e) => handleStatus(e, items.id)}>
                    <option value={items.status}>{items.status}</option>
                    <option value="Chờ xác nhận">Chờ xác nhận</option>
                    <option value="Đang giao">Đang giao</option>
                    <option value="Đã nhận hàng">Đã nhận hàng</option>
                  </select>
                </td>
              </tr>
            ))}
  
          </tbody>
        </table>
      </div>
    )
}

export default InfoOrder