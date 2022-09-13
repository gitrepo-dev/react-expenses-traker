// libs 
import { expensesActionType } from 'interfaces';
import toast from 'modules/toast';
import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';
import { setExpensesStates, setExpenses } from 'redux/reducers/expensesReducer';
// types
import Types from 'redux/types/expensesTypes';
// services
import {
    addExpensesService,
    deleteExpensesService,
    getExpensesService
} from 'services/expensesServices';


/***
  * fetching all expenses
  * @param {''}
  * @return {'data/err'}
  * 
***/
function* fetchingExpenses(): SagaIterator {
    try {
        yield put(setExpensesStates({
            isLoading: true,
            message: '',
            action: 'fetch',
            success: false
        }));
        const data = yield call(getExpensesService);
        if (data.success) {
            yield put(setExpenses(data));
            toast.success(data.data?.length > 0 ? data?.message : 'No expenses list found.',)
        } else toast.error(data.message)
        yield put(setExpensesStates({
            isLoading: false,
            message: data.message,
            action: 'fetch',
            success: data.success
        }));
    } catch (e) {
        yield put(setExpensesStates({
            isLoading: false
        }));
        toast.error('Network error')
        console.warn('Client side error', e);
    }
}


/***
  * add expenses
  * @param {'name, ex_type, amount, uuid'}
  * @return {'data/err'}
  * 
***/
function* addExpenses(action: expensesActionType): SagaIterator {
    const { payload } = action;
    try {
        yield put(setExpensesStates({
            isLoading: true,
            message: '',
            action: 'add',
            success: false
        }));
        const data = yield call(addExpensesService, payload);
        if (data.success) {
            const data = yield call(getExpensesService);
            yield put(setExpenses(data));
            toast.success(data.message)
        } else toast.error(data.message)
        yield put(setExpensesStates({
            isLoading: false,
            message: data.message,
            action: 'add',
            success: data.success
        }));
    } catch (e) {
        yield put(setExpensesStates({
            isLoading: false
        }));
        toast.error('Network error')
        console.warn('Client side error', e);
    }
}


/***
  * delete expenses
  * @param {'uuid'}
  * @return {'data/err'}
  * 
***/
function* delExpenses(action: expensesActionType): SagaIterator {
    const { payload } = action;
    try {
        yield put(setExpensesStates({
            isLoading: true,
            message: '',
            action: 'delete',
            success: false
        }));
        // @ts-ignore
        const data = yield call(deleteExpensesService, payload);
        if (data.success) {
            const data = yield call(getExpensesService);
            yield put(setExpenses(data));
            toast.success(data.message)
        } else toast.error(data.message)
        yield put(setExpensesStates({
            isLoading: false,
            message: data.message,
            action: 'delete',
            success: data.success
        }));
    } catch (e) {
        yield put(setExpensesStates({
            isLoading: false
        }));
        toast.error('Network error')
        console.warn('Client side error', e);
    }
}


// exporting all sagas
const EXPENSES_SAGAS = [
    takeLatest(Types.GET_EXPENSES, fetchingExpenses),
    takeLatest(Types.ADD_EXPENSES, addExpenses),
    takeLatest(Types.DELETE_EXPENSES, delExpenses),
];
export default EXPENSES_SAGAS;