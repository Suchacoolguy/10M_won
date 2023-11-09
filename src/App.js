import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { Container } from "@mui/material";
import theme from "./theme"; // Import the theme you created
import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SentenceAnalysis from "./components/SentenceAnalysis";
import SettingsMenu from "./components/SettingsMenu";
import NewsLoad from "./components/NewsLoad";

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100vh;
  gap: 20px;
`;

export default function App() {
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);

  // 설정 아이콘 클릭 이벤트 핸들러를 수정합니다.
  const handleSettingsClick = () => {
    // 설정 메뉴의 표시 상태를 토글합니다.
    setIsSettingsVisible((prevState) => !prevState);
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header onSettingsClick={handleSettingsClick} />
        {!isSettingsVisible && (
          <StyledContainer maxWidth="lg">
            <Routes>
              <Route path="/" element={<NewsLoad />} />
              <Route path="/sentenceanalysis" element={<SentenceAnalysis />} />
            </Routes>
            <Footer welfareInfo="Welfare information goes here..." />
          </StyledContainer>
        )}
        {isSettingsVisible && <SettingsMenu />}
      </Router>
    </ThemeProvider>
  );
}

function Send() {
  return <button onClick={() => window.ipcRender.send("send")}>Send</button>;
}

function Invoke() {
  return (
    <button
      onClick={() =>
        window.ipcRender.invoke("sendReceive").then((data) => {
          console.log(data);
        })
      }
    >
      Invoke
    </button>
  );
}