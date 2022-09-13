import { getLabels } from "helper/helper";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onGetExpenses } from "redux/actions/expensesActions";
import { getExpenses } from "redux/reducers/expensesReducer";



export default function Labels() {


  const dispatch = useDispatch()
  const { defaultStates: { success }, data } = useSelector(getExpenses)

  useEffect(() => {
    dispatch(onGetExpenses())
  }, [dispatch])

  let Transactions;
  if (success) {
    // @ts-ignore
    Transactions = getLabels(data, 'ex_type')?.map((v, i) => <LabelComponent  key={i} data={v}></LabelComponent>);
  } 
  return (
    <>
      {Transactions}
    </>
  )
}

const LabelComponent = (props: any) => {

  if (!props?.data) return <></>;
  return (
    <div className="labels flex justify-between">
      <div className="flex gap-2"> 
        <div className='w-2 h-2 rounded py-3' style={{ background: props?.data?.color ?? '#f9c74f' }}></div>
        <h3 className='text-md'>{props?.data?.ex_type ?? ''}</h3>
      </div>
      <h3 className='font-bold'>{Math.round(props?.data?.percent) ?? 0}%</h3>
    </div>
  )
}
