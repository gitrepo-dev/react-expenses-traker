import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteExpenses, onGetExpenses } from "redux/actions/expensesActions";
import { getExpenses } from "redux/reducers/expensesReducer";

const ExpensesList: React.FC = () => {

  const dispatch = useDispatch()
  const { defaultStates: { success }, data } = useSelector(getExpenses)

  useEffect(() => {
    dispatch(onGetExpenses())
  }, [dispatch])

  const handlerClick = (uuid:string) => {
    dispatch(deleteExpenses(uuid))
  }
  let Transactions;
  if (success) {
    // @ts-ignore
    Transactions = data?.map((v, i) => <Transaction key={i} category={{ ...v, color: v.ex_type === 'Savings' ? '#5963ec' : v.ex_type === 'Expense' ? '#851895' : '#f9c74f' }} handler={handlerClick} ></Transaction>);
  }


  return (
    <div className="flex flex-col py-6 gap-3">
      <h1 className='py-4 font-bold text-xl'>{data?.length > 0 && 'List'}</h1>
      {Transactions}
    </div>
  )
}


function Transaction({ category, handler }: any) {
  if (!category) return null;
  return (
    <div className="item flex justify-center bg-gray-50 py-2 rounded-r" style={{ borderRight: `8px solid ${category.color ?? "#e5e5e5"}` }}>
      <button className='px-3' onClick={()=>handler(category.uuid)}><div color={category.color ?? "#e5e5e5"}  ><span className={`material-icons-outlined cursor-pointer mx-2`} style={{color: category.color}}>
        delete
      </span></div></button>
      <span className='block w-full'>{category.name ?? ''}</span>
    </div>
  )
}

export default ExpensesList;
