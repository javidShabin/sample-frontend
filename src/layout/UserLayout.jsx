import React, { useEffect } from 'react'
import UserHeader from '../components/user/Header'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../components/Header'
import { axiosInstants } from '../config/axiosInstants'
import { clearUser, saveUser } from '../redux/features/userSlice'

const UserLayout = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    const {isUserExist} = useSelector((state) => state.user)
    console.log(isUserExist)
    const checkUser = async () => { // check logined user
        try {
            await axiosInstants({
                method: "GET",
                url: "/user/check-user",
            })
            dispatch(saveUser()) // If login user call the save function true
        } catch (error) {
            dispatch(clearUser()) // If loggin error call the clear fuction false
            console.log(error)
        }
    }
    // use effect for avoid repeatation
    useEffect(()=>{
        checkUser()
    },[location.pathname])
  return (
    <div>
      {isUserExist ? <UserHeader /> : <Header />}
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default UserLayout
