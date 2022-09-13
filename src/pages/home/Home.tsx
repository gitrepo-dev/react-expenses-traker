import Header from 'layouts/header'
import ExpensesTrakerForm from "components/expensestrakerform";
import ExpensesGraph from "components/expensesgraph";
import { useSelector } from 'react-redux';
import { getExpenses } from 'redux/reducers/expensesReducer';


export default function Home() {

  const { defaultStates: { isLoading } } = useSelector(getExpenses)

  return (
    <>
      {isLoading && <div className='loader-wapper'><div className="lds-facebook"><div></div><div></div><div></div></div></div>}
      <Header />
      <div className="container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800 mt-5 md:mt-10 lg:mt-20">

        {/* grid columns */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* Chart */}
          <ExpensesGraph />
          {/* Form */}
          <ExpensesTrakerForm />
        </div>
      </div>
    </>
  )
}

