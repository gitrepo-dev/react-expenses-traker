module.exports = (componentName) => ({
  name: `${componentName}Saga`,
  dir: './src/redux/sagas/',
  content: `// libs 
import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';
// types
import Types from 'redux/types/${componentName}Types';
// actions
import { on${componentName.charAt(0).toUpperCase() + componentName.slice(1)}Loading } from 'redux/actions/${componentName}Actions';
// services
import {
   get${componentName.charAt(0).toUpperCase() + componentName.slice(1)}Service
} from 'services/${componentName}Services';
// reducers
import { set${componentName.charAt(0).toUpperCase() + componentName.slice(1)} } from 'redux/reducers/${componentName}Reducer';


/***
  * fetching
  * @param {''}
  * @return {'data/err'}
  * 
***/

function* fetching${componentName.charAt(0).toUpperCase() + componentName.slice(1)}(): SagaIterator {
    try {
        yield put(on${componentName.charAt(0).toUpperCase() + componentName.slice(1)}Loading('Loading....', true));
        const data = yield call(get${componentName.charAt(0).toUpperCase() + componentName.slice(1)}Service);
        yield put(set${componentName.charAt(0).toUpperCase() + componentName.slice(1)}(data));
        yield put(on${componentName.charAt(0).toUpperCase() + componentName.slice(1)}Loading('Loading....', false));
    } catch (e) {
        console.warn(e);
        yield put(on${componentName.charAt(0).toUpperCase() + componentName.slice(1)}Loading('Loading....', false));
    }
}

// exporting all sagas
const ${componentName.toUpperCase()}_SAGAS = [
    takeLatest(Types.GET_${componentName.toUpperCase()}, fetching${componentName.charAt(0).toUpperCase() + componentName.slice(1)})
];
export default ${componentName.toUpperCase()}_SAGAS;`,
});
