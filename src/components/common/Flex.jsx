import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  align-items: ${(props) => props.align || "flex-start"};
  justify-content: ${(props) => props.justify || "flex-start"};
`;

export default Flex;
