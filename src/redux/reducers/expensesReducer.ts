
import { createSlice } from '@reduxjs/toolkit';
import { expensesStateType, expensesActionType } from 'interfaces';

const initialState: expensesStateType = {
  defaultStates: {
    isLoading: false,
    message: '',
    action: '',
    success: false
  },
  data: []
};

export const expensesSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    setExpensesStates: (state, action: any) => {
      state.defaultStates = action.payload
    },
    setExpenses: (state, action: expensesActionType) => {
      // @ts-ignore
      state.data = action.payload.data;
    }
  },
});

export const { setExpenses, setExpensesStates } = expensesSlice.actions;
export const getExpenses = (state: any) => state.expenses;
export default expensesSlice.reducer;