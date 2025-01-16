import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'

const PrivatePage = () => {

    const isLogin = useSelector(state => state.LoginReducer)
    const navigate = useNavigate()

    return (
        <>
            {isLogin ? <Outlet /> : navigate('/login')}
        </>
    )
}

export default PrivatePage