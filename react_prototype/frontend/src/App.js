import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'; // Import the theme you created
import { Container } from '@mui/material';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewsCard from './components/NewsCard';
import Header from './components/Header';
import Footer from './components/Footer';
import SentenceAnalysis from './components/SentenceAnalysis';

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100vh;
  gap: 20px;
`;

function App() {
  const handleSettingsClick = () => {
    console.log('Navigate to settings page.');
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header onSettingsClick={handleSettingsClick} />
        <StyledContainer maxWidth="lg">
          <Routes>
            <Route path="/" element={<NewsCard headline="Israeli Air Force says it intercepted cruise missile 'launched from the southeast'" snippet="The military also released footage it said showed the cruise missile being destroyed.

The Israeli Air Force did not indicate where the cruise missile was launched. But last month, the US Navy said that it intercepted multiple projectiles near the coast of Yemen. And on Wednesday, Yemen's Houthi rebels claimed to have successfully launched a barrage of drones against Israel." newsLink="https://news.google.com" />} />
            <Route path="/sentenceanalysis" element={<SentenceAnalysis />} />
          </Routes>
          <Footer welfareInfo="Welfare information goes here..." />
        </StyledContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App;
