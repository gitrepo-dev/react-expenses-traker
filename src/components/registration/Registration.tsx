import { LoginUser } from "assets";
import React, { useEffect, useState } from "react";
import { useForm } from 'hooks'
import { v4 as uuidv4 } from 'uuid';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "redux/reducers/userReducer";
import { onUserRegistration } from "redux/actions/userAction";

const Registration: React.FC = () => {



  // init
  const navigate = useNavigate()
  const userCredentials = useSelector(getUserData)
  const dispatch = useDispatch()
  const [inputState] = useState({
    name: '',
    email: '',
    password: ''
  })

  useEffect(() => {
    if (userCredentials?.data?.auth) navigate('/home')
  }, [navigate, userCredentials])



  const { setFormState, formErrors, isFormValid, formState, isFormDirty } = useForm(inputState)


  const handleSignup = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(onUserRegistration({
        ...formState,
        uuid: uuidv4(),
      }))
    }
  }

  return (
    <>
      {userCredentials?.defaultStates?.isLoading && <div className='loader-wapper'><div className="lds-facebook"><div></div><div></div><div></div></div></div>}
      <div className="flex justify-center items-center absolute h-full w-full">
        <div className="relative">
          <div className="rounded-full bg-gray-200 w-32 h-32 mx-auto flex items-center justify-center loginuserimg absolute">
            <img src={LoginUser} alt="login user" className="w-28" />
          </div>
          <form onSubmit={handleSignup} className="w-100 p-5 md:p-10 shadow-sm bg-white">
            <label htmlFor="name" className="sr-only">Name</label>
            <input type="name" name="name" placeholder="Name*" onChange={setFormState} className="w-full focus:outline-0 px-4 py-2 rounded mt-10 border-slate-200 border-2" />
            <span className="text-red-700 h-0.5 block text-xs">{formErrors.name}</span>
            <br></br>
            <label htmlFor="email" className="sr-only">Email</label>
            <input type="email" name="email" placeholder="Email*" onChange={setFormState} className="w-full focus:outline-0 px-4 py-2 rounded border-slate-200 border-2" />
            <span className="text-red-700 h-0.5 block text-xs">{formErrors.email}</span>
            <br></br>
            <label htmlFor="password" className="sr-only">Password</label>
            <input type="password" name="password" placeholder="Password*" onChange={setFormState} className="w-full focus:outline-0 px-4 py-2 rounded border-slate-200 border-2" />
            <span className="text-red-700 h-0.5 block text-xs">{formErrors.password}</span>
            <br></br>
            <button disabled={!isFormDirty} type="submit" className={`${isFormDirty ? 'bg-indigo-500 hover:bg-indigo-800' : 'bg-gray-500 cursor-no-drop'} 'px-8 py-2 text-center text-white  rounded  w-full duration-100`}>Sign up</button>
            <p className="text-sm mt-5 text-center">Already have an account <Link to="/" className="text-blue-700">Sign in</Link></p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Registration;

