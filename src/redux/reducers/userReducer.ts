import { createSlice } from '@reduxjs/toolkit';
import { userAction, userStateType } from 'interfaces';

const initialState: userStateType = {
    defaultStates: {
        isLoading: false,
        message: '',
        success: false
    },
    data: {}
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserStates: (state, action: any) => {
            state.defaultStates = action.payload
        },
        setUserData: (state, action: userAction) => {
            state.data = action.payload;
            localStorage.setItem('user_agent', JSON.stringify(action.payload))
        }
    }
});

export const { setUserData, setUserStates } = userSlice.actions;
export const getUserData = (state: any) => state.user;
export default userSlice.reducer;
