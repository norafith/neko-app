import {
  getNekoInCategory,
  getInitialLoadingStatus,
  getCategoriesList,
  getShowMoreLoadingStatus,
} from "../../redux/selectors/nekoSelectors";
import { getShownNekoType } from "../../redux/selectors/nekoSelectors";
import { useSelector, useDispatch } from "react-redux";
import Nekos from "./Nekos";
import { useNavigate, useParams } from "react-router";
import {
  changeShownNekoTypeAC,
  showMoreAC,
} from "../../redux/reducers/nekoReducer";
import { useEffect } from "react";

function NekosContainer(props) {
  const initialLoadingStatus = useSelector(getInitialLoadingStatus);
  const showMoreLoadingStatus = useSelector(getShowMoreLoadingStatus);
  const shownNekoType = useSelector(getShownNekoType);
  const categories = useSelector(getCategoriesList);
  const paramsNekoType = useParams().nekoType;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!props.searchFlag) {
      if (!categories.includes(paramsNekoType)) {
        navigate("/error", { replace: true });
      } else if (paramsNekoType !== shownNekoType) {
        dispatch(changeShownNekoTypeAC(paramsNekoType));
      }
    }
  }, [
    dispatch,
    paramsNekoType,
    shownNekoType,
    categories,
    navigate,
    props.searchFlag,
  ]);

  function handleShowMoreClick(e) {
    dispatch(showMoreAC());
  }

  const nekosList = useSelector(
    shownNekoType === null
      ? () => null
      : (state) => getNekoInCategory(state, shownNekoType)
  );

  return (
    <Nekos
      searchFlag={props.searchFlag}
      initialLoadingStatus={initialLoadingStatus}
      showMoreLoadingStatus={showMoreLoadingStatus}
      shownNekoType={shownNekoType}
      nekosList={nekosList}
      handleShowMoreClick={handleShowMoreClick}
    />
  );
}

export default NekosContainer;
