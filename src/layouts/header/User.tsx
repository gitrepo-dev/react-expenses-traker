import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { onGetUserCredentials } from 'redux/actions/userAction'
import { getUserData } from 'redux/reducers/userReducer'

export default function User() {

  const {data: {name}} = useSelector(getUserData)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(onGetUserCredentials())
  }, [dispatch])

  return (
    <div className="font-medium capitalize flex items-center"><img src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=40&h=40&q=60" alt="jay" className="rounded-full mr-3" />
      <span>{name || ''}</span>
    </div>
  )
}
