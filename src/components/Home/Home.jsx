import styled from "styled-components";

const StyledHome = styled.div`
  text-align: center;
  margin-top: 80px;
`;

function Home(props) {
  return (
    <StyledHome>
      <h1>Enjoy nekos.</h1>
      <h2>Just select a category.</h2>
    </StyledHome>
  );
}

export default Home;
