function getNekoInCategory(state, category) {
  return state.neko.categories[category];
}

function getInitialLoadingStatus(state) {
  return state.neko.initialLoadingStatus;
}

function getShowMoreLoadingStatus(state) {
  return state.neko.showMoreLoadingStatus;
}

function getShownNekoType(state) {
  return state.neko.shownNekoType;
}

function getCategoriesList(state) {
  return Object.keys(state.neko.categories);
}

function getSearchQuery(state) {
  return state.neko.searchQuery;
}

export {
  getNekoInCategory,
  getInitialLoadingStatus,
  getShownNekoType,
  getCategoriesList,
  getShowMoreLoadingStatus,
  getSearchQuery,
};
