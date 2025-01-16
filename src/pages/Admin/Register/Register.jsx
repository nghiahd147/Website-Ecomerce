import React, { useState } from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { createAccount } from '../../../Services/AccountServices';
import swal from 'sweetalert';
import generateRandomToken from '../../../helpers/token';

const Register = () => {

    const [data, setData] = useState([])
    const navigate = useNavigate()

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setData({
            ...data,
            [name]: value,
            token: generateRandomToken()
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await createAccount(data)
        if(response) {
            swal("Đăng ký thành công!", "Hãy đăng nhập tài khoản!", "success");
            navigate('/')
        }
    }

    return (
        <>
            <div className='flex overflow-x-hidden overflow-y-auto h-100 w-full bg-account'>
                <div className='flex w-login tablet:flex-col-reverse mobile:flex-col-reverse m-auto low-pc:m-auto shadow-md rounded-md overflow-hidden'>

                    {/* Tab Trái */}
                    <div className='w-1/2 p-12 bg-white tablet:mx-auto mobile:mx-auto tablet:rounded-b-md mobile:rounded-b-md'>

                        <div className='flex justify-between items-center mb-6'>
                            <h1 className='text-2xl'>Sign Up</h1>
                            <div className='flex items-center'>
                                <div className='py-2 border-half hover:bg-orange-600 hover:text-white  duration-300 cursor-pointer'>
                                    <FaFacebookF size={18} className='mx-2 block' />
                                </div>
                                <div className='py-2 border-half hover:bg-orange-600 hover:text-white duration-300 cursor-pointer'>
                                    <FaTwitter size={18} className='mx-2 block' />
                                </div>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className='flex flex-col'>
                            <div className='flex flex-col py-1'>
                                <label className='block text-xs font-bold text-gray-500' name='name' htmlFor="fullname">FULLNAME</label>
                                <input className='mt-2 bg-input flex-1 px-4 py-2 rounded-2xl outline-none border-none text-sm' placeholder='Fullname' type="text" name='name' onChange={handleChange} required/>
                            </div>
                            <div className='flex flex-col py-1'>
                                <label className='block text-xs font-bold text-gray-500' name='email' htmlFor="email">EMAIL</label>
                                <input className='mt-2 bg-input flex-1 px-4 py-2 rounded-2xl outline-none border-none text-sm' placeholder='Email' type="email" name='email' onChange={handleChange} required/>
                            </div>
                            <div className='flex flex-col py-1'>
                                <label className='block text-xs font-bold text-gray-500' name='pass' htmlFor="password">PASSWORD</label>
                                <input className='mt-2 bg-input flex-1 px-4 py-2 rounded-2xl outline-none border-none text-sm' placeholder='Password' type="password" name='pass' onChange={handleChange} required/>
                            </div>
                            <button className='w-full rounded-3xl mt-2 bg-gradient-to-r from-orange-600 to-pink-500 text-white py-2'>Sign In</button>
                        </form>

                        <div className='flex justify-between mt-3'>
                            <div className='flex items-center'>
                                {/* accent: thay đổi màu nền, đặt id tên là checkbox */}
                                {/* label: htmlFor="id checkbox" sau đó dùng peer-checked:text-... sẽ đổi màu theo nếu checkbox được check */}
                                <input type="checkbox" id="checkbox" className='cursor-pointer accent-red-500 rounded w-5 h-4 font-bold peer' />
                                <label htmlFor="checkbox" className='ml-2 peer-checked:text-red-500'>Remember Me</label>
                            </div>

                            <div>
                                <Link className='text-gray-400'>Forgot Password</Link>
                            </div>
                        </div>

                    </div>

                    {/* Tab Phải */}
                    <div className='flex tablet:p-4 mobile:p-4 tablet:rounded-t-md mobile:rounded-t-md tablet:overflow-hidden mobile:overflow-hidden w-1/2 bg-gradient-to-b from-orange-600 to-pink-500 tablet:mx-auto mobile:mx-auto'>
                        <div className='m-auto flex flex-col justify-center items-center'>
                            <h1 className='text-white text-3xl font-bold'>Welcome to register</h1>
                            <span className='block text-white text-center my-5'>You have an account?</span>
                            <Link to='/login' className='text-white text-center p-2 border-white border-2 rounded-3xl w-28 hover:bg-white hover:text-black duration-300 text-sm'>Sign In</Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Register