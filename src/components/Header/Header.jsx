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
  width: 100%;
  box-shadow: 0 0 4px grey;
`;

const NavCategory = styled(NavLink)`
  font-weight: ${(props) =>
    props.category === props.shownNekoType ? "bold" : "normal"};
  margin: 0 5px;
`;

const StyledNav = styled.nav`
  overflow: auto;
`;

function Header(props) {
  const navOptionsElements = props.categories.map((category) => (
    <NavCategory
      key={category}
      to={category === "home" ? "/" : `/view/${category}`}
      category={category}
      shownNekoType={props.shownNekoType}
    >
      {capitalize(category)}
    </NavCategory>
  ));

  return (
    <StyledHeader>
      <StyledNav>{navOptionsElements}</StyledNav>
    </StyledHeader>
  );
}

export default Header;
