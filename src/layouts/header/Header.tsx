import User from './User'
import Brand from './Brand'
import { LogOut } from 'assets'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getUserData } from 'redux/reducers/userReducer'
import { onGetUserCredentials } from 'redux/actions/userAction'


export default function Header() {

  // init
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // dispatching action to getting cart products


  const handleLogout = () => {
    localStorage.setItem('user_agent', JSON.stringify(''))
    dispatch(onGetUserCredentials())
    navigate('/')
  }

  return (
    <div className="mx-auto p-4 w-full sticky z-10 bg-white top-0">
      <div className="flex justify-between items-center w-full">
        <Link to="/" className="flex items-center sm:w-3/4">
          <Brand />
          <span className="title ml-3 text-4xl font-bold">Expenses Traker</span>
        </Link>

        <span className="flex justify-end items-center">
          <User />
          <img src={LogOut} alt="logout" className="cursor-pointer w-7 ml-7" title="Logout" onClick={handleLogout} />
        </span>
      </div>
    </div>
  )
}
