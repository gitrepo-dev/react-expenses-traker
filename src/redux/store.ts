import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
// reducers
import userReducer from 'redux/reducers/userReducer';
import expensesReducer from 'redux/reducers/expensesReducer';
// sagas
import userSaga from 'redux/sagas/userSaga';
import expensesSaga from 'redux/sagas/expensesSaga';
// reducers
const reducers = combineReducers({
    user: userReducer,
    expenses: expensesReducer
});

//Add Sagas
function* rootSaga() {
    yield all([
        ...userSaga,
        ...expensesSaga
    ]);
}

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(
    reducers,
    {},
    applyMiddleware(sagaMiddleware)
)

// then run the saga
sagaMiddleware.run(rootSaga)

export default store;