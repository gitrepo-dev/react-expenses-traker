import { useEffect, useState, useCallback } from 'react'
import { emailRegx, passwordRegx, numberRegx } from 'utils/regexs'

export default function useForm(state: any, setState?: (params: any) => void) {

  //values
  const [formState, setformState] = useState({ ...state });

  //formErrors
  const [formErrors, setformErrors] = useState({ ...state });

  //set formErrors on handlechange when this state true
  const [inputChangeformErrors, setInputChangeformErrors] = useState(false);

  // set formErrors on handlechange when this state true
  const [isFormDirty, setIsFormDirty] = useState(false);

  // store previous value
  const [preVal, setPreVal] = useState({});

  // reset form
  const [resetForm, setResetForm] = useState(false);

  useEffect(() => {
    // for edit input value value
    const isValue = Object.values(formState).some((v: any) => v === '')
    if ((JSON.stringify(preVal) === JSON.stringify(formState)) || isValue) {
      setIsFormDirty(false)
    } else {
      setIsFormDirty(true)
    }

  }, [formState, preVal])

  // resetForm
  useEffect(() => {
    if (resetForm) {
      setformState({
        name: '',
        ex_type: '',
        amount: ''
      })
      setResetForm(false)
    }
  }, [resetForm])

  // validate all inputs fields
  const validation = (name: string, value: any) => {
    switch (name) {
      case 'name':
        if (!value) setformErrors((prevErr: any) => ({ ...prevErr, name: 'This field is required.' }))
        else if (value.length < 3) setformErrors((prevErr: any) => ({ ...prevErr, name: 'Min 3 character long.' }))
        else setformErrors((prevErr: any) => ({ ...prevErr, name: '' }))
        break;
      case 'login_email':
        if (!value) setformErrors((prevErr: any) => ({ ...prevErr, login_email: 'This field is required.' }))
        else setformErrors((prevErr: any) => ({ ...prevErr, login_email: '' }))
        break;
      case 'login_password':
        if (!value) setformErrors((prevErr: any) => ({ ...prevErr, login_password: 'This field is required.' }))
        else setformErrors((prevErr: any) => ({ ...prevErr, login_password: '' }))
        break;
      case 'email':
        if (!value) setformErrors((prevErr: any) => ({ ...prevErr, email: 'This field is required.' }))
        else if (!emailRegx.test(String(value).toLowerCase())) setformErrors((prevErr: any) => ({ ...prevErr, email: 'Must be a valid email.' }))
        else setformErrors((prevErr: any) => ({ ...prevErr, email: '' }))
        break;
      case 'password':
        if (!value) setformErrors((prevErr: any) => ({ ...prevErr, password: 'This field is required.' }))
        else if (value?.length > 15) setformErrors((prevErr: any) => ({ ...prevErr, password: 'Must not be more than 15 characters' }))
        else if (!passwordRegx.test(value)) setformErrors((prevErr: any) => ({ ...prevErr, password: 'Must be strong password' }))
        else setformErrors((prevErr: any) => ({ ...prevErr, password: '' }))
        break;
      case 'ex_type':
        if (!value) setformErrors((prevErr: any) => ({ ...prevErr, ex_type: 'This field is required.' }))
        else setformErrors((prevErr: any) => ({ ...prevErr, ex_type: '' }))
        break;
      case 'amount':
        if (!value) setformErrors((prevErr: any) => ({ ...prevErr, amount: 'This field is required.' }))
        else if (!numberRegx.test(String(value).toLowerCase())) setformErrors((prevErr: any) => ({ ...prevErr, amount: 'Only digits allowed.' }))
        else setformErrors((prevErr: any) => ({ ...prevErr, amount: '' }))
        break;
      default:
        break;
    }
  }


  // this fn will execute on each key pess in inputs of form
  const setFormState = (event: { persist: () => void; target: { name: string; value: any; }; }) => {
    event.persist();
    const { name, value } = event.target
    validation(name, value)
    // if (inputChangeformErrors) validation(name, value)
    setformState({ ...formState, [name]: value })
  }

  // this fn will execute when submit form
  const isFormValid = () => {

    // send input key and value one by one to check validation
    // for (const key in state) {
    //   validation(key, formState[key]);
    // }

    const isError = Object.values(formErrors).some((err: any) => err !== '')
    const isValue = Object.values(formState).some((v: any) => v === '')

    if (isError || isValue) {
      setInputChangeformErrors(true)
      return false
    }
    else {
      setPreVal(formState)
      setIsFormDirty(true)
      return true
    }
  }




  return {
    formState,
    setFormState,
    isFormValid,
    formErrors,
    isFormDirty,
    setResetForm
  }
}
