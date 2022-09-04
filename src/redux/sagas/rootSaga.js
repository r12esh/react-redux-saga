import { all } from "redux-saga/effects";
import getPhotosSaga from "./getPhotosSaga";

export default function* rootSaga() {
  yield all([getPhotosSaga()]);
}
