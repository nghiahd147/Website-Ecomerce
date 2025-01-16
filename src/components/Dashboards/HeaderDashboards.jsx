import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineAliwangwang } from "react-icons/ai";
import { GrUserAdmin } from "react-icons/gr";
import { useSelector } from 'react-redux';
import { getCookie } from '../../helpers/cookie';
import './HeaderDashboard.css'

const HeaderDashboards = () => {

    const isLogin = useSelector(state => state.LoginReducer)
    const nameAccount = getCookie('name')

    console.log(nameAccount)

    return (
        <div className='flex justify-between items-center h-16'>
            <div className='w-48 flex justify-center items-center'>
                <Link to='/home' className='font-bold flex items-center'>
                    <AiOutlineAliwangwang className='mx-2' size={24} />
                    e-Shop
                </Link>
            </div>
            <div className='text-center flex-1'>
                <span className='font-bold text-3xl'>Trang Quản Trị</span>
            </div>
            <div className='flex items-center font-bold mr-8'>

                {isLogin ?
                    <div className='flex items-center position'>
                        <Link className='ml-1 flex items-center user position'>
                            <GrUserAdmin className='mr-1' size={16} />
                            {nameAccount}
                            <div className='absolute top-12 bg-white w-32 text-center rounded-md logout-link'>
                                <Link to='/logout' className='block p-1 hover:bg-orange-600 duration-300 rounded-md hover:text-white'>Đăng xuất</Link>
                            </div>
                        </Link>
                    </div> 
                    :
                    <Link to={'/'} className='flex items-center text-base hover:text-violet-300 transition-all duration-300'>
                        <GrUserAdmin size={14} className='mr-1' />
                        Đăng nhập
                    </Link>
                }

            </div>
        </div>
    )
}

export default HeaderDashboards