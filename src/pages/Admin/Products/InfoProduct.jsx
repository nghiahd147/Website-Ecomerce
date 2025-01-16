import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ProductServices } from '../../../Services/ProductServices'

const InfoProduct = () => {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const response = await ProductServices();
            setProduct(response.reverse())
        }
        fetchApi()
    }, [])

    console.log(product)

    return (
        <div className='mx-10 flex-1'>
            <div className='flex items-center'>
                <h3 className='font-bold my-5'>Trang Quản Trị Sản Phẩm</h3>
                <Link to={'/admin/create-product'} className='mx-2 bg-green-400 rounded-md px-2 text-black text-sm font-bold'>Thêm</Link>
            </div>
            <table class="table-fixed w-full rounded-xl overflow-hidden shadow-md ">
                <thead className='bg-white'>
                    <tr>
                        <th>Id</th>
                        <th>Tên sản phẩm</th>
                        <th>Danh mục</th>
                        <th>Mô tả</th>
                        <th>Giá</th>
                        <th>Hình ảnh</th>
                        <th>Số lượng</th>
                        <th>Chức năng</th>
                    </tr>
                </thead>
                <tbody className=' bg-white'>
                    {product.map((items, index) => (
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{items.title}</td>
                            <td>{items.category}</td>
                            <td>{items.description}</td>
                            <td>{items.price}</td>
                            <td><img className='w-20 h-20 rounded-md mx-auto' src={items.images} alt="" /></td>
                            <td>{items.minimumOrderQuantity}</td>
                            <td className='flex-col m-auto'>
                                <Link to={'/admin/update-product/' + items.id} className='max-w-16 mx-auto block my-2 bg-yellow-200 rounded-md px-4 py-2 text-black text-sm font-bold'>Sửa</Link>
                                <Link to={'/admin/delete-product/' + items.id} className='max-w-16 mx-auto block my-2 bg-red-200 rounded-md px-4 py-2 text-black text-sm font-bold'>Xóa</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default InfoProduct