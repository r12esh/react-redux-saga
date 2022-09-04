import * as types from "../actions/action.types";
import { call, put, takeEvery, select } from "redux-saga/effects";
import axios from "axios";

const apikey = "Get you own boi";

const fetchPhotos = async (query) => {
  const url = `https://api.pexels.com/v1/search?query=${
    query ? query : "empty"
  }&per_page=6`;
  const { data } = await axios
    .get(url, {
      headers: { Authorization: apikey }
    })
    .catch((error) => {
      throw error;
    });
  // console.log("Response hai ye", data);
  const photos = data?.photos;
  return photos;
};

function* pushToStore() {
  const query = yield select((state) => state.data.query);

  console.log(query);
  try {
    const photos = yield call(fetchPhotos, query);
    yield put({ type: types.REQUEST_SUCCESS, payload: photos });
  } catch (error) {
    yield put({ type: types.REQUEST_FAILED, message: error.message });
  }
}

function* getPhotosSaga() {
  yield takeEvery(types.REQUEST_DATA, pushToStore);
}

export default getPhotosSaga;
