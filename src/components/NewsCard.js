import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, Grid, Button } from '@mui/material';
import styled from 'styled-components';
import QRCode from "react-qr-code";
import logoImage from '../img/newslogo/CNN.jpg';  // Import the image

// Styled component for ellipsis
const EllipsisText = styled(Typography)`
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 6;  // Adjust this number for the number of lines you want to show
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    max-height: 10em;  // This depends on the line height, adjust if needed
`;

const BoldHeadline = styled(Typography)`
    font-weight: 700;  // This makes the text bold. You can adjust for desired boldness.
    margin-bottom: 0.5rem;  // Adjust this value for more or less space
`;


function NewsCard({ headline, snippet, newsLink }) {
    const navigate = useNavigate();
  
    const goToStudyPage = () => {
        navigate('/sentenceanalysis', { state: { text: headline + " " + snippet } });
      };

    return (
        <Card>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <CardMedia component="img" image={logoImage} title="News logo" />
                </Grid>
                <Grid item xs={8}>
                    <CardContent>
                        <BoldHeadline variant="h4" style={{padding: '10px 20px', borderBottom: '1px solid #e0e0e0'}}>{headline}</BoldHeadline>
                        <EllipsisText variant="body2">{snippet}</EllipsisText>
                        <Button onClick={goToStudyPage}
                            variant="contained" 
                            color="primary" 
                            style={{ marginTop: '8px' }}  // Add some space above the button
                        >
                            Study
                        </Button>
                    </CardContent>
                </Grid>
                <Grid item xs={2}>
                <QRCode value={newsLink} size={256} style={{ height: "auto", maxWidth: "100%", width: "100%" }} />
                </Grid>
            </Grid>
        </Card>
    );
};

export default NewsCard;
