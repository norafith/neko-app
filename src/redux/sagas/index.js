import { takeLeading, select, put, call, fork } from "@redux-saga/core/effects";
import {
  changeInitialLoadingStatusAC as changeInitialLoadingStatusNekoAC,
  setNekosInCategoryAC,
  CHANGE_SHOWN_NEKO_TYPE,
  changeShowMoreLoadingStatusAC as changeShowMoreLoadingStatusNekoAC,
  SHOW_MORE,
  SEARCH_NEKOS,
} from "../reducers/nekoReducer";
import { getShownNekoType, getSearchQuery } from "../selectors/nekoSelectors";
import { getNekos, searchNekos } from "./../../api/api";

function* handleNekoInCategory(action) {
  if (
    action.type === CHANGE_SHOWN_NEKO_TYPE &&
    action.shownNekoType === "search"
  )
    return;
  const category = yield select(getShownNekoType);
  const isShowMore = action.type === SHOW_MORE;
  const currentLoadingStatusAC = isShowMore
    ? changeShowMoreLoadingStatusNekoAC
    : changeInitialLoadingStatusNekoAC;
  const isSearch = category === "search";
  yield put(currentLoadingStatusAC(true));
  let response;
  if (isSearch) {
    const searchQuery = yield select(getSearchQuery);
    response = yield call(searchNekos, searchQuery);
  } else {
    response = yield call(getNekos, category, 10);
  }
  yield put(currentLoadingStatusAC(false));
  yield put(setNekosInCategoryAC(category, response, isShowMore));
}

function* watchUrlChange() {
  yield takeLeading(CHANGE_SHOWN_NEKO_TYPE, handleNekoInCategory);
  yield takeLeading(SHOW_MORE, handleNekoInCategory);
  yield takeLeading(SEARCH_NEKOS, handleNekoInCategory);
}

function* rootSaga() {
  yield fork(watchUrlChange);
}

export default rootSaga;
