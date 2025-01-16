import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaClipboardList, FaUser, FaList } from "react-icons/fa";
import { AiOutlineSkin } from "react-icons/ai";

const SidebarDashboard = () => {

    const [showBgr, setShowBgr] = useState('')

    const handleClick = (itemId) => {
        setShowBgr(itemId)
    }

    return (
        <div className='w-48'>
            <ul>
                {/* <li className= { showBgr === 'home' ? 'sidebar-items active' : 'sidebar-items'  }  onClick={() => handleClick('home')}>
                    <Link className='flex items-center hover:text-white transition-all duration-300' to={'/admin/home'}>
                        <FaHome className='ml-12' />
                        <span className='mx-2'>Trang chủ</span>
                    </Link>
                </li> */}
                <li className= { showBgr === 'thanhvien' ? 'sidebar-items active' : 'sidebar-items'  } onClick={() => handleClick('thanhvien')}>
                    <Link className='flex items-center hover:text-white transition-all duration-300' to={'/admin/info-account'}>
                        <FaUser className='ml-12' />
                        <span className='mx-2'>Thành viên</span>
                    </Link>
                </li>
                <li className= { showBgr === 'info-category' ? 'sidebar-items active' : 'sidebar-items'  } onClick={() => handleClick('info-category')}>
                    <Link className='flex items-center hover:text-white transition-all duration-300' to={'/admin/info-category'}>
                        <FaList className='ml-12' />
                        <span className='mx-2'>Danh mục</span>
                    </Link>
                </li>
                <li className= { showBgr === 'info-product' ? 'sidebar-items active' : 'sidebar-items'  } onClick={() => handleClick('info-product')}>
                    <Link className='flex items-center hover:text-white transition-all duration-300' to={'/admin/info-product'}>
                        <AiOutlineSkin className='ml-12' />
                        <span className='mx-2'>Sản phẩm</span>
                    </Link>
                </li>
                <li className= { showBgr === 'donhang' ? 'sidebar-items active' : 'sidebar-items'  } onClick={() => handleClick('donhang')}>
                    <Link className='flex items-center hover:text-white transition-all duration-300' to={'/admin/info-order'}>
                        <FaClipboardList className='ml-12' />
                        <span className='mx-2'>Đơn hàng</span>
                    </Link>
                </li>
                {/* <li className= { showBgr === 'thongke' ? 'sidebar-items active' : 'sidebar-items'  } onClick={() => handleClick('thongke')}>
                    <Link className='flex items-center hover:text-white transition-all duration-300' to={'/admin/info-statistical'}>
                        <AiOutlineProject className='ml-12' />
                        <span className='mx-2'>Thống kê</span>
                    </Link>
                </li> */}
            </ul>
        </div>
    )
}

export default SidebarDashboard