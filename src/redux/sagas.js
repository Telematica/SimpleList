import { call, put, takeLatest, delay } from 'redux-saga/effects'
import axios from 'axios';

function* fetchUsers(action) {
   try {
      const people = yield call(() => axios.get('https://randomuser.me/api/?results=20'));
      yield put({type: "USER_FETCH_SUCCEEDED", people });
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

function* mySaga() {
  yield takeLatest("USER_FETCH_REQUESTED", fetchUsers);
}

export default mySaga;