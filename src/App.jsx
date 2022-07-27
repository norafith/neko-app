import { Route, Routes } from "react-router-dom";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import NekosContainer from "./components/Nekos/NekosContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import { Navigate } from "react-router";
import styled, { createGlobalStyle } from "styled-components";
import Home from "./components/Home/Home";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background: #1B2021;
    color: white;
    font-size: 18px;
    font-family: "Nunito Sans", sans-serif;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: #EA638C;
    transition: 0.25s ease;
  }

  a:hover {
    color: #FFD9DA;
  }
`;

const AppWrapper = styled.main`
  margin-top: 50px;
`;

function App(props) {
  return (
    <AppWrapper>
      <GlobalStyle />
      <HeaderContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view/:nekoType" element={<NekosContainer />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/*" element={<Navigate replace to="/error" />} />
      </Routes>
    </AppWrapper>
  );
}

export default App;
