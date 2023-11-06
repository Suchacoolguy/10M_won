import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';  // Import the theme you created
import { Container } from '@mui/material';
import styled from 'styled-components';
import NewsCard from './components/NewsCard';
import Header from './components/Header';
import Footer from './components/Footer';




const StyledContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    justify-content: flex-start; // changed from space-between
    height: 100vh;
    gap: 20px;  // Space out your Header, NewsCard, and Footer components so they don't feel cramped. 
`;

function App() {
    const handleSettingsClick = () => {
        console.log('Navigate to settings page.');
    };

    return (
      <ThemeProvider theme={theme}>
        <StyledContainer maxWidth="lg">
            <Header onSettingsClick={handleSettingsClick} />
            <NewsCard 
                headline="Israeli Air Force says it intercepted cruise missile 'launched from the southeast'"
                snippet="Israel’s Air Force said that “in recent days” it intercepted a cruise missile fired at the country “launched from the southeast.” 

The military also released footage it said showed the cruise missile being destroyed.

The Israeli Air Force did not indicate where the cruise missile was launched. But last month, the US Navy said that it intercepted multiple projectiles near the coast of Yemen. And on Wednesday, Yemen's Houthi rebels claimed to have successfully launched a barrage of drones against Israel."
                logoUrl=""
                newsLink="https://news.google.com/articles/CBMiamh0dHBzOi8vd3d3LmFsamF6ZWVyYS5jb20vbmV3cy8yMDIzLzExLzQvd2hhdHMtYmVoaW5kLWFudG9ueS1ibGlua2Vucy1jYWxsLWZvci1odW1hbml0YXJpYW4tcGF1c2VzLWluLWdhemHSAW5odHRwczovL3d3dy5hbGphemVlcmEuY29tL2FtcC9uZXdzLzIwMjMvMTEvNC93aGF0cy1iZWhpbmQtYW50b255LWJsaW5rZW5zLWNhbGwtZm9yLWh1bWFuaXRhcmlhbi1wYXVzZXMtaW4tZ2F6YQ?hl=en-US&gl=US&ceid=US%3Aen"
            />
            <Footer welfareInfo="Welfare information goes here..." />
        </StyledContainer>
        </ThemeProvider>
    );
}

export default App;
