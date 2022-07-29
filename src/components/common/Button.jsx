import styled from "styled-components";

const Button = styled.button`
  background-color: #ea638c;
  color: #30343f;
  cursor: pointer;
  font-size: inherit;
  border-radius: 25px;
  padding: 5px 10px;
  font-family: inherit;
  transition: 0.25s ease;
  border: none;
  margin: ${(props) => (props.margin ? props.margin : "none")};
  display: ${(props) => (props.unseen ? "none" : "block")};

  &:hover {
    background-color: #ffd9da;
  }
`;

export default Button;
