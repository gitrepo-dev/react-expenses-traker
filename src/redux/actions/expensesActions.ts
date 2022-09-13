import { expensesData } from 'interfaces/expenses';
import Types from 'redux/types/expensesTypes';

/***
 * get all the expenses
 * @param {''}
 * @return {''}
 * 
***/
export const onGetExpenses = () => ({
    type: Types.GET_EXPENSES,
    payload: []
});


/***
 * get add expenses
 * @param {'uuid, name, ex_type, amount'}
 * @return {''}
 * 
***/
export const addExpenses = (data: expensesData) => ({
    type: Types.ADD_EXPENSES,
    payload: data
});



/***
 * delete expenses
 * @param {'uuid'}
 * @return {''}
 * 
***/
export const deleteExpenses = (uuid: string) => ({
    type: Types.DELETE_EXPENSES,
    payload: uuid
});