const GET_NEKO = "neko/GET_NEKO";
const GET_KITSUNE = "neko/GET_KITSUNE";
const GET_HUSBANDO = "neko/GET_HUSBANDO";
const GET_WAIFU = "neko/GET_WAIFU";
const SET_NEKOS_IN_CATEGORY = "neko/SET_NEKOS_IN_CATEGORY";
const CHANGE_INITIAL_LOADING_STATUS = "neko/CHANGE_INITIAL_LOADING_STATUS";
const CHANGE_SHOWN_NEKO_TYPE = "neko/CHANGE_SHOWN_NEKO_TYPE";
const SHOW_MORE = "neko/SHOW_MORE";
const CHANGE_SHOW_MORE_LOADING_STATUS = "neko/CHANGE_SHOW_MORE_LOADING_STATUS";
const SEARCH_NEKOS = "neko/SEARCH_NEKOS";
const CHANGE_SEARCH_QUERY = "neko/CHANGE_SEARCH_QUERY";

const categories = ["neko", "kitsune", "waifu", "husbando", "search"];

const initialState = {
  categories: {},
  initialLoadingStatus: null,
  showMoreLoadingStatus: null,
  shownNekoType: null,
  searchQuery: null,
};

categories.forEach((category) => {
  initialState.categories[category] = null;
});

function nekosReducer(state = initialState, action) {
  switch (action.type) {
    case SET_NEKOS_IN_CATEGORY: {
      const stateCopy = { ...state };
      stateCopy.categories = { ...stateCopy.categories };
      if (action.showMoreFlag) {
        stateCopy.categories[action.category] = [
          ...stateCopy.categories[action.category],
        ];
        action.response.forEach((item) =>
          stateCopy.categories[action.category].push(item)
        );
      } else {
        stateCopy.categories[action.category] = action.response;
      }
      stateCopy.shownNekoType = action.category;
      return stateCopy;
    }
    case CHANGE_INITIAL_LOADING_STATUS: {
      const stateCopy = { ...state };

      stateCopy.initialLoadingStatus = action.loadingStatus;
      return stateCopy;
    }
    case CHANGE_SHOWN_NEKO_TYPE: {
      const stateCopy = { ...state };

      stateCopy.shownNekoType = action.shownNekoType;
      return stateCopy;
    }
    case CHANGE_SHOW_MORE_LOADING_STATUS: {
      const stateCopy = { ...state };

      stateCopy.showMoreLoadingStatus = action.loadingStatus;
      return stateCopy;
    }
    case CHANGE_SEARCH_QUERY: {
      const stateCopy = { ...state };

      stateCopy.searchQuery = action.searchQuery;
      return stateCopy;
    }
    default: {
      return state;
    }
  }
}

function setNekosInCategoryAC(category, response, showMoreFlag = false) {
  return {
    type: SET_NEKOS_IN_CATEGORY,
    category,
    response,
    showMoreFlag,
  };
}

function changeInitialLoadingStatusAC(loadingStatus) {
  return {
    type: CHANGE_INITIAL_LOADING_STATUS,
    loadingStatus,
  };
}

function changeShownNekoTypeAC(shownNekoType) {
  return {
    type: CHANGE_SHOWN_NEKO_TYPE,
    shownNekoType,
  };
}

function showMoreAC() {
  return {
    type: SHOW_MORE,
  };
}

function changeShowMoreLoadingStatusAC(loadingStatus) {
  return {
    type: CHANGE_SHOW_MORE_LOADING_STATUS,
    loadingStatus,
  };
}

function searchNekosAC(searchQuery, imageFormat) {
  return {
    type: SEARCH_NEKOS,
    searchQuery,
    imageFormat,
  };
}

function changeSearchQueryAC(searchQuery) {
  return {
    type: CHANGE_SEARCH_QUERY,
    searchQuery,
  };
}

export default nekosReducer;
export {
  GET_KITSUNE,
  GET_NEKO,
  GET_WAIFU,
  GET_HUSBANDO,
  changeInitialLoadingStatusAC,
  setNekosInCategoryAC,
  changeShownNekoTypeAC,
  CHANGE_SHOWN_NEKO_TYPE,
  SHOW_MORE,
  showMoreAC,
  changeShowMoreLoadingStatusAC,
  searchNekosAC,
  SEARCH_NEKOS,
  changeSearchQueryAC,
};
