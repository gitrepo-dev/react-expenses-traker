import { useForm } from "hooks";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { addExpenses } from "redux/actions/expensesActions";
import ExpensesList from "components/expenseslist";
import { getExpenses } from "redux/reducers/expensesReducer";

const ExpensesTrakerForm: React.FC = () => {

  const dispatch = useDispatch()
  const [inputState] = useState({
    name: '',
    ex_type: '',
    amount: ''
  })

  const { defaultStates: { action, success }, data } = useSelector(getExpenses)

  const { setFormState, formErrors, isFormValid, formState, isFormDirty, setResetForm } = useForm(inputState)

  useEffect(() => {
    if (action === 'add' && success) {
      setResetForm(true)
    }
  }, [action, data, setResetForm, success])

  const handleHandleExprenses = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(addExpenses({
        ...formState,
        uuid: uuidv4(),
      }))
    }
  }


  return (
    <div>
      <div className="form max-w-sm mx-auto w-96">
        <h1 className='font-bold pb-4 text-xl'>Transaction</h1>
        <form onSubmit={handleHandleExprenses} >
          <div className="grid gap-4">
            <div className="input-group text-left">
              <input type="text" name="name" value={formState.name} onChange={setFormState} placeholder='Sallary, House Rend, SIP' className='form-input' />
              {formErrors.name && <span className="text-red-700 h-0.5 block text-xs my-1">{formErrors.name}</span>}
            </div>
            <select className={`form-input text-left ${!formState.ex_type && 'input-select'}`} name="ex_type" onChange={setFormState}>
              <option hidden value={formState.ex_type}>Select expenses type</option>
              <option value="Investment">Investment</option>
              <option value="Expense">Expense</option>
              <option value="Savings">Savings</option>
            </select>
            {formErrors.ex_type && <span className="text-red-700 h-0.5 block text-xs my-1">{formErrors.ex_type}</span>}
            <div className="input-group text-left">
              <input type="text" value={formState.amount} name="amount" onChange={setFormState} placeholder='Amount' className='form-input' />
              {formErrors.amount && <span className="text-red-700 h-0.5 block text-xs my-1">{formErrors.amount}</span>}
            </div>
            <div className="submit-btn">
              <button disabled={!isFormDirty} className={`${isFormDirty ? 'bg-indigo-500 hover:bg-indigo-800' : 'bg-gray-500 cursor-no-drop'} 'px-8 py-2 text-center text-white  rounded  w-full duration-100`}>Make Transaction</button>
            </div>
          </div>
        </form>
        <ExpensesList />
      </div>
    </div>
  );
}

export default ExpensesTrakerForm;
