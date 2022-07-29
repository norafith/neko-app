import { useParams, useNavigate } from "react-router";
import Search from "./Search";
import { useDispatch, useSelector } from "react-redux";
import {
  changeSearchQueryAC,
  changeShownNekoTypeAC,
  searchNekosAC,
} from "../../redux/reducers/nekoReducer";
import { useEffect, useState } from "react";
import { getShownNekoType } from "../../redux/selectors/nekoSelectors";

function SearchContainer(props) {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchFieldValue, setSearchFieldValue] = useState("");
  const renderFlag = useSelector(getShownNekoType) === "search";

  useEffect(() => {
    if (params.searchQuery) {
      dispatch(changeShownNekoTypeAC("search"));
      dispatch(changeSearchQueryAC(params.searchQuery));
      dispatch(searchNekosAC(params.searchQuery, params.imageFormat || 1));
    }
  }, [params.searchQuery, params.imageFormat, dispatch]);

  function navigateToNeededSearchQuery() {
    navigate(`/search/${searchFieldValue}`, { replace: true });
  }

  return (
    <Search
      searchFieldValue={searchFieldValue}
      setSearchFieldValue={setSearchFieldValue}
      changeSearchQuery={navigateToNeededSearchQuery}
      renderFlag={renderFlag}
      {...params}
    />
  );
}

export default SearchContainer;
