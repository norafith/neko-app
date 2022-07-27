import { useSelector } from "react-redux";
import {
  getCategoriesList,
  getShownNekoType,
} from "../../redux/selectors/nekoSelectors";
import Header from "./Header";

function HeaderContainer(props) {
  const categories = ["home", ...useSelector(getCategoriesList)];
  const shownNekoType = useSelector(getShownNekoType);

  return <Header categories={categories} shownNekoType={shownNekoType} />;
}

export default HeaderContainer;
