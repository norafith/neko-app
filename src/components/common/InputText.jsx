import styled from "styled-components";

const InputText = styled.input.attrs((props) => {
  return { type: "text" };
})`
  background-color: transparent;
  border: 2px solid #30343f;
  font-size: inherit;
  font-family: inherit;
  border-radius: 25px;
  color: inherit;
  padding: 5px 10px;
  transition: 0.25s ease;

  &:focus {
    outline: none;
    border: 2px solid #ea638c;
  }
`;

export default InputText;
