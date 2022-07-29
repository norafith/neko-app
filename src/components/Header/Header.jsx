import { NavLink } from "react-router-dom";
import capitalize from "../../support/capitalize";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  background-color: #30343f;
  position: fixed;
  top: 0;
  height: 40px;
  padding: 0 10px;
  width: 100%;
  box-shadow: 0 0 4px grey;
  overflow: auto;
`;

const NavCategory = styled(NavLink)`
  font-weight: ${(props) =>
    props.category === props.activeCategory ? "bold" : "normal"};
  margin: 0 5px;
`;

const StyledNav = styled.nav``;

function Header(props) {
  const navOptionsElements = props.categories.map((category) => {
    let navUrl;
    if (props.nekoCategories.includes(category) && category !== "search") {
      navUrl = `/view/${category}`;
    } else if (category === "home") {
      navUrl = "/";
    } else if (category === "search") {
      navUrl = "/search";
    }

    return (
      <NavCategory
        key={category}
        to={navUrl}
        activeCategory={props.activeCategory}
        category={category}
        shownNekoType={props.shownNekoType}
        onClick={() => props.setActiveCategory(category)}
      >
        {capitalize(category)}
      </NavCategory>
    );
  });

  return (
    <StyledHeader>
      <StyledNav>{navOptionsElements}</StyledNav>
    </StyledHeader>
  );
}

export default Header;
