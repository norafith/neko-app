import Button from "../common/Button";
import NekosContainer from "../Nekos/NekosContainer";
import InputText from "../common/InputText";
import Flex from "./../common/Flex";
import styled from "styled-components";

const StyledFlex = styled(Flex)`
  margin-bottom: 15px;
  & > * {
    margin: 5px;
  }
`;

function Search(props) {
  function handleInputChange(e) {
    props.setSearchFieldValue(e.target.value);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleSubmit();
    }
  }

  function handleSubmit(e) {
    props.changeSearchQuery();
  }

  return (
    <>
      <section>
        <StyledFlex align="center" justify="center" wrap="wrap">
          <InputText
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            value={props.searchFieldValue}
            placeholder="Search"
          />
          <Button onClick={handleSubmit}>Search</Button>
        </StyledFlex>
      </section>
      {props.renderFlag ? <NekosContainer searchFlag /> : ""}
    </>
  );
}

export default Search;
