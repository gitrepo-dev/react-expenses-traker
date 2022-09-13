import React, { useEffect } from "react";
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js'
// @ts-ignore
import { chart_Data, getTotal } from 'helper/helper'
import { onGetExpenses } from "redux/actions/expensesActions";
import { useDispatch, useSelector } from "react-redux";
import { getExpenses } from "redux/reducers/expensesReducer";
import ExpensesLebals from "components/expenseslebals/ExpensesLebals";

Chart.register(ArcElement);

const ExpensesGraph: React.FC = () => {

  const dispatch = useDispatch()
  const { defaultStates: { success }, data } = useSelector(getExpenses)
  useEffect(() => {
    dispatch(onGetExpenses())
  }, [dispatch])

  let graphData;
  if (success) {
    graphData = <Doughnut {...chart_Data(data?.length> 0 ? data?.map((v:any) => ({...v, color: v.ex_type === 'Savings' ? '#5963ec' : v.ex_type === 'Expense' ? '#851895' : '#f9c74f'})) : data)}></Doughnut>;
  }

  return (
    <div className="flex justify-content max-w-xs mx-auto items-center">
      <div className="item">
        <div className="chart relative">
          {graphData}
          <h3 className='mb-4 font-bold title'>Total
            <span className='block text-3xl text-emerald-400'>${getTotal(data) ?? 0}</span>
          </h3>
        </div>

        <div className="flex flex-col py-10 gap-4">
          {/* Labels */}
          <ExpensesLebals />
        </div>
      </div>
    </div>
  );
}

export default ExpensesGraph;
