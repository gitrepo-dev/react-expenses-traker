// libs
import { userAction } from 'interfaces';
import toast from 'modules/toast';
import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';
import { setUserStates, setUserData } from 'redux/reducers/userReducer';
import Types from 'redux/types/userType'
// services
import {
    loginUserServices,
    registrationUserServices,
} from 'services/userServices'



// login users
function* loggingUser(action: userAction): SagaIterator {
    const { payload } = action;
    try {
        yield put(setUserStates({
            isLoading: true,
            message: '',
            success: false
        }));
        const data = yield call(loginUserServices, payload);
        if (data.success) {
            yield put(setUserData(data?.data?.user_agent));
            toast.success(data.message)
        } else toast.error(data.message)

        yield put(setUserStates({
            isLoading: false,
            message: data.message,
            success: data.success
        }));
    } catch (e) {
        toast.error('Network error')
        console.warn(e);
        yield put(setUserStates({
            isLoading: false,
            message: `client side error ${e}`,
            success: false
        }));
    }
}

// registration users
function* registrationUser(action: userAction): SagaIterator {
    const { payload } = action;
    try {
        yield put(setUserStates({
            isLoading: true,
            message: '',
            success: false
        }));
        const data = yield call(registrationUserServices, payload);
        if (data.success) {
            yield put(setUserData(data?.data?.user_agent));
            toast.success(data?.message)
        } else toast.info(data?.message)
        yield put(setUserStates({
            isLoading: false,
            message: data.message,
            success: data.success
        }));
    } catch (e) {
        toast.error('Network error')
        console.warn(e);
        yield put(setUserStates({
            isLoading: false,
            message: `client side error ${e}`,
            success: false
        }));
    }
}

// fetching user credentials
function* gettingUserCredentials(): SagaIterator {
    try {
        yield put(setUserStates({
            isLoading: true,
            message: '',
            success: false
        }));
        // @ts-ignore
        const data = JSON.parse(localStorage.getItem('user_agent'))
        if (data.auth) {
            yield put(setUserData(data));
        } else {
            // @ts-ignore
            yield put(setUserData(''));
        }

        yield put(setUserStates({
            isLoading: false,
            message: data.message,
            success: data.success
        }));
    } catch (e) {
        toast.error('Network error')
        console.warn(e);
        yield put(setUserStates({
            isLoading: false,
            message: `client side error ${e}`,
            success: false
        }));
    }
}

// exporting all sagas
const USER_SAGAS = [
    takeLatest(Types.USER_LOGIN, loggingUser),
    takeLatest(Types.GET_USER_CREDENTIALS, gettingUserCredentials),
    takeLatest(Types.USER_REGISTRATION, registrationUser),
];
export default USER_SAGAS;