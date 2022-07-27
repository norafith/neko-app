import { takeLeading, select, put, call, fork } from "@redux-saga/core/effects";
import {
  changeInitialLoadingStatusAC as changeInitialLoadingStatusNekoAC,
  setNekosInCategoryAC,
  CHANGE_SHOWN_NEKO_TYPE,
  changeShowMoreLoadingStatusAC as changeShowMoreLoadingStatusNekoAC,
  SHOW_MORE,
} from "../reducers/nekoReducer";
import { getShownNekoType } from "../selectors/nekoSelectors";
import { getNekos } from "./../../api/api";

function* handleNekoInCategory(action) {
  const isShowMore = action.type === SHOW_MORE;
  const currentAC = isShowMore
    ? changeShowMoreLoadingStatusNekoAC
    : changeInitialLoadingStatusNekoAC;
  const category = yield select(getShownNekoType);
  yield put(currentAC(true));
  const response = yield call(getNekos, category, 10);
  yield put(currentAC(false));
  yield put(setNekosInCategoryAC(category, response, isShowMore));
}

function* watchUrlChange() {
  yield takeLeading(CHANGE_SHOWN_NEKO_TYPE, handleNekoInCategory);
  yield takeLeading(SHOW_MORE, handleNekoInCategory);
}

function* rootSaga() {
  yield fork(watchUrlChange);
}

export default rootSaga;
