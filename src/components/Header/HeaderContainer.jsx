import { useSelector } from "react-redux";
import {
  getCategoriesList,
  getShownNekoType,
} from "../../redux/selectors/nekoSelectors";
import Header from "./Header";
import { useState } from "react";

function HeaderContainer(props) {
  const categories = ["home", ...useSelector(getCategoriesList)];
  const [activeCategory, setActiveCategory] = useState("home");
  const shownNekoType = useSelector(getShownNekoType);

  return (
    <Header
      categories={categories}
      nekoCategories={useSelector(getCategoriesList)}
      shownNekoType={shownNekoType}
      activeCategory={activeCategory}
      setActiveCategory={setActiveCategory}
    />
  );
}

export default HeaderContainer;
