import axios from "axios";
import { put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  FETCH_USER,
  FETCH_USER_SUCCESS,
  LOGIN,
  LOGIN_SUCCESS,
  DELETE,
  DELETE_USER,
} from "../redux/Action";

const BaseURL = "https://jsonplaceholder.typicode.com/users";

function* getUser(action) {
  try {
    const response = yield axios.get(BaseURL);
    // Sau khi lấy được dữ liệu từ fake API
    // Dispatch một action tới reducer kèm theo dữ liệu mà API trả về
    yield put({ type: FETCH_USER_SUCCESS, payload: response.data });
  } catch (error) {
    console.log("error - getUser : ", error);
  }
}

function* authSagaFun(action) {
  const user = action.payload;
  console.log(action.payload, user.username, user.password);
  if (user.username === "admin" && user.password === "letmein") {
    yield put({ type: LOGIN_SUCCESS, payload: user });
    yield put({ type: FETCH_USER, payload: {} });
  } else {
    alert("Tai Khoan Mat Khau Khong Dung");
  }
}

function* deleteUser(action) {
  const id = action.payload;
  //   console.log(`${BaseURL}/${id}`);
  try {
    const response = yield axios.delete(`${BaseURL}/${id}`);
    yield put({ type: FETCH_USER_SUCCESS, payload: response.data });
  } catch (e) {
    console.log(e);
  }
}

export default function* rootSaga() {
  yield takeLatest(LOGIN, authSagaFun);
  yield takeLatest(FETCH_USER, getUser);
  // yield takeLatest(DELETE, deleteUser);
  yield takeEvery(DELETE, deleteUser);
}
